const nav = document.querySelector('.nav-main__list');
const navBtn = document.querySelector('.bars');

const showNav = () => {
    nav.classList.toggle('nav-main__list--active')
}

navBtn.addEventListener('click', showNav) 