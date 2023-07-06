const burgerToggle = $('#burgerToggle');
const burgerSide = $('.burgertrigger');
const logo = $('.sectionContainer')
const sidebar = $('.sidebar');
const navbar = $('.navbar');
const wrapperMainContainer = $('.wrapper-main-container');
const wrapperIcon = $a('.wrapper-icon');
const submenu = $a('.submenu');
const arrow = $a('.arrow');

burgerToggle.on('click', function() {
  if (isSetteing) {
    this.checked = true
    setting(true)
  } else {
    if (this.checked) {
      sidebar.css('left', 0);
      logo.addClass('top');
    } else if (window.scrollY < 100) {
      sidebar.css('left', '-100%');
      logo.removeClass('top');
      scrollLocation(burgerSide);
    } else {
      sidebar.css('left', '-100%');
      scrollLocation(burgerSide);
    }
  }
});

wrapperMainContainer.on('click', tap);

function tap() {
  if (isSetteing) {
    setting(true)
  } else {
    if (burgerToggle.checked) {
      burgerToggle.checked = false;
      sidebar.css('left', '-100%');
      if (window.scrollY < 100) {
        logo.removeClass('top');
      }
      setTimeout(() => {
        scrollLocation(burgerSide);
      }, 1000);
    }
  }
}

window.on('scroll', () => {
  if (window.scrollY > 100) {
    logo.addClass('top');
    navbar.css('top', 0);
    burgerToggle.removeClass('none')
  } else if (!burgerToggle.checked) {
    logo.removeClass('top');
  }
});

wrapperIcon[2].on('click', function() {
  submenu[0].toggleClass('popdown');
  arrow[0].toggleClass('rotate');
});

wrapperIcon[4].on('click', function() {
  submenu[1].toggleClass('popdown');
  arrow[1].toggleClass('rotate');
});

wrapperIcon[3].on('click', function() {
  $('.emblem').addClass('none')
})