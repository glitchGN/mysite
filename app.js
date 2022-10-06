
const [red, green, blue] = [26, 26, 26]
const section1 = document.querySelector('header');
window.addEventListener('scroll', () => {
    const y = 1+ (window.scrollY || window.pageYOffset) / 150
    const [r, g, b] = [red*y, green*y, blue*y].map(Math.round)
    section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  })