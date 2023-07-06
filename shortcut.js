function $(x) {
  return document.querySelector(x)
}

function $a(x) {
  return document.querySelectorAll(x)
}

function create(x) {
  return document.createElement(x)
}

HTMLElement.prototype.css = function(property, value) {
  if (this.style) {
    this.style[property] = value;
  }
};





HTMLElement.prototype.addClass = function(className) {
  if (this.classList) {
    this.classList.add(className);
  }
}

HTMLElement.prototype.removeClass = function(className) {
  if (this.classList) {
    this.classList.remove(className);
  }
}
HTMLElement.prototype.toggleClass = function(className) {
  if (this.classList) {
    this.classList.toggle(className);
  }
}
HTMLElement.prototype.on = function(eventName, handler) {
  if (this.addEventListener) {
    this.addEventListener(eventName, handler);
  }
}
Window.prototype.on = function(eventName, handler) {
  if (this.addEventListener) {
    this.addEventListener(eventName, handler);
  }
}

function setLocation(location) {
  Swal.fire({
    title: 'Are you sure?',
    text: "you will go to another page!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, i\'m sure'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = location
    }
  })
}

function scrollLocation(location) {
  location.scrollIntoView({ behavior: 'smooth' })
}

function update(condition) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    width: 'auto',
  })

  Toast.fire({
    icon: 'success',
    title: 'Updated resource'
  }).then(result => {
    if (condition) {
      audio.play()
    }
  })
}

function achievement(title, cookie,condition) {
  Cookies.set(cookie, true, { expires: 7 })
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    width: 'auto'
  })

  Toast.fire({
    icon: 'success',
    html: `<h3>${title}</h3>`
  })
  if (!condition) {
    setAchievement()
    fill_a()
  }
}