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
});
