const dialog = document.querySelector('#figure-dialog');
document.querySelectorAll('.thumb[data-caption]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const image = dialog.querySelector('img');
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    dialog.querySelector('#figure-caption').textContent = link.dataset.caption;
    dialog.showModal();
  });
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelector('a[href="#earlier"]').addEventListener('click', () => {
  document.querySelector('#earlier').open = true;
});
