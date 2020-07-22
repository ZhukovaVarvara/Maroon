let buttonMenu = document.querySelector('.header__menu');
let headerBlock = document.querySelector('.header');

buttonMenu.addEventListener('click', function() {
    headerBlock.classList.toggle('header--padding');
})