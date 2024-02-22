function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function showWhenVisible(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in');
    }
  }
  
  function initializeScrollAnimation() {
    var footer = document.querySelector('footer');
    showWhenVisible(footer);
  
    window.addEventListener('scroll', function() {
      showWhenVisible(footer);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimation();
  });