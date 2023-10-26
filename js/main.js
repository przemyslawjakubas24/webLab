const burgerBtn = document.querySelector('.burger')
const navList = document.querySelector('.nav-main__list')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burger--active')
	navList.classList.toggle('nav-main__list--active')
})
