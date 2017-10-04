let menuButton = document.getElementById('menu')
let mainNav = document.getElementsByTagName('nav')[0]
let openMenu = document.getElementById('menuOpen')
let closeMenu = document.getElementById('menuClose')
let splashPage = document.getElementById('splash')
let splashButton = document.getElementById('splashAction')

toggleHide = () => {
  mainNav.classList.toggle('mobile-hide')
  openMenu.classList.toggle('menu-hide')
  closeMenu.classList.toggle('menu-hide')
}
hideSplash = () => {
  splashPage.classList.add('hide-splash')
  setTimeout(() => {
    splashPage.remove()
  }, 2000)
}

menuButton.addEventListener('click', toggleHide)
mainNav.addEventListener('click', toggleHide)
splashButton.addEventListener('click', hideSplash)

// Swipe away splash page

let xDown = null
let yDown = null

handleTouchStart = (e) => {
  xDown = e.touches[0].clientX
  yDown = e.touches[0].clientY
}

handleTouchMove = (e) => {
  if (!xDown || !yDown) {
      return
  }

  let xUp = e.touches[0].clientX
  let yUp = e.touches[0].clientY

  let xDiff = xDown - xUp
  let yDiff = yDown - yUp

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff <= 0) {
      hideSplash()
    }
  }
  xDown = null
  yDown = null
}

document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

// Scroll to anchors

$(document).ready(function(){
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault()
      let hash = this.hash
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
        window.location.hash = hash
      })
    }
  })
})
