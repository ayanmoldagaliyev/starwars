
const menuHeader = document.getElementById('menu-header');
const menuContent = document.getElementById('menu-content');
const main = document.getElementById('main')

menuHeader.addEventListener('click', active);

function active() {

  if(menuContent.classList.contains('active')){
    menuContent.classList.remove('active');
    menuHeader.classList.remove('active');
    main.classList.remove('active');
  } else {
    menuContent.classList.add('active');
    menuHeader.classList.add('active');
    main.classList.add('active');
  }

}

const slideLeft = document.querySelector('.slider-button-left')
const slideRight = document.querySelector('.slider-button-right')
const mainSlide = document.querySelector('.main-slide')
const slides = mainSlide.querySelectorAll('div')

let activeSlideIndex = 0

slideLeft.addEventListener('click', () => {
  changeSlide('left')
})
slideRight.addEventListener('click', () => {
  changeSlide('right')
})
function changeSlide(direction) {
  if (direction === 'left') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slides.length - 1
    }
  } else if (direction === 'right') {
    activeSlideIndex++
    if (activeSlideIndex === slides.length) {
      activeSlideIndex = 0
    }
  }
  const width = document.body.clientWidth
  mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`
  console.log(activeSlideIndex, slides[activeSlideIndex])
}

