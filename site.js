const sectionNav = document.querySelector('.section-nav');
const tabs = [...sectionNav.querySelectorAll('a')];
const panels = [...document.querySelectorAll('.panel')];
sectionNav.setAttribute('role', 'tablist');
tabs.forEach(tab => {
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', tab.hash.slice(1));
});
panels.forEach(panel => {
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
  panel.tabIndex = 0;
});
function selectPanel(panel) {
  panels.forEach(item => { item.hidden = item !== panel; });
  tabs.forEach(tab => {
    const selected = tab.hash === `#${panel.id}`;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
}
function syncLocation() {
  let target;
  try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Fall back to research for malformed fragments. */ }
  const panel = target?.closest('.panel') || panels[0];
  selectPanel(panel);
  if (target && target !== panel) requestAnimationFrame(() => target.scrollIntoView());
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const panel = document.getElementById(tab.hash.slice(1));
    selectPanel(panel);
    if (location.hash !== tab.hash) history.pushState(null, '', tab.hash);
    panel.scrollIntoView();
  });
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  });
});
window.addEventListener('hashchange', syncLocation);
syncLocation();

const dialog = document.querySelector('#figure-dialog');
document.querySelectorAll('.thumb[data-caption]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !dialog.showModal) return;
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

// Use a separate tracker for the new site. Local previews never send visits.
// It is mounted once, outside the tabs, so tab changes do not load it again.
if (location.hostname === 'amin-mansouri.github.io') {
  document.querySelector('#visitors').hidden = false;
  const script = document.createElement('script');
  script.id = 'mapmyvisitors';
  script.async = true;
  script.src = 'https://mapmyvisitors.com/map.js?d=sr1avcZUfD-ooNBQaQGc5ihPMsVSOxUhsLOpfMC1Uck&cl=fafbf9&w=a';
  document.querySelector('#visitor-map').append(script);
}
