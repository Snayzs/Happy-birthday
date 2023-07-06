const swipeRight = $a('.swipeRight')
const swipeLeft = $a('.swipeLeft')
const big = $('.big')
const scroll = $('#scroll')


$('body').on('click', () => {
  first()
  setTimeout(() => {
    $('body').css('position', 'static');
    scroll.textContent = 'scroll down to continue';
  }, 3500)
})



firstTime = Cookies.get('firstTime')

function checkFirstTime() {
  if (firstTime) {
    first()
    $('body').css('position', 'static')
    scroll.textContent = 'scroll down to continue'
    navbar.css('top', 0);
    burgerToggle.removeClass('none')
    $a('.letter').forEach(call => {
      call.css('transition', 'none')
    })
  }
}

function first() {
  swipeRight.forEach(call => {
    call.removeClass('swipeRight')
  })
  swipeLeft.forEach(call => {
    call.removeClass('swipeLeft')
  })
  big.removeClass('big')
  Cookies.set('firstTime', true, { expires: 7 })
}

window.onload = function() {
  checkSetting()
  checkFirstTime()
}

const icing = $('.icing')
const drip = $a('.drip')
const birthdayCake = $('.birthday-cake')
const textCake = $('.birthday-cake p')
const candle = $('.candle')
const flame = $('.flame')

piano = true
birthdayCake.onclick = function() {
  icing.css('display', 'block')
  drip.forEach(call => call.css('display', 'block'))

  textCake.textContent = 'click again to add candle'
  birthdayCake.onclick = function() {
    candle.css('display', 'block')
    audio.src = '../assets/sfx/piano.mp3'
    if (piano) {
      audio.play()
      piano = false
    }
    candle.onclick = function() {
      flame.toggleClass('light')
    }
  }
}