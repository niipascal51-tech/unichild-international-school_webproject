const SCHOOL = {
  name: "Unichild International School",
  motto: "Lógia Kai Práxeis — Words and Actions",
  address: "JPRF+JJ2 Unichild International School, Sowutoum, Accra, Ghana",
  mapsUrl: "https://maps.app.goo.gl/bRkfAQMwGThSGzYW8?g_st=aw",
  mapEmbedQuery: "5.6415081,-0.2759085",
  phone: "+233 244 891 066",
  admissionsPhone: "+233 558 636 562",
  admissionsWhatsApp: "233249592576",
  email: "Unichildschool11@gmail.com",
  hours: "Monday–Friday, 6:30 AM–4:00 PM",
  establishedYear: 2012,
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
const ACADEMIC_GROUPS = [
  {
    title: "JHS 1–3",
    image: "images/jhs-1-3.jpg",
    overview: "The Junior High School programme develops independent, analytical learners while preparing them for BECE and future academic pathways.",
    approach: "Lessons combine strong subject knowledge with practical projects, digital learning, discussion and responsible decision-making. Learners are encouraged to question, research and apply ideas beyond the classroom.",
    assessment: "Progress is followed through classwork, projects, quizzes, examinations and regular feedback that helps each learner build confidence and close learning gaps.",
    subjects: ["English", "Science", "Maths", "Computing", "French", "Social Studies", "RME", "Twi", "Career Tech", "Creative Arts"],
    benefits: [
      "Learners build strong analytical, communication and digital skills through a broad programme that prepares them for BECE and future academic pathways.",
      "The balance of languages, sciences, humanities, technology and creative learning helps wards grow in confidence, independent thinking, discipline and responsible decision-making."
    ]
  },
  {
    title: "Primary 4–6",
    image: "images/primary-4-6.jpeg",
    imagePosition: "center 18%",
    overview: "This upper-primary programme strengthens literacy, numeracy and knowledge of the world while preparing learners for a confident transition into Junior High School.",
    approach: "Learners connect classroom concepts to everyday life and Ghanaian heritage through guided inquiry, creative work, collaboration and practical problem-solving.",
    assessment: "Teachers use assignments, presentations, projects, quizzes and term examinations to monitor understanding and support steady academic growth.",
    subjects: ["Science", "Maths", "English", "History", "Creative Arts", "Computing", "RME", "French", "Twi", "OWOP"],
    benefits: [
      "This stage strengthens literacy, numeracy and knowledge of the world while helping learners connect classroom concepts to everyday life and Ghanaian heritage.",
      "Wards gain the confidence, curiosity and study habits needed for a smooth transition into Junior High School, with opportunities to communicate, create and solve problems."
    ]
  },
  {
    title: "Primary 1–3",
    image: "images/primary-1-3.jpeg",
    imagePosition: "center 16%",
    overview: "The lower-primary programme establishes essential reading, writing and mathematical foundations through engaging experiences that connect new ideas with daily life.",
    approach: "Learning is active and supportive, with stories, guided practice, creative expression, games and age-appropriate technology helping children communicate and solve problems.",
    assessment: "Continuous class observation, exercises, reading checks, practical activities and periodic assessments guide the next steps for every learner.",
    subjects: ["Science", "Maths", "English", "History", "Creative Arts", "Computing", "RME", "Twi"],
    benefits: [
      "Learners develop essential reading, writing and mathematical foundations through engaging lessons that connect new ideas with their daily experiences.",
      "Early exposure to science, history, computing, creative arts and Ghanaian language supports curiosity, self-expression, teamwork and a positive attitude toward learning."
    ]
  },
  {
    title: "Kindergarten 1–2",
    image: "images/kindergarten-1-2.jpg",
    imagePosition: "center 24%",
    overview: "Kindergarten builds vocabulary, early number sense and the confidence children need to communicate their thoughts and feelings.",
    approach: "A joyful, play-informed environment combines literacy, numeracy, creative arts and language experiences with movement, stories and social learning.",
    assessment: "Teachers observe participation, communication, early writing, number understanding, coordination and social development to plan supportive learning experiences.",
    subjects: ["Literacy", "Numeracy", "Creative Arts", "Twi"],
    benefits: [
      "A carefully guided early-years programme helps wards build vocabulary, early number sense and the confidence to communicate their thoughts and feelings.",
      "Creative activities and Twi language experiences make learning joyful while supporting imagination, coordination, social development and readiness for primary school."
    ]
  },
  {
    title: "Nursery 1–2 & Crèche",
    image: "images/nursery-creche.jpg",
    imagePosition: "center 17%",
    overview: "Our early-years programme gives children a secure beginning through play, language, counting, movement and creative expression.",
    approach: "Warm routines and guided exploration help each child develop independence, social interaction, motor coordination and a love of learning at their own pace.",
    assessment: "Progress is documented through careful observation of communication, movement, self-care, play and relationships, with feedback shared with families.",
    subjects: ["Literacy", "Numeracy", "Creative Arts"],
    benefits: [
      "Play-based learning introduces wards to language, sounds, counting and creative expression in a warm environment that respects each child’s pace of development.",
      "The programme nurtures independence, social interaction, motor coordination and a love of learning while giving children a secure foundation for Kindergarten."
    ]
  }
];
const TERMS = ["Term 1", "Term 2", "Term 3"];
const STORAGE_KEY = "unichild-demo-state-v1";
const SESSION_KEY = "unichild-demo-session";

const SEED = {
  adminProfile: { name: "Registrar Joseph Blankson", email: "admin@unichild.edu.gh", phone: "+233 244 891 066", bio: "School administrator supporting admissions, records and day-to-day operations.", photo: "" },
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
    { id: 1, name: "Mrs. Monica Arkoh", email: "monica.arkoh@unichild.edu.gh", classes: ["Primary 6"], subjects: ["Mathematics", "Integrated Science"], bio: "A dedicated class teacher helping learners build confidence through practical learning.", photo: "" },
    { id: 2, name: "Mr. Francis Amponsah", email: "francis.amponsah@unichild.edu.gh", classes: ["JHS 1", "JHS 2"], subjects: ["English Language", "Social Studies"], bio: "", photo: "" },
    { id: 3, name: "Mrs. Cynthia Kwareng", email: "cynthia.kwareng@unichild.edu.gh", classes: ["Kindergarten"], subjects: ["Creative Arts"], bio: "", photo: "" },
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
  attendance: [
    { date: "2026-10-19", className: "JHS 1", studentId: 1, status: "Present" },
    { date: "2026-10-19", className: "JHS 1", studentId: 6, status: "Absent" },
    { date: "2026-10-19", className: "Primary 4", studentId: 3, status: "Present" },
  ],
  timetable: [
    { id: 1, day: "Monday", time: "08:00", className: "JHS 1", subject: "Mathematics", teacher: "Mrs. Monica Arkoh", room: "Room 4" },
    { id: 2, day: "Monday", time: "09:00", className: "JHS 1", subject: "English Language", teacher: "Mr. Francis Amponsah", room: "Room 4" },
    { id: 3, day: "Tuesday", time: "10:00", className: "Primary 6", subject: "Integrated Science", teacher: "Mrs. Monica Arkoh", room: "Lab" },
  ],
  communications: [
    { id: 1, audience: "Parents", subject: "Mid-term reminder", message: "Please review the academic calendar and upcoming examination dates.", date: "2026-10-19", status: "Sent" },
  ],
  roles: [
    { id: "administrator", label: "Administrator", permissions: ["students", "attendance", "academics", "finance", "communications", "settings"] },
    { id: "registrar", label: "Registrar", permissions: ["students", "admissions", "communications"] },
    { id: "accountant", label: "Accountant", permissions: ["finance", "communications"] },
    { id: "academic-lead", label: "Academic Lead", permissions: ["attendance", "academics", "communications"] },
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
  schoolSettings: {
    noticeTitle: "Important Notice",
    noticeMessage: "Mid-term examinations begin October 14, 2026. Please check the academic calendar for details.",
    noticeLink: "events.html",
    noticeLinkLabel: "View Calendar",
    noticeVisible: true,
    noticeExpires: "2026-12-31",
  },
};

const clone = value => JSON.parse(JSON.stringify(value));
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));
const safeNoticeLink = value => {
  const link = String(value || "").trim();
  if (!link || /^[a-z][a-z\d+.-]*:/i.test(link) && !/^https?:/i.test(link)) return "";
  return link;
};
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
let demoSession = null;
let toastTimer;
let heroTimer;
let heroSlideIndex = 0;

function yearsOfExcellence() {
  return Math.max(0, new Date().getFullYear() - SCHOOL.establishedYear);
}

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
    <span class="brand-mark"><img class="brand-crest" src="images/logo.jpg" alt="Unichild International School crest"></span>
    <span class="brand-copy"><span class="brand-name"><span>Unichild</span><small>International School</small></span><span class="brand-motto">Words and Actions</span></span>
  </a>`;
}

function publicNotice() {
  const settings = {
    noticeTitle: "Important Notice",
    noticeMessage: "Mid-term examinations begin October 14, 2026. Please check the academic calendar for details.",
    noticeLink: "events.html",
    noticeLinkLabel: "View Calendar",
    noticeVisible: true,
    noticeExpires: "",
    ...(state.schoolSettings || {}),
  };
  const expires = settings.noticeExpires ? new Date(`${settings.noticeExpires}T23:59:59`) : null;
  const noticeKey = `${settings.noticeTitle || ""}|${settings.noticeMessage || ""}|${settings.noticeExpires || ""}`;
  const link = safeNoticeLink(settings.noticeLink);
  if (settings.noticeVisible === false || !settings.noticeMessage || (expires && !Number.isNaN(expires.valueOf()) && expires < new Date())) return "";
  if (sessionStorage.getItem("unichild-dismissed-notice") === noticeKey) return "";
  return `<aside class="notice-strip" role="status"><div class="notice-strip-inner"><span class="notice-icon" aria-hidden="true">!</span><div><strong>${escapeHtml(settings.noticeTitle || "Important Notice")}</strong><span>${escapeHtml(settings.noticeMessage)}</span></div>${link ? `<a href="${escapeHtml(link)}">${escapeHtml(settings.noticeLinkLabel || "Read More")} <span aria-hidden="true">→</span></a>` : ""}<button type="button" class="notice-dismiss" data-action="dismiss-notice" aria-label="Dismiss notice">×</button></div></aside>`;
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
      <button class="mobile-nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-action="mobile-nav">☰</button>
      <nav class="nav-links" aria-label="Main navigation">${links.map(([name, href, key]) =>
        `<a class="${active === key ? "active" : ""}" href="${href}">${name}</a>`).join("")}</nav>
      <div class="nav-actions"><a class="btn btn-dark" href="login.html">Portal Login</a></div>
    </div></header>${publicNotice()}`;
}

function publicFooter() {
  const mapQuery = encodeURIComponent(SCHOOL.mapEmbedQuery);
  return `<footer class="site-footer"><div class="site-footer-inner">
    <div>${brand()}<p>Nurturing global citizens equipped with academic mastery and outstanding character. Grounded in research and actualized in rigorous practice.</p>
      <p><strong>${escapeHtml(SCHOOL.motto)}</strong></p></div>
    <div><h3>Academics</h3><a href="academics.html">Creche & Nursery</a><a href="academics.html">Kindergarten</a><a href="academics.html">Primary School</a><a href="academics.html">Junior High School</a></div>
    <div><h3>Quick Links</h3><a href="about.html">About Us</a><a href="admissions.html">Admissions</a><a href="events.html">School Calendar</a><a href="news.html">School News & Blog</a><a href="gallery.html">Photo Gallery</a></div>
    <div><h3>Contact & Location</h3><p>⌖ ${escapeHtml(SCHOOL.address)}</p><p>☎ ${escapeHtml(SCHOOL.phone)}<br>☎ ${escapeHtml(SCHOOL.admissionsPhone)}</p><p>✉ ${escapeHtml(SCHOOL.email)}</p><a class="footer-location-map" href="${SCHOOL.mapsUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open school location in maps"><iframe title="Unichild International School footer location map" src="https://www.google.com/maps?q=${mapQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" tabindex="-1"></iframe></a></div>
  </div><div class="footer-bottom"><span>© 2026 Unichild International School. All rights reserved.</span><span>Accra, Ghana</span></div></footer>
  <a class="whatsapp-float" href="https://wa.me/${SCHOOL.admissionsWhatsApp}" target="_blank" rel="noopener noreferrer" aria-label="Contact admissions on WhatsApp">
    <svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.84 11.84 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.36-1.67a11.84 11.84 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.43-8.39Zm-8.44 18.2h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.85 9.85 0 1 1 8.38 4.66Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>
    <span>Admissions</span>
  </a>`;
}

function pageHero(eyebrow, title, description) {
  return `<section class="page-hero"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></section>`;
}

function sectionHeading(eyebrow, title, description = "") {
  return `<div class="section-heading"><span class="eyebrow">${eyebrow}</span><h2 class="section-title">${title}</h2>
    ${description ? `<p class="section-subtitle">${description}</p>` : ""}<div class="gold-rule"></div></div>`;
}

function publicLayout(page, body) {
  return `<div class="${page === "home" ? "home-page" : `public-page ${page}-page`}">${publicHeader(page)}<main>${body}</main>${publicFooter()}</div>`;
}

function purposeIcon(type) {
  const icons = {
    mission: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><path d="M24 10v28M10 24h28" stroke="#b58b05" stroke-width="1.5" opacity=".55"/><path d="M24 14c-4 6-8 9-8 15a8 8 0 0 0 16 0c0-6-4-9-8-15Z" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="M24 22c-2.4 2.5-3.6 4.1-3.6 6.2a3.6 3.6 0 0 0 7.2 0c0-2.1-1.2-3.7-3.6-6.2Z" fill="#fff" opacity=".75"/></svg>`,
    vision: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><circle cx="24" cy="24" r="12" fill="none" stroke="#b58b05" stroke-width="2"/><circle cx="24" cy="24" r="6" fill="none" stroke="#765600" stroke-width="2"/><circle cx="24" cy="24" r="2.8" fill="#c94b50"/><path d="m31 13 4 4" stroke="#765600" stroke-width="2" stroke-linecap="round"/></svg>`,
    motto: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><path d="M15 20h18v12H15z" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="M19 17h10M18 24h12M18 28h8" stroke="#765600" stroke-width="1.8" stroke-linecap="round"/><path d="m31 31 4 4" stroke="#765600" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  };
  return `<span class="purpose-icon">${icons[type] || icons.motto}</span>`;
}

function coreValueIcon(type) {
  const icons = {
    excellence: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><path d="m24 11 3.6 7.3 8.1 1.2-5.9 5.8 1.4 8.1-7.2-3.8-7.2 3.8 1.4-8.1-5.9-5.8 8.1-1.2L24 11Z" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="m21 24 2.1 2.1 4.4-4.7" fill="none" stroke="#765600" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    integrity: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><path d="M24 11 35 15v8.2c0 6.8-4.5 11.2-11 13.8-6.5-2.6-11-7-11-13.8V15l11-4Z" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="m18.5 24 3.5 3.5 7.5-8" fill="none" stroke="#765600" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    discipline: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><circle cx="24" cy="24" r="11" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="M24 17v7l4.5 3M24 10v3M24 35v3M10 24h3M35 24h3" fill="none" stroke="#765600" stroke-width="2" stroke-linecap="round"/></svg>`,
    community: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" fill="#fff4c9"/><circle cx="17" cy="20" r="4" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><circle cx="31" cy="20" r="4" fill="#f6c51c" stroke="#765600" stroke-width="1.5"/><path d="M10.5 34c.7-5 3-7.5 6.5-7.5s5.8 2.5 6.5 7.5M24.5 34c.7-5 3-7.5 6.5-7.5s5.8 2.5 6.5 7.5" fill="none" stroke="#765600" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  };
  return `<span class="value-illustration">${icons[type] || icons.excellence}</span>`;
}

function valuesGrid() {
  const values = [
    ["excellence", "Excellence", "We pursue the highest personal and institutional standards in our studies and service."],
    ["integrity", "Integrity", "Fostering absolute honesty, reliability, and moral uprightness in every word and deed."],
    ["discipline", "Discipline", "Rigorous attention to self-control, time management, and systematic execution of established procedures."],
    ["community", "Community", "Encouraging helpful interaction, environmental stewardship, and positive action."],
  ];
  return `<div class="grid-4 core-values-grid">${values.map(([icon, title, text]) => `<article class="value-card core-value-card">
    ${coreValueIcon(icon)}<h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
}

function stageCards(gridClass = "grid-5") {
  const stages = [
    ["Creche", "0–3 years", "A nurturing beginning built on care, play and early communication.", "images/nursery-creche.jpg"],
    ["Nursery", "3–4 years", "Curiosity, language, number skills and confidence through guided play.", "images/nursery-creche.jpg"],
    ["Kindergarten", "4–5 years", "A bridge to formal learning with a strong foundation for discovery.", "images/kindergarten-1-2.jpg"],
    ["Primary School", "6–11 years", "Strong literacy, numeracy and creative thinking for every learner.", "images/primary-1-3.jpeg"],
    ["JHS", "12–15 years", "Preparation for BECE with practical learning and responsible leadership.", "images/jhs-1-3.jpg"],
  ];
  return `<div class="${gridClass}">${stages.map(([name, age, text, image]) => `<article class="stage-card">
    <div class="stage-visual" style="background-image:linear-gradient(0deg,#151515b8,transparent 68%),url('${image}')"></div>
    <div class="stage-card-body"><span class="stage-chip">${age}</span><h3>${name}</h3><p>${text}</p></div></article>`).join("")}</div>`;
}

function subjectMark(subject) {
  const marks = {
    English: "Aa",
    Literacy: "Aa",
    Science: "⚗",
    Maths: "∑",
    Numeracy: "123",
    Computing: "⌘",
    French: "文",
    Twi: "文",
    "Social Studies": "◎",
    History: "⌛",
    OWOP: "◆",
    RME: "✦",
    "Career Tech": "⚙",
    "Creative Arts": "✎",
  };
  return `<span class="subject-mark" aria-hidden="true">${marks[subject] || "•"}</span>`;
}

function academicGroupCards() {
  return `<div class="academic-groups-grid">${ACADEMIC_GROUPS.map((group, index) => `<article class="academic-group-card">
    <div class="academic-group-card-head"><span class="value-icon">${index + 1}</span><h3>${escapeHtml(group.title)}</h3></div>
    <div class="academic-subjects">${group.subjects.map(subject => `<span>${subjectMark(subject)}${escapeHtml(subject)}</span>`).join("")}</div>
    <button class="btn btn-small btn-outline" type="button" data-action="academic-group" data-group="${index}">Learn More</button>
  </article>`).join("")}</div>`;
}

function academicGroupDetails(group) {
  return `<div class="academic-group-modal">
    <div class="academic-modal-hero" style="background-image:linear-gradient(120deg,#111c,#1113),url('${escapeHtml(group.image)}');background-position:${escapeHtml(group.imagePosition || "center")}">
      <div class="academic-modal-hero-copy"><span>Curriculum in focus</span><h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.overview)}</p></div>
    </div>
    <div class="academic-modal-sections">
      <section><h3>Learning approach</h3><p>${escapeHtml(group.approach)}</p></section>
      <section><h3>Assessment and progress</h3><p>${escapeHtml(group.assessment)}</p></section>
    </div>
    <div class="academic-modal-subjects"><strong>Curriculum subjects</strong><div class="academic-modal-subject-list">${group.subjects.map(subject => `<span>${subjectMark(subject)}${escapeHtml(subject)}</span>`).join("")}</div></div>
  </div>`;
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
    <div class="hero-copy"><h1>Nurturing Young Minds Through Words & Actions</h1>
      <p>Unichild International School is committed to delivering a transformative education that empowers every learner to think independently, act with integrity, and shape a brighter future.</p>
      <div class="hero-buttons"><a class="btn apply-now" href="admissions.html">Apply Now</a><a class="btn btn-outline" href="about.html">Explore Academics</a></div>
    </div>
  </div><div class="hero-controls" aria-label="Slideshow controls">
    <button class="hero-arrow" type="button" data-action="hero-previous" aria-label="Previous slide">‹</button>
    <div class="hero-dots">${[0, 1, 2].map(index => `<button type="button" class="hero-dot${index === 0 ? " active" : ""}" data-action="hero-slide" data-index="${index}" aria-label="Show slide ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}</div>
    <button class="hero-arrow" type="button" data-action="hero-next" aria-label="Next slide">›</button>
  </div></section>
  <section class="section home-school-section"><div class="container"><div class="home-school-grid">
    <div class="home-school-copy"><div class="section-heading"><span class="eyebrow">Our school</span><h2 class="section-title">A foundation for confident, capable learners</h2><div class="gold-rule"></div></div>
      <p>Our core purpose is to bridge theoretical intelligence with courageous deeds, producing noble minds ready to shape Ghana and the world.</p>
      <p>Established in 2012, Unichild International School combines strong academic foundations with character development, practical experiences and respect for our shared heritage.</p>
    </div><div class="hero-feature"><div class="hero-feature-card"><b>A place to learn, grow and belong.</b><p>Creche · Nursery · Kindergarten · Primary · Junior High School</p></div></div>
  </div></div></section>
  <div class="stat-band"><div class="stat-band-inner"><div><strong data-count="${yearsOfExcellence()}" data-suffix="+">0+</strong><span>Years of excellence</span></div><div><strong data-count="850" data-suffix="+">0+</strong><span>Students supported</span></div><div><strong data-count="45" data-suffix="+">0+</strong><span>Qualified educators</span></div><div><strong data-count="100" data-suffix="%">0%</strong><span>Focus on every child</span></div></div></div>
  <div class="values-stages-banner">
    <section class="section section-soft public-card-section core-values-section"><div class="container">${sectionHeading("Relationship first", "Our Core Values")}${valuesGrid()}</div></section>
    <section class="section public-card-section educational-stages-section home-academic-path-section"><div class="container">${sectionHeading("Our academic paths", "Find the right learning journey", "A carefully designed pathway from early discovery to confident Junior High School leadership.")}${stageCards()}</div></section>
  </div>
  <section class="section section-soft home-events-section"><div class="container"><div class="page-toolbar"><div><span class="eyebrow">Mark your calendar</span><h2 class="section-title">Upcoming School Events</h2></div><a class="btn btn-small" href="events.html">View full calendar</a></div>
    <div class="grid-3">${state.events.slice(0, 3).map(item => `<div class="panel">${eventCard(item)}</div>`).join("")}</div></div></section>
  <section class="section public-card-section home-news-section"><div class="container">${sectionHeading("Latest updates", "News & Academic Blogs")}<div class="grid-3">${published.map(newsCard).join("")}</div></div></section>
  <section class="cta-band home-admissions-band"><div class="container"><span class="eyebrow">Begin the journey</span><h2>Give Your Child the Foundation of Reason and Practice</h2><p>Creche through Junior High School admissions are open for the 2026/2027 academic year. Contact our registrar to take the next step.</p><a class="btn apply-now" href="admissions.html">Apply Now</a> <a class="btn btn-outline" href="admissions.html">Admission Requirements</a></div></section>
  <section class="section section-soft public-card-section home-testimonials-section"><div class="container">${sectionHeading("Families say", "What Parents Say About Us")}<div class="grid-2">
    <article class="quote-card"><span class="eyebrow">★★★★★</span><blockquote>“My child has become more confident and curious. The teachers care about both academic excellence and the character that shapes our young learners.”</blockquote><strong>Mrs. Ama Boateng</strong></article>
    <article class="quote-card"><span class="eyebrow">★★★★★</span><blockquote>“The balance of academic work and practical learning has really helped my child grow. We are grateful for the supportive environment.”</blockquote><strong>Mr. Samuel Mensah</strong></article>
  </div></div></section>
  <section class="section section-dark public-card-section"><div class="container">${sectionHeading("Our community", "Campus Life in Pictures")}${stageCards("campus-life-grid")}<div style="text-align:center;margin-top:22px"><a class="btn" href="gallery.html">Explore our gallery →</a></div></div></section>`);
}

function aboutPage() {
  return publicLayout("about", `<div class="about-intro">${pageHero("Who we are", "About Unichild International School", "Blending modern scholastic strategies with rigorous values of integrity and courage.")}
    <section class="section about-journey-section"><div class="container"><div class="about-journey-copy"><span class="eyebrow">Our journey</span><h2 class="section-title">Founded with a Vision</h2>
      <p>Unichild International School was established to offer children in Accra, Ghana, a modern global baseline in foundational K–12 education. Over the years, we have nurtured thousands of students by integrating the rigorous curricula of the Ghana Education Service with dynamic research, practical experiences and global standards.</p>
      <p>Today, our school is synonymous with outstanding results, highly disciplined student bodies, and an environment that celebrates African identity and heritage.</p></div></div></section></div>
    <section class="section mission-vision-section"><div class="container grid-3">
      <article class="value-card purpose-card">${purposeIcon("mission")}<h3>Our Mission</h3><p>To nurture well-rounded, highly confident individuals through a balanced, comprehensive curriculum that places equal emphasis on theoretical words and courageous practical action.</p></article>
      <article class="value-card purpose-card">${purposeIcon("vision")}<h3>Our Vision</h3><p>To become a benchmark K–12 academic institution in Ghana, celebrated for stellar character training, intellectual prowess and cultural integration.</p></article>
      <article class="value-card purpose-card" style="background:#222;color:white">${purposeIcon("motto")}<h3>Our Motto</h3><p style="color:#ddd"><strong>${escapeHtml(SCHOOL.motto)}</strong><br>Words translating into active, transformational deeds.</p></article>
    </div></section>
    <section class="section core-values-section"><div class="container">${sectionHeading("The code of conduct", "Our Core Values Detailed")}${valuesGrid()}</div></section>
    <section class="section section-soft faculty-leaders-section"><div class="container">${sectionHeading("Meet", "Our Leadership Team")}<div class="grid-4">
      ${[["Mrs. Evelyn Mensah", "Principal / Founder"], ["Mr. Ebenezer Osei", "Vice Principal"], ["Mrs. Cynthia Kwareng", "Head of Academics"], ["Mr. David Alabi", "Head of Administration"]].map(([name, role]) => `<article class="content-card"><div class="photo-placeholder"></div><div class="content-card-body"><h3>${name}</h3><p>${role}</p></div></article>`).join("")}</div></div></section>
    <section class="cta-band"><div class="container"><h2>Give Your Child the Foundation of Reason and Practice</h2><p>Join our school community and discover a place where every learner can thrive.</p><a class="btn apply-now" href="admissions.html">Apply Now</a></div></section>`);
}

function academicsPage() {
  return publicLayout("academics", `${pageHero("Scholastic pathways", "Our Academic Programs", "Providing children with excellent foundation skills tailored to our motto: Words and Actions.")}
    <section class="section"><div class="container" style="text-align:center">${sectionHeading("The strategy", "Comprehensive Ghana Education Service Standards Enhanced with International Best Practices", "Our curriculum is engineered around developmental steps, ensuring each stage—from Creche to Junior High School—translates to measurable growth in confidence, curiosity and knowledge.")}</div></section>
    <div class="values-stages-banner">
      <section class="section section-soft public-card-section educational-stages-section"><div class="container">${stageCards()}</div></section>
    </div>
    <section class="section public-card-section"><div class="container">${sectionHeading("The curriculum in focus", "Learning Pathways", "Explore the subjects and developmental benefits of each class group at Unichild International School.")}
      ${academicGroupCards()}</div></section>
    <section class="section"><div class="container">${sectionHeading("Important milestones", "Term Dates & Calendar Highlights")}
      <div class="panel">${state.events.map(event => `<div class="calendar-event"><span class="calendar-date">${dateText(event.date)}</span><div><h4>${escapeHtml(event.title)}</h4><p>${escapeHtml(event.location)}</p></div></div>`).join("")}</div></div></section>
    <section class="section public-card-section"><div class="container">${sectionHeading("Beyond the classroom", "Extra-curricular Activities")}
      <div class="grid-5">${["Debate & Public Speaking", "Science & STEM Club", "Cultural Dance & Arts", "Unichild Sports Club", "Music & Orchestra"].map((item, i) => `<article class="value-card"><span class="value-icon">${i + 1}</span><h3>${item}</h3><p>Explore interests, build confidence and learn the value of collaboration.</p></article>`).join("")}</div></div></section>`);
}

function admissionsPage() {
  const steps = ["Submit Online Inquiry", "Complete Application Form", "Submit Required Documents", "Interview & Assessment", "Admission Decision"];
  const requirements = [
    ["Birth certificate", "Original and photocopy of the child's birth certificate."],
    ["Previous school reports", "The last three academic term reports, where applicable."],
    ["Passport photographs", "Four recent passport-sized photographs of the child."],
    ["Parent or guardian ID", "A photocopy of the parent or guardian's valid National ID card."],
    ["Health records", "The child's immunization and general health records."],
  ];
  return publicLayout("admissions", `${pageHero("Join the Unichild family", "Admissions — K–12 Pathways", "We welcome outstanding students from Creche through JHS. Our admissions process is designed to be straightforward, transparent and supportive.")}
    <section class="section section-soft"><div class="container grid-2" style="align-items:center"><div><span class="eyebrow">Welcome, Accra</span><h2 class="section-title">Start Your Child's Journey of Excellence</h2><p>At Unichild International School, we offer children a perfect synthesis of theoretical focus (Words) and physical outcomes (Actions). We build self-reliance, outstanding civic values and competitive BECE mastery starting from the early learning stages.</p></div>
      <aside class="panel" style="background:#222;color:#fff"><span class="eyebrow">Registrar notice</span><h3>Student registration is handled by the school</h3><p style="color:#ddd">The administrator manages registration, admission and student account creation. Please contact the admissions office to begin. Students do not admit themselves.</p></aside></div></section>
    <section class="section public-card-section"><div class="container">${sectionHeading("Registration", "Our Application Process")}
      <div class="grid-5">${steps.map((step, i) => `<article class="value-card"><span class="eyebrow">Step ${i + 1}</span><h3>${step}</h3><p>${["Share basic information so our registrar can schedule a consultation.", "Complete the form with help from the administrative registrar.", "Provide copies of required academic and health documents.", "A baseline review helps place your child in the right grade level.", "The school confirms placement and next steps with your family."][i]}</p></article>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container grid-2"><div><h2 class="section-title">Admission Requirement Pathway</h2><div class="requirements-timeline" aria-label="Admission requirements">${requirements.map(([title, description], i) => `<article class="requirement-item${i % 2 === 0 ? " requirement-item-right" : " requirement-item-left"}"><div class="requirement-card"><span class="requirement-number">${String(i + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${description}</p></div></div></article>`).join("")}</div>
      <div class="notice"><strong>Downloadable forms</strong>Application and medical forms will be provided by the school registrar.</div><button class="btn btn-outline" style="margin-top:12px" data-action="print-page">Print / Save Admission Information</button></div>
      <div><span class="eyebrow">Financial structure</span><h2 class="section-title">Admission Fees & Tuition</h2><div class="table-wrap"><table class="data-table"><thead><tr><th>Class level</th><th>Admission fee</th><th>Tuition / term</th><th>Feeding / term</th></tr></thead><tbody>${[["Creche","1,200","2,500","800"],["Nursery","1,200","2,500","800"],["Kindergarten","1,200","2,700","800"],["Primary School","1,500","3,200","1,000"],["Junior High School","1,500","3,800","1,000"]].map(row => `<tr>${row.map((cell, i) => `<td>${i ? `GHS ${cell}` : cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>
    </div></section><section class="cta-band"><div class="container"><h2>Enrollment is active for the 2026/2027 Academic Year</h2><p>Questions? Contact our Admissions Office to schedule an on-campus tour or request a prospectus.</p><a class="btn btn-dark" href="tel:${SCHOOL.admissionsPhone.replace(/[^\d+]/g, "")}">Call Registrar: ${escapeHtml(SCHOOL.admissionsPhone)}</a> <a class="btn btn-outline" href="contacts.html">Email Office</a></div></section>`);
}

function contactPage() {
  const mapQuery = encodeURIComponent(SCHOOL.mapEmbedQuery);
  return publicLayout("contact", `${pageHero("Get in touch", "Contact Unichild International", "Have questions about our curriculum, admissions or school policies? Reach out to our Accra campus.")}
    <section class="section section-soft"><div class="container grid-2">
      <form class="panel form-stack" data-form="enquiry"><h2 class="section-title">Send Us a Message</h2>
        <div class="field"><label for="contact-name">Full Name</label><input id="contact-name" name="name" required placeholder="Enter your full name"></div>
        <div class="field"><label for="contact-email">Email Address</label><input id="contact-email" name="email" type="email" required placeholder="Enter your email address"></div>
        <div class="field"><label for="contact-phone">Phone Number</label><input id="contact-phone" name="phone" placeholder="+233 ..."></div>
        <div class="field"><label for="contact-subject">Subject Inquiry</label><select id="contact-subject" name="subject"><option>Admissions & Placement</option><option>Academics</option><option>Fees</option><option>General enquiry</option></select></div>
        <div class="field"><label for="contact-message">Your Message</label><textarea id="contact-message" name="message" rows="4" required placeholder="How can we support you?"></textarea></div>
        <button class="btn" type="submit">Submit Inquiry</button></form>
      <div><div class="mini-list">
        <div class="mini-list-item"><span class="mini-icon">⌖</span><div><strong>Physical address</strong><small>${escapeHtml(SCHOOL.address)}</small></div></div>
        <div class="mini-list-item"><span class="mini-icon">☎</span><div><strong>Phone channels</strong><small>${escapeHtml(SCHOOL.phone)}<br>${escapeHtml(SCHOOL.admissionsPhone)} (Admissions Hotline)</small></div></div>
        <div class="mini-list-item"><span class="mini-icon">✉</span><div><strong>Email enquiries</strong><small>${escapeHtml(SCHOOL.email)}</small></div></div>
        </div>
        <div class="location-map-card"><a class="location-map-link" href="${SCHOOL.mapsUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open school location in maps"><iframe title="Unichild International School location map" src="https://www.google.com/maps?q=${mapQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" tabindex="-1"></iframe></a></div></div>
    </div></section>    <section class="section public-card-section"><div class="container">${sectionHeading("Frequently asked questions", "Common Admissions Questions")}
      ${[["What age groups do you accept?", "We accept children from 6 months in our Creche, up to 15 years for Junior High School (JHS 3)."], ["How do I apply for admission?", "Admissions must go through the administrative office. Submit an inquiry form, schedule an interview, and the registrar provides final approval."], ["What is the fee structure?", "Fees are billed per term. Contact the office for current tuition, feeding and transport information."], ["Do you offer transportation?", "Please contact the admissions office for current transport routes and availability."], ["What curriculum do you follow?", "We implement the Ghana Education Service K–12 blueprint enriched with global scientific enquiry, language clubs and ICT training."]].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></section>`);
}

function newsPage() {
  const articles = state.news.filter(item => item.status === "Published");
  return publicLayout("news", `${pageHero("Latest updates", "Unichild News & Blog", "Celebrate outstanding student achievements, read general notices and browse memories from our campus.")}
    <section class="section section-soft"><div class="container grid-2" style="align-items:center"><div class="photo-placeholder" style="min-height:280px"></div><div><span class="stage-chip">Featured story</span><h2 class="section-title">${escapeHtml(articles[0]?.title || "News from Unichild")}</h2><p>${dateText(articles[0]?.date)}</p><p>${escapeHtml(articles[0]?.body || "Check back soon for the latest school updates.")}</p><a class="btn" href="#recent-stories">Read Full Article</a></div></div></section>
    <section id="recent-stories" class="section recent-stories-section"><div class="container"><div class="page-toolbar"><h2 class="section-title">Recent Stories</h2><a href="events.html" class="btn btn-outline">Events Calendar</a></div><div class="grid-3">${articles.map(newsCard).join("")}</div></div></section>`);
}

function eventsPage() {
  return publicLayout("events", `${pageHero("School calendar", "Events & Important Dates", "Academic dates, school events, meetings and celebrations for our community.")}
    <section class="section public-card-section"><div class="container grid-2"><div class="panel">${sectionHeading("Upcoming", "School Events")}
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
    </div></section><section class="section public-card-section"><div class="container"><h2 class="section-title">School Life Videos</h2><div class="grid-2" style="margin-top:18px">${["Unichild Virtual Campus Tour","Annual Cultural Day Highlights","Junior High Science Exhibition","Class 6 English Debate Finals"].map(title => `<article class="panel"><div class="photo-placeholder" style="min-height:170px;display:grid;place-items:center;color:#fff;font-size:28px">▶</div><strong>${title}</strong></article>`).join("")}</div></div></section>`);
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
    <section class="section public-card-section"><div class="container grid-3">${departments.map(([name, title, desc], i) => `<article class="value-card${name === "Cadet Corps" ? " school-color-card" : ""}"><span class="value-icon">${i + 1}</span><span class="eyebrow">${name}</span><h3>${title}</h3><p>${desc}</p></article>`).join("")}</div></section>
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
    <section class="section section-soft public-card-section"><div class="container">${sectionHeading("School spirit", "Competitions & Achievements")}<div class="grid-2">${state.competitions.filter(item => item.status === "Published").map((item, i) => `<article class="content-card"><div class="photo-placeholder" style="min-height:190px;background-image:linear-gradient(130deg,${["#687b50","#9d603f","#596c78","#9d7c36"][i % 4]},#302c25)"></div><div class="content-card-body"><span class="stage-chip">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(descriptions[item.category] || item.achievement)}</p></div></article>`).join("")}</div></div></section>
    <section class="section public-card-section"><div class="container">${sectionHeading("Upcoming", "Games & School Events")}<div class="grid-2">${state.events.filter(event => /sport|cultur|game/i.test(event.title + event.category)).map(event => `<div class="panel">${eventCard(event)}</div>`).join("") || `<p class="empty-state">New competition dates will be posted here by the school.</p>`}</div></div></section>`);
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
    ["dashboard", "▦", "Home"], ["results", "▤", "My Results"], ["tutorials", "▥", "Tutorials"], ["pta", "♧", "PTA Meetings"], ["settings", "⚙", "Settings"],
  ];
  if (role === "teacher") return [
    ["dashboard", "▦", "Dashboard"], ["classes", "▤", "My Classes"], ["results", "↑", "Upload Results"], ["students", "♧", "Student List"], ["announcements", "◉", "Announcements"], ["settings", "⚙", "Settings"], ["profile", "◌", "Profile"],
  ];
  return [
    ["dashboard", "▦", "Dashboard"], ["students", "♧", "Students"], ["teachers", "♙", "Teachers"], ["admissions", "＋", "Admissions"], ["attendance", "✓", "Attendance"], ["timetable", "▤", "Timetable"], ["results", "▥", "Exams & Results"], ["fees", "▣", "Fee Management"], ["communications", "✉", "Parent Communication"], ["news", "◉", "News & Announcements"], ["events", "▦", "Events & Calendar"], ["gallery", "▧", "Gallery"], ["games", "♜", "Games & Competitions"], ["roles", "♙", "Roles & Permissions"], ["settings", "⚙", "Website Settings"], ["profile", "◌", "Profile"],
  ];
}

function demoUser(role) {
  const apiUser = typeof backendUser === "function" ? backendUser() : null;
  if (apiUser?.role === role) {
    return { ...apiUser, detail: role === "admin" ? "School Administrator" : `${role[0].toUpperCase()}${role.slice(1)} Portal` };
  }
  if (role === "student") return { role, name: "Kwame Asante", detail: "Student · JHS 1", studentId: 1 };
  if (role === "teacher") {
    const teacher = state.teachers.find(item => item.id === 1) || state.teachers[0];
    return { role, name: teacher.name, detail: `Class Teacher · ${teacher.classes[0] || "Primary 6"}`, teacherId: teacher.id };
  }
  return { role: "admin", name: state.adminProfile.name, detail: "School Administrator" };
}

function avatarMarkup(profile) {
  return profile?.photo
    ? `<img class="avatar avatar-photo" src="${escapeHtml(profile.photo)}" alt="${escapeHtml(profile.name || "Profile photo")}">`
    : `<span class="avatar">${initials(profile?.name)}</span>`;
}

function cameraIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5 9.4 3h5.2L16 5.5h3A2.5 2.5 0 0 1 21.5 8v9A2.5 2.5 0 0 1 19 19.5H5A2.5 2.5 0 0 1 2.5 17V8A2.5 2.5 0 0 1 5 5.5h3Z"/><circle cx="12" cy="12.5" r="3.5"/></svg>`;
}

function avatarWithCamera(profile) {
  return `<span class="avatar-camera-wrap">${avatarMarkup(profile)}<button type="button" class="avatar-camera-button" data-action="profile-picture" aria-label="Change profile picture">${cameraIcon()}</button></span>`;
}

function profileForUser(user) {
  if (user.role === "student") return state.students.find(item => item.id === user.studentId);
  if (user.role === "teacher") return state.teachers.find(item => item.id === user.teacherId);
  return state.adminProfile;
}

function updateProfilePhoto(user, photo) {
  const profile = profileForUser(user);
  if (!profile) throw new Error("The profile could not be found. Please sign in again.");
  profile.photo = photo;
  saveState();
  const session = getSession();
  if (session && session.role === user.role) {
    if (photo) session.photo = photo;
    else delete session.photo;
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  render();
  toast(photo ? "Profile picture updated." : "Profile picture deleted.");
}

function profilePictureSheet(user) {
  const profile = profileForUser(user);
  document.querySelector(".account-menu-backdrop")?.remove();
  showModal("Profile picture", `<div class="profile-picture-sheet">
    <button type="button" class="profile-picture-option" data-action="profile-camera"><span class="profile-picture-icon">${cameraIcon()}</span><span><strong>Camera</strong><small>Take a live snapshot</small></span></button>
    <button type="button" class="profile-picture-option" data-action="profile-gallery"><span class="profile-picture-icon">▧</span><span><strong>Gallery</strong><small>Upload a photo from this device</small></span></button>
    ${profile?.photo ? `<button type="button" class="profile-picture-option profile-picture-delete" data-action="delete-profile-picture"><span class="profile-picture-icon">♲</span><span><strong>Delete</strong><small>Remove your current profile picture</small></span></button>` : ""}
    <input class="profile-picture-file" type="file" accept="image/png,image/jpeg,image/webp" data-profile-upload hidden>
  </div>`);
}

async function openProfileCamera(user) {
  if (!navigator.mediaDevices?.getUserMedia) {
    toast("Live camera capture is not supported by this browser. Choose Gallery instead.", true);
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
    const video = document.querySelector("[data-camera-preview]");
    if (!video) {
      stream.getTracks().forEach(track => track.stop());
      return;
    }
    video.srcObject = stream;
    window.activeProfileCameraStream = stream;
  } catch (error) {
    if (error?.name !== "NotAllowedError" && error?.name !== "PermissionDeniedError") {
      console.error("Unable to open the profile camera:", error);
    }
    toast("Camera access was not granted. Choose Gallery or allow camera permission.", true);
  }
}

function closeProfileCamera() {
  window.activeProfileCameraStream?.getTracks().forEach(track => track.stop());
  window.activeProfileCameraStream = null;
}

function cameraModal(user) {
  window.pendingProfilePhoto = "";
  showModal("Take profile picture", `<div class="profile-camera"><video data-camera-preview autoplay playsinline></video><p>Position your face in the frame, then capture your snapshot.</p><div class="modal-foot"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button type="button" class="btn" data-action="capture-profile-picture">Capture snapshot</button></div></div>`);
  openProfileCamera(user);
}

function profilePhotoPreview() {
  return `<div class="profile-camera profile-camera-review"><img data-profile-photo-preview alt="Captured profile preview"><p>Check that your face is clear and centered. This photo is not saved yet.</p><div class="modal-foot"><button type="button" class="btn btn-outline" data-action="retake-profile-picture">Retake</button><button type="button" class="btn" data-action="use-profile-picture">Use this photo</button></div></div>`;
}

function showProfilePhotoReview(photo) {
  showModal("Review profile picture", profilePhotoPreview());
  const preview = document.querySelector("[data-profile-photo-preview]");
  if (preview) preview.src = photo;
}

function accountIdentifier(user) {
  if (user.role === "student") {
    const student = state.students.find(item => item.id === user.studentId);
    return student?.studentId || `Student ${user.studentId}`;
  }
  if (user.role === "teacher") return `Teacher ${String(user.teacherId || "").padStart(4, "0")}`;
  return "Administrator";
}

function accountMenu(user) {
  const preferences = readPortalPreferences(user);
  const mix = Math.max(0, Math.min(100, Number(preferences.mix) || 50));
  return `<div class="account-menu-backdrop${preferences.mode === "dark" ? " account-menu-dark" : ""}" data-account-backdrop style="--account-primary:${escapeHtml(preferences.primary)};--account-accent:${escapeHtml(preferences.accent)};--account-mix:${mix}%;">
    <section class="account-menu" role="dialog" aria-modal="true" aria-label="Account Menu">
      <header class="account-menu-head"><strong>Account Menu</strong><button type="button" class="account-menu-close" data-action="close-account-menu" aria-label="Close account menu">×</button></header>
      <div class="account-menu-body">
        <div class="account-menu-avatar">${avatarWithCamera(user)}</div>
        <h2>${escapeHtml(user.name)}</h2>
        <p class="account-menu-id">${escapeHtml(accountIdentifier(user))}</p>
        <nav class="account-menu-links" aria-label="Account shortcuts">
          <a href="#settings" data-action="close-account-menu">Manage Preferences</a>
          <a href="#profile" data-action="close-account-menu">View Profile</a>
          <a href="#tutorials" data-action="close-account-menu">Tutorial</a>
        </nav>
        <div class="account-theme-toggle" aria-label="Theme mode">
          <button type="button" class="${preferences.mode === "light" ? "active" : ""}" data-action="account-theme" data-mode="light" aria-label="Use light mode">☼</button>
          <button type="button" class="${preferences.mode === "dark" ? "active" : ""}" data-action="account-theme" data-mode="dark" aria-label="Use dark mode">☾</button>
        </div>
        <button type="button" class="account-logout" data-action="logout">↪ Log Out</button>
      </div>
    </section>
  </div>`;
}

function applyAccountTheme(user) {
  const preferences = readPortalPreferences(user);
  const mix = Math.max(0, Math.min(100, Number(preferences.mix) || 50));
  const root = document.querySelector(".app-layout");
  const backdrop = document.querySelector(".account-menu-backdrop");
  root?.style.setProperty("--portal-primary", preferences.primary);
  root?.style.setProperty("--portal-accent", preferences.accent);
  root?.style.setProperty("--portal-mix", `${mix}%`);
  if (root) root.dataset.theme = preferences.mode === "dark" ? "dark" : "light";
  if (!backdrop) return;
  backdrop.classList.toggle("account-menu-dark", preferences.mode === "dark");
  backdrop.style.setProperty("--account-primary", preferences.primary);
  backdrop.style.setProperty("--account-accent", preferences.accent);
  backdrop.style.setProperty("--account-mix", `${mix}%`);
  backdrop.querySelectorAll("[data-action='account-theme']").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === preferences.mode);
  });
}

function getSession() {
  const apiUser = typeof backendUser === "function" ? backendUser() : null;
  const apiToken = typeof BACKEND_TOKEN_KEY !== "undefined" && typeof localStorage !== "undefined"
    ? localStorage.getItem(BACKEND_TOKEN_KEY)
    : null;
  if (apiUser && apiToken) return apiUser;
  if (demoSession) return demoSession;
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

function createDemoSession(role, email) {
  if (role === "student") {
    return { role, name: email, detail: "Student · JHS 1", studentId: 1 };
  }
  if (role === "teacher") {
    const teacher = state.teachers.find(item => item.id === 1) || state.teachers[0];
    return {
      role,
      name: teacher.name,
      detail: `Class Teacher · ${teacher.classes[0] || "Primary 6"}`,
      teacherId: teacher.id,
    };
  }
  return { role: "admin", name: email, detail: "School Administrator" };
}

const PORTAL_PREFERENCES_KEY = "unichild-portal-preferences-v1";
const DEFAULT_PORTAL_PREFERENCES = {
  notifications: true,
  assignments: true,
  announcements: true,
  language: "English",
  mode: "light",
  primary: "#e5b600",
  accent: "#25364a",
  mix: 50,
};

function preferenceUserKey(user) {
  return `${user.role}:${user.studentId || user.teacherId || "admin"}`;
}

function readPortalPreferences(user) {
  try {
    const saved = JSON.parse(localStorage.getItem(PORTAL_PREFERENCES_KEY) || "{}");
    const preferences = { ...DEFAULT_PORTAL_PREFERENCES, ...(saved[preferenceUserKey(user)] || {}) };
    if (preferences.primary === "#f6e41e" || preferences.primary === "#f6c51c" || preferences.primary === "#ffd21f") preferences.primary = DEFAULT_PORTAL_PREFERENCES.primary;
    if (preferences.accent === "#0756c9" || preferences.accent === "#28231b") preferences.accent = DEFAULT_PORTAL_PREFERENCES.accent;
    return preferences;
  } catch (error) {
    console.error("Unable to read portal preferences:", error);
    return { ...DEFAULT_PORTAL_PREFERENCES };
  }
}

function portalThemeStyle(user) {
  const preferences = readPortalPreferences(user);
  return ` style="--portal-primary:${escapeHtml(preferences.primary)};--portal-accent:${escapeHtml(preferences.accent)};--portal-mix:${Math.max(0, Math.min(100, Number(preferences.mix) || 50))}%;"`
    + (preferences.mode === "dark" ? ' data-theme="dark"' : "");
}

function portalSettingsPage(user) {
  const preferences = readPortalPreferences(user);
  return `${welcomeBlock(user, "Personalize notifications, language, colors and display mode for this portal.")}<section class="panel portal-preferences-panel">
    <div class="panel-header"><div><h2>Portal Preferences</h2><p>These settings are saved for your account in this browser.</p></div><span class="role-pill">${escapeHtml(preferences.language)}</span></div>
    <form class="form-stack" data-form="portal-preferences">
      <div class="preference-section"><h3>Notifications</h3><label class="preference-toggle"><span><strong>School announcements</strong><small>Receive important notices from Unichild.</small></span><input name="announcements" type="checkbox" ${preferences.announcements ? "checked" : ""}></label><label class="preference-toggle"><span><strong>Assignment reminders</strong><small>Get reminders about tutorials and learning tasks.</small></span><input name="assignments" type="checkbox" ${preferences.assignments ? "checked" : ""}></label><label class="preference-toggle"><span><strong>General notifications</strong><small>Allow portal alerts and activity updates.</small></span><input name="notifications" type="checkbox" ${preferences.notifications ? "checked" : ""}></label></div>
      <div class="preference-section"><h3>Language</h3><div class="field"><label for="portal-language">Portal language</label><select id="portal-language" name="language">${["English", "French", "Twi"].map(language => `<option ${preferences.language === language ? "selected" : ""}>${language}</option>`).join("")}</select></div></div>
      <div class="preference-section"><h3>Theme and colors</h3><div class="preference-color-grid"><div class="field"><label for="portal-primary">Primary color</label><input id="portal-primary" name="primary" type="color" value="${escapeHtml(preferences.primary)}"></div><div class="field"><label for="portal-accent">Accent color</label><input id="portal-accent" name="accent" type="color" value="${escapeHtml(preferences.accent)}"></div></div><label class="field"><span class="preference-range-label"><span>Mix primary and accent colors</span><output id="portal-mix-output">${preferences.mix}%</output></span><input id="portal-mix" name="mix" type="range" min="0" max="100" value="${preferences.mix}" oninput="document.getElementById('portal-mix-output').value = this.value + '%'"></label><div class="preference-preview" style="--preview-primary:${escapeHtml(preferences.primary)};--preview-accent:${escapeHtml(preferences.accent)};--preview-mix:${Math.max(0, Math.min(100, Number(preferences.mix) || 50))}%"><strong>Theme preview</strong><span>Colors blend to match your preference.</span></div><div class="mode-options"><label><input type="radio" name="mode" value="light" ${preferences.mode === "light" ? "checked" : ""}> Light mode</label><label><input type="radio" name="mode" value="dark" ${preferences.mode === "dark" ? "checked" : ""}> Dark mode</label></div></div>
      <button class="btn" type="submit">Save Preferences</button>
    </form></section>`;
}

const PORTAL_TRANSLATIONS = {
  French: {
    "Workspace": "Espace de travail",
    "Home": "Accueil",
    "My Results": "Mes résultats",
    "Tutorials": "Tutoriels",
    "PTA Meetings": "Réunions de l'association de parents",
    "Settings": "Paramètres",
    "Log out": "Se déconnecter",
    "Notifications": "Notifications",
    "Open account menu": "Ouvrir le menu du compte",
    "Search learning resources": "Rechercher des ressources d'apprentissage",
    "What do you want to learn today?": "Que voulez-vous apprendre aujourd'hui ?",
    "Set Goals": "Définir des objectifs",
    "Hi Kwame,": "Bonjour Kwame,",
    "You have completed": "Vous avez terminé",
    "of your weekly targets. Keep learning with us like this.": "de vos objectifs hebdomadaires. Continuez à apprendre ainsi.",
    "Lessons for you": "Leçons pour vous",
    "Your Tasks Today": "Vos tâches du jour",
    "October 2026": "Octobre 2026",
    "Upload Assignment": "Déposer un devoir",
    "Study for Quiz": "Réviser pour le contrôle",
    "Paragraph Corrections": "Correction de paragraphes",
    "Spell Check English": "Vérification orthographique en anglais",
    "Refer a friend": "Recommander à un ami",
    "Questions & Answers": "Questions et réponses",
    "Multiple choice questions": "Questions à choix multiple",
    "New revision": "Nouvelle révision",
    "Focus Words": "Mots clés",
    "Workshops": "Ateliers",
    "Extra-Curricular": "Activités parascolaires",
    "Welcome back,": "Bienvenue,",
    "Your Profile": "Votre profil",
    "Set Goals": "Définir des objectifs",
    "Hi Kwame,": "Bonjour Kwame,",
    "Unichild International School Student Portal": "Portail étudiant d'Unichild International School",
    "Create New": "Créer",
    "Your Assignments": "Vos devoirs",
    "View More": "Voir plus",
    "Lessons for you": "Leçons pour vous",
    "Your Tasks Today": "Vos tâches du jour",
    "Upload Assignment": "Déposer un devoir",
    "Study for Quiz": "Réviser pour le contrôle",
    "Paragraph Corrections": "Correction de paragraphes",
    "Spell Check English": "Vérification orthographique en anglais",
    "Create New": "Créer",
    "Refer a friend": "Recommander à un ami",
    "Portal Preferences": "Préférences du portail",
    "These settings are saved for your account in this browser.": "Ces paramètres sont enregistrés pour votre compte dans ce navigateur.",
    "Notifications": "Notifications",
    "School announcements": "Annonces de l'école",
    "Receive important notices from Unichild.": "Recevez les informations importantes d'Unichild.",
    "Assignment reminders": "Rappels de devoirs",
    "Get reminders about tutorials and learning tasks.": "Recevez des rappels pour les tutoriels et les activités d'apprentissage.",
    "General notifications": "Notifications générales",
    "Allow portal alerts and activity updates.": "Autorisez les alertes et les mises à jour du portail.",
    "Language": "Langue",
    "Portal language": "Langue du portail",
    "Theme and colors": "Thème et couleurs",
    "Primary color": "Couleur principale",
    "Accent color": "Couleur d'accent",
    "Mix primary and accent colors": "Mélanger les couleurs principale et d'accent",
    "Theme preview": "Aperçu du thème",
    "Colors blend to match your preference.": "Les couleurs se combinent selon votre préférence.",
    "Light mode": "Mode clair",
    "Dark mode": "Mode sombre",
    "Save Preferences": "Enregistrer les préférences",
    "Manage Preferences": "Gérer les préférences",
    "View Profile": "Voir le profil",
    "Account Menu": "Menu du compte",
    "Student Portal": "Portail étudiant",
    "Teacher Portal": "Portail enseignant",
    "Operations Portal": "Portail des opérations",
    "Student": "Étudiant",
    "Teacher": "Enseignant",
    "Administrator": "Administrateur",
  },
  Twi: {
    "Workspace": "Adwumayɛbea",
    "Home": "Fie",
    "My Results": "Me nsɔhwɛ aba",
    "Tutorials": "Nkyerɛkyerɛ",
    "PTA Meetings": "Awofoɔ ne akyerɛkyerɛfoɔ nhyiam",
    "Settings": "Nhyehyɛe",
    "Log out": "Fi mu",
    "Notifications": "Amanneɛbɔ",
    "Open account menu": "Bue akawnt menu",
    "Search learning resources": "Hwehwɛ adesua nneɛma",
    "What do you want to learn today?": "Dɛn na wopɛ sɛ wusua nnɛ?",
    "Your Profile": "Wo ho nsɛm",
    "Set Goals": "Yɛ botae",
    "Hi Kwame,": "Akyena Kwame,",
    "You have completed": "Woawie",
    "of your weekly targets. Keep learning with us like this.": "wo nnawɔtwe botae. Kɔ so sua sɛnea ɛte yi.",
    "October 2026": "Ahinime 2026",
    "Questions & Answers": "Nsɛmmisa ne mmuae",
    "Multiple choice questions": "Nsɛmmisa a wɔpaw mmuae",
    "New revision": "Adesua foforo",
    "Focus Words": "Nsɛm titiriw",
    "Workshops": "Nkyerɛkyerɛ nhyiam",
    "Extra-Curricular": "Adesua foforo akyi",
    "Unichild International School Student Portal": "Unichild International School osuafoɔ portal",
    "Create New": "Yɛ foforo",
    "Your Assignments": "Wo nnwuma",
    "View More": "Hwɛ pii",
    "Lessons for you": "Adesua ma wo",
    "Your Tasks Today": "Wo nnwuma nnɛ",
    "Upload Assignment": "Fa adwuma kɔ soro",
    "Study for Quiz": "Sua nsɔhwɛ no",
    "Create New": "Yɛ foforo",
    "Refer a friend": "Kyerɛ adamfo",
    "Portal Preferences": "Portal nhyehyɛe",
    "These settings are saved for your account in this browser.": "Wɔde nhyehyɛe yi sie wo akawnt wɔ browser yi mu.",
    "School announcements": "Sukuul amanneɛbɔ",
    "Receive important notices from Unichild.": "Nya amanneɛbɔ a ɛho hia fi Unichild.",
    "Assignment reminders": "Nnwuma nkae",
    "Get reminders about tutorials and learning tasks.": "Nya nkaeɛ ma nkyerɛkyerɛ ne adesua nnwuma.",
    "General notifications": "Amanneɛbɔ nyinaa",
    "Allow portal alerts and activity updates.": "Ma portal amanneɛbɔ ne nsakraeɛ nyɛ adwuma.",
    "Language": "Kasa",
    "Portal language": "Portal kasa",
    "Theme and colors": "Nsusuwso ne kɔla",
    "Primary color": "Kɔla titiriw",
    "Accent color": "Kɔla a ɛboa",
    "Mix primary and accent colors": "Fa kɔla titiriw ne kɔla a ɛboa fra",
    "Theme preview": "Nsusuwso nhwɛso",
    "Colors blend to match your preference.": "Kɔla no fra sɛnea wopɛ.",
    "Light mode": "Kɔla hann",
    "Dark mode": "Kɔla sum",
    "Save Preferences": "Sie nhyehyɛe",
    "Manage Preferences": "Hwɛ nhyehyɛe",
    "View Profile": "Hwɛ wo ho nsɛm",
    "Account Menu": "Akawnt menu",
    "Student Portal": "Osuafoɔ portal",
    "Teacher Portal": "Ɔkyerɛkyerɛfoɔ portal",
    "Operations Portal": "Adwumayɛ portal",
    "Student": "Osuafoɔ",
    "Teacher": "Ɔkyerɛkyerɛfoɔ",
    "Administrator": "Ɔhwɛfoɔ",
  },
};

function translatePortal(root, language) {
  const translations = PORTAL_TRANSLATIONS[language];
  if (!translations) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    const value = node.nodeValue.trim();
    if (language === "French" && value.startsWith("Welcome back,")) node.nodeValue = node.nodeValue.replace("Welcome back,", "Bienvenue,");
    else if (language === "Twi" && value.startsWith("Welcome back,")) node.nodeValue = node.nodeValue.replace("Welcome back,", "Yɛma wo akwaaba,");
    else {
      Object.entries(translations)
        .sort(([left], [right]) => right.length - left.length)
        .forEach(([source, target]) => {
          if (node.nodeValue.includes(source)) node.nodeValue = node.nodeValue.replaceAll(source, target);
        });
    }
  });
  root.querySelectorAll("[aria-label], [placeholder], [title]").forEach(element => {
    ["aria-label", "placeholder", "title"].forEach(attribute => {
      const value = element.getAttribute(attribute);
      if (value && translations[value]) element.setAttribute(attribute, translations[value]);
    });
  });
}

function portalShell(user, tab, content) {
  const items = portalMenu(user.role);
  const portalName = user.role === "admin" ? "Operations Portal" : `${user.role[0].toUpperCase()}${user.role.slice(1)} Portal`;
  return `<div class="app-layout ${user.role}-layout"${portalThemeStyle(user)}><aside class="app-sidebar" id="app-sidebar">
    ${brand()}<div class="sidebar-caption">Workspace</div>
    ${items.map(([key, icon, label]) => `<a href="#${key}" class="sidebar-link ${tab === key ? "active" : ""}"><span class="nav-icon">${icon}</span>${label}</a>`).join("")}
    <div class="sidebar-spacer"></div><button type="button" class="sidebar-profile" data-action="account-menu" aria-label="Open account menu">${avatarMarkup(user)}<span><strong>${escapeHtml(user.name)}</strong><small>${portalName}</small></span></button>
    <a href="#" class="sidebar-link" data-action="logout"><span class="nav-icon">↪</span>Log out</a>
  </aside><div class="app-main"><header class="app-topbar">
    <div class="topbar-main"><button class="menu-button" data-action="sidebar-toggle" aria-label="Open menu">☰</button>
      <div class="app-heading"><h1>${escapeHtml(tabLabel(user.role, tab))}</h1><p>Unichild International School ${portalName}</p></div></div>
    <div class="topbar-tools"><span class="date-label">${new Date().toLocaleDateString(readPortalPreferences(user).language === "French" ? "fr-FR" : readPortalPreferences(user).language === "Twi" ? "ak-GH" : "en-GB", { weekday: "long", day: "numeric", month: "short", year: "numeric" })}</span>
      <button class="icon-button notification-button" aria-label="Notifications" data-action="show-notifications"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg><span class="notification-dot"></span></button>
      <button type="button" class="topbar-account" data-action="account-menu" aria-label="Open account menu">${avatarMarkup(user)}</button></div>
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
  const modules = [
    ["Attendance", "attendance", "◉", "coral"],
    ["Class List", "students", "☷", "green"],
    ["Timetable", "timetable", "▣", "pink"],
    ["Exams & Results", "results", "▤", "blue"],
    ["Calendar", "events", "▦", "orange"],
    ["News", "news", "▤", "lime"],
    ["Homework & Tasks", "results", "◇", "purple"],
    ["Parent Messages", "communications", "✉", "navy"],
    ["Settings", "settings", "⚙", "red"],
    ["Configuration", "roles", "☷", "teal"],
  ];
  return `${welcomeBlock(demoUser("admin"), "Here is an overview of school operations and recent activity.")}
    <section class="panel dashboard-launcher"><div class="panel-header"><div><h2>School Operations</h2><p>Choose a module to manage today's school activities</p></div><span class="dashboard-kicker">ADMIN WORKSPACE</span></div>
      <div class="module-grid">${modules.map(([label, target, icon, color]) => `<a class="module-card module-card-${color}" href="#${target}"><span class="module-card-icon">${icon}</span><strong>${label}</strong><small>Open module <span aria-hidden="true">→</span></small></a>`).join("")}</div>
      <div class="action-row dashboard-secondary-actions">${actionLink("Register Student", "students", "＋")}${actionLink("Manage Admissions", "admissions", "♧")}${actionLink("Record Fee Payment", "fees", "▣")}</div></section>
    <div class="kpi-grid">${statCard("Total students", admitted, "Active student records", "♧")}${statCard("Total teachers", state.teachers.length, "Staff profiles", "♙")}${statCard("Pending admissions", pending, "Awaiting review", "◷")}${statCard("Fee collection rate", `${collectionRate}%`, `${money(collected)} collected`, "↗")}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Operations at a glance</h2><p>New modules ready for daily school administration</p></div></div>
      ${[["Attendance register", "Mark daily presence, absence and lateness", "attendance", "✓"], ["Academic timetable", "Coordinate classes, subjects, teachers and rooms", "timetable", "▤"], ["Parent communication", "Prepare targeted notices and message history", "communications", "✉"], ["Roles & permissions", "Separate registrar, finance and academic access", "roles", "♙"]].map(([title, description, target, icon]) => `<div class="mini-list-item"><span class="mini-icon">${icon}</span><div><strong>${title}</strong><small>${description}</small></div><a class="panel-header-link" href="#${target}">Open →</a></div>`).join("")}</section><aside class="panel"><div class="panel-header"><h2>Attention needed</h2></div>${state.students.filter(student => student.status === "Pending").slice(0, 3).map(student => `<div class="mini-list-item"><div><strong>${escapeHtml(student.name)}</strong><small>Pending admission · ${escapeHtml(student.className)}</small></div><a href="#admissions">Review</a></div>`).join("") || '<p class="muted">No pending admissions.</p>'}</aside></div>
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

function attendanceAdminPage() {
  const date = "2026-10-19";
  const admitted = state.students.filter(student => student.status === "Admitted");
  const marked = state.attendance.filter(item => item.date === date);
  const present = marked.filter(item => item.status === "Present").length;
  return `<div class="page-toolbar"><div><h2>Attendance Management</h2><p>Record daily attendance and identify learners who need follow-up</p></div><span class="badge">${present}/${marked.length || admitted.length} present</span></div>
    <div class="kpi-grid">${statCard("Present today", present, "Recorded for 19 Oct 2026", "✓")}${statCard("Absent today", marked.filter(item => item.status === "Absent").length, "Requires follow-up", "!")}${statCard("Not marked", Math.max(0, admitted.length - marked.length), "Complete the register", "◷")}${statCard("Attendance rate", `${marked.length ? Math.round(present / marked.length * 100) : 0}%`, "Daily sample rate", "↗")}</div>
    <section class="panel"><div class="panel-header"><div><h2>Daily Register</h2><p>Use the status button to cycle Present, Absent and Late.</p></div><div class="toolbar"><select class="input"><option>19 Oct 2026</option><option>20 Oct 2026</option></select><select class="input"><option>All classes</option>${CLASS_NAMES.map(name => `<option>${name}</option>`).join("")}</select></div></div>
      ${dataTable(["Student", "Class", "Parent / guardian", "Status", "Action"], admitted.map(student => {
        const record = marked.find(item => item.studentId === student.id);
        const status = record?.status || "Not marked";
        return `<tr><td><strong>${escapeHtml(student.name)}</strong><br><small>${escapeHtml(student.studentId)}</small></td><td>${escapeHtml(student.className)}</td><td>${escapeHtml(student.parent)}</td><td>${badge(status)}</td><td><button class="btn btn-small ${status === "Absent" ? "btn-danger" : "btn-outline"}" data-action="attendance-status" data-id="${student.id}" data-date="${date}">${status === "Not marked" ? "Mark present" : "Change status"}</button></td></tr>`;
      }))}</section>`;
}

function timetableAdminPage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return `<div class="page-toolbar"><div><h2>Timetable Management</h2><p>Coordinate classes, subjects, teachers and rooms across the school week</p></div><button class="btn" data-action="jump-form">＋ Add lesson</button></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Weekly Timetable</h2><p>${state.timetable.length} scheduled lessons</p></div></div>
      ${dataTable(["Day", "Time", "Class", "Subject", "Teacher", "Room", "Actions"], state.timetable.slice().sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day) || a.time.localeCompare(b.time)).map(item => `<tr><td><strong>${escapeHtml(item.day)}</strong></td><td>${escapeHtml(item.time)}</td><td>${escapeHtml(item.className)}</td><td>${escapeHtml(item.subject)}</td><td>${escapeHtml(item.teacher)}</td><td>${escapeHtml(item.room)}</td><td><button class="btn btn-small btn-danger" data-action="delete-timetable" data-id="${item.id}">Remove</button></td></tr>`))}</section>
      <section class="panel" id="register-panel"><div class="panel-header"><h2>Add lesson</h2></div><form class="form-stack" data-form="timetable">
        <div class="field-grid"><div class="field"><label>Day *</label><select name="day">${days.map(day => `<option>${day}</option>`).join("")}</select></div><div class="field"><label>Time *</label><input name="time" type="time" value="08:00" required></div></div>
        <div class="field"><label>Class *</label><select name="className">${CLASS_NAMES.map(name => `<option>${name}</option>`).join("")}</select></div><div class="field"><label>Subject *</label><input name="subject" required placeholder="Mathematics"></div>
        <div class="field"><label>Teacher *</label><select name="teacher">${state.teachers.map(teacher => `<option>${escapeHtml(teacher.name)}</option>`).join("")}</select></div><div class="field"><label>Room</label><input name="room" value="Room 1"></div><button class="btn">Save lesson</button></form></section></div>`;
}

function communicationsAdminPage() {
  return `<div class="page-toolbar"><div><h2>Parent Communication</h2><p>Prepare targeted messages for parents, students and staff</p></div><span class="badge">${state.communications.filter(item => item.status === "Sent").length} sent</span></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Message History</h2><p>Demo messages are stored locally in this browser.</p></div></div>${dataTable(["Audience", "Subject", "Message", "Date", "Status"], state.communications.map(item => `<tr><td>${escapeHtml(item.audience)}</td><td><strong>${escapeHtml(item.subject)}</strong></td><td>${escapeHtml(item.message)}</td><td>${dateText(item.date)}</td><td>${badge(item.status)}</td></tr>`))}</section>
      <section class="panel"><div class="panel-header"><h2>Compose message</h2></div><form class="form-stack" data-form="communication"><div class="field"><label>Audience *</label><select name="audience"><option>Parents</option><option>Students</option><option>Teachers</option><option>All school community</option></select></div><div class="field"><label>Subject *</label><input name="subject" required maxlength="150"></div><div class="field"><label>Message *</label><textarea name="message" rows="6" required maxlength="2000"></textarea></div><button class="btn">Send demo message</button></form></section></div>`;
}

function rolesAdminPage() {
  return `<div class="page-toolbar"><div><h2>Roles & Permissions</h2><p>Separate administrative responsibilities and apply least-privilege access</p></div><span class="role-pill">ACCESS CONTROL</span></div>
    <section class="panel"><div class="panel-header"><div><h2>Permission profiles</h2><p>These demo profiles show how registrar, finance and academic duties can be separated.</p></div></div>
      ${dataTable(["Role", "Students & admissions", "Attendance & academics", "Finance", "Communications", "Website settings"], state.roles.map(role => `<tr><td><strong>${escapeHtml(role.label)}</strong></td>${["students", "academics", "finance", "communications", "settings"].map(permission => `<td>${role.permissions.includes(permission) ? badge("Enabled") : badge("Restricted")}</td>`).join("")}</tr>`))}</section>
    <div class="notice" style="margin-top:14px"><strong>Recommended production rule</strong>Keep administrator, registrar, accountant and academic-lead permissions separate on the server. The current browser demo visualizes the model; backend authorization must enforce it before launch.</div>`;
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
      <div class="panel-subheading">Public announcement</div>
      <div class="field"><label>Notice title</label><input name="noticeTitle" value="${escapeHtml(state.schoolSettings.noticeTitle || "")}"></div>
      <div class="field"><label>Notice message</label><textarea name="noticeMessage" rows="3" maxlength="180">${escapeHtml(state.schoolSettings.noticeMessage || "")}</textarea></div>
      <div class="field-grid"><div class="field"><label>Notice link</label><input name="noticeLink" value="${escapeHtml(state.schoolSettings.noticeLink || "events.html")}" placeholder="events.html"></div><div class="field"><label>Link label</label><input name="noticeLinkLabel" value="${escapeHtml(state.schoolSettings.noticeLinkLabel || "Read More")}"></div></div>
      <div class="field-grid"><div class="field"><label>Expiry date</label><input name="noticeExpires" type="date" value="${escapeHtml(state.schoolSettings.noticeExpires || "")}"></div><label class="checkbox-field"><input name="noticeVisible" type="checkbox" ${state.schoolSettings.noticeVisible !== false ? "checked" : ""}> Show announcement bar</label></div>
      <button class="btn" type="submit">Save demo settings</button></form></section>
      <section class="panel"><div class="panel-header"><h2>Downloads & Resources</h2></div><div class="mini-list">
        ${["2026_Admissions_Form.pdf","School_Prospectus.pdf","Academic_Calendar_2026.pdf"].map(name => `<div class="mini-list-item"><span class="mini-icon">↓</span><div><strong>${name}</strong><small>Sample resource placeholder · PDF</small></div></div>`).join("")}</div>
        <div class="notice" style="margin-top:15px"><strong>API connection</strong>Demo data is local to this browser. Connect approved content, downloads and account data to the school API when it is ready.</div></section></div>`;
}

function staffProfileForm(profile, role) {
  return `<form class="form-stack" data-form="profile"><input type="hidden" name="role" value="${role}">
    <div class="profile-editor-heading">${avatarWithCamera(profile)}<div><strong>${escapeHtml(profile.name)}</strong><small>Update your account details and profile photo.</small></div></div>
    <div class="field-grid"><div class="field"><label>Full name *</label><input name="name" value="${escapeHtml(profile.name)}" required></div>
      <div class="field"><label>Email address *</label><input name="email" type="email" value="${escapeHtml(profile.email || "")}" required></div></div>
    <div class="field"><label>Phone number</label><input name="phone" value="${escapeHtml(profile.phone || "")}"></div>
    <div class="field"><label>Bio</label><textarea name="bio" rows="4" maxlength="500" placeholder="Tell the school community about yourself">${escapeHtml(profile.bio || "")}</textarea></div>
    <div class="field"><label>Profile picture</label><input name="photo" type="file" accept="image/png,image/jpeg,image/webp"><small class="form-help">Choose a JPG, PNG or WebP image up to 1 MB.</small></div>
    <button class="btn" type="submit">Save Profile</button>
  </form>`;
}

function adminProfilePage() {
  return `<div class="page-toolbar"><div><h2>My Profile</h2><p>Manage your administrator profile and biography</p></div></div>
    <section class="panel"><div class="panel-header"><h2>Administrator Profile</h2></div>${staffProfileForm(state.adminProfile, "admin")}</section>`;
}

function adminPage(tab, user) {
  const renderers = {
    dashboard: adminDashboard, students: studentsPage, teachers: teachersPage,
    admissions: admissionsPageAdmin, attendance: attendanceAdminPage, timetable: timetableAdminPage, results: resultsAdminPage, fees: feesPage,
    communications: communicationsAdminPage,
    news: newsAdminPage, events: eventsAdminPage, gallery: galleryAdminPage,
    games: gamesAdminPage, roles: rolesAdminPage, settings: () => `${portalSettingsPage(user)}${settingsAdminPage()}`, profile: adminProfilePage,
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
  if (tab === "profile") return `${welcomeBlock(user, "Your student account information.")}<section class="panel"><div class="profile-row">${avatarWithCamera(student)}<div><h3>${escapeHtml(student.name)}</h3><p>${escapeHtml(student.studentId)} · ${escapeHtml(student.className)}</p></div></div><hr><p><strong>Parent / guardian:</strong> ${escapeHtml(student.parent)}</p><p><strong>Fee status:</strong> ${badge(student.feeStatus)}</p></section>`;
  if (tab === "tutorials") return `${welcomeBlock(user, "Explore guided lessons and revision resources for your class.")}<section class="student-resource-grid"><article class="student-resource-card student-resource-yellow"><span>▤</span><div><h3>Focus Words</h3><p>English vocabulary, reading and writing practice.</p><a href="#results">Open tutorial →</a></div></article><article class="student-resource-card student-resource-coral"><span>♧</span><div><h3>Study Workshops</h3><p>Extra-curricular learning activities and study support.</p><a href="#results">View workshops →</a></div></article><article class="student-resource-card student-resource-blue"><span>◇</span><div><h3>Revision Practice</h3><p>Review published results and identify areas to improve.</p><a href="#results">Review results →</a></div></article></section>`;
  if (tab === "pta") return `${welcomeBlock(user, "Keep up with parent, teacher and school community meetings.")}<section class="panel"><div class="panel-header"><div><h2>PTA Meetings</h2><p>Upcoming meetings and community notices</p></div></div>${dataTable(["Meeting", "Date", "Time", "Location", "Details"], state.events.filter(item => item.category === "Meeting" || item.title.toLowerCase().includes("parent")).map(item => `<tr><td><strong>${escapeHtml(item.title)}</strong></td><td>${dateText(item.date)}</td><td>${escapeHtml(item.time)}</td><td>${escapeHtml(item.location)}</td><td>Ask your parent or guardian about attendance.</td></tr>`))}</section>`;
  if (tab === "settings") return portalSettingsPage(user);
  if (tab === "dashboard") {
    const assignmentCards = [
      ["English lesson 2", "Questions & Answers", "New", "coral"],
      ["Mathematics III", "Multiple choice questions", `${Math.min(99, Math.max(20, average || 35))}%`, "green"],
      ["Midyear History", "New revision", `${Math.min(99, Math.max(40, average || 80))}%`, "blue"],
    ];
    return `<div class="student-home">
      <div class="student-search"><input data-student-search placeholder="What do you want to learn today?" aria-label="Search learning resources"><button type="button" class="student-search-button" data-action="student-search" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 5 5"></path></svg></button></div>
      <div class="student-home-grid"><main>
        <section class="student-profile-banner"><div><span class="student-eyebrow">Your Profile</span><h2>Hi ${escapeHtml(student.name.split(" ")[0])},</h2><p>You have completed <strong>${Math.min(100, Math.max(70, average || 70))}%</strong> of your weekly targets. Keep learning with us like this.</p><a class="student-yellow-button" href="#profile">Set Goals</a></div><div class="student-banner-art" aria-hidden="true">⌨<br><span>★</span></div></section>
        <section class="student-section"><div class="student-section-heading"><h2>Your Assignments</h2><a href="#results">View More</a></div><div class="assignment-grid">${assignmentCards.map(([title, subtitle, progress, color]) => `<a class="assignment-card assignment-${color}" data-search-card href="#results"><span class="assignment-symbol">${color === "coral" ? "◎" : color === "green" ? "△" : "◉"}</span><strong>${title}</strong><small>${subtitle}</small><span class="assignment-progress"><i style="width:${String(progress).replace("%", "")}%"></i></span><em>${progress}</em></a>`).join("")}</div></section>
        <section class="student-section"><div class="student-section-heading"><h2>Lessons for you</h2><a href="#announcements">View More</a></div><div class="lesson-grid"><a class="lesson-card lesson-yellow" data-search-card href="#announcements"><strong>Focus Words</strong><small>English</small><span>▤</span></a><a class="lesson-card lesson-coral" data-search-card href="#announcements"><strong>Workshops</strong><small>Extra-Curricular</small><span>♟</span></a></div><p class="student-search-status" data-search-status hidden>No matching learning resources found.</p></section>
      </main><aside class="student-right-panel"><div class="student-calendar"><strong>October 2026</strong><div class="calendar-grid">${["S", "M", "T", "W", "T", "F", "S", "", "", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map(day => `<span class="${day === "21" ? "today" : ""}">${day}</span>`).join("")}</div></div><div class="student-tasks"><h3>Your Tasks Today</h3>${[["Upload Assignment", "yellow"], ["Study for Quiz", "green"], ["Paragraph Corrections", "purple"], ["Spell Check English", "red"]].map(([task, color]) => `<div class="student-task task-${color}">${task}</div>`).join("")}<button class="student-create-task" type="button">＋ Create New</button></div><div class="student-refer"><strong>Refer a friend</strong><span>🎓</span></div></aside></div>
    </div>`;
  }
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
  if (tab === "settings") return portalSettingsPage(user);
  if (tab === "profile") return `${welcomeBlock(user, "Your staff account information.")}<section class="panel"><div class="panel-header"><h2>Teacher Profile</h2></div>${staffProfileForm(teacher, "teacher")}<div class="profile-details"><p><strong>Assigned classes:</strong> ${teacher.classes.map(escapeHtml).join(", ")}</p><p><strong>Subjects:</strong> ${teacher.subjects.map(escapeHtml).join(", ")}</p></div></section>`;
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
  const eyeIcon = hidden => hidden
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle><path d="m4 4 16 16"></path></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>`;
  return `<div class="public-page login-page">${publicHeader("login")}<main class="login-screen"><section class="login-brand">${brand()}<div class="login-brand-copy"><h1>Lógia Kai<br>Práxeis.</h1><p>Unlocking the potential in our future Leaders one day at a time.</p><div class="action-row"><span class="role-pill">GES Accredited</span><span class="role-pill">Est. 2012</span></div></div>
      <footer>© 2026 Unichild School Management Operations. All rights reserved.</footer></section>
      <section class="login-form-side"><div class="login-box"><h2>Welcome Back</h2><p>Sign in to access your school portal workspace.</p>
        <div class="tabs" role="tablist">${roles.map(([role, label]) => `<button type="button" class="${loginRole === role ? "active" : ""}" data-action="select-role" data-role="${role}">${label}</button>`).join("")}</div>
        <form class="form-stack" data-form="login"><div class="field"><label for="login-username">Email address</label><input id="login-username" name="username" type="email" autocomplete="username" placeholder="name@example.com" required></div>
          <div class="field"><label for="login-password">Password</label><div class="password-field"><input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter password" required><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Show password" aria-pressed="false">${eyeIcon(true)}</button></div><a class="forgot-password" href="#forgot-password" data-action="forgot-password">Forgot password?</a></div>
          <button class="btn" type="submit" style="width:100%;padding:13px">Sign In</button></form>
        <p class="login-hint">Use the school account provided to you. If the backend is unavailable, the local demo sign-in remains available for previewing the portal.</p><p class="login-hint">Need help? <a class="login-support-link" href="mailto:${encodeURIComponent(SCHOOL.email)}">Contact the school</a> at <a class="login-support-link" href="mailto:${encodeURIComponent(SCHOOL.email)}">${escapeHtml(SCHOOL.email)}</a></p>
      </div></section></main>${publicFooter()}</div>`;
}

function rolePortalPage(role, tab) {
  const user = getSession();
  if (!user || user.role !== role) {
    return `<div class="public-page login-page">${publicHeader("login")}<main class="login-screen"><section class="login-brand">${brand()}<div class="login-brand-copy"><h1>${role === "admin" ? "Operations" : `${role[0].toUpperCase()}${role.slice(1)}`} Portal</h1><p>Sign in to open the Unichild International School workspace.</p></div><footer>© 2026 Unichild International School</footer></section>
      <section class="login-form-side"><div class="login-box"><h2>Portal Sign In</h2><p>Choose the matching role to access this portal.</p><a class="btn" href="login.html?role=${role}">Continue to secure demo sign in</a></div></section></main>${publicFooter()}</div>`;
  }
  const safeTab = portalMenu(role).some(item => item[0] === tab) ? tab : portalMenu(role)[0][0];
  const content = role === "admin" ? adminPage(safeTab, user) : role === "student" ? studentPortal(user, safeTab) : teacherPortal(user, safeTab);
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
    if (user && user.role === role) {
      translatePortal(root, readPortalPreferences(user).language);
    }
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
  initPageAnimations();
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

function initPageAnimations() {
  const root = document.querySelector("#app");
  const page = document.body.dataset.page || "home";
  if (!root || page === "login" || page.endsWith("-portal") || page === "admin-dashboard") return;
  const revealTargets = root.querySelectorAll(
    ".page-hero > *, .section-heading > *, .home-school-copy > p, .hero-feature, .stat-band-inner > div, .value-card, .stage-card, .content-card, .quote-card, .academic-group-card, .calendar-event, .requirement-item, .panel"
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });
  const stats = root.querySelectorAll("[data-count]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(element => element.classList.add("is-visible"));
    stats.forEach(stat => { stat.textContent = `${stat.dataset.count}${stat.dataset.suffix || ""}`; });
    return;
  }
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }), { threshold: .14 })
    : null;
  revealTargets.forEach(element => observer ? observer.observe(element) : element.classList.add("is-visible"));
  stats.forEach(stat => {
    const animate = () => {
      const end = Number(stat.dataset.count);
      const start = performance.now();
      const duration = 1200;
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.textContent = `${Math.round(end * eased)}${stat.dataset.suffix || ""}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!observer) animate();
    else {
      const statObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animate();
        statObserver.unobserve(entry.target);
      }), { threshold: .5 });
      statObserver.observe(stat);
    }
  });
  initCardInteractions();
}

function initCardInteractions() {
  if (!document.body.classList.contains("home-page") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const cards = document.querySelectorAll(".home-academic-path-section .stage-card, .home-news-section .content-card, .home-testimonials-section .quote-card, .home-events-section .panel");
  cards.forEach(card => {
    card.addEventListener("pointermove", event => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      card.style.setProperty("--tilt-x", `${(-y * 2.5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 2.5).toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

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

function showNotifications(user) {
  const announcements = state.news.filter(item => item.status === "Published").slice(0, 3);
  const items = announcements.length
    ? announcements.map(item => `<article class="notification-item"><strong>${escapeHtml(item.title)}</strong><small>${dateText(item.date)}</small><p>${escapeHtml(item.body)}</p></article>`).join("")
    : `<p class="muted">You are all caught up.</p>`;
  showModal("Notifications", `<div class="notification-list">${items}</div><div class="modal-foot"><a class="btn btn-outline" href="#announcements" data-action="close-modal">View all announcements</a><button class="btn" type="button" data-action="close-modal">Done</button></div>`);
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

function applyStudentSearch() {
  const input = document.querySelector("[data-student-search]");
  if (!input) return;
  const query = input.value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll("[data-search-card]").forEach(card => {
    const matches = !query || card.textContent.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  const status = document.querySelector("[data-search-status]");
  if (status) status.hidden = !query || visible > 0;
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

function readProfileImage(file) {
  if (!file || !file.size) return Promise.resolve("");
  if (!file.type.startsWith("image/")) throw new Error("Choose an image file for your profile picture.");
  if (file.size > 1024 * 1024) throw new Error("Profile pictures must be 1 MB or smaller.");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("The profile picture could not be read."));
    reader.readAsDataURL(file);
  });
}

document.addEventListener("submit", async event => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  try {
    switch (form.dataset.form) {
      case "login": {
        let user;
        let usingDemoFallback = false;
        try {
          user = await backendLogin(data.username, data.password);
        } catch (error) {
          if (!error.message.startsWith("The school server is unavailable at ")) throw error;
          user = createDemoSession(loginRole, data.username);
          demoSession = user;
          localStorage.setItem(SESSION_KEY, JSON.stringify(user));
          usingDemoFallback = true;
        }
        const expectedRole = loginRole === "admin" ? "admin" : loginRole;
        if (user.role !== expectedRole) {
          clearBackendSession();
          localStorage.removeItem(SESSION_KEY);
          throw new Error(`This is a ${user.role} account. Choose the matching portal role.`);
        }
        const destination = user.role === "admin" ? "admin-dashboard.html" : `${user.role}-portal.html`;
        if (usingDemoFallback) {
          document.body.dataset.page = user.role === "admin" ? "admin-dashboard" : `${user.role}-portal`;
          history.replaceState(null, "", `${destination}#dashboard`);
          render();
          return;
        }
        localStorage.removeItem(SESSION_KEY);
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
      case "timetable": {
        state.timetable.push({ id: nextId(state.timetable), day: data.day, time: data.time, className: data.className, subject: data.subject, teacher: data.teacher, room: data.room || "Room 1" });
        saveState();
        render();
        toast("Timetable lesson saved.");
        return;
      }
      case "communication": {
        state.communications.unshift({ id: nextId(state.communications), audience: data.audience, subject: data.subject, message: data.message, date: "2026-10-19", status: "Sent" });
        saveState();
        render();
        toast("Demo message sent to the selected audience.");
        return;
      }
      case "portal-preferences": {
        const session = getSession();
        if (!session) throw new Error("Your portal session has expired. Please sign in again.");
        const hexColor = value => /^#[0-9a-f]{6}$/i.test(String(value || "")) ? String(value) : "";
        const primary = hexColor(data.primary);
        const accent = hexColor(data.accent);
        if (!primary || !accent) throw new Error("Choose valid primary and accent colors.");
        let saved = {};
        try {
          saved = JSON.parse(localStorage.getItem(PORTAL_PREFERENCES_KEY) || "{}");
        } catch (error) {
          console.error("Unable to read existing portal preferences:", error);
        }
        saved[preferenceUserKey(session)] = {
          notifications: data.notifications === "on",
          assignments: data.assignments === "on",
          announcements: data.announcements === "on",
          language: ["English", "French", "Twi"].includes(data.language) ? data.language : "English",
          mode: data.mode === "dark" ? "dark" : "light",
          primary,
          accent,
          mix: Math.max(0, Math.min(100, Number(data.mix) || 50)),
        };
        localStorage.setItem(PORTAL_PREFERENCES_KEY, JSON.stringify(saved));
        render();
        toast("Portal preferences saved.");
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
        state.schoolSettings = { ...state.schoolSettings, ...data, noticeVisible: form.elements.noticeVisible.checked };
        Object.assign(SCHOOL, state.schoolSettings);
        saveState();
        render();
        toast("School contact details saved in this browser demo.");
        return;
      case "profile": {
        const photo = await readProfileImage(data.photo);
        const profile = data.role === "admin"
          ? state.adminProfile
          : state.teachers.find(item => item.id === getSession()?.teacherId);
        if (!profile) throw new Error("The profile could not be found. Please sign in again.");
        Object.assign(profile, { name: data.name.trim(), email: data.email.trim(), phone: data.phone.trim(), bio: data.bio.trim() });
        if (photo) profile.photo = photo;
        saveState();
        const session = getSession();
        if (session && session.role === data.role) {
          session.name = profile.name;
          session.detail = data.role === "admin" ? "School Administrator" : `Class Teacher · ${profile.classes[0] || "Primary 6"}`;
          if (photo) session.photo = profile.photo;
          localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        }
        render();
        toast("Your profile was updated.");
        return;
      }
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
    const nav = document.querySelector(".nav-links");
    const isOpen = nav?.classList.toggle("open") || false;
    control.setAttribute("aria-expanded", String(isOpen));
  } else if (action === "toggle-password") {
    const password = document.querySelector("#login-password");
    if (!password) return;
    const visible = password.type === "text";
    password.type = visible ? "password" : "text";
    control.setAttribute("aria-label", visible ? "Show password" : "Hide password");
    control.setAttribute("aria-pressed", String(!visible));
    control.innerHTML = visible
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle><path d="m4 4 16 16"></path></svg>`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>`;
  } else if (action === "forgot-password") {
    event.preventDefault();
    toast(`Password reset is not available yet. Contact the school at ${SCHOOL.email} for assistance.`, true);
  } else if (action === "sidebar-toggle") {
    document.querySelector("#app-sidebar")?.classList.toggle("open");
  } else if (action === "account-menu") {
    const session = getSession();
    if (!session) {
      toast("Your portal session has expired. Please sign in again.", true);
      return;
    }
    document.querySelector(".account-menu-backdrop")?.remove();
    document.body.insertAdjacentHTML("beforeend", accountMenu(session));
    const backdrop = document.querySelector(".account-menu-backdrop");
    backdrop?.addEventListener("click", click => {
      if (click.target === backdrop) backdrop.remove();
    });
    backdrop?.querySelector(".account-menu-close")?.focus();
  } else if (action === "profile-picture") {
    event.stopPropagation();
    const session = getSession();
    if (session) profilePictureSheet(session);
  } else if (action === "profile-camera") {
    const session = getSession();
    if (session) cameraModal(session);
  } else if (action === "profile-gallery") {
    document.querySelector("[data-profile-upload]")?.click();
  } else if (action === "delete-profile-picture") {
    const session = getSession();
    if (!session) return;
    closeProfileCamera();
    document.querySelector(".modal-backdrop")?.remove();
    updateProfilePhoto(session, "");
  } else if (action === "capture-profile-picture") {
    event.preventDefault();
    event.stopPropagation();
    const session = getSession();
    const video = document.querySelector("[data-camera-preview]");
    if (!session || !video || video.readyState < 2) {
      toast("The camera is not ready yet. Please try again.", true);
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    closeProfileCamera();
    window.pendingProfilePhoto = canvas.toDataURL("image/jpeg", 0.82);
    showProfilePhotoReview(window.pendingProfilePhoto);
    document.querySelector("[data-action='use-profile-picture']")?.focus();
  } else if (action === "retake-profile-picture") {
    event.preventDefault();
    event.stopPropagation();
    const session = getSession();
    if (session) cameraModal(session);
  } else if (action === "use-profile-picture") {
    event.preventDefault();
    event.stopPropagation();
    const session = getSession();
    const photo = window.pendingProfilePhoto;
    if (!session || !photo) {
      toast("Capture a profile picture before saving.", true);
      return;
    }
    window.pendingProfilePhoto = "";
    document.querySelector(".modal-backdrop")?.remove();
    updateProfilePhoto(session, photo);
  } else if (action === "close-account-menu") {
    document.querySelector(".account-menu-backdrop")?.remove();
  } else if (action === "account-theme") {
    const session = getSession();
    if (!session) return;
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(PORTAL_PREFERENCES_KEY) || "{}");
    } catch (error) {
      console.error("Unable to read portal preferences:", error);
      toast("The theme preference could not be updated.", true);
      return;
    }
    const current = readPortalPreferences(session);
    const mode = control.dataset.mode === "dark" ? "dark" : "light";
    saved[preferenceUserKey(session)] = { ...current, mode };
    localStorage.setItem(PORTAL_PREFERENCES_KEY, JSON.stringify(saved));
    applyAccountTheme(session);
    control.focus();
  } else if (action === "select-role") {
    loginRole = control.dataset.role;
    render();
  } else if (action === "logout") {
    event.preventDefault();
    if (typeof clearBackendSession === "function") clearBackendSession();
    localStorage.removeItem(SESSION_KEY);
    location.href = "login.html";
  } else if (action === "show-notifications") {
    const session = getSession();
    if (session) showNotifications(session);
  } else if (action === "student-search") {
    applyStudentSearch();
  } else if (action === "jump-form") {
    document.querySelector("#register-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.querySelector('#register-panel input[name="name"]')?.focus({ preventScroll: true });
  } else if (action === "academic-group") {
    const group = ACADEMIC_GROUPS[Number(control.dataset.group)];
    if (group) {
      showModal(`${group.title} Curriculum`, academicGroupDetails(group));
    }
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
  } else if (action === "attendance-status") {
    const studentId = Number(control.dataset.id);
    const date = control.dataset.date;
    const statuses = ["Present", "Absent", "Late"];
    const record = state.attendance.find(item => item.studentId === studentId && item.date === date);
    if (record) record.status = statuses[(statuses.indexOf(record.status) + 1) % statuses.length];
    else state.attendance.push({ date, className: studentById(studentId)?.className || "", studentId, status: "Present" });
    saveState();
    render();
    toast("Attendance register updated.");
  } else if (action === "delete-timetable") {
    state.timetable = state.timetable.filter(item => item.id !== Number(control.dataset.id));
    saveState();
    render();
    toast("Timetable lesson removed.");
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
    closeProfileCamera();
    window.pendingProfilePhoto = "";
    document.querySelector(".modal-backdrop")?.remove();
  } else if (action === "dismiss-notice") {
    const settings = state.schoolSettings || {};
    sessionStorage.setItem("unichild-dismissed-notice", `${settings.noticeTitle || ""}|${settings.noticeMessage || ""}|${settings.noticeExpires || ""}`);
    control.closest(".notice-strip")?.remove();
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
  if (event.target.matches("[data-student-search]")) applyStudentSearch();
  if (event.target.matches('[data-search="student-table"]')) applyFilters();
});
document.addEventListener("change", event => {
  if (event.target.matches("[data-filter-class], [data-filter-status]")) applyFilters();
  if (event.target.matches("[data-profile-upload]")) {
    const session = getSession();
    if (!session) return;
    readProfileImage(event.target.files?.[0]).then(photo => {
      document.querySelector(".modal-backdrop")?.remove();
      if (photo) updateProfilePhoto(session, photo);
    }).catch(error => {
      console.error("Unable to upload profile picture:", error);
      toast(error.message || "The profile picture could not be uploaded.", true);
    });
  }
});
window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", render);
