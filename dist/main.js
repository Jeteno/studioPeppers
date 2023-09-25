/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
function header() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/header.js */ "./src/modules/header.js");



(0,_src_modules_header_js__WEBPACK_IMPORTED_MODULE_1__.header)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map