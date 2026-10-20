const SCHOOL = {
  name: "Unichild International School",
  motto: "Lógia Kai Práxeis — Words and Actions",
  address: "IH41 Bletse St. GW-0926-5269, Accra, Ghana",
  phone: "+233 244 891 066",
  admissionsPhone: "+233 558 636 562",
  email: "Unichildschool11@gmail.com",
  hours: "Monday–Friday, 6:30 AM–4:00 PM",
};

const CLASS_NAMES = [
  "Creche", "Nursery", "Kindergarten",
  "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6",
  "JHS 1", "JHS 2", "JHS 3",
];
const SUBJECTS = [
  "Mathematics", "English Language", "Integrated Science", "Social Studies",
  "Information & Communication Tech. (ICT)", "French", "Creative Arts",
  "Physical Education", "Religious & Moral Education", "Ghanaian Language",
];
const TERMS = ["Term 1", "Term 2", "Term 3"];
const STORAGE_KEY = "unichild-demo-state-v1";
const SESSION_KEY = "unichild-demo-session";

const SEED = {
  students: [
    { id: 1, studentId: "UCS-0042", name: "Kwame Asante", className: "JHS 1", parent: "Ebenezer Asante", phone: "+233 244 555 010", status: "Admitted", feeStatus: "Not Owing", account: true },
    { id: 2, studentId: "UCS-0118", name: "Ama Mensah", className: "JHS 2", parent: "Grace Mensah", phone: "+233 244 555 011", status: "Admitted", feeStatus: "Owing", account: true },
    { id: 3, studentId: "UCS-0254", name: "Kofi Boateng", className: "Primary 4", parent: "Victoria Boateng", phone: "+233 244 555 012", status: "Admitted", feeStatus: "Not Owing", account: true },
    { id: 4, studentId: "UCS-0312", name: "Abena Owusu", className: "Kindergarten", parent: "Richard Owusu", phone: "+233 244 555 013", status: "Admitted", feeStatus: "Owing", account: false },
    { id: 5, studentId: "UCS-0441", name: "Efua Serwaa", className: "Nursery", parent: "Mavis Serwaa", phone: "+233 244 555 014", status: "Admitted", feeStatus: "Not Owing", account: true },
    { id: 6, studentId: "UCS-0502", name: "Yaw Addo", className: "JHS 1", parent: "Emmanuel Addo", phone: "+233 244 555 015", status: "Pending", feeStatus: "Owing", account: false },
    { id: 7, studentId: "UCS-0690", name: "Kojo Mensah", className: "Primary 6", parent: "Grace Mensah", phone: "+233 244 555 016", status: "Admitted", feeStatus: "Not Owing", account: true },
    { id: 8, studentId: "UCS-0723", name: "Adjoa Osei", className: "Primary 2", parent: "Evelyn Osei", phone: "+233 244 555 017", status: "Pending", feeStatus: "Owing", account: false },
  ],
  teachers: [
    { id: 1, name: "Mrs. Monica Arkoh", email: "monica.arkoh@unichild.edu.gh", classes: ["Primary 6"], subjects: ["Mathematics", "Integrated Science"] },
    { id: 2, name: "Mr. Francis Amponsah", email: "francis.amponsah@unichild.edu.gh", classes: ["JHS 1", "JHS 2"], subjects: ["English Language", "Social Studies"] },
    { id: 3, name: "Mrs. Cynthia Kwareng", email: "cynthia.kwareng@unichild.edu.gh", classes: ["Kindergarten"], subjects: ["Creative Arts"] },
  ],
  news: [
    { id: 1, title: "Admissions Open for the 2026/2027 Academic Year", category: "Admissions", date: "2026-02-28", status: "Published", body: "Applications are now being received for Creche through Junior High School. Contact our registrar to begin the admission process." },
    { id: 2, title: "UNICS Graduation & Cultural Day Exhibition 2026", category: "Achievements", date: "2026-02-24", status: "Published", body: "Our largest student gathering this term highlighted beautiful Kente artistry, traditional drumming and our learners' accomplishments." },
    { id: 3, title: "Inter-School Sports Festival Outlines Shared", category: "Campus life", date: "2026-02-20", status: "Published", body: "Children from Nursery up to JHS 3 came together for a day of sports, teamwork and community." },
    { id: 4, title: "Mid-term Examination Timetable", category: "Announcements", date: "2026-02-18", status: "Draft", body: "Please check with your class teacher for the examination schedule." },
  ],
  events: [
    { id: 1, title: "Parent–Teacher Association Meeting", date: "2026-10-28", time: "9:00 AM", location: "Main Assembly Hall", category: "Meeting" },
    { id: 2, title: "Annual Cultural & Heritage Celebration", date: "2026-11-14", time: "8:00 AM", location: "School Grounds", category: "Celebration" },
    { id: 3, title: "Greater Accra Sports Tournament", date: "2026-12-05", time: "10:00 AM", location: "School Grounds", category: "Sports" },
    { id: 4, title: "Mid-Term Examinations", date: "2027-01-12", time: "8:00 AM", location: "All Classrooms", category: "Examinations" },
  ],
  results: [
    { studentId: 1, className: "JHS 1", term: "Term 1", subject: "Mathematics", classScore: 27, examScore: 61, published: true },
    { studentId: 1, className: "JHS 1", term: "Term 1", subject: "English Language", classScore: 28, examScore: 65, published: true },
    { studentId: 1, className: "JHS 1", term: "Term 1", subject: "Integrated Science", classScore: 25, examScore: 58, published: true },
    { studentId: 1, className: "JHS 1", term: "Term 1", subject: "Social Studies", classScore: 24, examScore: 54, published: true },
    { studentId: 1, className: "JHS 1", term: "Term 1", subject: "ICT", classScore: 29, examScore: 60, published: true },
    { studentId: 3, className: "Primary 4", term: "Term 1", subject: "Mathematics", classScore: 26, examScore: 62, published: true },
    { studentId: 3, className: "Primary 4", term: "Term 1", subject: "English Language", classScore: 25, examScore: 58, published: true },
    { studentId: 3, className: "Primary 4", term: "Term 1", subject: "Integrated Science", classScore: 25, examScore: 63, published: true },
  ],
  fees: [
    { studentId: 1, term: "Term 1", total: 4500, paid: 4500 },
    { studentId: 2, term: "Term 1", total: 3800, paid: 2500 },
    { studentId: 3, term: "Term 1", total: 4000, paid: 4000 },
    { studentId: 4, term: "Term 1", total: 3200, paid: 1600 },
    { studentId: 5, term: "Term 1", total: 2800, paid: 2800 },
    { studentId: 6, term: "Term 1", total: 4500, paid: 3000 },
    { studentId: 7, term: "Term 1", total: 3800, paid: 3800 },
    { studentId: 8, term: "Term 1", total: 3500, paid: 2000 },
  ],
  enquiries: [],
  gallery: [
    { id: 1, title: "Main Office Entrance", category: "School Buildings" },
    { id: 2, title: "Computer ICT Laboratory", category: "School Buildings" },
    { id: 3, title: "Science Lab Experiment", category: "Classroom" },
    { id: 4, title: "Kindergarten Classroom", category: "Classroom" },
    { id: 5, title: "Graduation Class Ramp", category: "Graduation" },
    { id: 6, title: "School Library Bookshelf", category: "School Buildings" },
    { id: 7, title: "2026 Cultural Day Display", category: "Cultural Day" },
    { id: 8, title: "Annual Inter-School Soccer", category: "Sports Day" },
    { id: 9, title: "Annual PTA Gathering", category: "Events" },
    { id: 10, title: "BECE Commencement Prep", category: "Graduation" },
    { id: 11, title: "Creche Sleep Area", category: "Classroom" },
    { id: 12, title: "Prefect Elections Campaign", category: "Events" },
  ],
  competitions: [
    { id: 1, title: "Greater Accra Sports Tournament", category: "Athletics", date: "2026-12-05", achievement: "Participation", status: "Published" },
    { id: 2, title: "Inter-School Debate", category: "Debate", date: "2026-11-14", achievement: "Finalists", status: "Published" },
    { id: 3, title: "Science & Innovation Expo", category: "STEM", date: "2027-01-12", achievement: "Coming soon", status: "Draft" },
  ],
  schoolSettings: {},
};

const clone = value => JSON.parse(JSON.stringify(value));
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));
const money = value => `GHS ${Number(value || 0).toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const dateText = value => value ? new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—";
const initials = value => String(value || "").split(/\s+/).filter(Boolean).slice(0, 2).map(word => word[0]).join("").toUpperCase();

function readState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return clone(SEED);
  try {
    const saved = JSON.parse(raw);
    if (!saved || !Array.isArray(saved.students) || !Array.isArray(saved.teachers) || !Array.isArray(saved.results)) {
      throw new Error("Saved demo data has an unexpected structure.");
    }
    return { ...clone(SEED), ...saved };
  } catch (error) {
    console.error("Unable to read saved Unichild demo data:", error);
    window.addEventListener("load", () => toast("Saved demo data could not be read. The demo restarted with sample data.", true), { once: true });
    return clone(SEED);
  }
}

let state = readState();
Object.assign(SCHOOL, state.schoolSettings || {});
let loginRole = new URLSearchParams(location.search).get("role") || "student";
let toastTimer;
let heroTimer;
let heroSlideIndex = 0;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Unable to save Unichild demo data:", error);
    toast("The change is shown for this visit but could not be saved in this browser.", true);
  }
}

function toast(message, isError = false) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = document.createElement("div");
    node.className = "toast";
    node.setAttribute("role", "status");
    document.body.append(node);
  }
  node.textContent = message;
  node.classList.toggle("error", isError);
  node.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.remove(), 3600);
}

function brand(compact = false) {
  return `<a class="brand" href="index.html" aria-label="${escapeHtml(SCHOOL.name)} home">
    <span class="brand-crest" aria-hidden="true">U</span>
    <span><span class="brand-name">${escapeHtml(SCHOOL.name)}</span><span class="brand-motto">Words and Actions</span></span>
  </a>`;
}

function publicHeader(active) {
  const links = [
    ["Home", "index.html", "home"], ["About Us", "about.html", "about"],
    ["Academics", "academics.html", "academics"], ["Admissions", "admissions.html", "admissions"],
    ["News & Blog", "news.html", "news"], ["Departments", "department.html", "department"],
    ["Games", "games.html", "games"], ["Contact Us", "contacts.html", "contact"],
  ];
  return `<div class="site-top"><div class="site-top-inner">
      <span>☎ ${escapeHtml(SCHOOL.phone)} &nbsp; · &nbsp; ✉ ${escapeHtml(SCHOOL.email)}</span><span>◷ ${escapeHtml(SCHOOL.hours)}</span>
    </div></div>
    <header class="site-nav${active === "home" ? " home-nav" : ""}"><div class="site-nav-inner">
      ${brand()}
      <button class="mobile-nav-toggle" aria-label="Toggle navigation" data-action="mobile-nav">☰</button>
      <nav class="nav-links" aria-label="Main navigation">${links.map(([name, href, key]) =>
        `<a class="${active === key ? "active" : ""}" href="${href}">${name}</a>`).join("")}</nav>
      <div class="nav-actions"><a class="btn btn-dark" href="login.html">Portal Login</a></div>
    </div></header>
    <div class="notice-strip">IMPORTANT NOTICE: Mid-term examinations begin October 14, 2026. Please check schedules.</div>`;
}

function publicFooter() {
  return `<footer class="site-footer"><div class="site-footer-inner">
    <div>${brand()}<p>Nurturing global citizens equipped with academic mastery and outstanding character. Grounded in research and actualized in rigorous practice.</p>
      <p><strong>${escapeHtml(SCHOOL.motto)}</strong></p></div>
    <div><h3>Academics</h3><a href="academics.html">Creche & Nursery</a><a href="academics.html">Kindergarten</a><a href="academics.html">Primary School</a><a href="academics.html">Junior High School</a></div>
    <div><h3>Quick Links</h3><a href="about.html">About Us</a><a href="admissions.html">Admissions</a><a href="events.html">School Calendar</a><a href="news.html">School News & Blog</a><a href="gallery.html">Photo Gallery</a></div>
    <div><h3>Contact & Location</h3><p>⌖ ${escapeHtml(SCHOOL.address)}</p><p>☎ ${escapeHtml(SCHOOL.phone)}<br>☎ ${escapeHtml(SCHOOL.admissionsPhone)}</p><p>✉ ${escapeHtml(SCHOOL.email)}</p></div>
  </div><div class="footer-bottom"><span>© 2026 Unichild International School. All rights reserved.</span><span>Accra, Ghana</span></div></footer>
  <a class="whatsapp-float" href="https://wa.me/233244891066" target="_blank" rel="noreferrer">◉ &nbsp; Admissions WhatsApp</a>`;
}

function pageHero(eyebrow, title, description) {
  return `<section class="page-hero"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></section>`;
}

function sectionHeading(eyebrow, title, description = "") {
  return `<div class="section-heading"><span class="eyebrow">${eyebrow}</span><h2 class="section-title">${title}</h2>
    ${description ? `<p class="section-subtitle">${description}</p>` : ""}<div class="gold-rule"></div></div>`;
}

function publicLayout(page, body) {
  return `<div class="${page === "home" ? "home-page" : "public-page"}">${publicHeader(page)}<main>${body}</main>${publicFooter()}</div>`;
}

function valuesGrid() {
  const values = [
    ["E", "Excellence", "We pursue the highest personal and institutional standards in our studies and service."],
    ["I", "Integrity", "Fostering absolute honesty, reliability, and moral uprightness in every word and deed."],
    ["D", "Discipline", "Rigorous attention to self-control, time management, and systematic execution of established procedures."],
    ["C", "Community", "Encouraging helpful interaction, environmental stewardship, and positive action."],
  ];
  return `<div class="grid-4">${values.map(([icon, title, text]) => `<article class="value-card">
    <span class="value-icon">${icon}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
}

function stageCards() {
  const stages = [
    ["Creche", "0–3 years", "A nurturing beginning built on care, play and early communication."],
    ["Nursery", "3–4 years", "Curiosity, language, number skills and confidence through guided play."],
    ["Kindergarten", "4–5 years", "A bridge to formal learning with a strong foundation for discovery."],
    ["Primary School", "6–11 years", "Strong literacy, numeracy and creative thinking for every learner."],
    ["JHS", "12–15 years", "Preparation for BECE with practical learning and responsible leadership."],
  ];
  return `<div class="grid-5">${stages.map(([name, age, text], i) => `<article class="stage-card">
    <div class="stage-visual" style="background-image:linear-gradient(130deg,${["#9d7c36","#687b50","#a95139","#6f8047","#9d603f"][i]},#312b24)"></div>
    <div class="stage-card-body"><span class="stage-chip">${age}</span><h3>${name}</h3><p>${text}</p></div></article>`).join("")}</div>`;
}

function eventCard(event) {
  const date = new Date(`${event.date}T12:00:00`);
  const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = date.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
  return `<article class="calendar-event"><span class="calendar-date"><b>${day}</b>${month}</span>
    <div><h4>${escapeHtml(event.title)}</h4><p>${escapeHtml(event.time)} · ${escapeHtml(event.location)}</p></div></article>`;
}

function newsCard(item) {
  return `<article class="content-card"><div class="photo-placeholder" aria-label="School photo placeholder"></div>
    <div class="content-card-body"><span class="stage-chip">${escapeHtml(item.category)}</span>
      <h3>${escapeHtml(item.title)}</h3><p>${dateText(item.date)}</p>
      <p style="margin-top:8px">${escapeHtml(item.body)}</p>
      <a href="news.html" class="btn btn-small btn-outline" style="margin-top:12px">Read story →</a></div></article>`;
}

function homePage() {
  const published = state.news.filter(item => item.status === "Published").slice(0, 3);
  return publicLayout("home", `<section class="hero-home"><div class="hero-slides" aria-label="School highlights" aria-roledescription="carousel">
    <div class="hero-slide is-active" style="--slide-image:url('../images/hero.jpg');--slide-tint:#50432f" aria-hidden="false"></div>
    <div class="hero-slide" style="--slide-image:url('../images/about.jpg');--slide-tint:#374838" aria-hidden="true"></div>
    <div class="hero-slide" style="--slide-image:url('../images/admissions.jpg');--slide-tint:#56413c" aria-hidden="true"></div>
    <div class="hero-slide-shade"></div>
  </div><div class="hero-home-inner">
    <div class="hero-copy"><span class="eyebrow">Words and Actions · Adenta, Ghana</span>
      <h1>Nurturing Young Minds Through Words & Actions</h1>
      <p>Unichild International School is committed to delivering a transformative education that empowers every learner to think independently, act with integrity, and shape a brighter future.</p>
      <div class="hero-buttons"><a class="btn" href="admissions.html">Apply Now</a><a class="btn btn-outline" href="about.html">Explore Academics</a></div>
    </div><div class="hero-feature"><div class="hero-feature-card"><b>A place to learn, grow and belong.</b><p>Creche · Nursery · Kindergarten · Primary · Junior High School</p></div></div>
  </div><div class="hero-controls" aria-label="Slideshow controls">
    <button class="hero-arrow" type="button" data-action="hero-previous" aria-label="Previous slide">‹</button>
    <div class="hero-dots">${[0, 1, 2].map(index => `<button type="button" class="hero-dot${index === 0 ? " active" : ""}" data-action="hero-slide" data-index="${index}" aria-label="Show slide ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}</div>
    <button class="hero-arrow" type="button" data-action="hero-next" aria-label="Next slide">›</button>
  </div></section>
  <section class="section"><div class="container" style="text-align:center">${sectionHeading("Our school", "A foundation for confident, capable learners", "Our core purpose is to bridge theoretical intelligence with courageous deeds, producing noble minds ready to shape Ghana and the world.")}
    <p class="section-subtitle">Established in 2012, Unichild International School combines strong academic foundations with character development, practical experiences and respect for our shared heritage.</p>
  </div></section>
  <div class="stat-band"><div class="stat-band-inner"><div><strong>12+</strong><span>Years of excellence</span></div><div><strong>850+</strong><span>Students supported</span></div><div><strong>45+</strong><span>Qualified educators</span></div><div><strong>100%</strong><span>Focus on every child</span></div></div></div>
  <section class="section section-soft"><div class="container">${sectionHeading("Relationship first", "Our Core Values")}${valuesGrid()}</div></section>
  <section class="section"><div class="container">${sectionHeading("Find your path", "Our Educational Stages")}${stageCards()}</div></section>
  <section class="section section-soft"><div class="container"><div class="page-toolbar"><div><span class="eyebrow">Mark your calendar</span><h2 class="section-title">Upcoming School Events</h2></div><a class="btn btn-small" href="events.html">View full calendar</a></div>
    <div class="grid-3">${state.events.slice(0, 3).map(item => `<div class="panel">${eventCard(item)}</div>`).join("")}</div></div></section>
  <section class="section"><div class="container">${sectionHeading("Latest updates", "News & Academic Blogs")}<div class="grid-3">${published.map(newsCard).join("")}</div></div></section>
  <section class="cta-band"><div class="container"><h2>Give Your Child the Foundation of Reason and Practice</h2><p>Creche through Junior High School admissions are open for the 2026/2027 academic year. Contact our registrar to take the next step.</p><a class="btn btn-dark" href="admissions.html">Apply Now</a> <a class="btn btn-outline" href="admissions.html">Admission Requirements</a></div></section>
  <section class="section section-soft"><div class="container">${sectionHeading("Families say", "What Parents Say About Us")}<div class="grid-2">
    <article class="quote-card"><span class="eyebrow">★★★★★</span><blockquote>“My child has become more confident and curious. The teachers care about both academic excellence and the character that shapes our young learners.”</blockquote><strong>Mrs. Ama Boateng</strong></article>
    <article class="quote-card"><span class="eyebrow">★★★★★</span><blockquote>“The balance of academic work and practical learning has really helped my child grow. We are grateful for the supportive environment.”</blockquote><strong>Mr. Samuel Mensah</strong></article>
  </div></div></section>
  <section class="section section-dark"><div class="container">${sectionHeading("Our community", "Campus Life in Pictures")}<div class="grid-5">${stageCards()}</div><div style="text-align:center;margin-top:22px"><a class="btn" href="gallery.html">Explore our gallery →</a></div></div></section>`);
}

function aboutPage() {
  return publicLayout("about", `${pageHero("Who we are", "About Unichild International School", "Blending modern scholastic strategies with rigorous values of integrity and courage.")}
    <section class="section"><div class="container grid-2" style="align-items:center"><div><span class="eyebrow">Our journey</span><h2 class="section-title">Founded with a Vision</h2>
      <p>Unichild International School was established to offer children in Accra, Ghana, a modern global baseline in foundational K–12 education. Over the years, we have nurtured thousands of students by integrating the rigorous curricula of the Ghana Education Service with dynamic research, practical experiences and global standards.</p>
      <p>Today, our school is synonymous with outstanding results, highly disciplined student bodies, and an environment that celebrates African identity and heritage.</p></div>
      <div class="photo-placeholder" style="min-height:280px"></div></div></section>
    <section class="section section-soft"><div class="container grid-3">
      <article class="value-card"><span class="value-icon">M</span><h3>Our Mission</h3><p>To nurture well-rounded, highly confident individuals through a balanced, comprehensive curriculum that places equal emphasis on theoretical words and courageous practical action.</p></article>
      <article class="value-card"><span class="value-icon">V</span><h3>Our Vision</h3><p>To become a benchmark K–12 academic institution in Ghana, celebrated for stellar character training, intellectual prowess and cultural integration.</p></article>
      <article class="value-card" style="background:#222;color:white"><span class="value-icon">W</span><h3>Our Motto</h3><p style="color:#ddd"><strong>${escapeHtml(SCHOOL.motto)}</strong><br>Words translating into active, transformational deeds.</p></article>
    </div></section>
    <section class="section"><div class="container">${sectionHeading("The code of conduct", "Our Core Values Detailed")}${valuesGrid()}</div></section>
    <section class="section section-soft"><div class="container">${sectionHeading("Faculty leaders", "Our Leadership Team")}<div class="grid-4">
      ${[["Mrs. Evelyn Mensah", "Principal / Founder"], ["Mr. Ebenezer Osei", "Vice Principal"], ["Mrs. Cynthia Kwareng", "Head of Academics"], ["Mr. David Alabi", "Head of Administration"]].map(([name, role]) => `<article class="content-card"><div class="photo-placeholder"></div><div class="content-card-body"><h3>${name}</h3><p>${role}</p></div></article>`).join("")}</div></div></section>
    <section class="cta-band"><div class="container"><h2>Give Your Child the Foundation of Reason and Practice</h2><p>Join our school community and discover a place where every learner can thrive.</p><a class="btn btn-dark" href="admissions.html">Apply Now</a> <button class="btn btn-outline" data-action="print-page">Print About Us</button></div></section>`);
}

function academicsPage() {
  return publicLayout("academics", `${pageHero("Scholastic pathways", "Our Academic Programs", "Providing children with excellent foundation skills tailored to our motto: Words and Actions.")}
    <section class="section"><div class="container" style="text-align:center">${sectionHeading("The strategy", "Comprehensive Ghana Education Service Standards Enhanced with International Best Practices", "Our curriculum is engineered around developmental steps, ensuring each stage—from Creche to Junior High School—translates to measurable growth in confidence, curiosity and knowledge.")}</div></section>
    <section class="section section-soft"><div class="container">${stageCards()}</div></section>
    <section class="section"><div class="container">${sectionHeading("The curriculum in focus", "Subjects We Offer")}
      <div class="grid-4">${SUBJECTS.map(subject => `<div class="panel"><span class="eyebrow">●</span> &nbsp;${subject}</div>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container">${sectionHeading("Important milestones", "Term Dates & Calendar Highlights")}
      <div class="panel">${state.events.map(event => `<div class="calendar-event"><span class="calendar-date">${dateText(event.date)}</span><div><h4>${escapeHtml(event.title)}</h4><p>${escapeHtml(event.location)}</p></div></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHeading("Beyond the classroom", "Extra-curricular Activities")}
      <div class="grid-5">${["Debate & Public Speaking", "Science & STEM Club", "Cultural Dance & Arts", "Unichild Sports Club", "Music & Orchestra"].map((item, i) => `<article class="value-card"><span class="value-icon">${i + 1}</span><h3>${item}</h3><p>Explore interests, build confidence and learn the value of collaboration.</p></article>`).join("")}</div></div></section>`);
}

function admissionsPage() {
  const steps = ["Submit Online Inquiry", "Complete Application Form", "Submit Required Documents", "Interview & Assessment", "Admission Decision"];
  return publicLayout("admissions", `${pageHero("Join the Unichild family", "Admissions — K–12 Pathways", "We welcome outstanding students from Creche through JHS. Our admissions process is designed to be straightforward, transparent and supportive.")}
    <section class="section section-soft"><div class="container grid-2" style="align-items:center"><div><span class="eyebrow">Welcome, Accra</span><h2 class="section-title">Start Your Child's Journey of Excellence</h2><p>At Unichild International School, we offer children a perfect synthesis of theoretical focus (Words) and physical outcomes (Actions). We build self-reliance, outstanding civic values and competitive BECE mastery starting from the early learning stages.</p></div>
      <aside class="panel" style="background:#222;color:#fff"><span class="eyebrow">Registrar notice</span><h3>Student registration is handled by the school</h3><p style="color:#ddd">The administrator manages registration, admission and student account creation. Please contact the admissions office to begin. Students do not admit themselves.</p></aside></div></section>
    <section class="section"><div class="container">${sectionHeading("Registration", "Our Application Process")}
      <div class="grid-5">${steps.map((step, i) => `<article class="value-card"><span class="eyebrow">Step ${i + 1}</span><h3>${step}</h3><p>${["Share basic information so our registrar can schedule a consultation.", "Complete the form with help from the administrative registrar.", "Provide copies of required academic and health documents.", "A baseline review helps place your child in the right grade level.", "The school confirms placement and next steps with your family."][i]}</p></article>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container grid-2"><div><span class="eyebrow">Checklist</span><h2 class="section-title">Admission Requirements</h2><ul><li>Original and photocopy of Birth Certificate</li><li>Last three previous academic term school reports, where applicable</li><li>Four recent passport-sized photographs</li><li>Photocopy of Parent or Guardian valid National ID card</li><li>Immunization and general child health records</li></ul>
      <div class="notice"><strong>Downloadable forms</strong>Application and medical forms will be provided by the school registrar.</div><button class="btn btn-outline" style="margin-top:12px" data-action="print-page">Print / Save Admission Information</button></div>
      <div><span class="eyebrow">Financial structure</span><h2 class="section-title">Admission Fees & Tuition</h2><div class="table-wrap"><table class="data-table"><thead><tr><th>Class level</th><th>Admission fee</th><th>Tuition / term</th><th>Feeding / term</th></tr></thead><tbody>${[["Creche","1,200","2,500","800"],["Nursery","1,200","2,500","800"],["Kindergarten","1,200","2,700","800"],["Primary School","1,500","3,200","1,000"],["Junior High School","1,500","3,800","1,000"]].map(row => `<tr>${row.map((cell, i) => `<td>${i ? `GHS ${cell}` : cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>
    </div></section><section class="cta-band"><div class="container"><h2>Enrollment is active for the 2026/2027 Academic Year</h2><p>Questions? Contact our Admissions Office to schedule an on-campus tour or request a prospectus.</p><a class="btn btn-dark" href="tel:${SCHOOL.admissionsPhone.replace(/[^\d+]/g, "")}">Call Registrar: ${escapeHtml(SCHOOL.admissionsPhone)}</a> <a class="btn btn-outline" href="contacts.html">Email Office</a></div></section>`);
}

function contactPage() {
  return publicLayout("contact", `${pageHero("Get in touch", "Contact Unichild International", "Have questions about our curriculum, admissions or school policies? Reach out to our Accra campus.")}
    <section class="section section-soft"><div class="container grid-2">
      <form class="panel form-stack" data-form="enquiry"><h2 class="section-title">Send Us a Message</h2>
        <div class="field"><label for="contact-name">Full Name</label><input id="contact-name" name="name" required placeholder="Enter your full name"></div>
        <div class="field"><label for="contact-email">Email Address</label><input id="contact-email" name="email" type="email" required placeholder="Enter your email address"></div>
        <div class="field"><label for="contact-phone">Phone Number</label><input id="contact-phone" name="phone" placeholder="+233 ..."></div>
        <div class="field"><label for="contact-subject">Subject Inquiry</label><select id="contact-subject" name="subject"><option>Admissions & Placement</option><option>Academics</option><option>Fees</option><option>General enquiry</option></select></div>
        <div class="field"><label for="contact-message">Your Message</label><textarea id="contact-message" name="message" rows="4" required placeholder="How can we support you?"></textarea></div>
        <button class="btn" type="submit">Submit Inquiry</button></form>
      <div><h2 class="section-title">Accra Campus Office</h2><div class="mini-list">
        <div class="mini-list-item"><span class="mini-icon">⌖</span><div><strong>Physical address</strong><small>${escapeHtml(SCHOOL.address)}</small></div></div>
        <div class="mini-list-item"><span class="mini-icon">☎</span><div><strong>Phone channels</strong><small>${escapeHtml(SCHOOL.phone)}<br>${escapeHtml(SCHOOL.admissionsPhone)} (Admissions Hotline)</small></div></div>
        <div class="mini-list-item"><span class="mini-icon">✉</span><div><strong>Email enquiries</strong><small>${escapeHtml(SCHOOL.email)}</small></div></div>
        <div class="mini-list-item"><span class="mini-icon">◷</span><div><strong>Office hours</strong><small>${escapeHtml(SCHOOL.hours)}</small></div></div></div>
        <div class="photo-placeholder" style="min-height:185px;margin-top:17px;border:3px solid var(--gold)"></div></div>
    </div></section><section class="section"><div class="container">${sectionHeading("Frequently asked questions", "Common Admissions Questions")}
      ${[["What age groups do you accept?", "We accept children from 6 months in our Creche, up to 15 years for Junior High School (JHS 3)."], ["How do I apply for admission?", "Admissions must go through the administrative office. Submit an inquiry form, schedule an interview, and the registrar provides final approval."], ["What is the fee structure?", "Fees are billed per term. Contact the office for current tuition, feeding and transport information."], ["Do you offer transportation?", "Please contact the admissions office for current transport routes and availability."], ["What curriculum do you follow?", "We implement the Ghana Education Service K–12 blueprint enriched with global scientific enquiry, language clubs and ICT training."]].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></section>`);
}

function newsPage() {
  const articles = state.news.filter(item => item.status === "Published");
  return publicLayout("news", `${pageHero("Latest updates", "Unichild News & Blog", "Celebrate outstanding student achievements, read general notices and browse memories from our campus.")}
    <section class="section section-soft"><div class="container grid-2" style="align-items:center"><div class="photo-placeholder" style="min-height:280px"></div><div><span class="stage-chip">Featured story</span><h2 class="section-title">${escapeHtml(articles[0]?.title || "News from Unichild")}</h2><p>${dateText(articles[0]?.date)}</p><p>${escapeHtml(articles[0]?.body || "Check back soon for the latest school updates.")}</p><a class="btn" href="#recent-stories">Read Full Article</a></div></div></section>
    <section id="recent-stories" class="section"><div class="container"><div class="page-toolbar"><h2 class="section-title">Recent Stories</h2><a href="events.html" class="btn btn-outline">Events Calendar</a></div><div class="grid-3">${articles.map(newsCard).join("")}</div></div></section>`);
}

function eventsPage() {
  return publicLayout("events", `${pageHero("School calendar", "Events & Important Dates", "Academic dates, school events, meetings and celebrations for our community.")}
    <section class="section"><div class="container grid-2"><div class="panel">${sectionHeading("Upcoming", "School Events")}
      ${state.events.map(eventCard).join("")}</div><aside class="panel"><span class="eyebrow">Academic year</span><h2 class="section-title">2026 / 2027</h2><p>Stay connected with the school calendar. Dates are updated by the administration team.</p>
      <div class="notice"><strong>Calendar note</strong>Families should confirm examination and holiday schedules with their class teacher.</div></aside></div></section>`);
}

function galleryPage() {
  const categories = ["All", "School Buildings", "Events", "Sports Day", "Cultural Day", "Graduation", "Classroom"];
  return publicLayout("gallery", `${pageHero("Gallery", "Life at Unichild", "Explore beautiful memories, milestones, academic installations and creative student activities at our campus.")}
    <section class="section section-soft"><div class="container"><div class="chips" role="group" aria-label="Filter gallery">
      ${categories.map((category, i) => `<button class="btn btn-small ${i === 0 ? "" : "btn-outline"}" data-action="gallery-filter" data-category="${category}">${category}</button>`).join("")}</div>
      <div class="grid-3" id="gallery-grid">${state.gallery.map((item, i) =>
        `<article class="content-card" data-category-item="${escapeHtml(item.category)}"><div class="photo-placeholder" style="min-height:${i % 3 === 1 ? 180 : 145}px"></div><div class="content-card-body"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3></div></article>`
      ).join("")}</div><div class="notice" style="margin-top:18px"><strong>Photo library preview</strong>Replace these photo placeholders with the school's approved images when they are available.</div>
    </div></section><section class="section"><div class="container"><h2 class="section-title">School Life Videos</h2><div class="grid-2" style="margin-top:18px">${["Unichild Virtual Campus Tour","Annual Cultural Day Highlights","Junior High Science Exhibition","Class 6 English Debate Finals"].map(title => `<article class="panel"><div class="photo-placeholder" style="min-height:170px;display:grid;place-items:center;color:#fff;font-size:28px">▶</div><strong>${title}</strong></article>`).join("")}</div></div></section>`);
}

function departmentPage() {
  const departments = [
    ["Early Years", "Creche, Nursery & Kindergarten", "A caring, safe environment for the first steps in learning and social development."],
    ["Primary School", "Primary 1–6", "Strong foundations in literacy, numeracy, curiosity and confidence."],
    ["Junior High School", "JHS 1–3", "Academic preparation, practical skills and leadership for the next stage."],
    ["Creative Arts", "Arts, Culture & Music", "Celebrating Ghanaian heritage through creative practice and performance."],
    ["Cadet Corps", "Cadet Corps & Leadership", "Building discipline, teamwork, leadership and community service through cadet activities."],
    ["Sports & Wellbeing", "Physical Education & Teams", "Building teamwork, resilience and healthy habits through sport."],
  ];
  return publicLayout("department", `${pageHero("Our learning community", "Departments & Programs", "Discover the teams and learning communities that help every Unichild learner thrive.")}
    <section class="section"><div class="container grid-3">${departments.map(([name, title, desc], i) => `<article class="value-card${name === "Cadet Corps" ? " school-color-card" : ""}"><span class="value-icon">${i + 1}</span><span class="eyebrow">${name}</span><h3>${title}</h3><p>${desc}</p></article>`).join("")}</div></section>
    <section class="cta-band"><div class="container"><h2>Find the right pathway for your child</h2><a class="btn btn-dark" href="admissions.html">Explore Admissions</a></div></section>`);
}

function gamesPage() {
  const descriptions = {
    Athletics: "Students represented Unichild with sportsmanship, teamwork and dedication.",
    Debate: "Our learners put forward thoughtful arguments and confident public speaking.",
    STEM: "Young scientists shared creative experiments and practical ideas.",
    Culture: "Celebrating Ghanaian heritage through dance, music, food and storytelling.",
  };
  return publicLayout("games", `${pageHero("Games & competitions", "Building Skills Through Play", "Follow school games, inter-school competitions, achievements, events and the moments that bring our community together.")}
    <section class="section section-soft"><div class="container">${sectionHeading("School spirit", "Competitions & Achievements")}<div class="grid-2">${state.competitions.filter(item => item.status === "Published").map((item, i) => `<article class="content-card"><div class="photo-placeholder" style="min-height:190px;background-image:linear-gradient(130deg,${["#687b50","#9d603f","#596c78","#9d7c36"][i % 4]},#302c25)"></div><div class="content-card-body"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(descriptions[item.category] || item.achievement)}</p></div></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHeading("Upcoming", "Games & School Events")}<div class="grid-2">${state.events.filter(event => /sport|cultur|game/i.test(event.title + event.category)).map(event => `<div class="panel">${eventCard(event)}</div>`).join("") || `<p class="empty-state">New competition dates will be posted here by the school.</p>`}</div></div></section>`);
}

function formatGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "E";
}

function resultTotal(record) {
  return Math.round(Number(record.classScore || 0) + Number(record.examScore || 0));
}

function dataTable(headers, rows, emptyText = "No records to display yet.") {
  return `<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>${rows.length ? rows.join("") : `<tr><td colspan="${headers.length}"><div class="empty-state">${emptyText}</div></td></tr>`}</tbody></table></div>`;
}

function badge(status) {
  const key = String(status || "").toLowerCase();
  const className = key.includes("not owing") || key.includes("admitted") || key.includes("published") || key.includes("paid") ? "badge"
    : key.includes("owing") || key.includes("pending") || key.includes("draft") ? "badge badge-warn"
    : key.includes("rejected") ? "badge badge-danger"
      : "badge badge-neutral";
  return `<span class="${className}">${escapeHtml(status || "—")}</span>`;
}

function portalMenu(role) {
  if (role === "student") return [
    ["dashboard", "▦", "Dashboard"], ["results", "▤", "My Results"], ["fees", "▣", "Fee Status"], ["announcements", "◉", "Announcements"], ["profile", "◌", "Profile"],
  ];
  if (role === "teacher") return [
    ["dashboard", "▦", "Dashboard"], ["classes", "▤", "My Classes"], ["results", "↑", "Upload Results"], ["students", "♧", "Student List"], ["announcements", "◉", "Announcements"], ["profile", "◌", "Profile"],
  ];
  return [
    ["dashboard", "▦", "Dashboard"], ["students", "♧", "Students"], ["teachers", "♙", "Teachers"], ["admissions", "＋", "Admissions"], ["results", "▤", "Results"], ["fees", "▣", "Fee Management"], ["news", "◉", "News & Announcements"], ["events", "▦", "Events & Calendar"], ["gallery", "▧", "Gallery"], ["games", "♜", "Games & Competitions"], ["settings", "⚙", "Website Settings"],
  ];
}

function demoUser(role) {
  if (role === "student") return { role, name: "Kwame Asante", detail: "Student · JHS 1", studentId: 1 };
  if (role === "teacher") return { role, name: "Mrs. Monica Arkoh", detail: "Class Teacher · Primary 6", teacherId: 1 };
  return { role: "admin", name: "Registrar Joseph Blankson", detail: "School Administrator" };
}

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    return value && ["student", "teacher", "admin"].includes(value.role) ? value : null;
  } catch (error) {
    console.error("Unable to read the demo login session:", error);
    toast("Your saved demo login could not be read. Please sign in again.", true);
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function portalShell(user, tab, content) {
  const items = portalMenu(user.role);
  const portalName = user.role === "admin" ? "Operations Portal" : `${user.role[0].toUpperCase()}${user.role.slice(1)} Portal`;
  return `<div class="app-layout"><aside class="app-sidebar" id="app-sidebar">
    ${brand()}<div class="sidebar-caption">Workspace</div>
    ${items.map(([key, icon, label]) => `<a href="#${key}" class="sidebar-link ${tab === key ? "active" : ""}"><span class="nav-icon">${icon}</span>${label}</a>`).join("")}
    <div class="sidebar-spacer"></div><div class="sidebar-profile"><span class="avatar">${initials(user.name)}</span><div><strong>${escapeHtml(user.name)}</strong><small>${portalName}</small></div></div>
    <a href="#" class="sidebar-link" data-action="logout"><span class="nav-icon">↪</span>Log out</a>
  </aside><div class="app-main"><header class="app-topbar">
    <div class="topbar-main"><button class="menu-button" data-action="sidebar-toggle" aria-label="Open menu">☰</button>
      <div class="app-heading"><h1>${escapeHtml(tabLabel(user.role, tab))}</h1><p>Unichild International School ${portalName}</p></div></div>
    <div class="topbar-tools"><span class="date-label">${new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short", year: "numeric" })}</span>
      <button class="icon-button" aria-label="Notifications" data-action="show-notifications">♧<span class="notification-dot"></span></button>
      <span class="avatar">${initials(user.name)}</span></div>
  </header><main class="app-content">${content}</main><footer class="copyright">© 2026 Unichild International School Portal. Demo data is stored in this browser.</footer></div></div>`;
}

function tabLabel(role, tab) {
  const match = portalMenu(role).find(item => item[0] === tab);
  return match ? match[2] : "Dashboard";
}

function welcomeBlock(user, subtitle) {
  return `<div class="welcome-row"><div><h2>Welcome back, ${escapeHtml(user.name.split(" ")[0])}!</h2><p>${subtitle}</p></div><span class="role-pill">${user.role === "admin" ? "ADMINISTRATION PANEL" : user.detail}</span></div>`;
}

function statCard(label, value, note, icon = "•") {
  return `<article class="stat-card"><div class="panel-header"><span class="stat-label">${label}</span><span class="mini-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-note">${note}</div></article>`;
}

function actionLink(label, target, icon) {
  return `<a class="btn btn-outline" href="#${target}">${icon} &nbsp; ${label}</a>`;
}

function adminDashboard() {
  const admitted = state.students.filter(student => student.status === "Admitted").length;
  const pending = state.students.filter(student => student.status === "Pending").length;
  const collected = state.fees.reduce((sum, fee) => sum + fee.paid, 0);
  const expected = state.fees.reduce((sum, fee) => sum + fee.total, 0);
  const collectionRate = expected ? Math.round(collected / expected * 100) : 0;
  const recent = state.students.slice(-5).reverse();
  const programCounts = CLASS_NAMES.slice(0, 5).map(name => [name, state.students.filter(student => student.className === name).length]);
  return `${welcomeBlock(demoUser("admin"), "Here is an overview of school operations and recent activity.")}
    <section class="panel"><div class="panel-header"><div><h2>Quick Actions Operations</h2><p>Frequently used school administration tasks</p></div></div>
      <div class="action-row">${actionLink("Register Student", "students", "＋")}${actionLink("Manage Admissions", "admissions", "♧")}${actionLink("Record Fee Payment", "fees", "▣")}${actionLink("Upload Exam Results", "results", "↑")}</div></section>
    <div class="kpi-grid">${statCard("Total students", admitted, "Active student records", "♧")}${statCard("Total teachers", state.teachers.length, "Staff profiles", "♙")}${statCard("Pending admissions", pending, "Awaiting review", "◷")}${statCard("Fee collection rate", `${collectionRate}%`, `${money(collected)} collected`, "↗")}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Recent Admissions</h2><p>Latest student records</p></div><a href="#admissions">View admissions →</a></div>
      ${dataTable(["Student name", "Class applied", "Date", "Status"], recent.map(student => `<tr><td><strong>${escapeHtml(student.name)}</strong></td><td>${escapeHtml(student.className)}</td><td>${dateText("2026-02-24")}</td><td>${badge(student.status)}</td></tr>`))}</section>
      <aside class="panel"><div class="panel-header"><h2>Enrollment by Program</h2><a href="#students">Students →</a></div>
        ${programCounts.map(([name, count]) => `<div class="bar-row"><span>${name}</span><div class="progress"><span style="width:${Math.max(8, count / Math.max(1, state.students.length) * 100)}%"></span></div><strong>${count}</strong></div>`).join("")}
        <div class="panel-header" style="margin-top:22px"><h2>Upcoming Events</h2><a href="#events">Calendar →</a></div>${state.events.slice(0, 2).map(eventCard).join("")}</aside>
    </div>`;
}

function studentTableRows(students) {
  return students.map(student => `<tr data-search-row><td><strong>${escapeHtml(student.studentId)}</strong></td><td>${escapeHtml(student.name)}</td><td>${escapeHtml(student.className)}</td><td>${escapeHtml(student.parent)}</td>
    <td>${badge(student.feeStatus)}</td><td>${badge(student.status)}</td><td><div class="table-actions"><button class="btn btn-small btn-outline" data-action="view-student" data-id="${student.id}">View</button><button class="btn btn-small btn-outline" data-action="edit-student" data-id="${student.id}">Edit</button>
    ${student.status === "Pending" ? `<button class="btn btn-small" data-action="admit-student" data-id="${student.id}">Admit</button>` : ""}
    ${student.status === "Admitted" && !student.account ? `<button class="btn btn-small btn-outline" data-action="create-account" data-id="${student.id}">Create account</button>` : ""}</div></td></tr>`);
}

function studentsPage() {
  const rows = studentTableRows(state.students);
  return `<div class="page-toolbar"><div><h2>Student Management</h2><p>Manage and enroll Unichild students</p></div><button class="btn" data-action="jump-form">＋ Register New Student</button></div>
    <div class="toolbar"><input class="input" type="search" placeholder="⌕ Search ID or name…" data-search="student-table"><select class="input" data-filter-class><option value="">All classes</option>${CLASS_NAMES.map(name => `<option>${name}</option>`).join("")}</select>
      <select class="input" data-filter-status><option value="">All statuses</option><option>Admitted</option><option>Pending</option></select></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Student Directory</h2><p>${state.students.length} records in this demo directory</p></div></div>
      <div id="student-table">${dataTable(["Student ID", "Full name", "Class", "Parent / guardian", "Fee status", "Admission", "Actions"], rows)}</div></section>
      <section class="panel" id="register-panel"><div class="panel-header"><div><h2>Register New Student</h2><p>Enter pupil and guardian information</p></div></div>
      ${studentForm()}</section></div>`;
}

function studentForm() {
  return `<form class="form-stack" data-form="student">
    <div class="field"><label>Full name *</label><input name="name" required placeholder="e.g. Ama Mensah"></div>
    <div class="field-grid"><div class="field"><label>Date of birth *</label><input name="dateOfBirth" type="date" required></div>
      <div class="field"><label>Class applied for *</label><select name="className" required>${CLASS_NAMES.map(name => `<option>${name}</option>`).join("")}</select></div></div>
    <div class="field"><label>Gender</label><select name="gender"><option value="">Select gender</option><option>Female</option><option>Male</option></select></div>
    <div class="field"><label>Parent / guardian name *</label><input name="parent" required></div>
    <div class="field"><label>Guardian phone *</label><input name="phone" required placeholder="+233 ..."></div>
    <div class="notice"><strong>Administrator-managed admissions</strong>New registrations are pending until reviewed and admitted by an administrator.</div>
    <button class="btn" type="submit">Save Student</button></form>`;
}

function teachersPage() {
  return `<div class="page-toolbar"><div><h2>Teacher Management</h2><p>Manage staff profiles, subjects and assigned classes</p></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Staff Management Directory</h2><p>${state.teachers.length} teacher profiles</p></div></div>
      ${dataTable(["Name", "Email", "Assigned classes", "Subjects", "Actions"], state.teachers.map(teacher => `<tr><td><strong>${escapeHtml(teacher.name)}</strong></td><td>${escapeHtml(teacher.email)}</td><td>${teacher.classes.map(escapeHtml).join(", ")}</td><td>${teacher.subjects.map(escapeHtml).join(", ")}</td><td><button class="btn btn-small btn-danger" data-action="delete-teacher" data-id="${teacher.id}">Remove</button></td></tr>`))}</section>
      <section class="panel"><div class="panel-header"><h2>Add Teacher</h2></div>${teacherForm()}</section></div>`;
}

function teacherForm() {
  return `<form class="form-stack" data-form="teacher"><div class="field"><label>Full name *</label><input name="name" required></div>
    <div class="field"><label>Email *</label><input name="email" type="email" required></div>
    <div class="field"><label>Phone number</label><input name="phone"></div>
    <div class="field"><label>Subjects (comma separated) *</label><input name="subjects" required placeholder="Mathematics, Science"></div>
    <div class="field"><label>Assigned classes (comma separated) *</label><input name="classes" required placeholder="Primary 6, JHS 1"></div>
    <button class="btn" type="submit">Add Teacher</button></form>`;
}

function admissionsPageAdmin() {
  const pending = state.students.filter(student => student.status === "Pending");
  return `<div class="page-toolbar"><div><h2>Admissions Pipeline</h2><p>Review and admit students registered by the school</p></div>
      <span class="badge badge-warn">${pending.length} pending</span></div>
    <section class="panel"><div class="panel-header"><div><h2>Applications & Enrollment Status</h2><p>Only administrators can admit students or issue accounts</p></div></div>
    ${dataTable(["Applicant", "Class applied", "Parent / guardian", "Contact", "Status", "Next step"], state.students.map(student => `<tr><td><strong>${escapeHtml(student.name)}</strong><br><small>${escapeHtml(student.studentId)}</small></td><td>${escapeHtml(student.className)}</td><td>${escapeHtml(student.parent)}</td><td>${escapeHtml(student.phone)}</td><td>${badge(student.status)}</td><td>${student.status === "Pending" ? `<button class="btn btn-small" data-action="admit-student" data-id="${student.id}">Admit student</button>` : student.account ? badge("Account created") : `<button class="btn btn-small btn-outline" data-action="create-account" data-id="${student.id}">Create student account</button>`}</td></tr>`))}</section>
    <div class="notice" style="margin-top:14px"><strong>Admission rule</strong>Students do not independently admit themselves. The administrator reviews each record, confirms admission and creates the student account.</div>`;
}

function feesPage() {
  const total = state.fees.reduce((sum, fee) => sum + fee.total, 0);
  const paid = state.fees.reduce((sum, fee) => sum + fee.paid, 0);
  const owed = total - paid;
  return `<div class="page-toolbar"><div><h2>Fee Management</h2><p>Track tuition, payments and outstanding balances</p></div><button class="btn" data-action="record-payment">＋ Record Payment</button></div>
    <div class="kpi-grid">${statCard("Total fees expected", money(total), "Term 1 · Academic year 2025/2026")}${statCard("Total collected", money(paid), "Recorded sample payments")}${statCard("Outstanding balance", money(owed), "Action required for owing students")}${statCard("Collection rate", `${total ? Math.round(paid / total * 100) : 0}%`, "Based on sample records")}</div>
    <section class="panel"><div class="toolbar"><select class="input"><option>2025/2026 Academic Year</option></select><select class="input"><option>Term 1</option><option>Term 2</option><option>Term 3</option></select><input class="input" data-search="fee-table" type="search" placeholder="⌕ Search student…"></div>
      <div id="fee-table">${dataTable(["Student name", "Class", "Total fees (GHS)", "Paid (GHS)", "Balance (GHS)", "Status", "Actions"], state.fees.map(fee => {
        const student = state.students.find(item => item.id === fee.studentId);
        if (!student) return "";
        const balance = Math.max(0, fee.total - fee.paid);
        return `<tr data-search-row><td><strong>${escapeHtml(student.name)}</strong></td><td>${escapeHtml(student.className)}</td><td>${money(fee.total)}</td><td>${money(fee.paid)}</td><td>${money(balance)}</td><td>${badge(balance ? "Owing" : "Not Owing")}</td><td><button class="btn btn-small ${balance ? "" : "btn-outline"}" data-action="pay-fee" data-id="${student.id}">${balance ? "Collect" : "View"}</button></td></tr>`;
      }))}</div></section>`;
}

function newsAdminPage() {
  return `<div class="page-toolbar"><div><h2>News & Announcements</h2><p>Create, publish and manage public school updates</p></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Published & Draft Stories</h2><p>Only administrators can publish news and notices</p></div></div>
      ${dataTable(["Title", "Category", "Date", "Status", "Actions"], state.news.map(item => `<tr><td><strong>${escapeHtml(item.title)}</strong></td><td>${escapeHtml(item.category)}</td><td>${dateText(item.date)}</td><td>${badge(item.status)}</td>
        <td><div class="table-actions"><button class="btn btn-small btn-outline" data-action="edit-news" data-id="${item.id}">Edit</button><button class="btn btn-small btn-outline" data-action="toggle-news" data-id="${item.id}">${item.status === "Published" ? "Unpublish" : "Publish"}</button><button class="btn btn-small btn-danger" data-action="delete-news" data-id="${item.id}">Delete</button></div></td></tr>`))}</section>
      <section class="panel"><div class="panel-header"><h2>Create Announcement</h2></div>
        <form class="form-stack" data-form="news"><div class="field"><label>Title *</label><input name="title" required maxlength="180"></div>
          <div class="field"><label>Category</label><select name="category"><option>Announcements</option><option>Admissions</option><option>Academics</option><option>Achievements</option><option>Campus life</option></select></div>
          <div class="field"><label>Publication date</label><input name="date" type="date" value="2026-10-19"></div>
          <div class="field"><label>Story / announcement *</label><textarea name="body" rows="5" required></textarea></div>
          <div class="field"><label>Status</label><select name="status"><option>Draft</option><option>Published</option></select></div><button class="btn">Save Post</button></form>
      </section></div>`;
}

function eventsAdminPage() {
  return `<div class="page-toolbar"><div><h2>Events & Calendar</h2><p>Manage school events, examinations, holidays and admission dates</p></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><h2>School Calendar</h2></div>
      ${dataTable(["Event", "Category", "Date", "Time", "Location", "Actions"], state.events.map(event => `<tr><td><strong>${escapeHtml(event.title)}</strong></td><td>${escapeHtml(event.category)}</td><td>${dateText(event.date)}</td><td>${escapeHtml(event.time)}</td><td>${escapeHtml(event.location)}</td><td><button class="btn btn-small btn-danger" data-action="delete-event" data-id="${event.id}">Remove</button></td></tr>`))}</section>
      <section class="panel"><div class="panel-header"><h2>Add Calendar Event</h2></div><form class="form-stack" data-form="event">
        <div class="field"><label>Event name *</label><input name="title" required></div>
        <div class="field-grid"><div class="field"><label>Date *</label><input name="date" type="date" required></div><div class="field"><label>Time</label><input name="time" value="9:00 AM"></div></div>
        <div class="field"><label>Category</label><select name="category"><option>School event</option><option>Meeting</option><option>Examinations</option><option>Admissions</option><option>Holiday</option><option>Sports</option></select></div>
        <div class="field"><label>Location</label><input name="location" value="School Grounds"></div><button class="btn">Add Event</button></form></section></div>`;
}

function resultsAdminPage() {
  const records = state.results;
  const publishedCount = records.filter(item => item.published).length;
  return `<div class="page-toolbar"><div><h2>Results Management</h2><p>Review, publish and manage academic grades</p></div><span class="badge">${publishedCount} published records</span></div>
    <div class="kpi-grid">${statCard("Class average", "78.4%", "Across sample results")}${statCard("Highest score", "Ama Mensah · 94%", "Term 1 sample")}${statCard("Above average", `${Math.max(0, records.length - 2)} records`, "Current sample class")}${statCard("Term", "Term 1", "Academic year 2025/2026")}</div>
    <section class="panel"><div class="panel-header"><div><h2>Grade Sheet</h2><p>Results entered by teachers are available for administrator review</p></div><button class="btn btn-outline btn-small" data-action="publish-results">Publish Results</button></div>
    ${dataTable(["Student", "Class", "Subject", "Class score (30%)", "Exam score (70%)", "Total", "Grade", "Status"], records.map(record => {
      const student = state.students.find(item => item.id === record.studentId);
      return `<tr><td>${escapeHtml(student?.name || "Student")}</td><td>${escapeHtml(record.className)}</td><td>${escapeHtml(record.subject)}</td><td>${record.classScore}</td><td>${record.examScore}</td><td><strong>${resultTotal(record)}</strong></td><td>${formatGrade(resultTotal(record))}</td><td>${badge(record.published ? "Published" : "Draft")}</td></tr>`;
    }))}</section>
    <div class="notice" style="margin-top:14px"><strong>Portal publishing</strong>Published results appear in the relevant student portal. Review all records before publishing.</div>`;
}

function galleryAdminPage() {
  return `<div class="page-toolbar"><div><h2>Gallery Management</h2><p>Manage school buildings, events and student activity photos</p></div><button class="btn" data-action="gallery-upload">＋ Add Gallery Item</button></div>
    <div class="notice"><strong>Photo placeholders</strong>The wireframes did not include original school image files. Replace these sample tiles with approved school photos when available.</div>
    <section class="section" style="padding:20px 0"><div class="grid-3">${state.gallery.map(item => `<article class="content-card"><div class="photo-placeholder" style="min-height:170px"></div><div class="content-card-body"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><button class="btn btn-small btn-outline" data-action="remove-gallery-item" data-id="${item.id}">Remove item</button></div></article>`).join("")}</div></section>`;
}

function gamesAdminPage() {
  return `<div class="page-toolbar"><div><h2>Games & Competitions</h2><p>Share competition events, results and school achievements</p></div></div>
    <section class="panel"><div class="panel-header"><div><h2>Competition Highlights</h2><p>Sample content based on the project requirements</p></div><button class="btn btn-small" data-action="add-competition">＋ Add competition</button></div>
    ${dataTable(["Competition", "Category", "Date", "Achievement", "Status"], state.competitions.map(item => `<tr><td>${escapeHtml(item.title)}</td><td>${escapeHtml(item.category)}</td><td>${dateText(item.date)}</td><td>${escapeHtml(item.achievement)}</td><td>${badge(item.status)}</td></tr>`))}</section>
    <div class="notice" style="margin-top:14px"><strong>Content awaiting school confirmation</strong>Competition results and achievements shown here are examples. Replace them with verified school information before publishing.</div>`;
}

function settingsAdminPage() {
  return `<div class="page-toolbar"><div><h2>Website Settings</h2><p>School details, public contact information and downloadable resources</p></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><h2>School Information</h2></div><form class="form-stack" data-form="settings">
      <div class="field"><label>School name</label><input name="name" value="${escapeHtml(SCHOOL.name)}" readonly></div>
      <div class="field"><label>School motto</label><input name="motto" value="${escapeHtml(SCHOOL.motto)}"></div>
      <div class="field"><label>Contact email</label><input name="email" type="email" value="${escapeHtml(SCHOOL.email)}"></div>
      <div class="field-grid"><div class="field"><label>Main phone</label><input name="phone" value="${escapeHtml(SCHOOL.phone)}"></div><div class="field"><label>Admissions phone</label><input name="admissionsPhone" value="${escapeHtml(SCHOOL.admissionsPhone)}"></div></div>
      <div class="field"><label>Office hours</label><input name="hours" value="${escapeHtml(SCHOOL.hours)}"></div><div class="field"><label>Address</label><input name="address" value="${escapeHtml(SCHOOL.address)}"></div>
      <button class="btn" type="submit">Save demo settings</button></form></section>
      <section class="panel"><div class="panel-header"><h2>Downloads & Resources</h2></div><div class="mini-list">
        ${["2026_Admissions_Form.pdf","School_Prospectus.pdf","Academic_Calendar_2026.pdf"].map(name => `<div class="mini-list-item"><span class="mini-icon">↓</span><div><strong>${name}</strong><small>Sample resource placeholder · PDF</small></div></div>`).join("")}</div>
        <div class="notice" style="margin-top:15px"><strong>API connection</strong>Demo data is local to this browser. Connect approved content, downloads and account data to the school API when it is ready.</div></section></div>`;
}

function adminPage(tab) {
  const renderers = {
    dashboard: adminDashboard, students: studentsPage, teachers: teachersPage,
    admissions: admissionsPageAdmin, results: resultsAdminPage, fees: feesPage,
    news: newsAdminPage, events: eventsAdminPage, gallery: galleryAdminPage,
    games: gamesAdminPage, settings: settingsAdminPage,
  };
  return renderers[tab] ? renderers[tab]() : adminDashboard();
}

function studentPortal(user, tab) {
  const student = state.students.find(item => item.id === user.studentId) || state.students[0];
  const results = state.results.filter(item => item.studentId === student.id && item.published);
  const fees = state.fees.find(item => item.studentId === student.id);
  const balance = fees ? Math.max(0, fees.total - fees.paid) : 0;
  const average = results.length ? Math.round(results.reduce((sum, item) => sum + resultTotal(item), 0) / results.length) : 0;
  const rows = results.map(item => `<tr><td>${escapeHtml(item.subject)}</td><td>${item.classScore}</td><td>${item.examScore}</td><td><strong>${resultTotal(item)}</strong></td><td>${formatGrade(resultTotal(item))}</td><td>${resultTotal(item) >= 80 ? "Excellent" : "Good progress"}</td></tr>`);
  if (tab === "results") return `${welcomeBlock(user, `${student.className} · Academic Year 2025/2026 · Term 1`)}<section class="panel"><div class="panel-header"><h2>My Academic Results — Term 1</h2><button class="btn btn-small" data-action="print-results">Print / Save as PDF</button></div>${dataTable(["Subject", "Class score (30%)", "Exam score (70%)", "Total", "Grade", "Remarks"], rows)}</section>`;
  if (tab === "fees") return `${welcomeBlock(user, "View your school fee status and account details.")}<div class="kpi-grid">${statCard("Fee status", balance ? "Owing" : "Not Owing", "Current term status", "▣")}${statCard("Total fees", money(fees?.total), "Term 1")}${statCard("Paid so far", money(fees?.paid), "Recorded payments")}${statCard("Balance", money(balance), "Contact the office for help")}</div><section class="panel"><div class="panel-header"><h2>Fee Statement</h2></div>${dataTable(["Term", "Total fees", "Paid", "Balance", "Status"], fees ? [`<tr><td>Term 1</td><td>${money(fees.total)}</td><td>${money(fees.paid)}</td><td>${money(balance)}</td><td>${badge(balance ? "Owing" : "Not Owing")}</td></tr>`] : [])}</section>`;
  if (tab === "announcements") return `${welcomeBlock(user, "School news and announcements for students.")}<div class="grid-2">${state.news.filter(item => item.status === "Published").map(item => `<article class="panel"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><small>${dateText(item.date)}</small><p>${escapeHtml(item.body)}</p></article>`).join("")}</div>`;
  if (tab === "profile") return `${welcomeBlock(user, "Your student account information.")}<section class="panel"><div class="profile-row"><span class="avatar">${initials(student.name)}</span><div><h3>${escapeHtml(student.name)}</h3><p>${escapeHtml(student.studentId)} · ${escapeHtml(student.className)}</p></div></div><hr><p><strong>Parent / guardian:</strong> ${escapeHtml(student.parent)}</p><p><strong>Fee status:</strong> ${badge(student.feeStatus)}</p></section>`;
  return `${welcomeBlock(user, `${student.className} · Student ID ${student.studentId} · Term 1`)}
    <div class="kpi-grid">${statCard("Current term", "Term 1", "Academic year 2025/2026", "▦")}${statCard("Class position", "3rd of 32", "Top 10%", "♙")}${statCard("Fee status", balance ? "Owing" : "Not Owing", balance ? `${money(balance)} balance` : "Fully paid", "▣")}${statCard("Attendance", "94%", "Good standing", "♧")}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><h2>My Academic Results — Term 1</h2><a href="#results">View all →</a></div>${dataTable(["Subject", "Class score", "Exam score", "Total", "Grade"], results.slice(0, 5).map(item => `<tr><td>${escapeHtml(item.subject)}</td><td>${item.classScore}</td><td>${item.examScore}</td><td><strong>${resultTotal(item)}</strong></td><td>${formatGrade(resultTotal(item))}</td></tr>`))}
      <div class="notice" style="margin-top:12px"><strong>Average score: ${average}%</strong>Keep building consistency across your subjects. Ask your class teacher if you have questions about your results.</div></section>
      <aside><section class="panel"><div class="panel-header"><h2>Fee Statement — Term 1</h2><a href="#fees">Details →</a></div><p>Tuition & feeding</p><p><strong>${money(fees?.total || 0)}</strong> total</p>${badge(balance ? "Owing" : "Not Owing")}<p class="muted">Balance: ${money(balance)}</p></section>
      <section class="panel"><div class="panel-header"><h2>Recent Announcements</h2><a href="#announcements">All →</a></div>${state.news.filter(item => item.status === "Published").slice(0, 3).map(item => `<div class="mini-list-item"><div><strong>${escapeHtml(item.title)}</strong><small>${dateText(item.date)}</small></div></div>`).join("")}</section>
      <section class="panel"><div class="panel-header"><h2>Upcoming Calendar Events</h2></div>${state.events.slice(0, 2).map(eventCard).join("")}</section></aside></div>`;
}

function teacherPortal(user, tab) {
  const teacher = state.teachers.find(item => item.id === user.teacherId) || state.teachers[0];
  const assignedClass = teacher.classes[0] || "Primary 6";
  const students = state.students.filter(item => item.className === assignedClass);
  if (tab === "students" || tab === "classes") return `${welcomeBlock(user, `${assignedClass} · ${students.length} learners assigned`)}<section class="panel"><div class="panel-header"><div><h2>${tab === "classes" ? "My Classes" : "Student Directory"}</h2><p>Students in your assigned classes</p></div></div>${dataTable(["Student ID", "Student name", "Class", "Admission status"], students.map(student => `<tr><td>${escapeHtml(student.studentId)}</td><td><strong>${escapeHtml(student.name)}</strong></td><td>${escapeHtml(student.className)}</td><td>${badge(student.status)}</td></tr>`))}</section>`;
  if (tab === "results") return `${welcomeBlock(user, "Enter class and examination scores for your learners.")}<section class="panel"><div class="panel-header"><div><h2>Student Grade Entry Sheet</h2><p>Enter scores; the administrator reviews and publishes results.</p></div></div>${teacherResultsForm(teacher, students)}</section>`;
  if (tab === "announcements") return `${welcomeBlock(user, "School updates for teaching staff.")}<div class="grid-2">${state.news.filter(item => item.status === "Published").map(item => `<article class="panel"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("")}</div>`;
  if (tab === "profile") return `${welcomeBlock(user, "Your staff account information.")}<section class="panel"><h2>${escapeHtml(teacher.name)}</h2><p>${escapeHtml(teacher.email)}</p><p>Assigned classes: ${teacher.classes.map(escapeHtml).join(", ")}</p><p>Subjects: ${teacher.subjects.map(escapeHtml).join(", ")}</p></section>`;
  return `${welcomeBlock(user, `${assignedClass} · Teacher workspace`)}
    <div class="kpi-grid">${statCard("My students", students.length, "In assigned class", "♧")}${statCard("Pending subjects", teacher.subjects.length, "Results entry available", "↑")}${statCard("Next event", "Oct 28", "Parent–Teacher Meeting", "▦")}${statCard("Announcements", state.news.filter(item => item.status === "Published").length, "School updates", "◉")}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Student Grade Entry Sheet</h2><p>Record or update class term grades</p></div><a href="#results">Open results →</a></div>${teacherResultsForm(teacher, students)}</section>
      <aside class="panel"><div class="panel-header"><h2>Class Assignments</h2></div>${teacher.classes.map(className => `<div class="notice" style="margin-bottom:9px"><strong>${className}</strong>${teacher.subjects.join(" · ")}<br><a href="#students">View student directory →</a></div>`).join("")}
      <div class="notice"><strong>Publication notice</strong>Submitted grades are saved as draft sample data. An administrator must review and publish results.</div></aside></div>`;
}

function teacherResultsForm(teacher, students) {
  return `<form data-form="results"><div class="field-grid" style="margin-bottom:13px"><div class="field"><label>Class</label><select name="className">${teacher.classes.map(name => `<option>${escapeHtml(name)}</option>`).join("")}</select></div>
    <div class="field"><label>Subject</label><select name="subject">${teacher.subjects.map(name => `<option>${escapeHtml(name)}</option>`).join("")}</select></div>
    <div class="field"><label>Term</label><select name="term">${TERMS.map(term => `<option>${term}</option>`).join("")}</select></div>
    <div class="field"><label>Academic year</label><input name="session" value="2025/2026" readonly></div></div>
    ${dataTable(["Student name", "Class score (30%)", "Exam score (70%)", "Total", "Grade"], students.filter(item => item.status === "Admitted").map(student => `<tr><td><strong>${escapeHtml(student.name)}</strong></td><td><input class="input" style="width:90px" name="class-${student.id}" type="number" min="0" max="30" aria-label="${escapeHtml(student.name)} class score"></td><td><input class="input" style="width:90px" name="exam-${student.id}" type="number" min="0" max="70" aria-label="${escapeHtml(student.name)} exam score"></td><td>—</td><td>—</td></tr>`))}
    <div class="notice" style="margin:13px 0"><strong>Results remain unpublished</strong>The school administrator reviews submitted scores before students can see them.</div><div style="text-align:right"><button class="btn">Save Draft Results</button></div></form>`;
}

function loginPage() {
  const roles = [["student", "Student"], ["teacher", "Teacher"], ["admin", "Administrator"]];
  return `<main class="login-screen"><section class="login-brand">${brand()}<div class="login-brand-copy"><h1>Lógia Kai<br>Práxeis.</h1><p>Words translating seamlessly into active, transformational deeds. Unlocking excellence in Adenta since 2012.</p><div class="action-row"><span class="role-pill">Accredited School</span><span class="role-pill">Est. 2012</span><span class="role-pill">Adenta, Ghana</span></div></div>
      <footer>© 2026 Unichild School Management Operations. All rights reserved.</footer></section>
      <section class="login-form-side"><div class="login-box"><div class="brand-crest">U</div><h2>Welcome Back</h2><p>Sign in to access your school portal workspace.</p>
        <div class="tabs" role="tablist">${roles.map(([role, label]) => `<button type="button" class="${loginRole === role ? "active" : ""}" data-action="select-role" data-role="${role}">${label}</button>`).join("")}</div>
        <form class="form-stack" data-form="login"><div class="field"><label for="login-username">${loginRole === "student" ? "Student ID / Username" : "Email / Username"}</label><input id="login-username" name="username" autocomplete="username" placeholder="${loginRole === "student" ? "e.g. UCS-0042" : "Enter your username"}" required></div>
          <div class="field"><label for="login-password">Password</label><input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter password" required></div>
          <button class="btn" type="submit" style="width:100%;padding:13px">Sign In to Portal</button></form>
        <p class="login-hint">Demo only: enter any non-empty username and password. No real account is created.</p><p class="login-hint">Need help? Contact <strong>${escapeHtml(SCHOOL.email)}</strong></p>
      </div></section></main>`;
}

function rolePortalPage(role, tab) {
  const user = getSession();
  if (!user || user.role !== role) {
    return `<main class="login-screen"><section class="login-brand">${brand()}<div class="login-brand-copy"><h1>${role === "admin" ? "Operations" : `${role[0].toUpperCase()}${role.slice(1)}`} Portal</h1><p>Sign in to open the Unichild International School workspace.</p></div><footer>© 2026 Unichild International School</footer></section>
      <section class="login-form-side"><div class="login-box"><div class="brand-crest">U</div><h2>Portal Sign In</h2><p>Choose the matching role to access this portal.</p><a class="btn" href="login.html?role=${role}">Continue to secure demo sign in</a></div></section></main>`;
  }
  const safeTab = portalMenu(role).some(item => item[0] === tab) ? tab : portalMenu(role)[0][0];
  const content = role === "admin" ? adminPage(safeTab) : role === "student" ? studentPortal(user, safeTab) : teacherPortal(user, safeTab);
  return portalShell(user, safeTab, content);
}

function render() {
  const root = document.getElementById("app");
  if (!root) throw new Error("App root #app was not found.");
  const page = document.body.dataset.page || "home";
  const titleMap = {
    home: "Home", about: "About Us", academics: "Academics", admissions: "Admissions",
    contact: "Contact Us", news: "News & Blog", events: "Events & Calendar",
    gallery: "Gallery", department: "Departments", games: "Games & Competitions",
  };
  if (page === "login") {
    document.title = `Portal Login | ${SCHOOL.name}`;
    root.innerHTML = loginPage();
  } else if (page === "admin-dashboard" || page === "student-portal" || page === "teacher-portal") {
    const role = page === "admin-dashboard" ? "admin" : page === "student-portal" ? "student" : "teacher";
    const tab = location.hash.replace(/^#/, "") || "dashboard";
    const user = getSession();
    document.title = `${user && user.role === role ? tabLabel(role, tab) : "Portal Sign In"} | ${SCHOOL.name}`;
    root.innerHTML = rolePortalPage(role, tab);
  } else {
    document.title = `${titleMap[page] || "Home"} | ${SCHOOL.name}`;
    const pages = {
      home: homePage, about: aboutPage, academics: academicsPage,
      admissions: admissionsPage, contact: contactPage, news: newsPage,
      events: eventsPage, gallery: galleryPage, department: departmentPage,
      games: gamesPage,
    };
    root.innerHTML = (pages[page] || homePage)();
  }
  initHeroSlideshow();
  updateHomeNavigation();
}

function showHeroSlide(index) {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (!slides.length) return;
  heroSlideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === heroSlideIndex;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  document.querySelectorAll(".hero-dot").forEach((dot, dotIndex) => {
    const active = dotIndex === heroSlideIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", String(active));
  });
}

function initHeroSlideshow() {
  clearInterval(heroTimer);
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;
  heroSlideIndex = 0;
  showHeroSlide(heroSlideIndex);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  heroTimer = window.setInterval(() => {
    if (!document.hidden) showHeroSlide(heroSlideIndex + 1);
  }, 6500);
}

function updateHomeNavigation() {
  document.querySelector(".home-page .home-nav")?.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHomeNavigation, { passive: true });

function nextId(items) {
  return items.reduce((highest, item) => Math.max(highest, Number(item.id) || 0), 0) + 1;
}

function studentById(id) {
  return state.students.find(student => student.id === Number(id));
}

function showModal(title, content) {
  document.querySelector(".modal-backdrop")?.remove();
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
    <header class="modal-head"><h2>${escapeHtml(title)}</h2><button class="close-button" type="button" data-action="close-modal" aria-label="Close">×</button></header>
    <div class="modal-body">${content}</div></section>`;
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  document.body.append(backdrop);
  backdrop.querySelector("input,button")?.focus();
}

function openAccountModal(student) {
  showModal("Create student account", `<form class="form-stack" data-form="account" data-student-id="${student.id}">
    <p>Create a login only after the student has been admitted.</p><div class="field"><label>Student</label><input value="${escapeHtml(student.name)} · ${escapeHtml(student.studentId)}" readonly></div>
    <div class="field"><label>Login email *</label><input name="email" type="email" required placeholder="student@unichild.edu.gh"></div>
    <div class="field"><label>Temporary password *</label><input name="password" type="password" required minlength="8"></div>
    <div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Create Account</button></div></form>`);
}

function openPaymentModal(student) {
  const fee = state.fees.find(item => item.studentId === student.id);
  const balance = fee ? Math.max(0, fee.total - fee.paid) : 0;
  showModal("Collect Fee Payment", `<form class="form-stack" data-form="payment" data-student-id="${student.id}">
    <div class="notice"><strong>${escapeHtml(student.name)} · ${escapeHtml(student.className)}</strong>Outstanding balance: ${money(balance)}</div>
    <div class="field"><label>Amount to pay (GHS) *</label><input name="amount" type="number" min="0.01" max="${balance}" step="0.01" required value="${balance}"></div>
    <div class="field-grid"><div class="field"><label>Payment method</label><select name="method"><option>Mobile Money</option><option>Cash</option><option>Bank Transfer</option></select></div><div class="field"><label>Payment date</label><input name="date" type="date" value="2026-10-19"></div></div>
    <div class="field"><label>Receipt / reference</label><input name="reference" placeholder="Optional transaction reference"></div>
    <div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Record Payment</button></div></form>`);
}

function openStudentEditModal(student) {
  showModal("Edit Student Record", `<form class="form-stack" data-form="edit-student" data-student-id="${student.id}">
    <div class="field"><label>Full name *</label><input name="name" required value="${escapeHtml(student.name)}"></div>
    <div class="field"><label>Class *</label><select name="className">${CLASS_NAMES.map(name => `<option ${name === student.className ? "selected" : ""}>${name}</option>`).join("")}</select></div>
    <div class="field"><label>Date of birth</label><input name="dateOfBirth" type="date" value="${escapeHtml(student.dateOfBirth || "")}"></div>
    <div class="field"><label>Gender</label><select name="gender"><option value="">Select gender</option><option ${student.gender === "Female" ? "selected" : ""}>Female</option><option ${student.gender === "Male" ? "selected" : ""}>Male</option></select></div>
    <div class="field"><label>Parent / guardian *</label><input name="parent" required value="${escapeHtml(student.parent)}"></div>
    <div class="field"><label>Guardian phone *</label><input name="phone" required value="${escapeHtml(student.phone)}"></div>
    <div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Save Changes</button></div>
  </form>`);
}

function openNewsEditModal(item) {
  showModal("Edit News Post", `<form class="form-stack" data-form="edit-news" data-news-id="${item.id}">
    <div class="field"><label>Title *</label><input name="title" required value="${escapeHtml(item.title)}"></div>
    <div class="field"><label>Category</label><input name="category" value="${escapeHtml(item.category)}"></div>
    <div class="field"><label>Story / announcement *</label><textarea name="body" rows="5" required>${escapeHtml(item.body)}</textarea></div>
    <div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Save Changes</button></div>
  </form>`);
}

function modalForm(form, event) {
  const data = Object.fromEntries(new FormData(form));
  if (form.dataset.form === "account") {
    const student = studentById(form.dataset.studentId);
    if (!student || student.status !== "Admitted") throw new Error("Admit the student before creating an account.");
    student.account = true;
    student.accountEmail = data.email;
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast(`Student account created for ${student.name}.`);
  } else if (form.dataset.form === "payment") {
    const student = studentById(form.dataset.studentId);
    const fee = state.fees.find(item => item.studentId === student?.id);
    if (!student || !fee) throw new Error("Fee record not found for this student.");
    const amount = Number(data.amount);
    const balance = Math.max(0, fee.total - fee.paid);
    if (!Number.isFinite(amount) || amount <= 0 || amount > balance) throw new Error("Enter a valid payment amount no greater than the balance.");
    fee.paid += amount;
    student.feeStatus = fee.paid >= fee.total ? "Not Owing" : "Owing";
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast(`Payment of ${money(amount)} recorded for ${student.name}.`);
  } else if (form.dataset.form === "edit-student") {
    const student = studentById(form.dataset.studentId);
    if (!student) throw new Error("Student record not found.");
    Object.assign(student, { name: data.name, className: data.className, dateOfBirth: data.dateOfBirth, gender: data.gender, parent: data.parent, phone: data.phone });
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast(`${student.name}'s record was updated.`);
  } else if (form.dataset.form === "edit-news") {
    const item = state.news.find(news => news.id === Number(form.dataset.newsId));
    if (!item) throw new Error("News post not found.");
    Object.assign(item, { title: data.title, category: data.category, body: data.body });
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast("News post updated.");
  } else if (form.dataset.form === "gallery-item") {
    state.gallery.push({ id: nextId(state.gallery), title: data.title, category: data.category });
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast("Gallery placeholder added. Uploading image files requires the school backend.");
  } else if (form.dataset.form === "competition") {
    state.competitions.push({ id: nextId(state.competitions), title: data.title, category: data.category, date: data.date || "", achievement: data.achievement || "To be confirmed", status: "Draft" });
    saveState();
    document.querySelector(".modal-backdrop")?.remove();
    render();
    toast("Competition added as a draft.");
  }
  event.preventDefault();
}

function applySearch(searchInput) {
  const targetId = searchInput.dataset.search;
  const container = document.getElementById(targetId);
  if (!container) return;
  const query = searchInput.value.trim().toLowerCase();
  container.querySelectorAll("[data-search-row]").forEach(row => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
}

function applyFilters() {
  const classFilter = document.querySelector("[data-filter-class]");
  const statusFilter = document.querySelector("[data-filter-status]");
  const query = document.querySelector('[data-search="student-table"]')?.value.trim().toLowerCase() || "";
  document.querySelectorAll("#student-table [data-search-row]").forEach((row, index) => {
    const student = state.students[index];
    if (!student) return;
    row.hidden = Boolean((classFilter?.value && student.className !== classFilter.value)
      || (statusFilter?.value && student.status !== statusFilter.value)
      || (query && !row.textContent.toLowerCase().includes(query)));
  });
}

document.addEventListener("submit", event => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  try {
    switch (form.dataset.form) {
      case "login": {
        const user = demoUser(loginRole);
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        const destination = user.role === "admin" ? "admin-dashboard.html" : `${user.role}-portal.html`;
        location.href = `${destination}#dashboard`;
        return;
      }
      case "student": {
        const student = { id: nextId(state.students), studentId: `UCS-${String(80 + state.students.length + 1).padStart(4, "0")}`, name: data.name, dateOfBirth: data.dateOfBirth, gender: data.gender, className: data.className, parent: data.parent, phone: data.phone, status: "Pending", feeStatus: "Owing", account: false };
        state.students.push(student);
        saveState();
        render();
        toast(`${student.name} registered and added to pending admissions.`);
        return;
      }
      case "teacher": {
        state.teachers.push({ id: nextId(state.teachers), name: data.name, email: data.email, classes: data.classes.split(",").map(item => item.trim()).filter(Boolean), subjects: data.subjects.split(",").map(item => item.trim()).filter(Boolean) });
        saveState();
        render();
        toast("Teacher profile added.");
        return;
      }
      case "news": {
        state.news.unshift({ id: nextId(state.news), title: data.title, category: data.category, date: data.date || "2026-10-19", status: data.status, body: data.body });
        saveState();
        render();
        toast("News post saved.");
        return;
      }
      case "event": {
        state.events.push({ id: nextId(state.events), title: data.title, date: data.date, time: data.time || "9:00 AM", location: data.location || "School Grounds", category: data.category });
        saveState();
        render();
        toast("Calendar event added.");
        return;
      }
      case "results": {
        const className = data.className;
        const subject = data.subject;
        const term = data.term;
        let count = 0;
        state.students.filter(student => student.className === className && student.status === "Admitted").forEach(student => {
          const classScore = data[`class-${student.id}`];
          const examScore = data[`exam-${student.id}`];
          if (classScore === "" && examScore === "") return;
          if (classScore === "" || examScore === "") throw new Error(`Enter both scores for ${student.name}.`);
          const classNumber = Number(classScore);
          const examNumber = Number(examScore);
          if (classNumber < 0 || classNumber > 30 || examNumber < 0 || examNumber > 70) throw new Error("Class scores must be 0–30 and exam scores 0–70.");
          const existing = state.results.find(item => item.studentId === student.id && item.subject === subject && item.term === term);
          if (existing) Object.assign(existing, { className, classScore: classNumber, examScore: examNumber, published: false });
          else state.results.push({ studentId: student.id, className, term, subject, classScore: classNumber, examScore: examNumber, published: false });
          count++;
        });
        if (!count) throw new Error("Enter at least one complete pair of scores.");
        saveState();
        render();
        toast(`${count} result record${count === 1 ? "" : "s"} saved as draft.`);
        return;
      }
      case "enquiry": {
        state.enquiries.push({ id: nextId(state.enquiries), ...data, date: new Date().toISOString() });
        saveState();
        form.reset();
        toast("Thank you. Your enquiry has been saved in this demo.");
        return;
      }
      case "settings":
        state.schoolSettings = { ...state.schoolSettings, ...data };
        Object.assign(SCHOOL, state.schoolSettings);
        saveState();
        render();
        toast("School contact details saved in this browser demo.");
        return;
      case "edit-student":
      case "edit-news":
      case "gallery-item":
      case "competition":
        modalForm(form, event);
        return;
      case "account":
      case "payment":
        modalForm(form, event);
        return;
      default:
        throw new Error("This form is not connected yet.");
    }
  } catch (error) {
    console.error("Unable to submit Unichild demo form:", error);
    toast(error.message || "The form could not be submitted.", true);
  }
});

document.addEventListener("click", event => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;
  if (action === "mobile-nav") {
    document.querySelector(".nav-links")?.classList.toggle("open");
  } else if (action === "sidebar-toggle") {
    document.querySelector("#app-sidebar")?.classList.toggle("open");
  } else if (action === "select-role") {
    loginRole = control.dataset.role;
    render();
  } else if (action === "logout") {
    event.preventDefault();
    localStorage.removeItem(SESSION_KEY);
    location.href = "login.html";
  } else if (action === "show-notifications") {
    toast("You are all caught up.");
  } else if (action === "jump-form") {
    document.querySelector("#register-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.querySelector('#register-panel input[name="name"]')?.focus({ preventScroll: true });
  } else if (action === "admit-student") {
    const student = studentById(control.dataset.id);
    if (!student || student.status !== "Pending") return;
    student.status = "Admitted";
    saveState();
    render();
    toast(`${student.name} admitted. Create the student account as the next step.`);
  } else if (action === "create-account") {
    const student = studentById(control.dataset.id);
    if (student) openAccountModal(student);
  } else if (action === "view-student") {
    const student = studentById(control.dataset.id);
    if (student) showModal("Student Profile", `<div class="profile-row"><span class="avatar">${initials(student.name)}</span><div><h3>${escapeHtml(student.name)}</h3><p>${escapeHtml(student.studentId)} · ${escapeHtml(student.className)}</p></div></div><hr><p><strong>Date of birth:</strong> ${escapeHtml(student.dateOfBirth || "Not recorded")}</p><p><strong>Gender:</strong> ${escapeHtml(student.gender || "Not recorded")}</p><p><strong>Parent / guardian:</strong> ${escapeHtml(student.parent)}</p><p><strong>Phone:</strong> ${escapeHtml(student.phone)}</p><p><strong>Admission status:</strong> ${escapeHtml(student.status)}</p><p><strong>Fee status:</strong> ${escapeHtml(student.feeStatus)}</p><p><strong>Account:</strong> ${student.account ? "Created" : "Not created"}</p>`);
  } else if (action === "edit-student") {
    const student = studentById(control.dataset.id);
    if (student) openStudentEditModal(student);
  } else if (action === "delete-teacher") {
    const teacher = state.teachers.find(item => item.id === Number(control.dataset.id));
    if (!teacher || !window.confirm(`Remove ${teacher.name} from the demo staff directory?`)) return;
    state.teachers = state.teachers.filter(item => item.id !== teacher.id);
    saveState();
    render();
    toast("Teacher profile removed.");
  } else if (action === "pay-fee") {
    const student = studentById(control.dataset.id);
    if (student) openPaymentModal(student);
  } else if (action === "record-payment") {
    const owing = state.students.find(student => student.feeStatus === "Owing");
    if (owing) openPaymentModal(owing);
    else toast("There are no outstanding sample fee balances.");
  } else if (action === "toggle-news") {
    const item = state.news.find(news => news.id === Number(control.dataset.id));
    if (!item) return;
    item.status = item.status === "Published" ? "Draft" : "Published";
    saveState();
    render();
    toast(`Post ${item.status.toLowerCase()}.`);
  } else if (action === "edit-news") {
    const item = state.news.find(news => news.id === Number(control.dataset.id));
    if (item) openNewsEditModal(item);
  } else if (action === "delete-news") {
    const item = state.news.find(news => news.id === Number(control.dataset.id));
    if (!item || !window.confirm(`Delete "${item.title}" from demo news?`)) return;
    state.news = state.news.filter(news => news.id !== item.id);
    saveState();
    render();
    toast("News post removed.");
  } else if (action === "delete-event") {
    state.events = state.events.filter(item => item.id !== Number(control.dataset.id));
    saveState();
    render();
    toast("Calendar event removed.");
  } else if (action === "publish-results") {
    const drafts = state.results.filter(item => !item.published);
    if (!drafts.length) {
      toast("There are no draft results to publish.");
      return;
    }
    drafts.forEach(item => { item.published = true; });
    saveState();
    render();
    toast(`${drafts.length} result records published in the demo.`);
  } else if (action === "gallery-filter") {
    const category = control.dataset.category;
    document.querySelectorAll("[data-category-item]").forEach(item => {
      item.hidden = category !== "All" && item.dataset.categoryItem !== category;
    });
    control.parentElement.querySelectorAll("button").forEach(button => {
      button.classList.toggle("btn-outline", button !== control);
      button.classList.toggle("btn", button === control);
    });
  } else if (action === "close-modal") {
    document.querySelector(".modal-backdrop")?.remove();
  } else if (action === "print-results") {
    window.print();
  } else if (action === "print-page") {
    window.print();
  } else if (action === "hero-next") {
    showHeroSlide(heroSlideIndex + 1);
  } else if (action === "hero-previous") {
    showHeroSlide(heroSlideIndex - 1);
  } else if (action === "hero-slide") {
    showHeroSlide(Number(control.dataset.index));
  } else if (action === "gallery-upload") {
    showModal("Add Gallery Item", `<form class="form-stack" data-form="gallery-item"><div class="field"><label>Photo title</label><input name="title" required></div><div class="field"><label>Category</label><select name="category"><option>School Buildings</option><option>Events</option><option>Sports Day</option><option>Cultural Day</option><option>Graduation</option><option>Classroom</option></select></div><p class="notice">This prototype saves a photo placeholder only. Approved image uploads need server storage.</p><div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Save placeholder</button></div></form>`);
  } else if (action === "remove-gallery-item") {
    state.gallery = state.gallery.filter(item => item.id !== Number(control.dataset.id));
    saveState();
    render();
    toast("Gallery item removed.");
  } else if (action === "add-competition") {
    showModal("Add Competition", `<form class="form-stack" data-form="competition"><div class="field"><label>Competition name</label><input name="title" required></div><div class="field"><label>Category</label><input name="category" required></div><div class="field"><label>Date</label><input name="date" type="date"></div><div class="field"><label>Achievement</label><input name="achievement"></div><div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn">Save competition</button></div></form>`);
  }
});

document.addEventListener("input", event => {
  if (event.target.matches("[data-search]")) applySearch(event.target);
  if (event.target.matches('[data-search="student-table"]')) applyFilters();
});
document.addEventListener("change", event => {
  if (event.target.matches("[data-filter-class], [data-filter-status]")) applyFilters();
});
window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", render);
