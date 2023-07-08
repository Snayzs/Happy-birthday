(function() {
  let table = create('table');

  for (let i = 0; i < 4; i++) {
    let row = create('tr');
    for (let j = 0; j < 4; j++) {
      let cell = create('td');

      cell.addClass('cell-inventory')
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  $('.container-table').appendChild(table);
})()

function inventory() {
  $('body').css("overflowY", 'hidden')
  tap()
  setTimeout(() => { $('.container-inventory').css("display", 'flex') }, 700)
}



function closeInventory() {
  $('body').css("overflowY", 'auto')
  $('.container-inventory').css("display", 'none')
}




let listItem = (Cookies.get('listItem') == undefined) ? [] : JSON.parse(Cookies.get('listItem'))
const newlist = groupItems(listItem);


const cellInventory = $a('.cell-inventory');
const table = $('.container-table')

let src = []
let key = [
  {
    image: 'keybronze.png',
    description: 'Mengkilap seperti cahaya perunggu yang misterius, kunci ini memiliki kekuatan magis untuk membuka peti yang tersembunyi.',
    title: 'Bronze key',
    size: 70,
  },
  {
    image: 'keysilver.png',
    description: 'Kilau perak yang mempesona menyelimuti kunci ini, memberikan kekuatan mistis untuk mengungkap rahasia peti yang tersembunyi.',
    title: 'Silver key',
    size: 70,
  },
  {
    image: 'keygold.png',
    description: 'Kunci berlapis emas yang bersinar dengan keagungan dan kekuatan magis, mampu membuka peti yang terkunci rapat.',
    title: 'Golden key',
    size: 70,
  },
  {
    image: 'image/flour.png',
    description: 'Serbuk ajaib ini memiliki kekuatan untuk mengubah adonan menjadi kue yang lezat dan istimewa.',
    title: 'Flour',
    size: 40,
    unit: 'gr',
    step: 25,
  },
  {
    image: 'image/sugar.png',
    description: 'Gula kristal yang indah ini memberikan manisnya kehidupan dan kelezatan pada setiap gigitan kue.',
    title: 'Sugar',
    unit: 'gr',
    step: 25,
  },
  {
    image: 'image/butter.png',
    description: 'Mentega lembut yang memberikan rasa yang nikmat dan kelembutan pada setiap resep kue.',
    title: 'Butter',
    unit: 'gr',
    step: 25,
  },
  {
    image: 'image/milk.png',
    description: 'Susu segar yang memberikan kelembutan dan cita rasa yang sempurna pada setiap kue yang dihasilkan.',
    title: 'Milk',
    unit: 'ml',
    step: 15,
  },
  {
    image: 'image/egg.png',
    description: 'Telur alami yang memberikan kekayaan nutrisi dan mengikat adonan dengan sempurna.',
    title: 'Egg',
    size: 20,
    unit: 'eggs',
  },
  {
    image: 'image/bakingsoda.png',
    description: 'Serbuk ajaib yang memberikan hasil mengembang sempurna dan tekstur lembut pada setiap kue yang diolah.',
    title: 'BakingSoda',
    size: 30,
    unit: 'sachet',
  },
  {
    image: 'image/vanilla.png',
    description: 'Ekstrak vanila yang memberikan aroma khas dan cita rasa lezat pada setiap kue yang dibuat.',
    title: 'VanillaEssens',
    unit: 'ml',
    step: 5,
  },
  {
    image: 'image/strawberry.png',
    description: 'Buah strawberry segar yang memberikan sentuhan manis dan segar pada setiap kue yang dihidangkan.',
    title: 'Strawberry',
    unit: 'piece',
  }, {
    image: 'image/dough.png',
    description: 'adonan lembut yang di buat penuh cinta',
    title: 'Dough',
  }, {
    image: 'image/glazing.png',
    description: 'lapisan lumer yang sangat enak yang dapat membuat setiap kue terasa enak',
    title: 'Glazing',
  }
];

if (Cookies.get("acces1")) {
  src.push(key[0]);
}
if (Cookies.get("acces2")) {
  src.push(key[1]);
}
if (Cookies.get("acces3")) {
  src.push(key[2]);
}

const namesToCheck = [
  'flour', 'sugar', 'butter',
  'milk', 'egg', 'bakingsoda',
  'vanilla', 'strawberry'
  ];

for (var i = 0; i < newlist.length; i++) {
  const name = newlist[i].name;
  if (namesToCheck.includes(name)) {
    src.push(key[namesToCheck.indexOf(name) + 3]);

    const factorMap = {
      'strawberry': 5,
      'flour': 500,
      'sugar': 500,
      'milk': 500,
      'butter': 300,
      'vanilla': 20
    };

    for (let i = 0; i < newlist.length; i++) {
      const name = newlist[i].name;
      const factor = factorMap[name] || 1;
      key[namesToCheck.indexOf(name) + 3].amount = newlist[i].amount * factor;
    }

  }
}


function groupItems(items) {
  const groupedItems = [];

  const itemAmounts = new Map();

  items.forEach(item => {
    itemAmounts.set(item, (itemAmounts.get(item) || 0) + 1);
  });

  itemAmounts.forEach((amount, name) => {
    groupedItems.push({ name, amount });
  });

  return groupedItems;
}




function setImage() {
  for (var i = 0; i < src.length; i++) {
    let defaultsizes = 50
    let image = new Image(src[i].size || defaultsizes, src[i].size || defaultsizes);

    image.src = `assets/${src[i].image}`;
    let wrap = create('div')
    wrap.addClass('wrap')

    for (var j = 0; j < cellInventory.length; j++) {
      let p = create('p')
      p.textContent = j + 1
      wrap.appendChild(image);
      cellInventory[i].appendChild(wrap)
      cellInventory[j].appendChild(p);
    }
  }
}
setImage()

function change(target, condition) {
  let grandparent = target.parentNode.parentNode.parentNode
  let parent = target.parentNode.parentNode

  if (condition) {
    target.css('display', 'flex')
    target.addClass('flex')
    target.css('paddingTop', '4.5px')
    parent.css('borderSpacing', 0)
    grandparent.css('marginTop', '15px')
    grandparent.css('justifyContent', 'start')

  } else {
    target.css('display', 'table-cell')
    target.css('paddingTop', 0)
    parent.css('borderSpacing', '5px')
    grandparent.css('marginTop', 0)
    grandparent.css('justifyContent', 'center')
  }
}

let composition = {}
let cake_recipe = {
  flour: 250,
  sugar: 300,
  butter: 150,
  milk: 150,
  egg: 3,
  bakingsoda: 1,
  vanillaessens: 5,
  strawberry: 25
}
let glazing_recipe = {
  butter: 125,
  sugar: 350,
  vanillaessens: 5,
  milk: 30,
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function handleClear() {
  $('.bowl-top').innerHTML = `
  <div class="none flour"></div>
  <div class="none butter"></div>
  <div class="none milk"></div>
  <div class="none sugar"></div>
  <div class="none vanillaessens"></div>
  <div class="none bakingsoda"></div>
  <button class='add'>+</button>  
  `
  composition = {}
}

function handleValue(title, value) {
  const createItem = (itemClass) => {
    let elem = create('div');
    elem.addClass(itemClass);
    $('.bowl-top').appendChild(elem);
  };

  const setItemPosition = (itemClass, index) => {
    let w_rand = Math.round(20 + Math.random() * 40);
    let h_rand = Math.round(20 + Math.random() * 40);
    var str = $a(`.${itemClass}`);
    str[index].css('top', `${h_rand}%`);
    str[index].css('right', `${w_rand}%`);
  };

  for (var i = 0; i < value; i++) {
    if (title == 'egg') {
      if ($a('.egg').length < value) {
        createItem('egg');
      }
      setItemPosition('egg', i);
    }

    if (title == 'strawberry') {
      if ($a('.strawberry').length < value) {
        createItem('strawberry');
      }
      setItemPosition('strawberry', i);
    } else {
      $(`.${title}`).removeClass('none');
    }
  }
}


(function() {
  let image = new Image()
  $('.icon-i').appendChild(image)

  cellInventory.forEach((call, index) => {
    const close = $a('.close-button')
    call.onclick = function() {

      if (knead) {

        const title = src[index].title.toLowerCase()
        const unit = src[index].unit

        const inputValue = 0;
        const step = src[index].step || 1;
        const max = src[index].amount;


        if (max !== undefined) {
          Swal.fire({
            title: 'Add to bowl',
            input: 'range',
            inputValue,
            inputAttributes: {
              min: 0,
              max: max,
              step: step,
              style: 'width: 200px;margin-right:20px'
            },
            didOpen: () => {
              const inputRange = Swal.getInput()

              inputRange.onchange = function() {
                inputRange.nextElementSibling.textContent += unit
              }

            }
          }).then(result => {
            if (result.isConfirmed) {
              const value = parseInt(result.value)

              handleValue(title, value)

              composition[title] = value
            }
          });
        }

      } else {
        $('#description').textContent = src[index].description
        $('#title').textContent = src[index].title

        image.src = `assets/${src[index].image}`;
        image.width = src[index].size * 2 || 100
        image.height = src[index].size * 2 || 100

        cellInventory.forEach((el, i) => {

          change(el, true)
          $('.desk').css('display', 'block')
        })

        close[1].onclick = function() {
          cellInventory.forEach((el, i) => {
            change(el, false)
            $('.desk').css('display', 'none')
          })
        }
      }
    }
  })
})()




//kitchen section
let kitchen = `
<div class="pantry">
  <div class="fridge">
    <div class="topFridge"></div>
    <div class="bottomFridge">
      <div class="recipe">
        <h1>Strawberry cake Recipe</h1>
        <ul>Cake:
          <li>250 gr flour</li>
          <li>300 gr sugar</li>
          <li>150 gr butter</li>
          <li>150 ml milk</li>
          <li>3 egg</li>
          <li>1 sachet sacets baking soda</li>
          <li>5ml vanilla essens</li>
          <li>300 gr fresh strawberry (± 25 strawberry)</li>
        </ul>
        <ul>Glazing:
          <li>125 gr butter</li>
          <li>350 gr sugar</li>
          <li>5 ml vanilla extract</li>
          <li>30 ml milk</li>
        </ul>        
      </div>
    </div>
  </div>
  <div class="table">
    <div class="oven">
      <div class="topOven">
        <div class="timer">
          <span>00</span>
          <select id="selected">
            <option style='display:none'></option>
            <option value="15">15min</option>
            <option value="30">30min</option>
            <option value="60">60min</option>
          </select>
        </div>
        <button></button>
      </div>
      <div class="handle"></div>
      <div class="body">
        <div class="cake"></div>
      </div>
      <div class="bottomOven"></div>
    </div>
    <div class="cabinet">
      <div class="right"></div>
      <div class="left"></div>
    </div>
  </div>
  <div class="others">
    <div class="bowl"></div>
    <div class="hanging">
      <div class="woodboard"></div>
      <div class="knife"></div>
    </div>
  </div>
  <div class='placemat'>
    <div class='bowl-top'>
      <div class="none flour"></div>
      <div class="none butter"></div>
      <div class="none milk"></div>
      <div class="none sugar"></div>
      <div class="none vanillaessens"></div>
      <div class="none bakingsoda"></div>         
      <button class='add'>+</button>
    </div>
    <div class='mix-section'>
      <button class='clear'>CLEAR</button>
      <button class='mix'>MIX</button>
    </div>
  </div>   
</div>
`

$('.container-kitchen').innerHTML = kitchen


function setKitchen(condition) {
  const options = ['ITEMS', 'KITCHEN', 'ACHIEVEMENT'];
  const elements = {
    kitchen: { display: condition ? 'flex' : 'none' },
    table: { display: condition === false ? 'flex' : 'none' },
    achievement: { display: condition === undefined ? 'flex' : 'none' }
  };

  const kitchen = $('.pantry');
  const table = $('.container-table');
  const achievement = $('.container-achievement');

  const grandparent = kitchen.parentNode.parentNode;

  (condition) ? grandparent.addClass('indianred'): grandparent.removeClass('indianred')

  var index = condition == false ? 0 : condition ? 1 : 2

  $('.wrapper-inventory h2').textContent = options[index];

  Object.entries(elements).forEach(([element, styles]) => {
    const el = element === 'kitchen' ? kitchen : $(`.container-${element}`);
    el.css('display', styles.display);
  });
}



let options = $a('section .label');

options.forEach((option, index) => {
  option.onclick = function() {
    options.forEach((el, i) => {
      table.removeClass('add-ingredients');
      cellInventory.forEach(cell => change(cell, false));

      if (i === index) {
        closeBowl()
        el.addClass('active');

        switch (i) {
          case 0:
            setKitchen(false);
            knead = false;
            break;
          case 1:
            setKitchen(true);
            knead = true;
            break;
          case 2:
            setKitchen();
            knead = false;
            break;
        }
      } else {
        el.removeClass('active');
      }
    });
  };
});


//oven section
if (Cookies.get('birthday-cake')) {
  $('.container-cake').css('display', 'block')
  $('.oven .body .cake').css('opacity',0)
}

const oven = $('.pantry .oven .body ')
const timer = $('.timer span')
const selected = $('#selected')


selected.on('change', function() {
  time = selected.value
  if (Cookies.get('dough') && Cookies.get('glazing')) {
    selected.disabled = true

    function increment() {
      timer.textContent = time
      if (time > 0) {
        oven.css('background', 'linear-gradient(45deg, orange, gold)')

        $('.cake').addClass('baked')
        $('.cake').css('transition', `${selected.value}s`)

        setTimeout(increment, 1000)
        time--
      } else {
        selected.disabled = false
        oven.css('background', '#9B9B9B')

        achievement('The Master Of Baking', 'bakery')
        $('.container-cake').css('display', 'block')
        Cookies.set('birthday-cake',true,{expires: 7})

        closeInventory()

        setTimeout(function() {
          setTimeout(function() {
            baking(true)
            scrollLocation($('.wrapper-main-container'))
            setTimeout(function() {
              scrollLocation($('.container-cake'))
            }, 1000)
          }, 500)
        }, 1000)
      }
    }
    increment()
  }
})

function baking(condition) {
  let cake = $('.pantry .body .cake')
  condition ? cake.css('display', 'none') : cake.css('display', 'block')
}


var knead = false

$('.bowl').on('click', function() {
  $('.placemat').css('display', 'flex')

  $('.add').onclick = function() {
    this.addClass('none')
    $('.mix-section').css('opacity', 1)

    table.addClass('add-ingredients')

    cellInventory.forEach(el => change(el, true))
  }
  return knead = true
})

dough = Cookies.get('dough') || false
if (dough) {
  src.push(key[11])
  setImage()
  baking()
}

glazing = Cookies.get('glazing') || false
if (glazing) {
  src.push(key[12])
  setImage()
}

$('.mix').onclick = function() {
  if (compareObjects(composition, glazing_recipe)) {

    if (!glazing) {
      src.push(key[12])
      setImage()
      glazing = true
      handleClear()

      Cookies.set('glazing', true, { expires: 7 })
      return
    }
  }

  if (compareObjects(composition, cake_recipe)) {

    if (!dough) {
      src.push(key[11])
      setImage()
    }
    dough = true
    baking()
    handleClear()
    Cookies.set('dough', true, { expires: 7 })

    return
  }


  Swal.fire({
    text: 'follow the recipe properly!!',
    icon: 'warning'
  })
}


$('.clear').onclick = handleClear

function closeBowl() {
  $('.placemat').css('display', 'none')

  $('.add').removeClass('none')
  $('.mix-section').css('opacity', 0)
}

$('.close-button').onclick = function() {
  table.removeClass('add-ingredients')
  if (knead) {
    closeBowl()
    knead = false
  } else closeInventory()
}