document.addEventListener('DOMContentLoaded', () => {
  const basePath = location.hostname.includes('github.io') ? '/JARKOCV1.github.io/' : '../';

  const targetImage = document.querySelector('.header-image-container img');
  let i = 0;

  if (typeof album !== 'undefined' && Array.isArray(album) && targetImage) {
    targetImage.addEventListener('click', () => {
      targetImage.style.opacity = 0;

      setTimeout(() => {
        i = (i + 1) % album.length;
        targetImage.src = basePath + album[i];
        targetImage.style.opacity = 1;
      }, 300);
    });
  } else {
    console.error('targetImage not found or album is missing');
  }
});