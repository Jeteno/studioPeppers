export function header() {
   const socialMedia = [
      {
         id: 1,
         image: '../img/icon_fb.svg',
         alt: 'Facebook',
         href: 'http://www.facebook.com',
      },
      {
         id: 2,
         image: '../img/icon_ig.svg',
         alt: 'Instagram',
         href: 'http://www.instagram.com',
      },
      {
         id: 3,
         image: '../img/icon_tw.svg',
         alt: 'Twitter',
         href: 'http://twitter.com',
      },
      {
         id: 4,
         image: '../img/icon_vk.svg',
         alt: 'Vkontakte',
         href: 'http://vk.ru',
      },
      {
         id: 5,
         image: '../img/icon_ok.svg',
         alt: 'Odnoklasniki',
         href: 'http://ok.ru/',
      },
   ];

   const SocialMediaList = document.querySelector('.social-media__list');

   function renderHeader(apiData) {
      let cards = '';
      let result = apiData;
   
      result.forEach(item => {
         const cardBlock = `
            <li class="social-media__list-paragraph" id="${item.id}">
               <a href="${item.href}" class="social-media__list-link" target="_blank">
                  <img src="${item.image}" alt="${item.alt}" class="social-media__list-image">
               </a>
            </li>
         `;
   
         cards += cardBlock;
      });
      
      SocialMediaList.innerHTML = cards;

   };

   renderHeader(socialMedia);

}