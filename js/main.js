const burgerBtn = document.querySelector('.burger')
const navList = document.querySelector('.nav-main__list')
const sizeNav = document.querySelector('.nav-main__container')
const sizeNavLogo = document.querySelector('.logo')
const sizeNavFont = document.querySelectorAll('.nav-main__item')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burger--active')
	navList.classList.toggle('nav-main__list--active')
})

function handleScroll() {
	if (window.scrollY >= 200) {
		sizeNav.style.padding = '1em'
		sizeNavLogo.style.width = '40px'
		sizeNavFont.forEach(element => {
			element.style.fontSize = '1.4rem'
		})
	} else {
		sizeNav.style.padding = '2em'
		sizeNavLogo.style.width = '50px'
		sizeNavFont.forEach(element => {
			element.style.fontSize = '1.6rem'
		})
	}
}

window.addEventListener('scroll', handleScroll)
