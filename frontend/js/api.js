const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list=x=>Array.isArray(x)?x:(x?.items||x?.data||x?.rows||[]);
const cap=s=>s[0].toUpperCase()+s.slice(1);
const csv=s=>(s||'').split(',').map(x=>x.trim()).filter(Boolean);
const user=()=>JSON.parse(localStorage.getItem('user')||'null');
const opts=a=>a.map(o=>`<option>${esc(o)}</option>`).join('');
const fmt=d=>d?new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'';

function toast(t,bad){
  const e=document.getElementById('toast');
  e.textContent=t;e.className=bad?'bad':'';e.style.display='block';
  setTimeout(()=>e.style.display='none',3500);
}
function logout(){localStorage.clear();location.hash='#/login'}

// Public endpoints never get the token, so a stale token cannot break browsing
const isPublic=(p,m)=>p==='/auth/login'||(m==='POST'&&p==='/enquiries')||
  (m==='GET'&&/^\/(news(\?|\/\d+$|$)|events|content|documents|gallery)/.test(p));

async function api(path,{method='GET',body,form,raw}={}){
  const h={},t=localStorage.getItem('token'),open=isPublic(path,method);
  if(t&&!open)h.Authorization='Bearer '+t;
  if(body)h['Content-Type']='application/json';
  let r;
  try{
    r=await fetch(API+path,{method,headers:h,body:form||(body?JSON.stringify(body):undefined)});
  }catch{
    throw new Error('Cannot reach the server at '+API+'. Check that the backend is running and that CORS allows this site.');
  }
  if(r.status===401&&!open){logout();throw new Error('Session expired. Log in again.')}
  if(raw&&r.ok)return r.blob();
  const d=await r.json().catch(()=>({}));
  if(!r.ok)throw new Error(d.message||(d.errors||[]).map(e=>e.msg).join(', ')||'Request failed');
  return d;
}

async function pdf(path,inline){
  // Open the tab first, while the click is still fresh, or the browser blocks it
  const w=inline?window.open('','_blank'):null;
  if(inline&&!w){toast('Allow pop-ups for this site to print',true);return}
  try{
    const b=await api(path+(inline?'?disposition=inline':''),{raw:1}),u=URL.createObjectURL(b);
    if(inline)w.location.href=u;
    else{const a=document.createElement('a');a.href=u;a.download='report-card.pdf';a.click()}
  }catch(e){if(w)w.close();throw e}
}