const burger_button = document.querySelector('.header__burger')
const header = document.querySelector('header.header')


burger_button.addEventListener('click', () => {
    header.classList.toggle('active')
})