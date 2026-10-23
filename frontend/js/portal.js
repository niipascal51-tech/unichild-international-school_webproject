const MENU={student:['overview'],teacher:['overview','results'],admin:['dashboard','students','teachers','fees','news','enquiries']};

const portalShell=(u,tab,h)=>`<div class="portal"><aside class="side"><div class="logo">UNICHILD</div>
${MENU[u.role].map(t=>`<a class="${t===tab?'on':''}" href="#/portal/${t}">${cap(t)}</a>`).join('')}<a href="#" data-act="logout" style="margin-top:auto">Log out</a></aside>
<main class="main"><h2>${esc(u.name)}</h2><p class="muted">${cap(u.role)} · ${fmt(new Date())}</p>${h}</main></div>`;

const table=(heads,rows)=>`<div class="tw"><table><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr>${rows.join('')||`<tr><td colspan="${heads.length}" class="muted">Nothing here yet.</td></tr>`}</table></div>`;

async function portal(u,tab){
  tab=MENU[u.role].includes(tab)?tab:MENU[u.role][0];
  let h='';
  if(u.role==='student'){
    const [me,res,fee,news,ev]=await Promise.all([api('/students/me'),api('/results/me').catch(()=>null),api('/fees/me').catch(()=>null),api('/news?limit=3'),api('/events')]);
    h=`<p>${esc(me.className)} · ${esc(me.admissionNumber||'Awaiting admission number')}</p><div class="kpis"><div class="card kpi"><small>Fee status</small><b>${esc((fee?.overallStatus||'unavailable').replace('_',' '))}</b></div>
    <div class="card kpi"><small>Average</small><b>${res?.summary?.average??'n/a'}</b></div></div><div class="two"><div class="card"><h3>My results</h3>
    ${table(['Subject','Term','Score','Grade','Remark'],list(res?.results).map(r=>`<tr><td>${esc(r.subject)}</td><td>${esc(r.term)}</td><td>${r.score}</td><td><b>${r.grade}</b></td><td>${esc(r.remark)}</td></tr>`))}
    <button class="btn y" data-act="pdf" data-p="/results/me/pdf">Download report card</button> <button class="btn o" data-act="pdf" data-p="/results/me/pdf" data-i="1">Print</button></div>
    <div><div class="card"><h3>Fees</h3>${list(fee?.records).map(r=>`<p>${esc(r.term)}: <span class="tag ${r.status==='owing'?'bad':''}">${r.status.replace('_',' ')}</span> ${r.amountOwed?'GHS '+r.amountOwed:''}</p>`).join('')||'<p class="muted">No records yet.</p>'}</div>
    <div class="card" style="margin-top:14px"><h3>Announcements</h3>${list(news).map(n=>`<p><small>${fmt(n.publishedAt)}</small><br>${esc(n.title)}</p>`).join('')}</div>
    <div class="card" style="margin-top:14px"><h3>Events</h3>${events(ev)}</div></div></div>`;
  }else if(u.role==='teacher'){
    const me=await api('/teachers/me'),cls=me.assignedClasses||[];
    if(tab==='overview'){
      const s=list(await api('/students'));
      h=`<div class="kpis"><div class="card kpi"><small>My students</small><b>${s.length}</b></div><div class="card kpi"><small>Staff ID</small><b style="font-size:18px">${esc(me.staffId)}</b></div></div>
      ${table(['Admission no.','Name','Class','Guardian'],s.map(x=>`<tr><td>${esc(x.admissionNumber)}</td><td>${esc(x.firstName+' '+x.lastName)}</td><td>${esc(x.className)}</td><td>${esc(x.guardianPhone)}</td></tr>`))}`;
    }else{
      const c=sessionStorage.getItem('cls')||cls[0],s=c?list(await api('/students?status=admitted&className='+encodeURIComponent(c))):[];
      h=`<div class="card"><h3>Upload results</h3><form data-h="results"><div class="row"><div><label>Class</label><select name="className" data-act="cls">${opts(cls).replace(`<option>${esc(c)}`,`<option selected>${esc(c)}`)}</select></div>
      <div><label>Subject</label><select name="subject">${opts(me.subjects||[])}</select></div><div><label>Term</label><select name="term">${opts(TERMS)}</select></div><div><label>Session</label><input name="session" value="${SESSION}"></div></div>
      ${table(['Student','Score (0 to 100)'],s.map(x=>`<tr><td>${esc(x.firstName+' '+x.lastName)}</td><td><input type="number" min="0" max="100" data-sid="${x.id}"></td></tr>`))}<button class="btn y">Submit results</button></form></div>`;
    }
  }else{
    if(tab==='dashboard'){
      const [s,t,q]=await Promise.all([api('/students'),api('/teachers'),api('/enquiries?status=new')]);
      h=`<div class="kpis">${[['Students',list(s).length],['Pending admission',list(s).filter(x=>x.status==='pending').length],['Teachers',list(t).length],['New enquiries',list(q).length]].map(k=>`<div class="card kpi"><small>${k[0]}</small><b>${k[1]}</b></div>`).join('')}</div>`;
    }else if(tab==='students'){
      const s=list(await api('/students'));
      h=`<div class="two"><div>${table(['No.','Name','Class','Status','Actions'],s.map(x=>`<tr><td>${esc(x.admissionNumber||'-')}</td><td>${esc(x.firstName+' '+x.lastName)}</td><td>${esc(x.className)}</td><td><span class="tag ${x.status==='pending'?'bad':''}">${x.status}</span></td>
      <td>${x.status==='pending'?`<button class="btn s" data-act="admit" data-id="${x.id}">Admit</button>`:!x.userId?`<button class="btn s" data-act="acct" data-id="${x.id}">Create login</button>`:''}</td></tr>`))}</div>
      <form class="card" data-h="student"><h3>Register student</h3><label>First name</label><input name="firstName" required><label>Last name</label><input name="lastName" required><label>Date of birth</label><input name="dateOfBirth" type="date" required>
      <label>Gender</label><select name="gender"><option>male</option><option>female</option></select><label>Class</label><select name="className">${opts(CLASSES)}</select><label>Guardian name</label><input name="guardianName" required><label>Guardian phone</label><input name="guardianPhone" required><br><br><button class="btn y">Save student</button></form></div>`;
    }else if(tab==='teachers'){
      const t=list(await api('/teachers'));
      h=`<div class="two"><div>${table(['Staff ID','Name','Classes'],t.map(x=>`<tr><td>${esc(x.staffId)}</td><td>${esc(x.name)}</td><td>${esc((x.assignedClasses||[]).join(', '))}</td></tr>`))}</div>
      <form class="card" data-h="teacher"><h3>Add teacher</h3><label>Name</label><input name="name" required><label>Email</label><input name="email" type="email" required><label>Password (min 8)</label><input name="password" minlength="8" required><label>Phone</label><input name="phone">
      <label>Subjects (comma separated)</label><input name="subjects"><label>Assigned classes (comma separated, exact spelling)</label><input name="assignedClasses"><br><br><button class="btn y">Save teacher</button></form></div>`;
    }else if(tab==='fees'){
      const [f,s]=await Promise.all([api('/fees'),api('/students?status=admitted')]);
      h=`<div class="two"><div>${table(['Student','Term','Status','Owed'],list(f).map(x=>`<tr><td>${esc(x.studentName||x.studentId)}</td><td>${esc(x.term)}</td><td><span class="tag ${x.status==='owing'?'bad':''}">${x.status.replace('_',' ')}</span></td><td>${x.amountOwed||0}</td></tr>`))}</div>
      <form class="card" data-h="fee"><h3>Set fee status</h3><label>Student</label><select name="studentId">${list(s).map(x=>`<option value="${x.id}">${esc(x.firstName+' '+x.lastName)}</option>`).join('')}</select>
      <label>Term</label><select name="term">${opts(TERMS)}</select><label>Session</label><input name="session" value="${SESSION}"><label>Status</label><select name="status"><option>owing</option><option>not_owing</option></select>
      <label>Amount owed (GHS)</label><input name="amountOwed" type="number" min="0" value="0"><br><br><button class="btn y">Save</button></form></div>`;
    }else if(tab==='news'){
      const n=list(await api('/news/admin/all'));
      h=`<div class="two"><div>${table(['Title','Status','Actions'],n.map(x=>`<tr><td>${esc(x.title)}</td><td>${x.status}</td><td><button class="btn s" data-act="pub" data-id="${x.id}">${x.status==='draft'?'Publish':'Unpublish'}</button> <button class="btn s o" data-act="delnews" data-id="${x.id}">Delete</button></td></tr>`))}</div>
      <form class="card" data-h="news"><h3>Post announcement</h3><label>Title</label><input name="title" maxlength="200" required><label>Body</label><textarea name="body" rows="5" required></textarea><label>Status</label><select name="status"><option>published</option><option>draft</option></select><br><br><button class="btn y">Save post</button></form></div>`;
    }else{
      const q=list(await api('/enquiries'));
      h=table(['Date','From','Subject','Message','Status'],q.map(x=>`<tr><td>${fmt(x.createdAt)}</td><td>${esc(x.name)}<br><small>${esc(x.email)}</small></td><td>${esc(x.subject)}</td><td>${esc(x.message)}</td>
      <td>${x.status}${x.status!=='resolved'?` <button class="btn s" data-act="resolve" data-id="${x.id}">Resolve</button>`:''}</td></tr>`));
    }
  }
    return portalShell(u,tab,h);
}