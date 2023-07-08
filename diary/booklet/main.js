$(function() {
  var $mybook = $('#mybook');
  var $bttn_next = $('#next_page_button');
  var $bttn_prev = $('#prev_page_button');
  
  $bttn_next.show();
  $bttn_prev.show();
  $mybook.show().booklet({
    name: null, //  
    width: 800, //  
    height: 500, //   
    speed: 600, //  
    direction: 'LTR', //  
    next: $bttn_next, //  
    prev: $bttn_prev, // 
  });
});


function fillMybook() {
  for (var i = 0; i < text.length; i++) {
    let div = $('<div>')
    let h1 = $('<h1>').text(text[i].h)
    let p = $('<p>').text(text[i].text)

    div.append(h1)
    div.append(p)


    $('.b-load').append(div)
  }
}
fillMybook()





function arrowRight(x) {
  if (x >= text.length-1) {
    paper2.classList.add("flipped");
    paper2.style.zIndex = 2
    closeBook(false);
    setTimeout(() => { $('#mybook').css('display', 'none') }, 200)
    $('#b1').addClass('endpage')
    $('.front').removeClass('shadow')
    $('.back').removeClass('shadow')
  } else {
    openBook();
    paper1.classList.add("flipped");
    paper1.style.zIndex = 1;
    setTimeout(() => { $('#mybook').css('display', 'block') }, 180)
    $('.book').css('zIndex', 0)
    $('.front').addClass('shadow')
    $('.back').addClass('shadow')
  }
}

function arrowLeft(x) {
  if (x <= 0) {
    closeBook(true);
    paper1.classList.remove("flipped");
    paper1.style.zIndex = 3;
    $('#mybook').css('display', 'none')
    $('.front').removeClass('shadow')
    $('.back').removeClass('shadow')
  } else {
    paper2.classList.remove("flipped");
    paper2.style.zIndex = 0;
    openBook();
    setTimeout(() => { $('#mybook').css('display', 'block') }, 250)
    $('#b1').removeClass('endpage')
    $('.front').addClass('shadow')
    $('.back').addClass('shadow')
  }
}
