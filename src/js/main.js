const hamburger = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav__box')
const navigation = document.querySelector('#nav')
const navItem = document.querySelectorAll('.nav__item')
const linkLogo = document.querySelector('.nav__logo-link')
const buttonHeader = document.querySelector('.header__button')
const handleClick = () => {
  hamburger.classList.toggle('hamburger--active')

  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'))
  nav.classList.toggle('nav--active')
}
const smoothScroll = (target) => {
  const point = document.querySelector(`#${target}`)
  const pointPossition = (point.offsetTop - navigation.offsetHeight)
  window.scroll({
    top: pointPossition,
    left: 0,
    behavior: 'smooth'
  })
}
hamburger.addEventListener('click', handleClick)
linkLogo.addEventListener('click', (e) => {
  e.preventDefault()
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})
buttonHeader.addEventListener('click', (e) => {
  e.preventDefault()
  const sectionProject = document.querySelector('#project')
  window.scroll({
    top: sectionProject.offsetTop - navigation.offsetHeight,
    left: 0,
    behavior: 'smooth'
  })
})
navItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    handleClick()
    switch (e.target.id) {
      case 'homeNav':
        smoothScroll('home')
        break
      case 'serviceNav':
        smoothScroll('service')
        break
      case 'blogNav':
        smoothScroll('relax')
        break
      case 'portfolioNav':
        smoothScroll('project')
        break
      case 'contactNav':
        smoothScroll('contact')
        break
    }
  })
})
