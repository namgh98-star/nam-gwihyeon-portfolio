const reader = document.querySelector('#deck-reader');
const controls = document.querySelector('.deck-controls');
const zoom = document.querySelector('#deck-zoom');
const slides = [...reader.querySelectorAll('.slide')];
const mobile = matchMedia('(max-width: 760px)');

function fitSlides() {
  const fit = Math.min(1, (reader.clientWidth - 12) / 1440);
  const enlarged = mobile.matches && zoom.getAttribute('aria-pressed') === 'true';
  reader.style.setProperty('--z', enlarged ? Math.max(fit, .7) : fit);
}

zoom.addEventListener('click', () => {
  const top = controls.getBoundingClientRect().bottom;
  const slide = slides.find((page) => page.getBoundingClientRect().bottom > top);
  const position = slide?.getBoundingClientRect();
  const progress = position ? Math.max(0, (top - position.top) / position.height) : 0;
  const enlarged = zoom.getAttribute('aria-pressed') !== 'true';
  zoom.setAttribute('aria-pressed', String(enlarged));
  zoom.textContent = enlarged ? '전체 보기' : '크게 보기';
  fitSlides();
  if (!enlarged) reader.scrollLeft = 0;
  if (slide) {
    const current = slide.getBoundingClientRect();
    window.scrollBy(0, current.top + current.height * progress - top);
  }
});

zoom.hidden = false;
new ResizeObserver(fitSlides).observe(reader);
fitSlides();
