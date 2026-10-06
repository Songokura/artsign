/* ArtSign Studio - плиты, стена сайтов в герое, графики кейсов, i18n (RU в разметке, EN здесь, KK в assets/lang/kk.js) */
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
    "meta.title": "PPC advertising in Astana: Google Ads + a website as a gift",
    "meta.desc": "Google Ads setup, a selling website as a gift and one month of management for 180,000 KZT. Launch in 2-4 business days. Every lead is visible in the bot. Astana and all of Kazakhstan.",
    "nav.cases": "Cases", "nav.package": "What's included", "nav.works": "Work", "nav.calc": "Calculator", "nav.price": "Price", "nav.contact": "Contact", "nav.how": "How it works", "nav.faq": "FAQ",
    "hero.kicker": "Google Ads · website · management", "hero.h1a": "Google Ads", "hero.h1b": "+ a website ", "hero.h1c": "as a gift",
    "hero.lead": "We set up the ads, build a selling website and manage the campaign for a month. 180,000 KZT for everything, launch in 2-4 business days.",
    "hero.btn1": "Estimate my lead cost", "hero.btn2": "Message on WhatsApp", "hero.ig": "Work and ad accounts on Instagram",
    "cs.legend": "clicks and leads by day",
    "c1.kicker": "Case · car service · carservice01.kz", "c1.unit": "leads from ads", "c1.f1": "per lead", "c1.f2": "of visitors call or write", "c1.f3": "daily budget",
    "c1.p": "A website for urgent repairs, a separate block for each service, ads pointed exactly at those blocks.", "c1.link": "Open carservice01.kz",
    "c1.live": "The campaign is still running: 235 leads in the 30 days to 05.10.2026, at $2.35 each",
    "c1.cap": "A frame from the Google Ads account for the same period: 713 clicks, $340.57 spent",
    "c2.kicker": "Case · metal roofing · s-profile.kz", "c2.unit": "leads from ads", "c2.h": "Budget tripled, cost per lead stayed the same", "c2.f1": "per lead", "c2.f2": "daily budget", "c2.f3": "ad CTR",
    "c2.p": "Weekly query cleanup, bid caps, negative keywords for every ad group.", "c2.link": "Open s-profile.kz", "c2.cap": "A frame from the Google Ads account for the same period: 621 clicks, $589.27 spent",
    "c3.kicker": "Case · home medical care · med-home.kz", "c3.unit": "leads in the first two weeks", "c3.f1": "per lead", "c3.f2": "of visitors get in touch", "c3.f3": "ad CTR",
    "c3.p": "Precise keywords for at-home services, instant contact from the phone.", "c3.link": "Open med-home.kz",
    "c3.live": "The campaign is still running: 157 leads in the 30 days to 05.10.2026, at $3.40 each",
    "c3.cap": "A frame from the Google Ads account for the same period: 251 clicks, 61 conversions, $144.49 spent",
    "t.f1": "projects", "t.f2": "new clients a month", "t.f3b": "Official contract", "t.f3": "with a registered entrepreneur, monthly renewal", "t.f4b": "The account and website are yours", "t.f4": "owner access from day one",
    "m.kicker": "More cases", "m.h2": "Nine more accounts and three design cases", "m.lead": "Cost per lead in client accounts for July-August 2026. We show the screenshots at the meeting.", "m.lider": "Lider Potolki",
    "d1.n": "pipeline valves, B2B", "d1.p": "A catalogue of 1,641 items, a plate for every category, a quote from your list in 15 minutes.",
    "d2.n": "freight from China", "d2.p": "Groupage and full loads, three routes, delivery quote straight in WhatsApp.",
    "d3.n": "door hardware", "d3.p": "Wholesale and retail on one page, a catalogue with prices and a discount request.",
    "h.kicker": "How it works", "h.h2": "How a click turns into a lead",
    "h.s1": "A search on Google", "h.s1s": "someone looks for your service", "h.s2": "Your ad on top", "h.s2s": "for that exact query", "h.s3": "A page for that query", "h.s3s": "the service block, not the homepage",
    "h.s4": "A call or WhatsApp", "h.s4s": "one-tap buttons", "h.s5": "A lead in the report", "h.s5s": "the bot sends every one",
    "h.q": "engine repair astana", "h.adL": "Ad", "h.adT": "Engine repair in Astana", "h.adD": "Diagnostics on the day you call", "h.waT": "Hello! I need a diagnostic check",
    "p.k1": "engine repair", "p.k2": "car diagnostics astana", "p.k3": "free", "p.k4": "oil change near me", "p.k5": "jobs", "p.k6": "diy", "p.chart": "cost per lead by week",
    "b.t1": "channel", "b.t2": "query", "b.t3": "site block", "b.t4": "device", "b.t5": "lead code", "b.bot": "lead bot",
    "b.m3a": "Channel: call", "b.m3b": "Query \"tyre fitting 24 hours\"", "b.m4a": "Channel: website form", "b.m4b": "\"I need a quote for three cars\"",
    "k.d1": "1 day", "k.d15": "15 days", "k.d30": "30 days",
    "pr.n1": "a month, management from the second month", "pr.n2b": "from $10", "pr.n2": "a day - the ad budget, paid to Google directly",
    "f.cta": "Didn't find your question?", "f.ctaS": "Write to us, we reply on WhatsApp during business hours.", "f.ctaB": "Ask on WhatsApp",
    "ct.c1b": "2-4 days", "ct.c1": "to launch", "ct.c2b": "180,000 KZT", "ct.c2": "ads, website and a month of management", "ct.c3b": "Every", "ct.c3": "lead is visible in the bot", "ct.ig": "Cases on Instagram",
    "p.kicker": "What's included", "p.h2": "Three jobs in one package",
    "p.r1": "Ads setup", "p.r1t": "1-3 business days", "p.r1a": "keywords and negatives", "p.r1b": "ads written for your offer", "p.r1c": "geo, schedule, bids", "p.r1d": "call, WhatsApp and form tracking",
    "p.r2": "A selling website as a gift", "p.r2t": "1-3 business days", "p.r2a": "one page built for leads", "p.r2b": "designed for the phone", "p.r2c": "basic SEO and your socials", "p.r2d": "WhatsApp and call buttons",
    "p.r3": "A month of management", "p.r3t": "included", "p.r3a": "weekly query cleanup", "p.r3b": "cut the weak, boost the strong", "p.r3c": "cost-per-lead control", "p.r3d": "short recommendations on leads",
    "b.kicker": "Lead bot", "b.h2": "You see every lead, not just clicks", "b.lead": "The bot sends every call, WhatsApp message and form to Telegram: when, from where and for which query. Once a week, a summary.", "b.badge": "included",
    "b.m1t": "New lead", "b.m1a": "Channel: WhatsApp", "b.m1b": "Source: Google Ads, query \"engine repair astana\"", "b.m1c": "Site block: diagnostics", "b.m1d": "Device: phone",
    "b.m2t": "Weekly summary", "b.m2w": "Mon-Sun", "b.m2a": "leads", "b.m2c": "calls", "b.m2d": "form requests", "b.note": "Example. Your numbers will be your own.",
    "w.kicker": "Work", "w.h2": "Websites built in the last few weeks", "w.lead": "All links are live. Your website will be of the same level.", "w.open": "Open the site",
    "w.f0": "All", "w.f1": "Services", "w.f2": "B2B and manufacturing", "w.f3": "Trade", "w.f4": "Legal and finance", "w.f5": "HoReCa",
    "w.n1": "door hardware", "w.n2": "patents and trademarks", "w.n3": "freight from China", "w.n4": "custom radiators", "w.n5": "AIFC registration", "w.n6": "countryside retreat", "w.n7": "homewear wholesale", "w.n8": "law firm", "w.n9": "hotel", "w.n10": "handyman", "w.n11": "asphalt paving", "w.n12": "car service",
    "w.ig": "More work on Instagram", "r.kicker": "Reviews", "r.h2": "What clients say",
    "k.kicker": "Calculator", "k.h2": "What a lead may cost in your niche", "k.niche": "Niche",
    "k.n1": "Car service, tyre fitting", "k.n2": "Medicine, dentistry", "k.n3": "Construction, renovation, finishing", "k.n4": "Windows, doors, ceilings, furniture", "k.n5": "Lawyers, accounting, consulting", "k.n6": "Wholesale and B2B supply", "k.n7": "Beauty, health, at-home services", "k.n8": "Another niche",
    "k.budget": "Daily budget", "k.r1": "clicks a month", "k.r2": "leads a month", "k.r3": "per lead",
    "k.note": "A benchmark from our accounts over the last month: median cost per click $0.69, conversion rate 9.8%. The exact figure is calculated for your city and queries.", "k.btn": "Get an exact estimate",
    "pr.kicker": "Price", "pr.cur": "KZT", "pr.h2": "for a turnkey launch", "pr.i1": "Google Ads setup", "pr.i2": "a selling website", "pr.i3": "first month of management", "pr.i4": "lead bot",
    "pr.btn": "Leave a request",
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
    "ct.phone": "Phone (WhatsApp)", "ct.niche": "Niche and city", "ct.nichePh": "e.g. dentistry, Almaty…", "skip": "Skip to content", "ct.err": "Check the phone number: at least 10 digits.", "ct.btn": "Get an estimate",
    "ct.note": "The button opens WhatsApp with a ready message. We reply during business hours.", "ct.ok": "Thanks, your request went to WhatsApp", "ct.ok2": "If the window did not open, write to us at +7 701 806 88 66",
    "ft.l": "Google Ads, websites and management. Astana, working across Kazakhstan.", "ft.c": "Sole proprietor CALIFORNIA", "st.call": "Call"
  } };
  const RU_PH = { "ct.nichePh": "например, стоматология, Алматы…", "wa.l1": "Здравствуйте! Хочу расчёт по пакету Google Ads + сайт.", "wa.l2": "Телефон:", "wa.l3": "Ниша и город:", "wa.l4": "Бюджет:", "wa.l5": "/день" };
  Object.assign(I18N.en, {
    "nav.blog": "Articles", "w.site": "Websites built for ads", "ft.site": "Website development", "ft.blog": "Articles",
    "blog.kicker": "Articles", "blog.h2": "Ads and websites, backed by numbers", "blog.lead": "Cost per click and per lead from our clients' ad accounts, what kills conversion and how to build a page for ads.",
    "blog.all": "All articles", "blog.read": "Read", "blog.ru": "in Russian",
    "blog.g1": "Google Ads", "blog.g2": "Websites", "blog.g3": "Budget", "blog.m1": "8 min read", "blog.m2": "6 min read", "blog.m3": "7 min read",
    "blog.t1": "Google Ads for business: why you get clicks but no leads", "blog.d1": "A step-by-step search campaign launch and 7 reasons clicks don't turn into calls.",
    "blog.t2": "Landing pages: what they are and why Google Ads works better with them", "blog.d2": "How a landing page differs from a business card site, what blocks it needs and why leads get cheaper.",
    "blog.t3": "How much Google Ads costs in Kazakhstan in 2026", "blog.d3": "Cost per click and per lead across 42 accounts, bids by niche and a starting budget.",
  });
  Object.assign(I18N.en, { "wa.l1": "Hello! I want an estimate for the Google Ads + website package.", "wa.l2": "Phone:", "wa.l3": "Niche and city:", "wa.l4": "Budget:", "wa.l5": "/day" });
  const META = { ru: ["Контекстная реклама в Астане: Google Ads + сайт в подарок", "Настройка Google Ads, продающий сайт в подарок и месяц ведения за 180 000 тг. Запуск за 2-4 рабочих дня. Каждое обращение видно в боте. Астана и весь Казахстан."] };

  // русский словарь собираем из разметки один раз: разметка - источник правды
  $$("[data-i]").forEach((el) => { if (I18N.ru[el.dataset.i] === undefined) I18N.ru[el.dataset.i] = el.textContent; });
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

  /* ---------------- герой: стена сайтов ---------------- */
  const WORKS = ["sutora", "mypatent", "pslgroup", "zhantore", "ahpartners", "sunsara", "kelebek", "legalresource", "hotelcomfort", "provar", "asphalttau", "carservice", "armgrant"];
  function buildWall() {
    const wall = $("#wall"); if (!wall) return;
    const tiles = [];
    WORKS.forEach((n, i) => { tiles.push([n, "d"]); tiles.push([WORKS[(i + 7) % WORKS.length], "m"]); });
    const cols = [[], [], [], []];
    tiles.forEach((t, i) => cols[i % 4].push(t));
    wall.innerHTML = cols.map((col) => {
      const one = (lazy) => col.map(([n, k], i) => {
        const at = lazy || i > 2 ? 'loading="lazy"' : (i === 0 ? 'fetchpriority="high"' : "");
        return k === "d"
          ? `<div class="wtile d"><img src="assets/works/${n}.webp" width="880" height="550" alt="" ${at} decoding="async"></div>`
          : `<div class="wtile m"><img src="assets/works/m/${n}.webp" width="360" height="720" alt="" ${at} decoding="async"></div>`;
      }).join("");
      return `<div class="wcol"><div class="wtrack">${one(false)}${one(true)}</div></div>`;
    }).join("");
  }
  buildWall();

  /* ---------------- кейсы: график обращений по реальным точкам ---------------- */
  const CHARTS = {
    carservice: { a: [[0.01,0.23],[0.03,0.38],[0.05,0.55],[0.08,0.58],[0.1,0.64],[0.13,0.66],[0.15,0.65],[0.17,0.63],[0.2,0.5],[0.21,0.46],[0.26,0.2],[0.28,0.44],[0.31,0.54],[0.33,0.71],[0.36,0.72],[0.38,0.55],[0.41,0.54],[0.43,0.51],[0.46,0.64],[0.49,0.67],[0.51,0.63],[0.54,0.45],[0.56,0.49],[0.59,0.48],[0.61,0.56],[0.64,0.5],[0.67,0.46],[0.69,0.54],[0.72,0.57],[0.75,0.41],[0.77,0.48],[0.79,0.55],[0.81,0.32],[0.84,0.2],[0.87,0.41],[0.9,0.41],[0.92,0.29],[0.95,0.38],[0.97,0.21]],
      b: [[0.01,0.18],[0.03,0.3],[0.05,0.67],[0.08,0.65],[0.1,0.51],[0.13,0.44],[0.15,0.46],[0.18,0.49],[0.2,0.45],[0.23,0.31],[0.26,0.2],[0.28,0.26],[0.31,0.35],[0.33,0.42],[0.36,0.55],[0.38,0.51],[0.41,0.39],[0.43,0.45],[0.46,0.42],[0.49,0.55],[0.51,0.54],[0.54,0.52],[0.57,0.46],[0.59,0.41],[0.61,0.46],[0.64,0.34],[0.67,0.33],[0.69,0.56],[0.72,0.57],[0.74,0.6],[0.77,0.33],[0.8,0.67],[0.82,0.24],[0.85,0.2],[0.87,0.41],[0.9,0.55],[0.92,0.6],[0.95,0.41],[0.97,0.18]] },
    sprofile: { a: [[0.03,0.29],[0.04,0.31],[0.08,0.26],[0.1,0.21],[0.14,0.21],[0.16,0.26],[0.18,0.23],[0.2,0.29],[0.24,0.22],[0.26,0.24],[0.28,0.32],[0.32,0.27],[0.34,0.27],[0.41,0.27],[0.42,0.26],[0.49,0.32],[0.51,0.85],[0.53,0.72],[0.56,0.44],[0.57,0.48],[0.61,0.57],[0.64,0.65],[0.67,0.38],[0.7,0.36],[0.71,0.37],[0.74,0.49],[0.77,0.62],[0.79,0.46],[0.81,0.41],[0.83,0.38],[0.87,0.38],[0.88,0.41],[0.92,0.62],[0.95,0.44],[0.96,0.38]],
      b: [[0.02,0.21],[0.05,0.29],[0.09,0.28],[0.1,0.27],[0.13,0.29],[0.15,0.32],[0.17,0.32],[0.2,0.34],[0.22,0.34],[0.29,0.34],[0.31,0.34],[0.33,0.33],[0.36,0.25],[0.39,0.34],[0.42,0.34],[0.43,0.34],[0.48,0.34],[0.49,0.34],[0.51,0.59],[0.53,0.77],[0.56,0.64],[0.59,0.85],[0.62,0.57],[0.64,0.56],[0.66,0.6],[0.69,0.5],[0.71,0.6],[0.74,0.64],[0.77,0.64],[0.79,0.65],[0.84,0.52],[0.87,0.59],[0.9,0.72],[0.92,0.71],[0.95,0.62],[0.96,0.67]] },
    medhome: { a: [[0.02,0.37],[0.03,0.38],[0.05,0.43],[0.07,0.48],[0.1,0.58],[0.13,0.69],[0.15,0.76],[0.18,0.74],[0.2,0.72],[0.23,0.71],[0.26,0.71],[0.28,0.7],[0.31,0.76],[0.32,0.78],[0.36,0.91],[0.37,0.87],[0.41,0.78],[0.43,0.74],[0.47,0.79],[0.49,0.82],[0.54,0.82],[0.56,0.81],[0.59,0.72],[0.62,0.6],[0.64,0.51],[0.67,0.49],[0.69,0.52],[0.72,0.52],[0.73,0.52],[0.77,0.52],[0.8,0.52],[0.82,0.53],[0.93,0.53],[0.94,0.52]],
      b: [[0.04,0.36],[0.08,0.38],[0.11,0.43],[0.13,0.47],[0.15,0.52],[0.18,0.58],[0.2,0.66],[0.23,0.69],[0.26,0.67],[0.29,0.66],[0.3,0.73],[0.33,0.84],[0.36,0.96],[0.38,0.91],[0.41,0.85],[0.46,0.83],[0.49,0.84],[0.51,0.82],[0.55,0.74],[0.56,0.71],[0.59,0.65],[0.62,0.57],[0.64,0.53],[0.67,0.54],[0.7,0.56],[0.72,0.57],[0.74,0.56],[0.76,0.55],[0.79,0.54],[0.82,0.54],[0.84,0.54],[0.87,0.54],[0.9,0.53],[0.93,0.52],[0.95,0.49],[0.96,0.47]] }
  };
  function smoothPath(pts, W, H) {
    const P = pts.map(([x, y]) => [x * W, H - y * H * .86 - H * .06]);
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return { d, last: P[P.length - 1], first: P[0] };
  }
  $$(".chart").forEach((box) => {
    const data = CHARTS[box.dataset.chart]; if (!data) return;
    const W = 1000, H = 400;
    const A = smoothPath(data.a, W, H), B = smoothPath(data.b, W, H);
    const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="0" x2="${W}" y1="${(H * g).toFixed(0)}" y2="${(H * g).toFixed(0)}"/>`).join("");
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><g class="grid">${grid}</g><path class="area" d="${A.d} L${A.last[0].toFixed(1)} ${H} L${A.first[0].toFixed(1)} ${H} Z"/><path class="ln2" pathLength="1" d="${B.d}"/><path class="ln" pathLength="1" d="${A.d}"/><circle class="dot" cx="${A.last[0].toFixed(1)}" cy="${A.last[1].toFixed(1)}" r="4"/></svg>`;
  });

  /* ---------------- механика плит ---------------- */
  const pws = $$(".pw");
  const hero = $(".hero");
  const hasHash = !!location.hash && !!document.getElementById(location.hash.slice(1));
  let intro = 0, introDone = false;
  const skipIntro = REDUCED || hasHash || scrollY > 80;

  function runIntro() {
    if (skipIntro) { intro = 1; hero.style.setProperty("--intro", "1"); introDone = true; return; }
    const t0 = performance.now(), D = 1700;
    (function tick(now) {
      const t = clamp((now - t0) / D);
      intro = easeOut(t); hero.style.setProperty("--intro", intro.toFixed(4));
      if (t < 1) requestAnimationFrame(tick); else introDone = true;
    })(t0);
  }

  const counted = new WeakSet();
  function countUp(el) {
    if (counted.has(el)) return; counted.add(el);
    const n = +el.dataset.n, t0 = performance.now(), D = REDUCED ? 0 : 1400;
    (function tick(now) {
      const t = D ? clamp((now - t0) / D) : 1;
      el.textContent = Math.round(n * easeOut(t));
      if (t < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------------- путь клика: след через узлы ---------------- */
  const scene = $("#scene");
  const SC = { fr: [], len: 0, path: null, head: null };
  function catmull(P) {
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
      d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  }
  let scBuilt = false;
  const sceneDirty = () => { scBuilt = false; onScroll(); };
  function buildScene() {
    if (!scene) return;
    scBuilt = true;
    const sr = scene.getBoundingClientRect(), svg = $(".scene-svg", scene);
    const pts = $$(".node .dot", scene).map((d) => { const r = d.getBoundingClientRect(); return [r.left + r.width / 2 - sr.left, r.top + r.height / 2 - sr.top]; });
    if (pts.length < 2 || !sr.width) return;
    const vertical = Math.abs(pts[1][1] - pts[0][1]) > Math.abs(pts[1][0] - pts[0][0]);
    const n = pts.length - 1;
    const all = vertical
      ? [[pts[0][0], Math.max(0, pts[0][1] - 70)], ...pts, [pts[n][0], pts[n][1] + 50]]
      : [[-24, pts[0][1] + 30], ...pts, [sr.width + 24, pts[n][1] - 30]];
    svg.setAttribute("viewBox", `0 0 ${sr.width.toFixed(0)} ${sr.height.toFixed(0)}`);
    const d = catmull(all);
    const ln = $(".sc-line", scene), gh = $(".sc-ghost", scene);
    ln.setAttribute("d", d); gh.setAttribute("d", d);
    SC.path = ln; SC.head = $(".sc-head", scene); SC.len = ln.getTotalLength();
    // доля длины пути до каждого узла
    const N = 160, samp = [];
    for (let i = 0; i <= N; i++) { const q = ln.getPointAtLength(SC.len * i / N); samp.push([q.x, q.y]); }
    SC.fr = pts.map(([x, y]) => { let b = 0, bd = 1e9; samp.forEach(([sx, sy], i) => { const dd = (sx - x) ** 2 + (sy - y) ** 2; if (dd < bd) { bd = dd; b = i; } }); return b / N; });
    ln.setAttribute("pathLength", "1");
  }
  const nodeEls = $$(".node");
  const tg = $("#tg"), msgEls = $$("#tg .msg");
  const proc = $("#proc"), procEls = $$("#proc li");
  const contact = $("#contact");

  let ticking = false;
  function update() {
    ticking = false;
    const H = innerHeight;
    const enters = pws.map((pw) => { const r = pw.getBoundingClientRect(); return { r, enter: clamp(1 - r.top / H) }; });
    pws.forEach((pw, i) => {
      const { r, enter } = enters[i];
      const hold = pw.classList.contains("stack") ? H : 0;
      const span = r.height - hold - H;
      const stay = span > 1 ? clamp(-r.top / span) : 0;
      const exit = i + 1 < pws.length ? enters[i + 1].enter : 0;
      const open = easeOut(clamp((enter - .3) / .7));
      pw.style.setProperty("--enter", enter.toFixed(4));
      pw.style.setProperty("--stay", stay.toFixed(4));
      pw.style.setProperty("--exit", exit.toFixed(4));
      pw.style.setProperty("--open", open.toFixed(4));
      pw.classList.toggle("gone", exit >= 1);
      const txt = $(".txt", pw); if (txt && enter > .1) txt.classList.add("on");
      if (open > .3) { const num = $(".num", pw); if (num) countUp(num); }
    });
    // липкая панель: после 55% первого экрана, прячется на контактах
    const ct = contact.getBoundingClientRect();
    sticky.classList.toggle("is-on", scrollY > H * .55 && ct.top > H * .6);
    hdr.classList.toggle("is-scrolled", scrollY > 8);
    // путь клика: голова следа и узлы
    if (scene) {
      const r = scene.getBoundingClientRect();
      if (!scBuilt && r.top < H * 1.6 && r.bottom > -H) buildScene();
      if (SC.path && r.bottom > -100 && r.top < H + 100) {
        const p = REDUCED ? 1 : clamp((H * .72 - r.top) / (r.height * .92));
        scene.style.setProperty("--p", p.toFixed(4));
        const q = SC.path.getPointAtLength(SC.len * p);
        SC.head.setAttribute("cx", q.x.toFixed(1)); SC.head.setAttribute("cy", q.y.toFixed(1));
        nodeEls.forEach((el, i) => {
          el.classList.toggle("lit", p >= SC.fr[i] - .004);
          if (i === 0) el.style.setProperty("--k", clamp(p / Math.max(.05, (SC.fr[1] || .2) * .85)).toFixed(3));
        });
      }
    }
    // бот: уведомления прилетают по одному
    if (tg) {
      const r = tg.getBoundingClientRect();
      const p = REDUCED ? 1 : clamp((H * .88 - r.top) / (r.height * .7));
      msgEls.forEach((m, i) => m.classList.toggle("on", p > .06 + i * .22));
    }
    // процесс: линия и шаги
    if (proc) {
      const r = proc.getBoundingClientRect();
      const p = REDUCED ? 1 : clamp((H * .8 - r.top) / (r.height + H * .25));
      proc.style.setProperty("--p", p.toFixed(4));
      procEls.forEach((li, i) => li.classList.toggle("lit", p >= i / procEls.length + .01));
    }
    // финальный экран: след сходится к форме
    if (ct.top < H && ct.bottom > 0) contact.style.setProperty("--p", (REDUCED ? 1 : clamp((H - ct.top) / (ct.height * .75))).toFixed(4));
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------------- обводка-прожектор по курсору ---------------- */
  const spots = $$(".spot");
  if (spots.length && matchMedia("(hover: hover)").matches) {
    let pm = false, px = 0, py = 0;
    addEventListener("pointermove", (e) => {
      px = e.clientX; py = e.clientY;
      if (pm) return; pm = true;
      requestAnimationFrame(() => {
        pm = false;
        spots.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > innerHeight + 200) return;
          el.style.setProperty("--mx", (px - r.left).toFixed(0) + "px");
          el.style.setProperty("--my", (py - r.top).toFixed(0) + "px");
        });
      });
    }, { passive: true });
  }

  /* ---------------- бегущая строка ---------------- */
  const marq = $("#marq");
  function setupMarq() {
    if (!marq) return;
    if (!marq.dataset.dup) { marq.innerHTML += marq.innerHTML; marq.dataset.dup = "1"; }
    const half = marq.scrollWidth / 2;
    marq.style.setProperty("--marq-w", half.toFixed(0));
    marq.style.setProperty("--marq-d", (half / 55).toFixed(1) + "s");
  }

  /* ---------------- проявление ---------------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  $$(".rv").forEach((el) => io.observe(el));
  const ioN = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { countUp(e.target); ioN.unobserve(e.target); } }), { threshold: .6 });
  $$(".cnt").forEach((el) => ioN.observe(el));

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
  const meterSvg = $("#meterSvg"), mBand = $(".m-band"), mLn = $(".m-ln"), mDot = $(".m-dot");
  const M = { cur: null, to: null, t0: 0, raf: 0 };
  const leadsAt = (b, k) => b * 30 / (.69 * k[0]) * (.098 * k[1]);
  function drawMeter(v) {
    if (!meterSvg) return;
    const W = 600, Ht = 240, N = 30, top = 14;
    const y = (val, t) => Ht - 2 - (val * Math.pow(t, 1.12) / v.ymax) * (Ht - top - 2);
    const pts = (val) => Array.from({ length: N + 1 }, (_, i) => [W * i / N, y(val, i / N)]);
    const hi = pts(v.hi), lo = pts(v.lo).reverse(), mid = pts((v.hi + v.lo) / 2);
    const P = (a) => a.map(([x, yy], i) => (i ? "L" : "M") + x.toFixed(1) + " " + yy.toFixed(1)).join(" ");
    mBand.setAttribute("d", P(hi) + " " + P(lo).replace("M", "L") + " Z");
    mLn.setAttribute("d", P(mid));
    const sr = meterSvg.getBoundingClientRect(), pr = mDot.parentNode.getBoundingClientRect();
    mDot.style.top = (sr.top - pr.top + mid[N][1] / Ht * (sr.height || 210)).toFixed(1) + "px";
  }
  function showCalc(v) {
    $("#rClicks").textContent = "~" + fmt(v.clicks);
    $("#rLeads").textContent = fmt(v.lo) + "-" + fmt(v.hi);
    $("#rCpl").textContent = money(v.cpl * .8) + "-" + money(v.cpl * 1.3);
    drawMeter(v);
  }
  function calcRun() {
    if (!nicheSel) return;
    const k = NICHE[nicheSel.value] || NICHE.other, b = +budget.value;
    const cpc = .69 * k[0], cr = .098 * k[1];
    const clicks = b * 30 / cpc, leads = clicks * cr;
    budgetOut.value = "$" + b;
    budget.style.setProperty("--fill", ((b - 5) / 45 * 100).toFixed(1) + "%");
    const to = { clicks, lo: leads * .75, hi: leads * 1.25, cpl: cpc / cr, ymax: Math.max(leads * 1.25 * 1.1, leadsAt(18, k) * 1.25 * 1.05) };
    if (!M.cur || REDUCED) { M.cur = to; showCalc(to); return; }
    const from = Object.assign({}, M.cur); M.t0 = performance.now();
    cancelAnimationFrame(M.raf);
    (function tick(now) {
      const t = easeOut(clamp((now - M.t0) / 520));
      const v = {}; Object.keys(to).forEach((key) => { v[key] = from[key] + (to[key] - from[key]) * t; });
      v.cpl = to.cpl; M.cur = v; showCalc(v);
      if (t < 1) M.raf = requestAnimationFrame(tick);
    })(M.t0);
  }
  if (nicheSel) {
    nicheSel.addEventListener("change", calcRun); budget.addEventListener("input", calcRun); calcRun();
    addEventListener("resize", () => M.cur && drawMeter(M.cur));
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
    const over = () => $$(":scope > span", h1).some((s) => s.scrollWidth > h1.clientWidth + 1);
    while (over() && guard++ < 14) { size *= .95; h1.style.fontSize = size.toFixed(1) + "px"; }
  }
  document.fonts && document.fonts.ready.then(fitText);
  const _applyLang = applyLang;
  applyLang = function (l) { _applyLang(l); fitText(); requestAnimationFrame(sceneDirty); };

  /* ---------------- старт ---------------- */
  function layout() { fitText(); setupMarq(); update(); }
  addEventListener("resize", () => { fitText(); setupMarq(); sceneDirty(); });
  addEventListener("load", () => { setupMarq(); fitText(); sceneDirty(); });
  document.fonts && document.fonts.ready.then(sceneDirty);
  layout();
  initLang();
  if (hasHash) { scrollToId(location.hash.slice(1), true); setTimeout(() => { scrollToId(location.hash.slice(1), true); update(); }, 300); }
  runIntro();
  update();
})();
