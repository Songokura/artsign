/* ArtSign Studio - механика плит, сигнатура «росчерк-график», i18n (RU в разметке, EN здесь, KK в assets/lang/kk.js) */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b === undefined ? 1 : b, Math.max(a === undefined ? 0 : a, v));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ASSET_V = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || "";
  const WA = "77018068866";

  /* ---------------- i18n ---------------- */
  const I18N = { ru: {}, en: {
    "meta.title": "ArtSign Studio - Google Ads + a website as a gift for 180,000 KZT",
    "meta.desc": "Google Ads setup, a selling website as a gift and one month of management for 180,000 KZT. Launch in 2-4 business days. Every lead is visible in the bot. Astana and all of Kazakhstan.",
    "nav.cases": "Cases", "nav.package": "What's included", "nav.works": "Work", "nav.calc": "Calculator", "nav.price": "Price", "nav.contact": "Contact", "nav.how": "How it works", "nav.faq": "FAQ",
    "hero.kicker": "Google Ads · website · management", "hero.h1a": "Google Ads", "hero.h1b": "+ a website as a gift",
    "hero.lead": "We set up the ads, build a selling website and manage the campaign for a month. 180,000 KZT for everything, launch in 2-4 business days.",
    "hero.btn1": "Estimate my lead cost", "hero.btn2": "Message on WhatsApp", "hero.ig": "Work and ad accounts on Instagram",
    "scene.q": "car repair astana", "scene.adtag": "Sponsored", "scene.adtitle": "Car repair in Astana in 1 day - CarService01", "scene.addesc": "Diagnostics within an hour, parts in stock. Book on WhatsApp.",
    "scene.leadt": "New lead", "scene.leadm": "WhatsApp · today 14:32", "scene.leadq": "Query: car repair astana", "scene.leadb": "Block: engine diagnostics",
    "scene.s1": "CarService01: 235 leads in 30 days", "scene.s2": "MedHome: 157 leads in 30 days", "scene.s3": "S-Profile: 137 leads at $4.30 each",
    "c1.kicker": "Case · car service · carservice01.kz", "c1.unit": "leads in 30 days", "c1.ch1": "$2.35 per lead", "c1.ch2": "27% of visitors call or write", "c1.ch3": "$10 a day budget",
    "c1.p": "A website for urgent repairs, a separate block for each service, ads pointed exactly at those blocks.", "c1.link": "Open carservice01.kz",
    "c1.cap": "Google Ads account, 24.07-31.08.2026: 713 clicks, 189 leads at $1.80",
    "c2.kicker": "Case · metal roofing · s-profile.kz", "c2.unit": "leads at $4.30 each", "c2.h": "Budget tripled, cost per lead stayed the same", "c2.ch1": "$30 a day", "c2.ch2": "CTR 12.7%", "c2.ch3": "negative keywords every week",
    "c2.p": "A $30-a-day campaign, weekly query cleanup, bid caps.", "c2.link": "Open s-profile.kz", "c2.cap": "Google Ads account, 20.07-31.08.2026: 621 clicks, 137 leads at $4.30",
    "c3.kicker": "Case · home medical care · med-home.kz", "c3.unit": "leads in 30 days", "c3.ch1": "$3.40 per lead", "c3.ch2": "every fourth visitor gets in touch", "c3.ch3": "CTR 12%",
    "c3.p": "Precise keywords for at-home services, instant contact from the phone.", "c3.link": "Open med-home.kz", "c3.cap": "Google Ads account, 17.08-31.08.2026, first two weeks: 251 clicks, 61 leads at $2.37",
    "t.f1": "projects", "t.f2": "new clients a month", "t.f3b": "Contract", "t.f3": "official, with a registered entrepreneur", "t.f4b": "Yours", "t.f4": "the ad account and the website stay with you",
    "m.kicker": "More cases", "m.h2": "Nine more accounts and three design cases", "m.lead": "Cost per lead in client accounts for July-August 2026. We show the screenshots at the meeting.", "m.lider": "Lider Potolki",
    "d1.n": "pipeline valves, B2B", "d1.p": "A catalogue of 1,641 items, a plate for every category, a quote from your list in 15 minutes.",
    "d2.n": "freight from China", "d2.p": "Groupage and full loads, three routes, delivery quote straight in WhatsApp.",
    "d3.n": "door hardware", "d3.p": "Wholesale and retail on one page, a catalogue with prices and a discount request.",
    "h.kicker": "How it works", "h.h2": "How a click turns into a lead",
    "h.s1": "A search on Google", "h.s1s": "someone looks for your service", "h.s2": "Your ad on top", "h.s2s": "for that exact query", "h.s3": "A page for that query", "h.s3s": "the service block, not the homepage",
    "h.s4": "A call or WhatsApp", "h.s4s": "one-tap buttons", "h.s5": "A lead in the report", "h.s5s": "the bot sends every one",
    "p.kicker": "What's included", "p.h2": "Three jobs in one package",
    "p.r1": "Ads setup", "p.r1t": "1-3 business days", "p.r1a": "keywords and negatives", "p.r1b": "ads written for your offer", "p.r1c": "geo, schedule, bids", "p.r1d": "call, WhatsApp and form tracking",
    "p.r2": "A selling website as a gift", "p.r2t": "1-3 business days", "p.r2a": "one page built for leads", "p.r2b": "designed for the phone", "p.r2c": "basic SEO and your socials", "p.r2d": "WhatsApp and call buttons",
    "p.r3": "A month of management", "p.r3t": "included", "p.r3a": "weekly query cleanup", "p.r3b": "cut the weak, boost the strong", "p.r3c": "cost-per-lead control", "p.r3d": "short recommendations on leads",
    "b.kicker": "Lead bot", "b.h2": "You see every lead, not just clicks", "b.lead": "The bot sends every call, WhatsApp message and form to Telegram: when, from where and for which query. Once a week, a summary.", "b.badge": "included",
    "b.m1t": "New lead", "b.m1a": "Channel: WhatsApp", "b.m1b": "Source: Google Ads, query \"engine repair astana\"", "b.m1c": "Site block: diagnostics", "b.m1d": "Device: phone",
    "b.m2t": "Weekly summary", "b.m2w": "Mon-Sun", "b.m2a": "leads", "b.m2c": "calls", "b.m2d": "form requests", "b.note": "Example. Your numbers will be your own.",
    "w.kicker": "Work", "w.h2": "Websites built in the last few weeks", "w.lead": "All links are live. Your website will be of the same level.",
    "w.f0": "All", "w.f1": "Services", "w.f2": "B2B and manufacturing", "w.f3": "Trade", "w.f4": "Legal and finance", "w.f5": "HoReCa",
    "w.n1": "door hardware", "w.n2": "patents and trademarks", "w.n3": "freight from China", "w.n4": "custom radiators", "w.n5": "AIFC registration", "w.n6": "countryside retreat", "w.n7": "homewear wholesale", "w.n8": "law firm", "w.n9": "hotel", "w.n10": "handyman", "w.n11": "asphalt paving", "w.n12": "car service",
    "w.ig": "More work on Instagram", "r.kicker": "Reviews", "r.h2": "What clients say",
    "k.kicker": "Calculator", "k.h2": "What a lead may cost in your niche", "k.niche": "Niche",
    "k.n1": "Car service, tyre fitting", "k.n2": "Medicine, dentistry", "k.n3": "Construction, renovation, finishing", "k.n4": "Windows, doors, ceilings, furniture", "k.n5": "Lawyers, accounting, consulting", "k.n6": "Wholesale and B2B supply", "k.n7": "Beauty, health, at-home services", "k.n8": "Another niche",
    "k.budget": "Daily budget", "k.r1": "clicks a month", "k.r2": "leads a month", "k.r3": "per lead",
    "k.note": "A benchmark from our accounts over the last month: median cost per click $0.69, conversion rate 9.8%. The exact figure is calculated for your city and queries.", "k.btn": "Get an exact estimate",
    "pr.kicker": "Price", "pr.cur": "KZT", "pr.h2": "for a turnkey launch", "pr.i1": "Google Ads setup", "pr.i2": "a selling website", "pr.i3": "first month of management", "pr.i4": "lead bot",
    "pr.note": "From the second month, management is 100,000 KZT. You pay the ad budget to Google directly, starting from $10 a day. The domain and hosting are registered in your name.", "pr.btn": "Leave a request",
    "tm.1": "The ad account is registered to you", "tm.1s": "owner access from day one", "tm.2": "The website, domain and hosting are yours", "tm.2s": "we hand over the files, we keep nothing",
    "tm.3": "The budget goes directly to Google", "tm.3s": "no markups, no middlemen", "tm.4": "A contract with a registered entrepreneur, monthly renewal", "tm.4s": "100% prepayment, no hidden fees",
    "ps.kicker": "How we work", "ps.h2": "From a call to the first leads",
    "ps.1": "A call", "ps.1s": "niche, city, customer value. About 20 minutes", "ps.2": "Contract and payment", "ps.2s": "the same day", "ps.3": "Website and campaigns", "ps.3s": "you review once, we revise. 2-4 business days", "ps.4": "Launch and management", "ps.4s": "weekly cleanup, leads visible in the bot",
    "f.kicker": "FAQ", "f.h2": "What people ask before starting",
    "f.q1": "Is the ad budget included in 180,000 KZT?", "f.a1": "No. That is the fee for our work. You pay Google for clicks yourself, starting from $10 a day.",
    "f.q2": "How much will a lead cost me?", "f.a2": "It depends on the niche and the city. See the calculator above for a benchmark; we make the exact estimate for free.",
    "f.q3": "I already have a website", "f.a3": "We will run ads to it, and build the gift page for one service or a promotion.",
    "f.q4": "Why is the website a gift?", "f.a4": "We build websites with a proven system in 1-3 days and earn on management.",
    "f.q5": "What happens after the first month?", "f.a5": "You extend management for 100,000 KZT a month or keep everything: the account and the website are already yours.",
    "f.q6": "Do you work outside Astana?", "f.a6": "Yes, across Kazakhstan and abroad. Meetings and revisions are online.",
    "f.q7": "Who owns the account and the website?", "f.a7": "You do, from day one. We work in your account as a manager.",
    "ct.kicker": "Request", "ct.h2": "Let's estimate a lead for your niche", "ct.lead": "Send your phone number and niche. We reply on WhatsApp during business hours.",
    "ct.phone": "Phone (WhatsApp)", "ct.niche": "Niche and city", "ct.nichePh": "e.g. dentistry, Almaty", "ct.err": "Check the phone number: at least 10 digits.", "ct.btn": "Get an estimate",
    "ct.note": "The button opens WhatsApp with a ready message. We reply during business hours.", "ct.ok": "Thanks, your request went to WhatsApp", "ct.ok2": "If the window did not open, write to us at +7 701 806 88 66",
    "ft.l": "Google Ads, websites and management. Astana, working across Kazakhstan.", "ft.c": "Sole proprietor CALIFORNIA", "st.call": "Call"
  } };
  const RU_PH = { "ct.nichePh": "например, стоматология, Алматы", "wa.l1": "Здравствуйте! Хочу расчёт по пакету Google Ads + сайт.", "wa.l2": "Телефон:", "wa.l3": "Ниша и город:", "wa.l4": "Бюджет:", "wa.l5": "/день" };
  Object.assign(I18N.en, { "wa.l1": "Hello! I want an estimate for the Google Ads + website package.", "wa.l2": "Phone:", "wa.l3": "Niche and city:", "wa.l4": "Budget:", "wa.l5": "/day" });
  const META = { ru: ["ArtSign Studio - реклама в Google + сайт в подарок за 180 000 тг", "Настройка Google Ads, продающий сайт в подарок и месяц ведения за 180 000 тг. Запуск за 2-4 рабочих дня. Каждое обращение видно в боте. Астана и весь Казахстан."] };

  // русский словарь собираем из разметки один раз: разметка - источник правды
  $$("[data-i]").forEach((el) => { I18N.ru[el.dataset.i] = el.textContent; });
  Object.assign(I18N.ru, RU_PH);

  function loadLang(lang, done) {
    if (I18N[lang] || lang !== "kk") return done();
    const s = document.createElement("script");
    s.src = "assets/lang/kk.js" + (ASSET_V ? "?v=" + ASSET_V : "");
    s.onload = () => { if (window.SITE_KK) I18N.kk = window.SITE_KK; done(); };
    s.onerror = () => done();
    document.head.appendChild(s);
  }
  let LANG = "ru";
  function applyLang(lang) {
    const d = I18N[lang] || I18N.ru;
    LANG = lang;
    $$("[data-i]").forEach((el) => { const v = d[el.dataset.i]; if (v !== undefined) el.textContent = v; });
    $$("[data-i-ph]").forEach((el) => { const v = d[el.dataset.iPh]; if (v !== undefined) el.placeholder = v; });
    document.documentElement.lang = lang;
    const m = lang === "ru" ? META.ru : [d["meta.title"], d["meta.desc"]];
    if (m && m[0]) { document.title = m[0]; const md = $('meta[name="description"]'); if (md) md.content = m[1]; }
    $$(".lang button").forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on ? "true" : "false"); });
    try { localStorage.setItem("as_lang", lang); } catch (e) {}
    calcRun();
  }
  function setLang(lang) { loadLang(lang, () => applyLang(lang)); }
  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  function initLang() {
    const q = new URLSearchParams(location.search).get("lang");
    let saved = null; try { saved = localStorage.getItem("as_lang"); } catch (e) {}
    const want = ["ru", "kk", "en"].includes(q) ? q : (["kk", "en"].includes(saved) ? saved : "ru");
    if (want !== "ru") setLang(want);
  }

  /* ---------------- шапка, меню, якоря ---------------- */
  const hdr = $("#hdr"), menu = $("#menu"), burger = $(".burger"), sticky = $("#sticky");
  function hdrH() { return hdr.offsetHeight; }
  function openMenu(on) {
    if (on) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add("is-open")); }
    else { menu.classList.remove("is-open"); setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 320); }
    document.body.classList.toggle("menu-open", on);
    document.body.style.overflow = on ? "hidden" : "";
    burger.setAttribute("aria-expanded", on ? "true" : "false");
    burger.setAttribute("aria-label", on ? "Закрыть меню" : "Открыть меню");
  }
  burger.addEventListener("click", () => openMenu(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) openMenu(false); });

  function scrollToId(id, instant) {
    const t = document.getElementById(id); if (!t) return false;
    const y = t.getBoundingClientRect().top + scrollY - (t.classList.contains("pw") ? 0 : hdrH());
    window.scrollTo({ top: Math.max(0, y), behavior: instant || REDUCED ? "auto" : "smooth" });
    return true;
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute("href").slice(1); if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    if (document.body.classList.contains("menu-open")) openMenu(false);
    scrollToId(id);
    history.pushState(null, "", "#" + id);
  });
  window.addEventListener("popstate", () => { if (location.hash) scrollToId(location.hash.slice(1)); });

  /* ---------------- механика плит ---------------- */
  const pws = $$(".pw");
  const hero = $(".hero");
  const hasHash = !!location.hash && !!document.getElementById(location.hash.slice(1));
  let intro = 0, introDone = false;
  const skipIntro = REDUCED || hasHash || scrollY > 80;

  function runIntro() {
    if (skipIntro) { intro = 1; hero.style.setProperty("--intro", "1"); introDone = true; return; }
    const t0 = performance.now(), D = 1500;
    (function tick(now) {
      const t = clamp((now - t0) / D);
      intro = easeOut(t); hero.style.setProperty("--intro", intro.toFixed(4));
      if (t < 1) requestAnimationFrame(tick); else introDone = true;
    })(t0);
  }

  const counted = new WeakSet();
  function countUp(el) {
    if (counted.has(el)) return; counted.add(el);
    const n = +el.dataset.n, t0 = performance.now(), D = REDUCED ? 0 : 1300;
    (function tick(now) {
      const t = D ? clamp((now - t0) / D) : 1;
      el.textContent = Math.round(n * easeOut(t));
      if (t < 1) requestAnimationFrame(tick);
    })(t0);
  }

  const pathEl = $("#path"), stepEls = $$(".steps li");
  let ticking = false;
  function update() {
    ticking = false;
    const H = innerHeight;
    const enters = pws.map((pw) => { const r = pw.getBoundingClientRect(); return { r, enter: clamp(1 - r.top / H) }; });
    pws.forEach((pw, i) => {
      const { r, enter } = enters[i];
      const stay = r.height > H + 1 ? clamp(-r.top / (r.height - H)) : 0;
      const exit = i + 1 < pws.length ? enters[i + 1].enter : 0;
      const open = easeOut(clamp((enter - .22) / .78));
      pw.style.setProperty("--enter", enter.toFixed(4));
      pw.style.setProperty("--stay", stay.toFixed(4));
      pw.style.setProperty("--exit", exit.toFixed(4));
      pw.style.setProperty("--open", open.toFixed(4));
      pw.classList.toggle("gone", exit >= 1);
      const txt = $(".txt", pw); if (txt && enter > .42) txt.classList.add("on");
      if (open > .55) { const num = $(".num", pw); if (num) countUp(num); }
    });
    // липкая панель: после 55% первого экрана, прячется на контактах
    const ct = $("#contact").getBoundingClientRect();
    sticky.classList.toggle("is-on", scrollY > H * .55 && ct.top > H * .6);
    hdr.classList.toggle("is-scrolled", scrollY > 8);
    // путь клика
    if (pathEl) {
      const r = pathEl.getBoundingClientRect();
      const p = clamp((H * .85 - r.top) / Math.min(r.height, H * .6));
      pathEl.style.setProperty("--p", p.toFixed(4));
      stepEls.forEach((li, i) => li.classList.toggle("lit", p > (i + .35) / stepEls.length));
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------------- герой: сцена ---------------- */
  const sceneWrap = $(".scene-wrap"), scene = $("#scene"), sline = $("#sline");
  function fitScene() {
    if (!sceneWrap) return;
    const w = sceneWrap.clientWidth;
    let sc = w / 560;
    if (innerWidth <= 1080) {
      // высота под сцену: от её верха до низа плиты минус липкая панель
      const top = sceneWrap.getBoundingClientRect().top - hero.getBoundingClientRect().top;
      const avail = innerHeight - top - (innerWidth <= 760 ? 84 : 24);
      sc = Math.max(.34, Math.min(sc, avail / 520));
    }
    scene.style.setProperty("--sc", sc.toFixed(4));
    sceneWrap.style.height = Math.round(520 * sc) + "px";
  }
  if (sline) { const L = sline.getTotalLength(); sline.style.setProperty("--L", L.toFixed(1)); }
  // живая строка цифр
  const statSpans = $$("#leadStat span");
  let statI = 0;
  if (statSpans.length > 1 && !REDUCED) setInterval(() => {
    statSpans[statI].classList.remove("is-on"); statI = (statI + 1) % statSpans.length; statSpans[statI].classList.add("is-on");
  }, 3400);

  /* ---------------- кабинеты: плитки + росчерк-маска ---------------- */
  const kpis = $$(".kpi");
  let kpiMode = null;
  function buildKpis() {
    const narrow = innerWidth <= 560;
    if (kpiMode === narrow) return; kpiMode = narrow;
    kpis.forEach((fig, idx) => {
      const d = JSON.parse(fig.dataset.kpi), box = $(".kpi-box", fig);
      const W = 1000, gap = 14, n = d.tiles.length;
      const cols = narrow ? 2 : n, tw = (W - gap * (cols - 1)) / cols;
      let y = 0, imgs = "", rowH = 0;
      d.tiles.forEach((t, i) => {
        const col = i % cols, th = tw * t[2] / t[1];
        if (col === 0 && i) { y += rowH + gap; rowH = 0; }
        rowH = Math.max(rowH, th);
        imgs += `<image href="assets/kpi/${t[0]}.webp" x="${(col * (tw + gap)).toFixed(1)}" y="${y.toFixed(1)}" width="${tw.toFixed(1)}" height="${th.toFixed(1)}" preserveAspectRatio="none"/>`;
      });
      y += rowH + gap;
      const ch = W * d.chart[2] / d.chart[1];
      imgs += `<image href="assets/kpi/${d.chart[0]}.webp" x="0" y="${y.toFixed(1)}" width="${W}" height="${ch.toFixed(1)}" preserveAspectRatio="none"/>`;
      const Hh = y + ch;
      const k = Math.max(2, Math.round(Hh / (W * .3))), sw = Hh / k * 1.18;
      let dpath = "";
      for (let i = 0; i < k; i++) {
        const yy = (i + .5) * Hh / k, x0 = i % 2 ? W + sw * .6 : -sw * .6, x1 = i % 2 ? -sw * .6 : W + sw * .6;
        if (i === 0) dpath += `M${x0.toFixed(0)} ${yy.toFixed(0)} L${x1.toFixed(0)} ${yy.toFixed(0)}`;
        else {
          const yp = (i - .5) * Hh / k, cx = x0 + (i % 2 ? sw * .9 : -sw * .9);
          dpath += ` C${cx.toFixed(0)} ${yp.toFixed(0)} ${cx.toFixed(0)} ${yy.toFixed(0)} ${x0.toFixed(0)} ${yy.toFixed(0)} L${x1.toFixed(0)} ${yy.toFixed(0)}`;
        }
      }
      const id = "kpm" + idx;
      box.innerHTML = `<svg viewBox="0 0 ${W} ${Hh.toFixed(1)}" role="img" aria-label="Скриншот кабинета Google Ads"><defs><mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${Hh.toFixed(1)}"><rect width="${W}" height="${Hh.toFixed(1)}" fill="#000"/><path class="brush" d="${dpath}" stroke-width="${sw.toFixed(1)}"/></mask></defs><g mask="url(#${id})">${imgs}</g></svg>`;
      const br = $(".brush", box); br.style.setProperty("--L", br.getTotalLength().toFixed(1));
    });
  }

  /* ---------------- бегущая строка ---------------- */
  const marq = $("#marq");
  function setupMarq() {
    if (!marq) return;
    if (!marq.dataset.dup) { marq.innerHTML += marq.innerHTML; marq.dataset.dup = "1"; }
    const half = marq.scrollWidth / 2;
    marq.style.setProperty("--marq-w", half.toFixed(0));
    marq.style.setProperty("--marq-d", (half / 60).toFixed(1) + "s");
  }

  /* ---------------- проявление ---------------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  $$(".rv").forEach((el) => io.observe(el));

  /* ---------------- лента работ ---------------- */
  function lane(root, prevBtn, nextBtn) {
    const items = () => $$(".work", root).filter((w) => !w.classList.contains("is-hidden"));
    const step = () => { const f = items()[0]; if (!f) return 0; return f.getBoundingClientRect().width + parseFloat(getComputedStyle(root).columnGap || getComputedStyle(root).gap || 0); };
    const upd = () => {
      const max = root.scrollWidth - root.clientWidth;
      const none = max <= 1;
      prevBtn.hidden = none; nextBtn.hidden = none;
      prevBtn.disabled = root.scrollLeft <= 1; nextBtn.disabled = root.scrollLeft >= max - 1;
    };
    prevBtn.addEventListener("click", () => root.scrollBy({ left: -step(), behavior: "smooth" }));
    nextBtn.addEventListener("click", () => root.scrollBy({ left: step(), behavior: "smooth" }));
    root.addEventListener("scroll", upd, { passive: true });
    addEventListener("resize", upd);
    upd();
    return upd;
  }
  const laneEl = $("#lane");
  const laneUpd = laneEl ? lane(laneEl, $(".lane-prev"), $(".lane-next")) : null;
  $$(".filt button").forEach((b) => b.addEventListener("click", () => {
    $$(".filt button").forEach((x) => x.classList.toggle("is-active", x === b));
    const f = b.dataset.f;
    $$(".work", laneEl).forEach((w) => w.classList.toggle("is-hidden", f !== "all" && !w.dataset.f.split(" ").includes(f)));
    laneEl.scrollTo({ left: 0 }); laneUpd && laneUpd();
  }));

  /* ---------------- калькулятор ---------------- */
  // ориентиры: медиана кабинетов $0,69 за клик, конверсия 9,8%; коэффициенты ниш - оценка студии
  const NICHE = { auto: [.75, 1.6], med: [1.25, 1.3], build: [1.1, .85], home: [1, 1.05], law: [1.5, .75], b2b: [1.2, .7], beauty: [.85, 1.1], other: [1, 1] };
  const nicheSel = $("#niche"), budget = $("#budget"), budgetOut = $("#budgetOut");
  const fmt = (n) => Math.round(n).toLocaleString(LANG === "en" ? "en-US" : "ru-RU");
  const money = (n) => "$" + (n < 10 ? n.toFixed(2) : n.toFixed(1)).replace(".", LANG === "en" ? "." : ",");
  function calcRun() {
    if (!nicheSel) return;
    const k = NICHE[nicheSel.value] || NICHE.other, b = +budget.value;
    const cpc = .69 * k[0], cr = .098 * k[1];
    const clicks = b * 30 / cpc, leads = clicks * cr, cpl = cpc / cr;
    budgetOut.value = "$" + b;
    budget.style.setProperty("--fill", ((b - 5) / 45 * 100).toFixed(1) + "%");
    $("#rClicks").textContent = "~" + fmt(clicks);
    $("#rLeads").textContent = fmt(leads * .75) + "-" + fmt(leads * 1.25);
    $("#rCpl").textContent = money(cpl * .8) + "-" + money(cpl * 1.3);
  }
  if (nicheSel) {
    nicheSel.addEventListener("change", calcRun); budget.addEventListener("input", calcRun); calcRun();
    $("#calcForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const nicheTxt = nicheSel.options[nicheSel.selectedIndex].textContent;
      const f = $("#niche2"); if (f && !f.value) f.value = nicheTxt + ", ";
      $("#leadForm").dataset.budget = "$" + budget.value;
      scrollToId("contact"); history.pushState(null, "", "#contact");
      setTimeout(() => $("#phone").focus({ preventScroll: true }), 700);
    });
  }

  /* ---------------- форма заявки ---------------- */
  const form = $("#leadForm");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.website && form.website.value) return;
    const phone = form.phone.value.replace(/\D/g, ""), niche = form.niche_city.value.trim();
    const err = $("#formErr");
    if (phone.length < 10) { err.hidden = false; form.phone.focus(); return; }
    err.hidden = true;
    const d = I18N[LANG] || I18N.ru, t = (k) => d[k] || I18N.ru[k];
    const lines = [t("wa.l1"), t("wa.l2") + " " + form.phone.value.trim(), t("wa.l3") + " " + (niche || "-")];
    if (form.dataset.budget) lines.push(t("wa.l4") + " " + form.dataset.budget + t("wa.l5"));
    const url = "https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
    $("#thanks").hidden = false;
  });

  /* ---------------- fitText: строки заголовка героя не ломаются ---------------- */
  const h1 = $(".h1");
  function fitText() {
    if (!h1) return;
    h1.style.fontSize = "";
    const base = parseFloat(getComputedStyle(h1).fontSize);
    let size = base, guard = 0;
    const over = () => $$("span", h1).some((s) => s.scrollWidth > h1.clientWidth + 1);
    while (over() && guard++ < 14) { size *= .95; h1.style.fontSize = size.toFixed(1) + "px"; }
  }
  document.fonts && document.fonts.ready.then(fitText);
  const _applyLang = applyLang;
  applyLang = function (l) { _applyLang(l); fitText(); fitScene(); };

  /* ---------------- старт ---------------- */
  function layout() { fitText(); fitScene(); buildKpis(); setupMarq(); update(); }
  addEventListener("resize", () => { fitText(); fitScene(); buildKpis(); setupMarq(); });
  addEventListener("load", () => { setupMarq(); fitText(); fitScene(); });
  layout();
  initLang();
  if (hasHash) { scrollToId(location.hash.slice(1), true); setTimeout(() => { scrollToId(location.hash.slice(1), true); update(); }, 300); }
  runIntro();
  update();
})();
