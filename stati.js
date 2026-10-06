/* ArtSign - внутренние страницы (статьи, услуга): меню, липкая панель, прогресс чтения, оглавление, лента работ, форма. */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const WA = "77018068866";

  /* шапка и меню */
  const hdr = $("#hdr"), menu = $("#menu"), burger = $(".burger"), sticky = $("#sticky");
  function openMenu(on) {
    if (on) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add("is-open")); }
    else { menu.classList.remove("is-open"); setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 320); }
    document.body.classList.toggle("menu-open", on);
    document.body.style.overflow = on ? "hidden" : "";
    burger.setAttribute("aria-expanded", on ? "true" : "false");
    burger.setAttribute("aria-label", on ? "Закрыть меню" : "Открыть меню");
  }
  if (burger) burger.addEventListener("click", () => openMenu(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) openMenu(false); });
  $$("#menu a").forEach((a) => a.addEventListener("click", () => { if (document.body.classList.contains("menu-open")) openMenu(false); }));

  /* прокрутка: шапка, липкая панель, прогресс чтения, сцена героя услуги */
  const art = $(".prose"), prog = $(".read-prog"), stop = $("#contact") || $(".cta-plate"), dev = $(".devices");
  let ticking = false;
  function update() {
    ticking = false;
    const H = innerHeight;
    hdr.classList.toggle("is-scrolled", scrollY > 8);
    let on = scrollY > H * .45;
    if (stop) { const r = stop.getBoundingClientRect(); if (r.top < H * .6 && r.bottom > 0) on = false; }
    sticky.classList.toggle("is-on", on);
    if (art && prog) {
      const r = art.getBoundingClientRect();
      prog.style.setProperty("--rp", clamp((H * .35 - r.top) / (r.height - H * .5)).toFixed(4));
    }
    if (dev && !REDUCED) {
      const r = dev.getBoundingClientRect();
      dev.style.setProperty("--sy", clamp(-r.top / (r.height + 200)).toFixed(4));
    }
    $$(".proc-list").forEach((proc) => {
      const r = proc.getBoundingClientRect(), li = $$("li", proc);
      const p = REDUCED ? 1 : clamp((H * .8 - r.top) / (r.height + H * .25));
      proc.style.setProperty("--p", p.toFixed(4));
      li.forEach((el, i) => el.classList.toggle("lit", p >= i / li.length + .01));
    });
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* оглавление: подсветка текущего раздела */
  const tocLinks = $$(".toc ol a");
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const heads = $$(".prose h2[id]");
    const tocUpd = () => {
      let cur = null;
      for (const h of heads) { if (h.getBoundingClientRect().top < innerHeight * .4) cur = h.id; }
      tocLinks.forEach((a) => a.classList.toggle("is-on", a === map.get(cur)));
    };
    addEventListener("scroll", tocUpd, { passive: true }); tocUpd();
  }
  $$(".toc-m a").forEach((a) => a.addEventListener("click", () => { const d = a.closest("details"); if (d) d.open = false; }));

  /* проявление */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    $$(".rv").forEach((el) => io.observe(el));
  } else $$(".rv").forEach((el) => el.classList.add("in"));

  /* обводка-прожектор */
  const spots = $$(".spot");
  if (spots.length && matchMedia("(hover: hover)").matches) {
    let pm = false, px = 0, py = 0;
    addEventListener("pointermove", (e) => {
      px = e.clientX; py = e.clientY; if (pm) return; pm = true;
      requestAnimationFrame(() => {
        pm = false;
        spots.forEach((el) => {
          const r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return;
          el.style.setProperty("--mx", (px - r.left).toFixed(0) + "px"); el.style.setProperty("--my", (py - r.top).toFixed(0) + "px");
        });
      });
    }, { passive: true });
  }

  /* лента работ со стрелками */
  const laneEl = $("#lane");
  if (laneEl) {
    const prev = $(".lane-prev"), next = $(".lane-next");
    const step = () => { const f = $(".work", laneEl); return f ? f.getBoundingClientRect().width + parseFloat(getComputedStyle(laneEl).columnGap || 0) : 0; };
    const upd = () => {
      const max = laneEl.scrollWidth - laneEl.clientWidth, none = max <= 1;
      prev.hidden = none; next.hidden = none;
      prev.disabled = laneEl.scrollLeft <= 1; next.disabled = laneEl.scrollLeft >= max - 1;
    };
    prev.addEventListener("click", () => laneEl.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => laneEl.scrollBy({ left: step(), behavior: "smooth" }));
    laneEl.addEventListener("scroll", upd, { passive: true });
    addEventListener("resize", upd); addEventListener("load", upd); upd();
  }

  /* герой услуги: сайты сменяются в «устройствах» */
  const slides = $$(".dv-slide");
  if (slides.length && !REDUCED) {
    let k = 0; const n = $$("img", slides[0]).length;
    setInterval(() => {
      if (document.hidden) return;
      k = (k + 1) % n;
      slides.forEach((s) => $$("img", s).forEach((im, i) => {
        if (i === k && !im.getAttribute("src")) im.src = im.dataset.src;
        im.classList.toggle("on", i === k);
      }));
    }, 4800);
  }

  /* форма заявки: WhatsApp открывается сразу после отправки (склейка с LeadBot) */
  const form = $("#leadForm");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.website && form.website.value) return;
    const phone = form.phone.value.replace(/\D/g, ""), niche = form.niche_city.value.trim();
    const err = $("#formErr");
    if (phone.length < 10) { err.hidden = false; form.phone.focus(); return; }
    err.hidden = true;
    const lines = [form.dataset.wa || "Здравствуйте! Хочу сайт и рекламу в Google.", "Телефон: " + form.phone.value.trim(), "Ниша и город: " + (niche || "-")];
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    $("#thanks").hidden = false;
  });

  update();
})();
