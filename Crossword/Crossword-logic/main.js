let table = create('table');

for (var i = 0; i < 15; i++) {
  let row = create('tr');
  for (var j = 0; j < 15; j++) {
    let cell = create('td');

    cell.id = 'cell'


    row.appendChild(cell);

  }

  table.appendChild(row);
}

$('.wrapper').appendChild(table);

for (var i = 0; i < 10; i++) {
  let no = create('p')
  no.addClass('P-row')
  $('.wrapper').appendChild(no);
}
for (var i = 0; i < 12; i++) {
  let no = create('p')
  no.addClass('P-col')
  $('.wrapper').appendChild(no);
}


let pRow = $a('.P-row')
let pCol = $a('.P-col')
let horizon = ['merak', 'november', 'kabisat', 'nanas', 'rimuru', 'everest', 'tas', 'strawberry', 'terbang', 'garam']
let vertical = ['oven', 'sate', 'berani', 'vas', 'rabies', 'rare', 'egg', 'merkurius', 'benar', 'biru', 'cry', 'surut']


for (var i = 0; i < horizon.length; i++) {
  var word = horizon[i];
  var startIndex = 0;

  var n = 22



  const input = create('input');
  input.id = 'cell-input-row'


  $('.wrapper').appendChild(input)
  const cell_input = $a('#cell-input-row')


  switch (i) {
    case 0:
      startIndex = 8;
      break;
    case 1:
      startIndex = 31;
      break;
    case 2:
      startIndex = 53;
      break;
    case 3:
      startIndex = 77;
      break;
    case 4:
      startIndex = 97;
      break;
    case 5:
      startIndex = 123;
      break;
    case 6:
      startIndex = 150;
      break;
    case 7:
      startIndex = 154;
      break;
    case 8:
      startIndex = 196;
      break;
    case 9:
      startIndex = 217;
      break;
  }

  var x = startIndex % 15
  var y = Math.floor(startIndex / 15)

  cell_input[i].style.left = n * x + 'px'
  cell_input[i].style.top = n * y + 'px'
  pRow[i].style.left = n * x + 4 + 'px'
  pRow[i].style.top = n * y + 14 + 'px'
  pRow[i].textContent = i + 1

  cell_input[i].style.width = `${horizon[i].length * n}px`;
  cell_input[i].maxLength = word.length



  for (var j = 0; j < word.length; j++) {
    cell[startIndex + j].style.background = '#fff';
  }
}


for (var i = 0; i < vertical.length; i++) {
  var word = vertical[i];
  var startIndex = 0;

  var n = 22



  const input = create('textArea');
  input.id = 'cell-input-column'

  $('.wrapper').appendChild(input)
  const cell_input = $a('#cell-input-column')

  switch (i) {
    case 0:
      startIndex = 32;
      break;
    case 1:
      startIndex = 152;
      break;
    case 2:
      startIndex = 19;
      break;
    case 3:
      startIndex = 124;
      break;
    case 4:
      startIndex = 6;
      break;
    case 5:
      startIndex = 126;
      break;
    case 6:
      startIndex = 187;
      break;
    case 7:
      startIndex = 8;
      break;
    case 8:
      startIndex = 159;
      break;
    case 9:
      startIndex = 55;
      break;
    case 10:
      startIndex = 146;
      break;
    case 11:
      startIndex = 57;
      break;
  }

  var x = startIndex % 15
  var y = Math.floor(startIndex / 15)

  cell_input[i].style.left = n * x + 'px'
  cell_input[i].style.top = n * y + 'px'
  pCol[i].style.left = n * x + 16 + 'px'
  pCol[i].style.top = n * y + 3 + 'px'
  pCol[i].textContent = i + 11

  cell_input[i].style.height = `${vertical[i].length * n}px`;
  cell_input[i].maxLength = word.length




  for (var j = 0; j < word.length; j++) {
    cell[startIndex + j * 15].style.background = '#fff';
  }
}
//==================================\\

window.onload = function() {
  let info = Cookies.get('info')
  
  if (!info) {
   Swal.fire({
     title: 'Read me!',
     text: 'sorry yaa kalo ngga sempurna ,masih banyak bug nya :(',
     icon: 'info',
     footer:'hope you enjoy it :)',
   }).then((result) => {
    if (result.isConfirmed) {
      Cookies.set('info', 'true',{ expires: 7 })
    }
  })
  }
}
$('.hint').onclick = function() {
  Swal.fire({
    title: 'Are you sure?',
    text:'hubungi Diky untuk memberikan hint',
    icon: 'warning',
    footer: 'hati-hati! ,progress mungkin tidak disimpan',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Yes, i'm sure`
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://wa.me/6283830862251'
    }
  })
}