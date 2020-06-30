// ----- ES5 -----
// "use strict";
// (function () {
//   var pickFont = function pickFont() {
//     return ['SS01', 'SS02', 'SS03', 'SS04'][Math.floor(Math.random() * 4)];
//   };

//   var elements = document.body.querySelectorAll('div, p, h1, h2, h3, h4, h5, h6, li, span, button, a');

//   var styleText = function styleText(el) {
//     el.innerHTML = el.textContent.split('').map(function (letter) {
//       return letter.match(/[A-Z0-9]|[^A-Za-z0-9 ]/g) ? "<span style=\"font-family:".concat(pickFont(), ";\">").concat(letter, "</span>") : letter;
//     }).join('');
//   };

//   elements.forEach(styleText);
// })();

// ----- ES6 -----
// (function () {
//   const pickFont = () => ['SS01', 'SS02', 'SS03', 'SS04'][Math.floor(Math.random() * 4)];
//   const elements = document.body.querySelectorAll(
//     'div, p, h1, h2, h3, h4, h5, h6, li, span, button, a'
//   );

//   const styleText = (el) => {
//     el.innerHTML = el.textContent
//       .split('')
//       .map((letter) =>
//         letter.match(/[A-Z0-9]|[^A-Za-z0-9 ]/g)
//           ? `<span style="font-family:${pickFont()};">${letter}</span>`
//           : letter
//       )
//       .join('');
//   };

//   elements.forEach(styleText);
// })();


// ----- ES5 minified -----
(function(){var a=function(){return["SS01","SS02","SS03","SS04"][Math.floor(4*Math.random())]},b=document.body.querySelectorAll("div, p, h1, h2, h3, h4, h5, h6, li, span, button, a");b.forEach(function(b){b.innerHTML=b.textContent.split("").map(function(b){return b.match(/[A-Z0-9]|[^A-Za-z0-9 ]/g)?"<span style=\"font-family:".concat(a(),";\">").concat(b,"</span>"):b}).join("")})})();