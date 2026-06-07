const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const AllLinks = document.querySelectorAll('.item-nav');

AllLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})