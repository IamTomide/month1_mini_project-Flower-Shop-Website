document.querySelectorAll('.today').forEach(el => {
  el.textContent = new Date().toLocaleDateString('en-NG', {
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });
});
