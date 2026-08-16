(() => {
  const picture = document.querySelector('.picture-placeholder');
  const image = document.getElementById('predictionImage');
  if (!picture || !image) return;

  const zoomButton = document.createElement('button');
  zoomButton.type = 'button';
  zoomButton.className = 'image-zoom-button';
  zoomButton.textContent = '↗ УВЕЛИЧИТЬ КАРТИНКУ';
  zoomButton.setAttribute('aria-label', 'Увеличить картинку');
  picture.appendChild(zoomButton);

  const overlay = document.createElement('div');
  overlay.className = 'image-lightbox';
  overlay.innerHTML = `
    <div class="image-lightbox-inner" role="dialog" aria-modal="true" aria-label="Увеличенная звёздная картина">
      <button type="button" class="image-lightbox-close" aria-label="Закрыть">✕</button>
      <img class="image-lightbox-img" alt="">
    </div>
  `;
  document.body.appendChild(overlay);

  const enlarged = overlay.querySelector('.image-lightbox-img');
  const closeButton = overlay.querySelector('.image-lightbox-close');

  function openLightbox() {
    enlarged.src = image.src;
    enlarged.alt = image.alt || 'Звёздная картина';
    overlay.classList.add('open');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.classList.remove('lightbox-open');
  }

  zoomButton.addEventListener('click', openLightbox);
  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
  });
})();
