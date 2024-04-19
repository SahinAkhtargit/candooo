// document.addEventListener('DOMContentLoaded', function() {
//     const menuButton = document.getElementById('menuButton');
//     const navigationItems = document.querySelectorAll('.navigation-items');

//     menuButton.addEventListener('click', function() {
//         navigationItems.forEach(item => {
//             item.classList.toggle('show');
//             console.log(" button click");
//         });
//     });
// });

const $ = el => document.querySelector(el);
const activeClass = 'active',
      header = $('.web-header'),
      button = $('button');
      

button.addEventListener('click', () => {
  header.classList.toggle(activeClass);
})
















