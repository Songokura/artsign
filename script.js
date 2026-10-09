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
    "cs.legend": "clicks and leads by day", "cs.did": "What we did", "cs.res": "Result", "cs.fn": "From impression to lead", "cs.imp": "Impressions", "cs.clk": "Clicks", "cs.lead": "Leads", "cs.ofImp": "of impressions clicked", "cs.ofClk": "of clicks got in touch", "cs.spend": "Spend", "cs.per": "per lead", "cs.budget": "daily budget", "cs.src": "Numbers from the client's Google Ads account for the same period", "c1.res": "55 leads in the first two weeks, at $2.93 each.", "c3.res": "82 leads in the first month, at $6.72 each in a B2B niche.",
    "c1.kicker": "Case · concrete plant · tautas-beton.kz", "c1.unit": "leads from ads", "c1.f1": "per lead", "c1.f2": "of visitors call or write", "c1.f3": "daily budget",
    "c1.p": "A block for every grade and mix, mixer delivery and the concrete pump as separate sections, ads pointed exactly at them.", "c1.link": "Open tautas-beton.kz",
    "c1.live": "The campaign is still running: 235 leads in the 30 days to 05.10.2026, at $2.35 each",
    "c1.cap": "A frame from the Google Ads account for the same period: 713 clicks, $340.57 spent",
    "c2.kicker": "Case · rolled steel · strongsteel.kz", "c2.unit": "leads from ads", "c2.h": "47 leads in three weeks, at $4.97 each on a $10 daily budget.", "c2.f1": "per lead", "c2.f2": "daily budget", "c2.f3": "ad CTR",
    "c2.p": "A catalogue of 8 product groups with cross-section drawings and a weight calculator, a block for each group.", "c2.link": "Open strongsteel.kz", "c2.cap": "A frame from the Google Ads account for the same period: 621 clicks, $589.27 spent",
    "c3.kicker": "Case · pipeline valves · arm-garant.kz", "c3.unit": "leads from ads", "c3.f1": "per lead", "c3.f2": "of visitors get in touch", "c3.f3": "ad CTR",
    "c3.p": "A catalogue of 1,641 items, a block for every category, a price request for your own list.", "c3.link": "Open arm-garant.kz",
    "c3.live": "The campaign is still running: 157 leads in the 30 days to 05.10.2026, at $3.40 each",
    "c3.cap": "A frame from the Google Ads account for the same period: 251 clicks, 61 conversions, $144.49 spent",
    "t.f1": "projects", "t.tools": "We work in Google tools", "t.ads": "campaigns, bids, conversions", "t.gsc": "indexing and site search", "h.photo": "Your client is already searching on Google", "ct.city": "Astana", "ct.cityS": "office in Astana, other cities and countries online", "t.f2": "new clients a month", "t.f3b": "Official contract", "t.f3": "with a registered entrepreneur, monthly renewal", "t.f4b": "Your account or ours", "t.f4": "have one - we work in it, if not - we set one up and give you access",
    "m.kicker": "More cases", "m.h2": "Six more ad accounts and three design cases", "m.lead": "Cost per lead in client accounts from campaign launch to 07.10.2026. We show the screenshots at the meeting.", "m.co": "Tsentr Otsenki", "m.eco": "EcoPlast", "m.vo": "Vysshaya Otsenochnaya", "m.l1": "lead", "m.l2": "leads", "m.l5": "leads", "m.click": "per click, 343 clicks", "d1.num": "leads at $6.72 in the first month of ads",
    "d1.n": "pipeline valves, B2B", "d1.p": "A catalogue of 1,641 items, a plate for every category, a quote from your list in 15 minutes.",
    "d2.n": "facade works, Astana", "d2.p": "Ventilated facades, panels and lamellas: every service in its own block for ads.",
    "d3.n": "crane manufacturing", "d3.p": "Cranes from 0.5 to 200 t and steel structures: a catalogue and a quote request from the phone.",
    "h.kicker": "How it works", "h.h2": "How a click turns into a lead",
    "h.s1": "A search on Google", "h.s1s": "someone looks for your service", "h.s2": "Your ad on top", "h.s2s": "for that exact query", "h.s3": "A page for that query", "h.s3s": "the service block, not the homepage",
    "h.s4": "A call or WhatsApp", "h.s4s": "one-tap buttons", "h.s5": "A lead in the report", "h.s5s": "the bot sends every one",
    "h.q": "engine repair astana", "h.adL": "Ad", "h.adT": "Engine repair in Astana", "h.adD": "Diagnostics on the day you call", "h.waT": "Hello! I need a diagnostic check",
    "p.k1": "engine repair", "p.k2": "car diagnostics astana", "p.k3": "free", "p.k4": "oil change near me", "p.k5": "jobs", "p.k6": "diy", "p.chart": "cost per lead by week",
    "b.t1": "channel", "b.t2": "query", "b.t3": "site block", "b.t4": "device", "b.t5": "lead code", "b.bot": "lead bot",
    "b.m3a": "Channel: call", "b.m3b": "Query \"tyre fitting 24 hours\"", "b.m4a": "Channel: website form", "b.m4b": "\"I need a quote for three cars\"",
    "k.d1": "1 day", "k.d15": "15 days", "k.d30": "30 days", "k.month": "Your month: each block is one lead", "k.perday": "a day", "k.of100": "out of 100 site visitors call or message",
    "pr.n1": "a month, management from the second month", "pr.n2b": "$5-10", "pr.n2": "a day - the ad budget, paid to Google directly",
    "f.cta": "Didn't find your question?", "f.ctaS": "Write to us, we reply on WhatsApp during business hours.", "f.ctaB": "Ask on WhatsApp",
    "ct.c1b": "2-4 days", "ct.c1": "to launch", "ct.c2b": "180,000 KZT", "ct.c2": "ads, website and a month of management", "ct.c3b": "Every", "ct.c3": "lead is visible in the bot", "ct.ig": "Cases on Instagram",
    "p.kicker": "What's included", "p.h2": "Three jobs in one package",
    "p.r1": "Ads setup", "p.r1t": "1-3 business days", "p.r1a": "keywords and negatives", "p.r1b": "ads written for your offer", "p.r1c": "geo, schedule, bids", "p.r1d": "call, WhatsApp and form tracking",
    "p.r2": "A selling website as a gift", "p.r2t": "1-3 business days", "p.r2a": "one page built for leads", "p.r2b": "designed for the phone", "p.r2c": "basic SEO, Search Console and your socials", "p.r2d": "WhatsApp and call buttons",
    "p.r3": "A month of management", "p.r3t": "included", "p.r3a": "weekly query cleanup", "p.r3b": "cut the weak, boost the strong", "p.r3c": "cost-per-lead control", "p.r3d": "short recommendations on leads",
    "b.kicker": "Lead bot", "b.h2": "You see every lead, not just clicks", "b.lead": "The bot sends every call, WhatsApp message and form to Telegram: when, from where and for which query. Once a week, a summary.", "b.badge": "included",
    "b.m1t": "New lead", "b.m1a": "Channel: WhatsApp", "b.m1b": "Source: Google Ads, query \"engine repair astana\"", "b.m1c": "Site block: diagnostics", "b.m1d": "Device: phone",
    "b.m2t": "Weekly summary", "b.m2w": "Mon-Sun", "b.m2a": "leads", "b.m2c": "calls", "b.m2d": "form requests", "b.note": "Example. Your numbers will be your own.",
    "w.kicker": "Work", "w.h2": "Websites built in the last few weeks", "w.lead": "All links are live. Your website will be of the same level.", "w.open": "Open the site", "w.b8": "Business Valuation", "w.b4": "Fridge Repair",
    "w.f0": "All", "w.f1": "Services", "w.f2": "B2B and manufacturing", "w.f3": "Trade", "w.f4": "Legal and finance", "w.f5": "HoReCa",
    "w.n1": "seafood restaurant, Aktau", "w.n2": "stainless steel products", "w.n3": "turnkey gates and canopies", "w.n4": "home appliance repair, Almaty", "w.n5": "catering and events", "w.n6": "car paint and body repair", "w.n7": "business law firm", "w.n8": "property and business valuation", "w.n9": "podiatrist, Aktobe", "w.n10": "paintball and shooting, Almaty", "w.n11": "air conditioner installation", "w.n12": "washing machine repair",
    "w.ig": "More work on Instagram", "r.kicker": "Reviews", "r.h2": "What clients say",
    "k.kicker": "Calculator", "k.h2": "What a lead may cost in your niche", "k.niche": "Niche",
    "k.n1": "Car service, tyre fitting", "k.n2": "Medicine, dentistry", "k.n3": "Construction, renovation, finishing", "k.n4": "Windows, doors, ceilings, furniture", "k.n5": "Lawyers, accounting, consulting", "k.n6": "Wholesale and B2B supply", "k.n7": "Beauty, health, at-home services", "k.n8": "Another niche",
    "k.budget": "Daily budget", "k.r1": "clicks a month", "k.r2": "leads a month", "k.r3": "per lead",
    "k.note": "A benchmark from our accounts over the last month: median cost per click $0.69, conversion rate 9.8%. The exact figure is calculated for your city and queries.", "k.btn": "Get an exact estimate",
    "pr.kicker": "Price", "pr.cur": "KZT", "pr.h2": "for a turnkey launch", "pr.i1": "Google Ads setup", "pr.i2": "a selling website", "pr.i3": "first month of management", "pr.i4": "lead bot",
    "pr.btn": "Leave a request",
    "tm.1": "Google Ads: your account or ours", "tm.1s": "have one - we work in it, if not - we set one up and give access on request", "tm.2": "Hosting: yours or ours", "tm.2s": "if you have a hosting account, the site goes there",
    "tm.3": "The budget goes directly to Google", "tm.3s": "no markups, no middlemen", "tm.4": "A contract with a registered entrepreneur, monthly renewal", "tm.4s": "100% prepayment, no hidden fees",
    "ps.kicker": "How we work", "ps.h2": "From a call to the first leads",
    "ps.1": "A call", "ps.1s": "niche, city, customer value. About 20 minutes", "ps.2": "Contract and payment", "ps.2s": "the same day", "ps.3": "Website and campaigns", "ps.3s": "you review once, we revise. 2-4 business days", "ps.4": "Launch and management", "ps.4s": "weekly cleanup, leads visible in the bot",
    "f.kicker": "FAQ", "f.h2": "What people ask before starting",
    "f.q1": "Is the ad budget included in 180,000 KZT?", "f.a1": "No. That is the fee for our work. You pay Google for clicks yourself, starting from $5-10 a day.",
    "f.q2": "How much will a lead cost me?", "f.a2": "It depends on the niche and the city. See the calculator above for a benchmark; we make the exact estimate for free.",
    "f.q3": "I already have a website", "f.a3": "We will run ads to it, and build the gift page for one service or a promotion.",
    "f.q4": "Why is the website a gift?", "f.a4": "We build websites with a proven system in 1-3 days and earn on management.",
    "f.q5": "What happens after the first month?", "f.a5": "You extend management for 100,000 KZT a month or we wrap up: access to the account and the site is given on request.",
    "f.q6": "Where are you based?", "f.a6": "In Astana, where our office is - you are welcome to visit. With clients from other cities and countries we do everything online: the call, the review and the edits.",
    "f.q7": "Whose account will the ads and the site be on?", "f.a7": "If you already have a Google Ads account and hosting, we work in them. If not, we set them up on ours and give you access on request.",
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
    if (on) hdr.classList.remove("on-lt"); else requestAnimationFrame(update);
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
  // каждый сайт на стене один раз: 13 из портфолио + 18 других наших проектов (кадры в assets/works/wall)
  // стена героя: прежние работы и проекты, которых нет ниже по странице (свежие сайты - в ленте работ)
  const WALL = ["works/mypatent", "works/wall/bestshine", "works/pslgroup", "works/wall/nisada", "works/zhantore", "works/wall/trioclinic", "works/ahpartners", "works/wall/bigpower", "works/sunsara", "works/wall/strongsteel", "works/kelebek", "works/wall/aig", "works/legalresource", "works/wall/tautasbeton", "works/hotelcomfort", "works/wall/remontkz", "works/provar", "works/wall/electroservice", "works/asphalttau", "works/wall/aeckazakhstan", "works/carservice"];
  const WALL_M = ["works/m/mypatent", "works/wall/bestshine-m", "works/m/pslgroup", "works/wall/strongsteel-m", "works/m/zhantore", "works/wall/tautasbeton-m", "works/m/ahpartners", "works/wall/trioclinic-m", "works/m/sunsara", "works/wall/bigpower-m", "works/m/kelebek", "works/wall/nisada-m", "works/m/legalresource", "works/wall/aig-m", "works/m/hotelcomfort", "works/wall/remontkz-m", "works/m/provar", "works/wall/electroservice-m", "works/m/asphalttau", "works/wall/aeckazakhstan-m"];
  function buildWall() {
    const wall = $("#wall"); if (!wall) return;
    const tile = (k, src) => [k, src];
    const desk = WALL.map((w) => tile("d", `assets/${w}.webp`));
    const mob = WALL_M.map((w) => tile("m", `assets/${w}.webp`));
    const tiles = [];
    for (let i = 0; i < Math.max(desk.length, mob.length * 2); i++) {
      if (desk[i]) tiles.push(desk[i]);
      if (i % 2 === 1 && mob[(i - 1) / 2]) tiles.push(mob[(i - 1) / 2]);
    }
    const cols = [[], [], []];
    tiles.forEach((t, i) => cols[i % 3].push(t));
    wall.innerHTML = cols.map((col) => {
      const one = (lazy) => col.map(([k, src], i) => {
        const at = lazy || i > 2 ? 'loading="lazy"' : (i === 0 ? 'fetchpriority="high"' : "");
        return k === "d"
          ? `<div class="wtile d"><img src="${src}" width="880" height="550" alt="" ${at} decoding="async"></div>`
          : `<div class="wtile m"><img src="${src}" width="360" height="720" alt="" ${at} decoding="async"></div>`;
      }).join("");
      return `<div class="wcol"><div class="wtrack">${one(false)}${one(true)}</div></div>`;
    }).join("");
  }
  buildWall();

  /* ---------------- кейсы: график обращений по реальным точкам ---------------- */
  // клики (a) и обращения (b) по дням из кабинетов клиентов, каждая линия в своём масштабе
  const CHARTS = {"tautas":{"a":[[0.01,0.29],[0.079,0.14],[0.147,0.05],[0.216,0.57],[0.284,0.67],[0.353,0.81],[0.421,0.95],[0.49,1.0],[0.559,0.57],[0.627,0.57],[0.696,0.43],[0.764,0.67],[0.833,0.52],[0.901,0.71],[0.97,0.62]],"b":[[0.01,0.22],[0.079,0.11],[0.147,0.0],[0.216,0.33],[0.284,0.44],[0.353,1.0],[0.421,0.67],[0.49,0.89],[0.559,0.22],[0.627,0.33],[0.696,0.0],[0.764,0.44],[0.833,0.33],[0.901,0.56],[0.97,0.56]]},"strongsteel":{"a":[[0.01,0.0],[0.058,0.38],[0.106,0.67],[0.154,0.85],[0.202,1.0],[0.25,0.74],[0.298,0.56],[0.346,0.54],[0.394,0.31],[0.442,0.46],[0.49,0.31],[0.538,0.59],[0.586,0.38],[0.634,0.41],[0.682,0.38],[0.73,0.31],[0.778,0.44],[0.826,0.28],[0.874,0.44],[0.922,0.69],[0.97,0.77]],"b":[[0.01,0.0],[0.058,0.2],[0.106,1.0],[0.154,0.6],[0.202,0.4],[0.25,0.8],[0.298,0.4],[0.346,0.8],[0.394,0.6],[0.442,0.0],[0.49,0.6],[0.538,0.4],[0.586,0.2],[0.634,0.2],[0.682,0.6],[0.73,0.6],[0.778,0.6],[0.826,0.6],[0.874,0.4],[0.922,0.4],[0.97,0.0]]},"armgarant":{"a":[[0.01,0.03],[0.047,0.11],[0.084,0.17],[0.121,0.06],[0.158,0.17],[0.195,0.2],[0.232,0.11],[0.268,0.26],[0.305,0.37],[0.342,0.23],[0.379,0.51],[0.416,0.6],[0.453,0.31],[0.49,0.57],[0.527,0.54],[0.564,0.03],[0.601,0.14],[0.638,0.97],[0.675,1.0],[0.712,0.91],[0.748,0.77],[0.785,0.43],[0.822,0.4],[0.859,0.51],[0.896,0.46],[0.933,0.63],[0.97,0.23]],"b":[[0.01,0.0],[0.047,0.0],[0.084,0.0],[0.121,0.0],[0.158,0.0],[0.195,0.08],[0.232,0.08],[0.268,0.17],[0.305,0.33],[0.342,0.0],[0.379,0.25],[0.416,0.5],[0.453,0.17],[0.49,0.25],[0.527,0.75],[0.564,0.0],[0.601,0.17],[0.638,1.0],[0.675,0.67],[0.712,0.67],[0.748,0.17],[0.785,0.08],[0.822,0.25],[0.859,0.5],[0.896,0.25],[0.933,0.33],[0.97,0.17]]}};

  // точки снимались с кадра кабинета вручную и стоят неровно: сводим на ровную сетку дней
  // и ведём монотонной кривой - без петель и выбросов между соседними точками
  function resample(pts, n) {
    const out = [], x0 = pts[0][0], x1 = pts[pts.length - 1][0];
    for (let i = 0; i < n; i++) {
      const x = x0 + (x1 - x0) * i / (n - 1);
      let j = 0; while (j < pts.length - 2 && pts[j + 1][0] < x) j++;
      const [ax, ay] = pts[j], [bx, by] = pts[j + 1], t = bx > ax ? clamp((x - ax) / (bx - ax)) : 0;
      out.push([x, ay + (by - ay) * t]);
    }
    return out;
  }
  function smoothPath(pts, W, H) {
    const P = resample(pts, 44).map(([x, y]) => [(x - pts[0][0]) / (pts[pts.length - 1][0] - pts[0][0]) * W, H - y * H * .82 - H * .06]);
    const n = P.length, d = [], m = [];
    for (let i = 0; i < n - 1; i++) d.push((P[i + 1][1] - P[i][1]) / (P[i + 1][0] - P[i][0]));
    m.push(d[0]);
    for (let i = 1; i < n - 1; i++) m.push(d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2);
    m.push(d[n - 2]);
    for (let i = 0; i < n - 1; i++) {
      if (!d[i]) { m[i] = m[i + 1] = 0; continue; }
      const a = m[i] / d[i], b = m[i + 1] / d[i], h = a * a + b * b;
      if (h > 9) { const t = 3 / Math.sqrt(h); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
    }
    const f = (v) => v.toFixed(1);
    let path = `M${f(P[0][0])} ${f(P[0][1])}`;
    for (let i = 0; i < n - 1; i++) {
      const dx = (P[i + 1][0] - P[i][0]) / 3;
      path += ` C${f(P[i][0] + dx)} ${f(P[i][1] + m[i] * dx)} ${f(P[i + 1][0] - dx)} ${f(P[i + 1][1] - m[i + 1] * dx)} ${f(P[i + 1][0])} ${f(P[i + 1][1])}`;
    }
    return { d: path, last: P[n - 1], first: P[0] };
  }
  $$(".chart").forEach((box) => {
    const data = CHARTS[box.dataset.chart]; if (!data) return;
    const W = 1000, H = 400;
    // общий масштаб двух линий: низ периода не прижимается к краю плиты, где его закрывает следующая
    const all = data.a.concat(data.b).map((p) => p[1]), lo = Math.min(...all), hi = Math.max(...all);
    const norm = (pts) => pts.map(([x, y]) => [x, .22 + .78 * (y - lo) / (hi - lo || 1)]);
    const A = smoothPath(norm(data.a), W, H), B = smoothPath(norm(data.b), W, H);
    const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="0" x2="${W}" y1="${(H * g).toFixed(0)}" y2="${(H * g).toFixed(0)}"/>`).join("");
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><g class="grid">${grid}</g><path class="area" d="${A.d} L${W} ${H} L0 ${H} Z"/><path class="ln2" d="${B.d}"/><path class="ln" d="${A.d}"/></svg><i class="ch-dot" style="top:${(A.last[1] / H * 100).toFixed(2)}%"></i>`;
  });
  // график занимает место под текстом кейса и не заходит на него
  function fitCharts() {
    $$(".case").forEach((pl) => {
      const box = $(".chart", pl); if (!box) return;
      const r = pl.getBoundingClientRect(), k = r.height / pl.clientHeight || 1;
      let low = 0;
      $$(".case-txt > *, .proof", pl).forEach((el) => { if (el.offsetParent) low = Math.max(low, (el.getBoundingClientRect().bottom - r.top) / k); });
      const h = pl.clientHeight, minH = Math.min(150, h * .2);
      const t = Math.min(Math.max(low + 28, h * .5), h - minH);
      pl.style.setProperty("--ch-top", Math.round(t) + "px");
    });
  }

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
    const pu = $(".sc-pulse", scene); if (pu) { pu.setAttribute("d", d); pu.setAttribute("pathLength", "1"); }
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
    // шапка светлеет над светлыми секциями; над героем остаётся синей (решение владельца)
    if (!document.body.classList.contains("menu-open")) {
      const under = document.elementFromPoint(innerWidth / 2, hdrH() + 2);
      hdr.classList.toggle("on-lt", !!(under && under.closest(".lt") && !under.closest(".dk, .hero")));
    }
    // путь клика: голова следа и узлы
    if (scene) {
      const r = scene.getBoundingClientRect();
      if (!scBuilt && r.top < H * 1.6 && r.bottom > -H) buildScene();
      if (SC.path && r.bottom > -100 && r.top < H + 100) {
        const p = REDUCED ? 1 : clamp((H * .72 - r.top) / (r.height * .92));
        scene.style.setProperty("--p", p.toFixed(4));
        scene.classList.toggle("done", p > .97);
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
  const monthGrid = $("#monthGrid"), crowd = $("#crowd");
  const M = { cur: null, to: null, t0: 0, raf: 0, sig: "" };
  // ритм недели: в выходные обращений меньше; лёгкий разброс по дням, чтобы месяц не выглядел линейкой
  const DAYF = Array.from({ length: 30 }, (_, i) => (i % 7 === 5 || i % 7 === 6 ? .72 : 1.08) * (1 + .22 * Math.sin(i * 2.3) * Math.cos(i * .7)));
  const DAYN = DAYF.reduce((x, y) => x + y, 0) / 30;
  if (crowd) crowd.innerHTML = "<i></i>".repeat(100);
  function drawMonth(v) {
    if (!monthGrid) return;
    const per = (v.lo + v.hi) / 2 / 30;
    const days = DAYF.map((f) => Math.max(0, Math.round(per * f / DAYN)));
    const sig = days.join(",");
    if (sig === M.sig) return; M.sig = sig;
    const max = Math.max(...days, 1);
    monthGrid.style.setProperty("--rows", max);
    monthGrid.innerHTML = days.map((n) => `<span>${"<i></i>".repeat(n)}</span>`).join("");
  }
  function drawCrowd(cr) {
    if (!crowd) return;
    const lit = Math.round(cr * 100);
    $$("i", crowd).forEach((d, i) => d.classList.toggle("on", i < lit));
    $("#rCr").textContent = lit;
  }
  function showCalc(v) {
    $("#rClicks").textContent = "~" + fmt(v.clicks);
    $("#rLeads").textContent = fmt(v.lo) + "-" + fmt(v.hi);
    $("#rCpl").textContent = money(v.cpl * .8) + "-" + money(v.cpl * 1.3);
    const per = (v.lo + v.hi) / 2 / 30;
    $("#rDay").textContent = "~" + (per < 10 ? per.toFixed(1).replace(".", LANG === "en" ? "." : ",").replace(/[.,]0$/, "") : Math.round(per));
    drawMonth(v);
  }
  function calcRun() {
    if (!nicheSel) return;
    const k = NICHE[nicheSel.value] || NICHE.other, b = +budget.value;
    const cpc = .69 * k[0], cr = .098 * k[1];
    const clicks = b * 30 / cpc, leads = clicks * cr;
    budgetOut.value = "$" + b;
    budget.style.setProperty("--fill", ((b - 5) / 45 * 100).toFixed(1) + "%");
    const to = { clicks, lo: leads * .75, hi: leads * 1.25, cpl: cpc / cr };
    drawCrowd(cr);
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
  document.fonts && document.fonts.ready.then(() => { fitText(); fitCharts(); });
  const _applyLang = applyLang;
  applyLang = function (l) { _applyLang(l); fitText(); fitCharts(); requestAnimationFrame(sceneDirty); };

  /* ---------------- старт ---------------- */
  function layout() { fitText(); fitCharts(); setupMarq(); update(); }
  addEventListener("resize", () => { fitText(); fitCharts(); setupMarq(); sceneDirty(); });
  addEventListener("load", () => { setupMarq(); fitText(); fitCharts(); sceneDirty(); });
  document.fonts && document.fonts.ready.then(sceneDirty);
  layout();
  initLang();
  if (hasHash) { scrollToId(location.hash.slice(1), true); setTimeout(() => { scrollToId(location.hash.slice(1), true); update(); }, 300); }
  runIntro();
  update();
})();
