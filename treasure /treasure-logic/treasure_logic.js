const chest = $('#chest')
const keyhole = $('#keyhole')
const close = $('.closeButton')
const display_chest = $('.display_chest')
const circle = $('.circle')
const topKey = $('.topKey')

keyhole.on('click',()=> {
  display_chest.style.display = 'flex'
})

close.on('click',()=> {
  display_chest.style.display = 'none'
})

const key = $a('#key')
const blank = $('.blank')
const contentKey = $('#contentKeyDisplay')
const popUpAlert = $('.popUpAlert')


$('body').on('click',()=>{
 key.forEach(call=>{
  call.on('click',()=> {
    if (call.className == '') {
      call.addClass('keyClick')
      blank.style.display = 'flex'
      topKey.style.display = 'flex'
      contentKey.style.display = 'flex'
      circle.style.display = 'flex'
      call.style.height = 40 + 'px'
    }
  })
  if(call.className != ''){
    blank.on('click',()=> {
      call.removeClass('keyClick')
      blank.style.display = 'none'
      topKey.style.display = 'none'
      contentKey.style.display = 'none'
      circle.style.display = 'none'
      call.style.height = 50 + 'px'
    })
  }
})
})