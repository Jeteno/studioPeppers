export function presentationSlider() {
   let currentIndex = 1;

   const presentationContentNav = [
      {
         title: 'Избранное',
      },
      {
         title: 'Профиль акции',
      },
      {
         title: 'Подписки',
      },
      {
         title: 'Карта',
      },
      {
         title: 'Моя лента',
      },
   ];
   const presentationContentText = [
      {
         slide: '../img/phone2_favorites.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
         subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
      },
      {
         slide: '../img/phone2_actions.jpg',
         title: 'Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция.',
         subtitle: 'Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.',
      },
      {
         slide: '../img/phone2_subsribtions.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim  tenetur necessitatibus!',
         subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
      },
      {
         slide: '../img/phone2_map.jpg',
         title: 'Lorem ipsum  adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
         subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim tenetur necessitatibus!',
      },
      {
         slide: '../img/phone2_list.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
         subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!',
      },
   ];

   const presentationNav = document.querySelector('.presentation-slider__body-list');
   const presentationTitle = document.getElementById('presentation-slider__title');
   const presentationSubTitle = document.getElementById('presentation-slider__subtitle');

   function renderPresentationNav(apiData) {
      let cards = '';

      apiData.forEach((item, index) => {
         const cardBlock = `
            <li class="presentation-slider__body-paragraph">
               <a href="#" class="presentation-slider__body-paragraph-link">
                  ${item.title}
               </a>
            </li>
         `;

         cards += cardBlock;
      });

      presentationNav.innerHTML = cards;
   }

   function setActiveParagraph(index) {
       presentationNav
          .querySelectorAll('.presentation-slider__body-paragraph-link')
          .forEach(dot => dot.classList.remove('active-paragraph'));
 
       presentationNav
          .querySelectorAll('.presentation-slider__body-paragraph-link')[index]
          .classList.add('active-paragraph');
   }
 
   function updateTitleSubtitle(index) {
       presentationTitle.innerText = presentationContentText[index].title;
       presentationSubTitle.innerText = presentationContentText[index].subtitle;
   }

   function renderImages(index) {
      const imageContainer = document.querySelector('.presentation-slider__slide-body-img');
      imageContainer.innerHTML = '';

      for (let i = index; i < presentationContentText.length; i++) {
         if (i >= 0 && i < presentationContentText.length) {
            const image = document.createElement('img');
            image.src = presentationContentText[i].slide;
            image.alt = 'Slide';
            image.classList.add('presentation-slider__slide-img');

            imageContainer.appendChild(image);  
         }
      }
   }
    
   function handleClick(event) {
       const target = event.target;
       if (target.classList.contains('presentation-slider__body-paragraph-link')) {
         const index = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);
         currentIndex = index;
         setActiveParagraph(index);
         updateTitleSubtitle(index);
         renderImages(index);
         event.preventDefault();
      }
   }
 
   presentationNav.addEventListener('click', handleClick);
 
   renderPresentationNav(presentationContentNav);
   setActiveParagraph(currentIndex);
   updateTitleSubtitle(currentIndex);
   renderImages(currentIndex);
}

