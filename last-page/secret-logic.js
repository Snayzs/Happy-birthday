let list = $('.shop ul')
let listItem = [
  {
    name: 'Flour 500gr',
    value: 'flour',
    cost: 15,
    src: 'flour.png'
  },
  {
    name: 'Butter 300gr',
    value: 'butter',
    cost: 28,
    src: 'butter.png'
  },
  {
    name: 'Egg',
    value: 'egg',
    cost: 3,
    src: 'egg.png'
  },
  {
    name: 'milk 500ml',
    value: 'milk',
    cost: 30,
    src: 'milk.png'
  },
  {
    name: 'Sugar 500gr',
    value: 'sugar',
    cost: 12,
    src: 'sugar.png'
  },
  {
    name: 'Baking soda 1 sachet',
    value: 'bakingsoda',
    cost: 10,
    src: 'bakingsoda.png'
  },
  {
    name: 'strawberry 5pcs',
    value: 'strawberry',
    cost: 20,
    src: 'strawberry.png'
  },
  {
    name: 'vannila essens 20ml',
    value: 'vanilla',
    cost: 20,
    src: 'vanilla.png'
  }
]

for (var i = 0; i < listItem.length; i++) {
  let li = create('li')
  let p = create('p')
  p.textContent = listItem[i].name

  let span = create('span')
  span.textContent = '$' + listItem[i].cost

  let btn = create('button')
  btn.addClass('buy')
  btn.textContent = 'buy'
  span.appendChild(btn)

  let img = new Image(30, 30)
  img.src = 'assets/image/' + listItem[i].src

  li.appendChild(p)
  li.appendChild(span)
  li.appendChild(img)

  list.appendChild(li)
}

$a('.shop li').forEach((call, index) => {
  call.onclick = function() {
    $a('.shop li').forEach((el, i) => {
      if (i === index) {
        $a('.shop li span')[i].css('position', 'relative')
      } else {
        $a('.shop li span')[i].css('position', 'absolute')
      }
    })
  }
})

const buy = $a('.buy')
let coin = Cookies.get("coin") || 100

$('#coin').textContent = 'Coin : $' + coin

listbuyying =
  (Cookies.get('listItem') == undefined) ? [] : JSON.parse(Cookies.get('listItem'))



buy.forEach((call, index) => {
  call.on('click', function() {
    Swal.fire({
      title: 'are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, i`m sure'
    }).then((result) => {
      if (result.isConfirmed) {
        if (coin >= listItem[index].cost) {
          coin -= listItem[index].cost
          $('#coin').textContent = 'Coin : $' + coin

          listbuyying.push(listItem[index].value)

          Cookies.set('listItem', JSON.stringify(listbuyying), { expires: 7 })

          Cookies.set('coin', coin, { expires: 7 })

        } else {
          Swal.fire({
            title: 'not enough coin',
            icon: 'warning',
            confirmButtonColor: '#3085d6'
          })
        }
      }
    })
  })
})

$('.btn').onclick = function() {
  $('.shop').css('display', 'block')
}
$('.close-button').onclick = function() {
  $('.shop').css('display', 'none')
}

$('#submarine').onclick = function() {
  $('#submarine').removeClass('pop')
  $('.portal').removeClass('a-portal')

  void $('#submarine').offsetWidth
  $('.portal').addClass('a-portal')
  setTimeout(() => {
    $('#submarine').css('animationDirection', 'reverse')
    $('#submarine').addClass('pop')
    setTimeout(() => {
      setLocation('index.html')
    }, 1300)
  }, 1200)
}