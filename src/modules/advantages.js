export function advantages() {
   const advantagesContent = [
      {
         image: '../img/like.svg',
         alt: 'Like',
         title: 'Только лучшее',
         subtitle: 'Всегда актуальные акции и скидки у вас в телефоне',
      },
      {
         image: '../img/geo.svg',
         alt: 'Geo',
         title: 'Все рядом',
         subtitle: 'Находите ближайшие акции на карте рядом с вами.',
      },
      {
         image: '../img/bell.svg',
         alt: 'Bell',
         title: 'Уведомления',
         subtitle: 'Подписывайтесь только на то, что вас интересует и всегда будьте',
      },
      {
         image: '../img/sheet.svg',
         alt: 'Sheet',
         title: 'Каталог',
         subtitle: 'Огромный каталог с информацией о магазинах, брендах и ТЦ всегда',
      },
   ];

   const advantagesConteiner = document.querySelector('.advantages__conteiner');

   function renderAdvantages(apiData) {
      let cards = '';
      let result = apiData;
   
      result.forEach(item => {
         const cardBlock = `
            <div class="advantages__card" >
               <div class="advantages__card-image">
                  <img src="${item.image}" alt="${item.alt}" class="advantages__card-img">
               </div>
               <div class="advantages__card-text-title">
                  <h2 class="advantages__card-title">
                     ${item.title}
                  </h2>
               </div>
               <div class="advantages__card-text-subtitle">
                  <p class="advantages__card-subtitle">
                     ${item.subtitle}
                  </p>
               </div>
            </div>
         `;
   
         cards += cardBlock;
      });
      
      advantagesConteiner.innerHTML = cards;

   };

   renderAdvantages(advantagesContent);
}