let menuButton = document.getElementById('menu')
let mainNav = document.getElementsByTagName('nav')[0]
let openMenu = document.getElementById('menuOpen')
let closeMenu = document.getElementById('menuClose')
let splashPage = document.getElementById('splash')
let splashButton = document.getElementById('splashAction')

function toggleHide() {
  mainNav.classList.toggle('mobile-hide')
  openMenu.classList.toggle('menu-hide')
  closeMenu.classList.toggle('menu-hide')
}

menuButton.addEventListener('click', toggleHide)
mainNav.addEventListener('click', toggleHide)
splashButton.addEventListener('click', () => {
  splashPage.classList.add('hide-splash');
})

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
