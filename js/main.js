const nav = document.querySelector('.nav-main');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-main__item')

const handleNav = () => {
    nav.classList.toggle('nav-main--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('.nav-main--active')
        })
    })

    handleNavItemsAnimaton();
}

const handleNavItemsAnimaton = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}



navBtn.addEventListener('click', handleNav)