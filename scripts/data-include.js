// JavaScript Document
document.querySelectorAll('[data-include]').forEach(async el => {
    try {
      const res = await fetch(el.getAttribute('data-include'), { cache: 'no-store' });
      el.innerHTML = await res.text();
    } catch (e) {
      console.error('Include failed:', e);
    }
  });