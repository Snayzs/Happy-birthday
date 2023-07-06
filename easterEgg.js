//popUp duck
const duck = $('.duck')
const audio = $('#audio')
const audio2 = $('#audio2')

function setDuck() {
  let footertap = 1
  $('.mainFooter').on('dblclick', () => {
    if (footertap == 2) {
      popDuck()
      setTimeout(()=>{
      achievement('Mystery Finder','duck')
      },1000)
    }
    footertap++
    duckySound = true
    setTimeout(() => { footertap = 1 }, 3000)
  })

  function popDuck() {
    duck.style.opacity = 1
    duck.style.top = 0 + 'px'
    duck.style.scale = 1
    duckSound()
  }

  duck.on('click', () => {
    $('.duckSay').style.opacity = 1
    setTimeout(() => {
      $('.duckSay').style.opacity = 0
    }, 3000)
  })

  function duckSound() {
    audio2.src = '../assets/sfx/duck.mp3'
    audio2.volume = 0.1
    audio2.currentTime = 0.2
    audio2.play()
  }
}
setDuck()

//create html
const containerRain = create('div');
containerRain.className = 'container-Rain'
const rainFrontRow = create('div');
rainFrontRow.className = 'rain front-row';
const rainBackRow = create('div');
rainBackRow.className = 'rain back-row';

containerRain.appendChild(rainFrontRow);
containerRain.appendChild(rainBackRow);

$('body').appendChild(containerRain);


//bottom footer
const submarine = $('#submarine')
const bottomFooter = $('.content footer .bottom-footer')

const c_rain = $('.container-Rain')
const mainFooter = $('.mainFooter')
const footerText = $a('.bottom-footer p')


//when succes combine
var combineSucces = Cookies.get('combineSucces')
var rainning = Cookies.get('rainning')


window.on('load', checkSucces(true))

function checkSucces(status) {
  if (rainning) {
    c_rain.style.opacity = .2
    if (status) {
      setTimeout(() => {
        startRain()

        if (Cookies.get('combineSucces')) {
          $a('.new')[1].removeClass('none')
        }
      }, 1000)
    }
  }
  if (combineSucces) {
    $a('tr.none').forEach(call => {
      call.removeClass('none')
    })
    setTimeout(() => {
      submarine.style.display = 'block'
      footerText[1].style.display = 'block'
      bottomFooter.style.height = 500 + 'px'
      mainFooter.style.transform = `translateY(${-100}px)`
    }, 15000)
  }
  if (status == false) {
    $('.content footer').style.transition = '0s'
    submarine.style.display = 'block'
    footerText[1].style.display = 'block'
    bottomFooter.style.height = 500 + 'px'
    mainFooter.style.transform = `translateY(${-100}px)`

  }
}

coordinat = 482957
//submarine section
$('#coordinat').on('blur', function() {
  if (this.value == coordinat) {
    achievement('The Journey','journey')
    submarine.css('translate', '-400px')
    $('#coordinat').css('display', 'none')

    setTimeout(() => {
      $('.portal1').css('display', 'block')
    }, 700)

    setTimeout(() => {
      window.location.href = '../last-page/secret.html'
    }, 3500)
  }
})


//rain 
function makeItRain() {
  //clear out everything
  $a('.rain').forEach((element) => {
    element.innerHTML = '';
  });

  var increment = 0;
  var drops = "";
  var backDrops = "";
  let n = .9

  while (increment < 100) {
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;
    drops += '<div class="drop-rain" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop-rain" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration:' + n + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').innerHTML = drops;
  $('.rain.back-row').innerHTML = backDrops;
}

function startRain() {
  makeItRain();
  audio.src = '../assets/sfx/rain.mp3'
  audio.volume = 0.1
  audio.play().catch(function() {
    update(true)
  })
  setTimeout(() => {
    $a('.drop-rain').forEach(call => {
      call.style.display = 'block'
    })
  }, 5000)
}


//draggable div
const parentElement = create('div');
parentElement.addClass('draggable');

const childElements = `
  <div class="wrapper">
    <div class="empty">
      <div class="h drag">
        <h2>H</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="al drag">
        <h2>Al</h2>
      </div>
    </div>
    <div class="empty">
      <div class="o drag">
        <h2>O</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty">
      <div class="si drag">
        <h2>Si</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty">
      <div class="he drag">
        <h2>He</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="na drag">
        <h2>Na</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="u drag">
        <h2>U</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div style="height:1350px"></div>
    <div class="empty"></div>
    <div class="empty">
      <div class="be drag">
        <h2>Be</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="k drag">
        <h2>K</h2>
      </div>
    </div>
    <div class="empty">
      <div class="he drag">
        <h2>He</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="u drag">
        <h2>U</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty">
      <div class="si drag">
        <h2>Si</h2>
      </div>
    </div>
    <div class="empty">
      <div class="f drag">
        <h2>F</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div class="empty">
      <div class="h drag">
        <h2>H</h2>
      </div>
    </div>
    <div class="empty"></div>
    <div style="height: 450px"></div>
    <section class="craftSection">
    <div class='circle'></div>
      <div class="craft">
         <div class="empty"></div>
      </div>
      <h1>+</h1>
      <div class="craft">
        <div class="empty"></div>
      </div>
      <h1>+</h1>
      <div class="craft">
        <div class="empty"></div>
      </div>
    </section>
    <button id='combine'>Combine</button>
  </div>
`;

parentElement.innerHTML = childElements;
$('body').appendChild(parentElement);
$('.draggable').on('click', tap);


const wrapper = document.querySelector('.wrapper');
const empty = Array.from(document.querySelectorAll('.empty'));
const drag = document.querySelectorAll('.drag');


for (let i = 0; i < drag.length; i++) {
  draggable(drag[i], wrapper)
}


function draggable(drag, wrapper) {
  drag.on('touchmove', touchMove);
  drag.on('touchend', touchEnd);

  var itemAppend = null;

  function touchMove(event) {
    event.preventDefault();

    const touch = event.targetTouches[0];
    const dragWidth = drag.offsetWidth;
    const dragHeight = drag.offsetHeight;
    const dragTop = touch.pageY - wrapper.offsetTop - (dragWidth / 2);
    const dragLeft = touch.pageX - wrapper.offsetLeft - (dragHeight / 2);

    drag.style.top = `${dragTop}px`;
    drag.style.left = `${dragLeft}px`;


    itemAppend = empty.find(item => isOverlap(drag, item));

    empty.forEach(item => item.classList.toggle('isActive', item === itemAppend));
  }

  function touchEnd() {
    lastcoor = []

    if (itemAppend && itemAppend.classList.contains('isActive')) {

      itemAppend.appendChild(this);
      this.style.top = `${itemAppend.offsetTop}px`;
      this.style.left = `${itemAppend.offsetLeft}px`;


    }

    empty.forEach(item => item.classList.remove('isActive'));
  }


  function isOverlap(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
      rect1.top + rect1.width / 2 < rect2.bottom &&
      rect1.right - rect1.width / 2 > rect2.left &&
      rect1.bottom - rect1.width / 2 > rect2.top &&
      rect1.left + rect1.width / 2 < rect2.right
    );
  }
}

function draggable2(drag) {
  drag.addEventListener('touchmove', touchMove);
  drag.addEventListener('touchend', touchEnd);

  let itemAppend;

  function touchMove(event) {
    event.preventDefault();

    let touch = event.targetTouches[0];
    drag.style.top = `${touch.pageY - (wrapper.offsetTop) - (drag.offsetWidth / 2)}px`;
    drag.style.left = `${touch.pageX - (wrapper.offsetLeft) - (drag.offsetHeight / 2)}px`;

    empty.map(item => {
      if (
        drag.getBoundingClientRect().top + drag.offsetWidth / 2 < item.getBoundingClientRect().bottom &&
        drag.getBoundingClientRect().right - drag.offsetWidth / 2 > item.getBoundingClientRect().left &&
        drag.getBoundingClientRect().bottom - drag.offsetWidth / 2 > item.getBoundingClientRect().top &&
        drag.getBoundingClientRect().left + drag.offsetWidth / 2 < item.getBoundingClientRect().right
      ) {
        item.classList.add('isActive');
        itemAppend = item;
      }
      else {
        item.classList.remove('isActive');
      }
    });
  }


  function touchEnd(element) {
    if (itemAppend.classList.contains('isActive')) {
      itemAppend.append(this);
      this.style.top = `${itemAppend.offsetTop}px`;
      this.style.left = `${itemAppend.offsetLeft}px`;
    }
    else {
      setTimeout(function() {
        drag.style.top = `${itemAppend.offsetTop}px`;
        drag.style.left = `${itemAppend.offsetLeft}px`;
      }, 10000)
    }
  }
}
//craft section  
function combine() {
  const emptyCraftSlots = $a('.craft .empty');
  const requiredClasses = ['h', 'h', 'o'];

  const allSlotsHaveRequiredClasses = Array.from(emptyCraftSlots).every(slot => {
    const childElement = slot.children[0];

    return childElement && requiredClasses.includes(childElement.classList[0]);
  });

  if (allSlotsHaveRequiredClasses) {
    $('.circle').addClass('circling')
    setTimeout(() => {
      $('.circle').removeClass('circling')
      $('#combine').css('display', 'none')
      $('.craftSection').css('display', 'none')
    }, 1300)

    setTimeout(() => {
      Cookies.set('rainning', true, { expires: 7 })
      Cookies.set('combineSucces', true, { expires: 7 })

      combineSucces = true
      rainning = true
      checkSucces(true)
      $('#rain-checkbox').checked = true

      scrollLocation(mainFooter)

      setTimeout(() => {
        update()
        setTimeout(() => {
          achievement('The Alchemic Master','alchemic')
        }, 2000)
        $a('.new')[1].removeClass('none')
      }, 2000)
    }, 1000)
  }
}


$('#combine').onclick = combine