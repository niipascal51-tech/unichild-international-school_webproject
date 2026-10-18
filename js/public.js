const NAV=[['home','Home'],['about','About Us'],['academics','Academics'],['admissions','Admissions'],['news','News &amp; Blog'],['events','Events'],['departments','Departments'],['games','Games &amp; Competitions'],['gallery','Gallery'],['contact','Contact Us']];
const cur=()=>document.body.dataset.page||'home';

const shell=h=>`<div class="strip"><span>+233 244 891 066 · Unichildschool11@gmail.com · Mon to Fri 6:30 AM to 4:00 PM</span><a href="https://wa.me/233244891066">Chat with Registrar</a></div>
<header class="top"><a class="logo" href="#/home">UNICHILD<small>Lógia Kai Práxeis</small></a>
<nav>${NAV.map(([k,v])=>`<a class="${k===cur()?'on':''}" href="#/${k}">${v}</a>`).join('')}</nav><a class="btn" href="#/login">Portal login</a></header>${h}
<footer class="foot"><div><div class="logo">UNICHILD</div><p>Nurturing global citizens equipped with academic mastery and outstanding character.</p></div>
<div><h3>Academics</h3><a href="#/academics">Creche and Nursery</a><a href="#/academics">Kindergarten</a><a href="#/academics">Primary School</a><a href="#/academics">Junior High School</a></div>
<div><h3>Quick links</h3><a href="#/about">About Us</a><a href="#/admissions">Admissions</a><a href="#/news">News and Blog</a><a href="#/gallery">Photo Gallery</a></div>
<div><h3>Contact</h3><p>IH41 Bletse St. GW-0926-5269, Accra, Ghana<br>+233 244 891 066 / +233 501 234 567<br>Unichildschool11@gmail.com</p></div></footer>
<a class="wa" href="https://wa.me/233244891066">Admissions WhatsApp</a>`;

const hero=(t,s,tag)=>`<section class="hero img">${tag?`<small>${tag}</small>`:''}<h1>${t}</h1>${s?`<p>${s}</p>`:''}</section>`;
const sec=(title,inner,alt)=>`<section class="sec ${alt?'alt':''}"><div class="wrap"><h2>${title}</h2><div class="bar"></div>${inner}</div></section>`;
const cards=a=>`<div class="grid">${a.map(([t,d,x,img])=>`<div class="card">${img?`<img src="${img}" alt="${t}">`:''}<h3>${t}</h3>${x?`<small>${x}</small>`:''}<p>${d}</p></div>`).join('')}</div>`;const cta=(t,s)=>`<section class="cta"><h2>${t}</h2><p>${s}</p><a class="btn" href="#/contact">Apply now</a> <a class="btn o" href="#/admissions">Learn more</a></section>`;
const posts=(a,n=6)=>{const l=list(a);return `<div class="grid" id="posts">${l.map((p,i)=>`<div class="card ${i>=n?'hid':''}"><small>${fmt(p.publishedAt||p.createdAt)}</small><h3>${esc(p.title)}</h3><p class="pre">${esc((p.body||'').slice(0,140))}</p></div>`).join('')||'<p class="muted">Nothing published yet.</p>'}</div>${l.length>n?'<p style="text-align:center"><button class="btn y" data-act="more" data-t="#posts">Load more</button></p>':''}`};
const events=a=>list(a).map(e=>`<div class="ev"><b>${fmt(e.startDate)}</b><span>${esc(e.title)}<br><small>${esc(e.location||e.category)}</small></span></div>`).join('')||'<p class="muted">No upcoming events.</p>';

const VALUES=[['Excellence','Always setting the highest personal and institutional benchmarks.'],['Integrity','Honesty, reliability and moral uprightness in every word we speak.'],['Discipline','Self-control, time management and respect for established procedures.'],['Respect','Polite regard for elders, peers and national symbols.'],['Innovation','STEM, computer literacy and research methods to solve problems.'],['Community','Helpful interaction, environmental stewardship and civic action.']];
const STAGES=[['Creche and Nursery','A safe, joyful setting for communication, coordination and emotional security through guided play.','6 months to 4 years'],['Kindergarten','Systematic learning with early phonics, arithmetic and environmental observation.','4 to 6 years'],['Primary School','Grades 1 to 6 with written and spoken communication, numeracy, science and Ghanaian history.','6 to 12 years'],['Junior High School','Advanced BECE preparation with scientific research, pre-technical design and leadership.','12 to 15 years']];
const SUBJECTS=['Mathematics','English Language','Integrated Science','Social Studies','ICT','French','Creative Arts','Physical Education','Religious and Moral Education','Ghanaian Language and Culture'];
const TERM=[['Term 1 begins','Jan 13, 2026','Welcome assembly and handbook reviews'],['Mid-term exams','Feb 24 to 28, 2026','Progress check across all core subjects'],['Cultural and Sports Day','Apr 17, 2026','Display of words and physical action'],['Term 1 examinations','Apr 20 to 24, 2026','Final assessment and project submissions'],['Term ends','Apr 29, 2026','Academic reports sent home']];
const EXTRA=[['Debate and Public Speaking','Courage, vocabulary and rhetorical skills.'],['Science and STEM Club','Experiments, coding basics and robotics.'],['Cultural Dance and Arts','Ghanaian rhythms, kente weaving and creative expression.'],['Unichild Sports Club','Football, track and camaraderie.'],['Music and Orchestra','Drums, keyboards and group harmony.']];
const STEPS=[['Submit online inquiry','Share basic info to schedule an initial consultation.'],['Complete application form','Fill the standard form at the registrar office.'],['Submit required documents','Birth certificate, academic reports and health records.'],['Interview and assessment','A brief baseline check to place your child in the right grade.'],['Admission decision','Confirm registration details, uniform, books and placement.']];
const FEES=[['Creche','1,200','2,500','800'],['Nursery','1,200','2,500','800'],['Kindergarten','1,200','2,700','800'],['Primary School','1,500','3,200','1,000'],['Junior High (JHS)','1,500','3,800','1,000']];
const FAQ=[['What age groups do you accept?','From 6 months in our Creche, up to 15 years for JHS 3.'],['How do I apply for admission?','Submit an inquiry form, schedule an interview, and the registrar gives final approval.'],['What is the fee structure?','Fees are billed per term. Creche and KG tuition start at GHS 2,500, with optional transport, medical and cafeteria fees.'],['Do you offer transportation?','Yes, scheduled school buses cover East Legon, Adenta, Madina and surrounding Accra areas.'],['What curriculum do you follow?','The standard Ghana Education Service curriculum, enriched with scientific enquiry, language clubs and IT training.']];
const content=async s=>api('/content/'+s).catch(()=>null);

async function pub(p){
  let h='';
  if(p==='home'){
    const [n,e,c]=await Promise.all([api('/news?limit=3').catch(()=>[]),api('/events').catch(()=>[]),content('home')]);
    h=hero(esc(c?.title||'Nurturing Young Minds Through Words and Actions'),esc(c?.body||'A K-12 school in Accra that pairs rigorous modern teaching with rich cultural heritage.'),'Lógia Kai Práxeis')
    +`<div class="wrap center"><p class="quote">Our core purpose is to bridge theoretical intelligence with courageous deeds, producing noble minds ready to shape Ghana and the world.</p></div>
    <section class="stats">${[['12+','Years of excellence'],['850+','Enrolled students'],['45+','Qualified educators'],['100%','JHS pass rate']].map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</section>`
    +sec('Our core values',cards(VALUES.slice(0,4)))+sec('Our educational stages',cards(STAGES),1)
    +sec('Upcoming school events',events(e))+sec('News and academic blogs',posts(n,3),1)+cta('Give your child the foundation of reason and practice','Admissions are open for the 2026/2027 academic year.')
    +sec('What parents say',cards([['Mrs. Abena Boateng','Unichild has been a second home for my kids. The discipline and attention to character are outstanding.','Parent since 2020'],['Mr. Kwesi Mensah','The mix of modern technology and traditional moral values sets this school apart.','Parent of a JHS graduate']]));
  }else if(p==='about'){
    const c=await content('about');
    h=hero('About Unichild International School','Modern scholastic strategies with rigorous values of integrity and courage.','Who we are')
    +sec('Founded with a vision',`<p class="pre">${esc(c?.body||'Unichild International School was established to give children in Accra a modern global baseline in K-12 education, blending the GES curriculum with practical experiments and global standards.')}</p>`)
    +sec('Mission, vision and motto',cards([['Our mission','To nurture well-rounded, confident individuals through a balanced curriculum that values both theory and practical action.'],['Our vision','To become a benchmark K-12 institution in Ghana, known for intellectual prowess and cultural integration.'],['Our motto: Lógia Kai Práxeis','An ancient Greek phrase meaning Words and Actions: learning that lives in real performance.']]),1)
    +sec('Our core values in detail',cards(VALUES))
    +sec('Our leadership team',cards([['Mrs. Evelyn Mensah','20+ years of education leadership.','Principal and Founder'],['Mr. Ebenezer Osei','Administrative standards and student discipline.','Vice Principal'],['Mrs. Cynthia Kwarteng','Curriculum enrichment and teacher training.','Head of Academics'],['Mr. David Alabi','Registration and parent onboarding.','Head of Admissions']]),1)
    +sec('Our facilities',cards([['Modern classrooms','Ventilated, spacious rooms with educational props.'],['Safe playground','Outdoor space for coordination and development.'],['Rich library','Over 5,000 reference books and quiet reading nooks.'],['Computer lab','Modern systems introducing programming and basic computing.']]))+cta('Give your child the foundation of reason and practice','Admissions are open for 2026/2027.');
  }else if(p==='academics'){
    h=hero('Our Academic Programs','Excellent foundation skills, tailored to our motto: Words and Actions.','Scholastic pathways')
    +sec('GES standards enhanced with international best practices','<p>Our curriculum is built around developmental steps from Creche to Junior High, balancing state benchmarks with extra-curricular clubs, languages and computer literacy.</p>')
    +sec('Stages',cards(STAGES),1)+sec('Subjects we offer',`<div class="chips">${SUBJECTS.map(s=>`<span>${s}</span>`).join('')}</div>`)
    +sec('Term dates and calendar highlights',`<div class="tw"><table>${TERM.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table></div>`,1)+sec('Extra-curricular activities',cards(EXTRA));
  }else if(p==='admissions'){
    const d=await api('/documents?category=admissions').catch(()=>[]);
    h=hero('Admissions: K-12 Pathways','Our admissions process is straightforward, transparent and supportive.','Join the Unichild family')
    +sec("Start your child's journey of excellence",'<p>We offer a perfect mix of theoretical focus (Words) and physical outcomes (Actions), with strong BECE preparation from the early years.</p><div class="card"><h3>Mandatory registrar notice</h3><p>The administrator handles all student registration and admission. Students do not admit themselves. Please schedule directly with the administrative team.</p></div>')
    +sec('Our application process',`<div class="grid">${STEPS.map((s,i)=>`<div class="card"><b class="n">${i+1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>`,1)
    +sec('Admission requirements','<ul><li>Original and photocopy of Birth Certificate</li><li>Last three academic term reports (where applicable)</li><li>Four recent passport-size photographs</li><li>Photocopy of parent or guardian valid National ID card</li><li>Immunization and general child health records</li></ul>'+(list(d).length?`<p>${list(d).map(x=>`<a class="btn y" href="${esc(x.downloadUrl)}">${esc(x.title)}</a>`).join(' ')}</p>`:''))
    +sec('Admission fees and tuition (GHS)',`<div class="tw"><table><tr><th>Class level</th><th>Admission</th><th>Tuition / term</th><th>Feeding / term</th></tr>${FEES.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</table></div>`,1)
    +`<section class="cta"><h2>Enrollment is active for 2026/2027</h2><p>Contact our admissions office to book a campus tour.</p><a class="btn" href="tel:+233244891066">Call registrar: +233 244 891 066</a> <a class="btn o" href="mailto:Unichildschool11@gmail.com">Email office</a></section>`;
  }else if(p==='news'){
    const [n,e]=await Promise.all([api('/news').catch(()=>[]),api('/events').catch(()=>[])]),l=list(n),f=l[0];
    h=hero('Unichild News and Blog','Student achievements, general notices and memories from our campus.','Latest updates')
    +(f?sec('Featured story',`<div class="card"><small>${fmt(f.publishedAt)}</small><h3>${esc(f.title)}</h3><p class="pre">${esc(f.body)}</p></div>`):'')
    +`<div class="wrap two"><div><h2>Recent stories</h2>${posts(l.slice(1))}</div><div class="card"><h3>Events calendar</h3>${events(e)}</div></div>`;
  }else if(p==='departments'||p==='games'){
    const c=await content(p);
    h=hero(esc(c?.title||(p==='games'?'Games and Competitions':'Departments')),'','Unichild')+`<div class="wrap"><p class="pre">${esc(c?.body||'This section has not been published yet. The admin can add it from Website Settings.')}</p></div>`;
  }else if(p==='gallery'){
    const g=list(await api('/gallery').catch(()=>[])),cats=['all','building','events','activities','other'];
    h=hero('Life at Unichild','Memories, milestones and student activities on our campus.','Gallery')
    +`<div class="wrap"><div class="chips">${cats.map((c,i)=>`<button class="${i?'':'on'}" data-act="gal" data-c="${c}">${cap(c)}</button>`).join('')}</div>
    <div class="grid" id="gal">${g.map((i,k)=>`<div class="card ${k>=9?'hid':''}" data-cat="${esc(i.category)}"><img src="${esc(i.url)}" alt="${esc(i.caption||'')}"><small>${esc(i.caption||i.category)}</small></div>`).join('')||'<p class="muted">No photos yet.</p>'}</div>
    ${g.length>9?'<p style="text-align:center"><button class="btn y" data-act="more" data-t="#gal">Load more photos</button></p>':''}</div>`;
  }else if(p==='contact'){
    h=hero('Contact Unichild International','Questions about curriculum, admissions or school policies? Reach out to our Accra campus.','Get in touch')
    +`<div class="wrap two"><form data-h="enquiry" class="card"><h3>Send us a message</h3><label>Full name</label><input name="name" required><label>Email address</label><input name="email" type="email" required>
    <label>Phone number</label><input name="phone" placeholder="+233 244 891 066"><label>Subject</label><select name="subject"><option>Admissions and Placement</option><option>Fees and Billing</option><option>Academics</option><option>General Enquiry</option></select>
    <label>Your message (10 to 2000 characters)</label><textarea name="message" rows="5" minlength="10" maxlength="2000" required placeholder="How can we support you?"></textarea><br><br><button class="btn y">Submit inquiry</button></form>
    <div class="card"><h3>Accra campus office</h3><p><b>Address</b><br>IH41 Bletse St. GW-0926-5269, Accra, Ghana</p><p><b>Phone</b><br>+233 244 891 066<br>+233 558 636 562 (Admissions hotline)</p><p><b>Email</b><br>Unichildschool11@gmail.com</p><p><b>Office hours</b><br>Monday to Friday, 6:30 AM to 4:00 PM</p></div></div>`
    +sec('Common admissions questions',FAQ.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join(''),1);
  }else{location.hash='#/home';return null}
  return shell(h);
}

function login(){
  app.innerHTML=`<div class="login"><div class="l"><div class="logo" style="font-size:34px">UNICHILD</div><h1>Lógia Kai Práxeis.</h1><p>Words turning into action. Sign in to your school portal.</p></div>
  <form class="r" data-h="login"><h2>Welcome back</h2>
  <div class="tabs"><button type="button" class="on" data-act="role" data-role="student">Student</button><button type="button" data-act="role" data-role="teacher">Teacher</button><button type="button" data-act="role" data-role="administrator">Administrator</button></div>
  <label>Email</label><input name="email" type="email" required><label>Password</label><input name="password" type="password" required>
  <br><button class="btn y">Sign in</button><p><a href="#/home">Back to website</a></p></form></div>`;
}