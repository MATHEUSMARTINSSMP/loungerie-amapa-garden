(function(){
  'use strict';
  var topBar = document.querySelector('.header-sticky');
  var anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function(link){
    link.addEventListener('click', function(e){
      var href = link.getAttribute('href') || '';
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('scroll', function(){
    if (!topBar) return;
    if (window.scrollY > 8) topBar.style.boxShadow = '0 10px 24px rgba(31,23,40,.08)';
    else topBar.style.boxShadow = 'none';
  }, { passive: true });
})();