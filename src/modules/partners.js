export function slider() {
   let offset = 0;
   let initialX = null;

   const partnersSlides = document.querySelector('.partners__slides');

   partnersSlides.addEventListener('touchstart', (e) => {
      initialX = e.touches[0].clientX;
   });

   partnersSlides.addEventListener('touchmove', (e) => {
      if (!initialX) {
         return;
      }

      const currentX = e.touches[0].clientX;
      const diffX = currentX - initialX;

      offset -= diffX;
      partnersSlides.style.left = offset + 'px';

      initialX = currentX;
   });

   partnersSlides.addEventListener('touchend', (e) => {
      initialX = null;

      if (offset > 0) {
         offset = 0;
      } else if (offset < -1200) {
         offset = -1200;
      }
   });

   document.querySelector('.partners__slider-prev').addEventListener('click', () => {
      offset += 200;
      if (offset >= 200) {
         offset -= 1200;
      }
      partnersSlides.style.left = offset + 'px';
   });

   document.querySelector('.partners__slider-next').addEventListener('click', () => {
      offset -= 200;
      if (offset < -1200) {
         offset = 0;
      }
      partnersSlides.style.left = offset + 'px';
   });
}