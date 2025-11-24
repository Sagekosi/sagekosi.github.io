// Small script to toggle mobile navigation and set year
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  }
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav if open
        if(nav && nav.classList.contains('show')){ nav.classList.remove('show'); btn.setAttribute('aria-expanded', 'false'); }
      }
    });
  });

  // Project filtering
  var filters = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('.project-tile');
  function applyFilter(filter){
    filters.forEach(function(f){ f.classList.toggle('active', f.getAttribute('data-filter')===filter); });
    projects.forEach(function(p){
      var type = p.getAttribute('data-type');
      if(filter==='all' || type===filter){ p.style.display = ''; }
      else { p.style.display = 'none'; }
    });
  }
  filters.forEach(function(f){ f.addEventListener('click', function(){ applyFilter(this.getAttribute('data-filter')); }); });

  // Modal for case studies
  var modal = document.createElement('div');
  modal.id = 'case-modal';
  modal.innerHTML = '\n    <div class="modal-overlay" tabindex="-1">\n      <div class="modal-content" role="dialog" aria-modal="true">\n        <button class="modal-close" aria-label="Close">✕</button>\n        <div class="modal-body">\n          <h3 class="modal-title"></h3>\n          <p class="modal-meta"></p>\n          <p class="modal-desc"></p>\n        </div>\n      </div>\n    </div>\n  ';
  document.body.appendChild(modal);
  var modalOverlay = modal.querySelector('.modal-overlay');
  var modalClose = modal.querySelector('.modal-close');
  var modalTitle = modal.querySelector('.modal-title');
  var modalMeta = modal.querySelector('.modal-meta');
  var modalDesc = modal.querySelector('.modal-desc');

  function openModalFromTile(tile){
    var title = tile.dataset.title || '';
    var role = tile.dataset.role || '';
    var year = tile.dataset.year || '';
    var desc = tile.dataset.desc || '';
    modalTitle.textContent = title;
    modalMeta.textContent = role + (year?(' • '+year):'');
    modalDesc.textContent = desc;
    modalOverlay.classList.add('open');
    modalOverlay.focus();
  }

  function closeModal(){ modalOverlay.classList.remove('open'); }

  document.addEventListener('click', function(e){
    if(e.target.matches('.case-btn') || e.target.closest('.project-tile')){
      var tile = e.target.closest('.project-tile');
      if(tile){ openModalFromTile(tile); }
    }
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e){ if(e.target===modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });

});

// Contact form: open user's mail client with prefilled subject/body
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  var status = document.getElementById('cf-status');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var msg = document.getElementById('cf-message').value.trim();
    if(!name || !email || !msg){
      if(status) status.textContent = 'Please fill all fields.';
      return;
    }
    // Prepare mailto
    var to = 'you@example.com';
    var subject = encodeURIComponent('Website message from ' + name);
    var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
    var mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    // Open mail client
    window.location.href = mailto;
    if(status) status.textContent = 'Opening your mail client...';
  });
});
