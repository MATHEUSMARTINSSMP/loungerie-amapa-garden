(function(){
  'use strict';
  var topBar = document.querySelector('.header-sticky');
  var anchors = document.querySelectorAll('a[href^="#"]');

  /* Smooth scroll for anchor links */
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

  /* Header scroll effect */
  var lastScroll = 0;
  window.addEventListener('scroll', function(){
    if (!topBar) return;
    var y = window.scrollY;
    if (y > 12) topBar.classList.add('scrolled');
    else topBar.classList.remove('scrolled');
    lastScroll = y;
  }, { passive: true });

  /* Scroll-triggered reveal animations */
  var reveals = document.querySelectorAll('.hero-split,.location-contact,.section-generic,.footer-minimal');
  reveals.forEach(function(el){ el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el){ observer.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('visible'); });
  }
})();