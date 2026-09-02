(function () {
  function revealStaticWixContent() {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      img.setAttribute('loading', 'eager');
    });
    if (location.pathname.endsWith('/blog.html') || location.pathname.endsWith('/blog') || location.pathname.endsWith('/games.html') || location.pathname.endsWith('/games')) {
      document.querySelectorAll('[data-hook="item-container"]').forEach(function (item) {
        item.style.setProperty('display', 'block', 'important');
        item.style.setProperty('opacity', '1', 'important');
      });
      document.querySelectorAll('[data-id="c766aef4-6405-4807-97bd-06973044414a"]').forEach(function (item) {
        item.style.setProperty('display', 'none', 'important');
      });
    }
  }
  revealStaticWixContent();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealStaticWixContent);
  }
  window.addEventListener('load', revealStaticWixContent);
  window.setTimeout(revealStaticWixContent, 300);
  window.setTimeout(revealStaticWixContent, 1500);
})();
