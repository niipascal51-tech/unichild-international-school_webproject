let loginRole='student',navId=0;

const PORTALS={'student-portal':'student','teacher-portal':'teacher','admin-dashboard':'admin'};
const LANDING={student:'student-portal.html',teacher:'teacher-portal.html',admin:'admin-dashboard.html'};

// Turns the in-code links (#/about, #/portal/fees) into real file links
const fix=h=>h
  .replace(/href="#\/portal\/([a-z]+)"/g,(m,t)=>`href="${LANDING[(user()||{}).role]||'login.html'}#${t}"`)
  .replace(/href="#\/([a-z-]+)"/g,(m,p)=>`href="${p==='home'?'index':p}.html"`);
const render=h=>{app.innerHTML=fix(h)};

const H={
  async login(d){
    const r=await api('/auth/login',{method:'POST',body:d});
    const want=loginRole==='administrator'?'admin':loginRole;
    if(r.user.role!==want)throw new Error('This is a '+r.user.role+' account. Pick the matching tab to sign in.');
    localStorage.setItem('token',r.token);localStorage.setItem('user',JSON.stringify(r.user));
    location.href=LANDING[r.user.role];
  },
  async enquiry(d,f){await api('/enquiries',{method:'POST',body:d});f.reset();toast('Message sent. We will reply soon.')},
  async student(d){await api('/students',{method:'POST',body:d});toast('Student registered')},
  async teacher(d){d.subjects=csv(d.subjects);d.assignedClasses=csv(d.assignedClasses);await api('/teachers',{method:'POST',body:d});toast('Teacher added')},
  async fee(d){await api('/fees/student/'+d.studentId,{method:'PUT',body:{term:d.term,session:d.session,status:d.status,amountOwed:+d.amountOwed}});toast('Fee status saved')},
  async news(d){await api('/news',{method:'POST',body:d});toast('Post saved')},
  async results(d,f){
    const records=[...f.querySelectorAll('[data-sid]')].filter(i=>i.value!=='').map(i=>({studentId:+i.dataset.sid,score:+i.value}));
    if(!records.length)throw new Error('Enter at least one score');
    await api('/results',{method:'POST',body:{subject:d.subject,term:d.term,session:d.session,records}});toast('Results uploaded');
  }
};

const A={
  logout,
  role:el=>{loginRole=el.dataset.role;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b===el))},
  pdf:el=>pdf(el.dataset.p,el.dataset.i),
  cls:el=>{sessionStorage.setItem('cls',el.value);route()},
  admit:async el=>{await api(`/students/${el.dataset.id}/admit`,{method:'PATCH'});toast('Student admitted');route()},
  acct:async el=>{
    const email=prompt('Student login email');
    const password=prompt('Password (min 8 characters)');
    if(email&&password){await api(`/students/${el.dataset.id}/account`,{method:'POST',body:{email,password}});toast('Login created');route()}
  },
  pub:async el=>{const s=el.closest('tr').children[1].textContent;await api('/news/'+el.dataset.id,{method:'PATCH',body:{status:s==='draft'?'published':'draft'}});route()},
  delnews:async el=>{if(confirm('Delete this post?')){await api('/news/'+el.dataset.id,{method:'DELETE'});route()}},
  gal:el=>{
    document.querySelectorAll('.chips button').forEach(b=>b.classList.toggle('on',b===el));
    document.querySelectorAll('#gal [data-cat]').forEach(c=>c.style.display=(el.dataset.c==='all'||c.dataset.cat===el.dataset.c)?'':'none');
  },
  more:el=>{
    const t=document.querySelector(el.dataset.t);
    [...t.querySelectorAll('.hid')].slice(0,6).forEach(x=>x.classList.remove('hid'));
    if(!t.querySelector('.hid'))el.remove();
  },
  resolve:async el=>{await api('/enquiries/'+el.dataset.id,{method:'PATCH',body:{status:'resolved'}});route()}
};

const guard=fn=>async(...a)=>{try{await fn(...a)}catch(e){toast(e.message,true)}};

document.addEventListener('submit',e=>{
  const f=e.target;if(!f.dataset.h)return;e.preventDefault();
  guard(async()=>{
    await H[f.dataset.h](Object.fromEntries(new FormData(f)),f);
    if(['student','teacher','fee','news'].includes(f.dataset.h))route();
  })();
});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');
  if(!el||el.tagName==='SELECT')return;
  e.preventDefault();guard(()=>A[el.dataset.act](el))();
});
document.addEventListener('change',e=>{
  if(e.target.tagName==='SELECT'&&e.target.dataset.act)guard(()=>A[e.target.dataset.act](e.target))();
});

// Events page (events.html)
async function eventsPage(){
  const e=await api('/events').catch(()=>[]);
  return shell(hero('School Events Calendar','Dates for meetings, exams, holidays and celebrations.','Events')+sec('Upcoming events',events(e)));
}

async function route(){
  const id=++navId,page=document.body.dataset.page||'home',u=user();
  // logout() and expired sessions set this hash
  if(location.hash.startsWith('#/login')){location.href='login.html';return}
  try{
    if(page==='login'){loginRole='student';login();app.innerHTML=fix(app.innerHTML);return}
    if(PORTALS[page]){
      if(!u||!localStorage.getItem('token')||u.role!==PORTALS[page]){location.href='login.html';return}
      render('<p class="wrap muted">Loading...</p>');
      const h=await portal(u,location.hash.slice(1));
      if(id===navId)render(h);
      return;
    }
    render(shell('<p class="wrap muted">Loading...</p>'));
    const h=page==='events'?await eventsPage():await pub(page);
    if(id===navId&&h)render(h);
  }catch(e){
    if(id!==navId)return;
    const out=PORTALS[page]?' <a href="#/login">Log in again</a>':'';
    render(shell(`<div class="wrap"><p>${esc(e.message)}${out}</p></div>`));
  }
}
addEventListener('hashchange',route);
route();