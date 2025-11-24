(function(){
  // Small SPA helpers: render projects, filter, contact form
  const projects = [
    {id:1,title:'Aurora UI Kit',desc:'A micro-animations driven design system for expressive apps.',tags:['ui']},
    {id:2,title:'Flux Commerce',desc:'Adaptive e-commerce front-end with advanced UX patterns.',tags:['web']},
    {id:3,title:'Dev CLI Toolkit',desc:'A tiny suite of developer tooling as web utilities.',tags:['tooling']},
    {id:4,title:'Motion Landing',desc:'Interactive landing that experiments with parallax & scroll.',tags:['web','ui']}
  ];

  const projectsEl = document.getElementById('projects');
  function render(list){
    projectsEl.innerHTML = '';
    if(!list.length) projectsEl.innerHTML = '<div class="status">No projects found.</div>';
    list.forEach(p=>{
      const el = document.createElement('article');
      el.className='card project';
      el.innerHTML = `
        <div style="flex:1;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:1rem;display:flex;flex-direction:column;justify-content:flex-end;">
          <div class="meta">
            <h3 class="title">${p.title}</h3>
            <p class="muted" style="color:var(--muted)">${p.desc}</p>
            <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          </div>
        </div>`;
      projectsEl.appendChild(el);
    })
  }
  render(projects);

  // filtering
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      if(f==='*') render(projects);
      else render(projects.filter(p=>p.tags.includes(f)));
    })
  });

  // pointer trail removed: use native cursor only

  // contact form handling (client-only, replace action with Formspree/Netlify endpoint in README)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    status.textContent = 'Sending...';
    const data = {name:form.name.value,email:form.email.value,message:form.message.value};
    if(!data.name || !data.email || !data.message){ status.textContent='Please fill all fields.'; return }

    // Demo: attempt to POST to Formspree (user should replace endpoint). Fallback: local success.
    try{
      const endpoint = 'https://formspree.io/f/xpweqrlg'; // configured Formspree endpoint
      // Use FormData and request JSON response (Formspree accepts this)
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      const res = await fetch(endpoint, {method:'POST', body: formData, headers: {'Accept': 'application/json'}});
      if(res.ok){
        status.textContent = 'Thanks — message sent!';
        form.reset();
      } else {
        // fallback: local success message
        status.textContent = 'Message queued locally — replace Formspree endpoint to enable email.';
        form.reset();
      }
    }catch(err){
      status.textContent = 'Offline: message saved locally (demo).';
      form.reset();
    }
  });

  // small niceties
  document.getElementById('year').textContent = new Date().getFullYear();
  // smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })
})();
