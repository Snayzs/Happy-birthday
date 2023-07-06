key.forEach((call, index) => {
  call.on('dblclick', () => {
    if (acces[index]) {
      masterkey[index] = true;
    }
    handleKeyDblclick(call, index)
  });

  call.on('click', () => {
    topKey.removeClass('up')
    handleKeyClick(call);
  });
});

function handleKeyClick(x) {
  if (x == key[0] && masterkey[0] &&
    acces[0] ||
    x == key[1] && masterkey[1] &&
    acces[1] ||
    x == key[2] && masterkey[2] &&
    acces[2]) {
    topKey.addClass('up')
  }
}

function handleKeyDblclick(x, index) {
  if (x == key[0] && masterkey[0] &&
    acces[0] ||
    x == key[1] && masterkey[1] &&
    acces[1] ||
    x == key[2] && masterkey[2] &&
    acces[2]) {
    topKey.addClass('up')
    chestOpened[index] = true
    Cookies.set(`open${index}`, 'true', { expires: 7 })
  } else {
    popUpAlert.css('display', 'flex')
    setTimeout(() => {
      popUpAlert.css('display', 'none')
    }, 2000)
  }
}

(function() {
  let q = true
  $('body').on('click', () => {
    if (chestOpened[0] && chestOpened[1] && chestOpened[2]) {
      setTimeout(() => {
        chest.src = '../assets/chest_opened.png'
        chest.css("marginBottom", "10px")
        Cookies.set('coin',400,{expires: 7})
        
        if (q) {
          achievement('Treasure Hunter', 'treasure',true)
          Cookies.set('diary',true,{expires: 7})
          
          q = false
        }
      }, 1000)
      setTimeout(() => {
        $('.container').css('display', 'grid')
      }, 1500)
      display_chest.css("display", 'none')
      blank.css("opacity", 0)
    }
  })
})()