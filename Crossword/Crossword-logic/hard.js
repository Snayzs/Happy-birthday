var answerhorizon = [
  [], [], [], [], [],
  [], [], [], [], []
  ]
var answervertical = [
  [], [], [], [], [],
  [], [], [], [], [],
  [], []
  ]



let inputelementrow = $a('input')
let inputelementcol = $a('textArea')

inputelementrow.forEach(call =>
  call.onclick = function() {
    PosEnd(this)
  })
inputelementcol.forEach(call =>
  call.onclick = function() {
    PosEnd(this)
  })



//===================================\\


inputelementrow[0].on('focus', function() {
  startIndex = 8

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementrow[2].on('focus', function() {
  startIndex = 53

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementrow[3].on('focus', function() {
  startIndex = 77

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementrow[7].on('focus', function() {
  startIndex = 154

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementrow[9].on('focus', function() {
  startIndex = 217

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})






inputelementcol[0].on('focus', function() {
  startIndex = 32

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[1].on('focus', function() {
  startIndex = 152

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[3].on('focus', function() {
  startIndex = 124

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[5].on('focus', function() {
  startIndex = 126

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[7].on('focus', function() {
  startIndex = 8

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[8].on('focus', function() {
  startIndex = 159

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[9].on('focus', function() {
  startIndex = 55

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})
inputelementcol[11].on('focus', function() {
  startIndex = 57

  ar = [this.value];
  arr = ar[0].split('');
  arr[0] = cell[startIndex].textContent

  this.value = arr.join('')
})




//===================================\\
inputelementrow[0].on('input', () => {
  startIndex = 8;
  x = 0
  v = 0;

  for (let i = startIndex; i < startIndex + 5; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})

inputelementrow[1].on('input', function() {
  startIndex = 31;
  x = 1;
  v = 0;

  for (let i = startIndex; i < startIndex + 8; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[2].on('input', () => {
  startIndex = 53;
  x = 2;
  v = 0;

  for (let i = startIndex; i < startIndex + 7; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[3].on('input', () => {
  startIndex = 77;
  x = 3;
  v = 0;

  for (let i = startIndex; i < startIndex + 5; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[4].on('input', () => {
  startIndex = 97;
  x = 4;
  v = 0;

  for (let i = startIndex; i < startIndex + 6; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[5].on('input', () => {
  startIndex = 123;
  x = 5;
  v = 0;

  for (let i = startIndex; i < startIndex + 7; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[6].on('input', () => {
  startIndex = 150;
  x = 6;
  v = 0;

  for (let i = startIndex; i < startIndex + 3; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[7].on('input', () => {
  startIndex = 154;
  x = 7;
  v = 0;

  for (let i = startIndex; i < startIndex + 10; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[8].on('input', () => {
  startIndex = 196;
  x = 8;
  v = 0;

  for (let i = startIndex; i < startIndex + 7; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})
inputelementrow[9].on('input', () => {
  startIndex = 217;
  x = 9;
  v = 0;

  for (let i = startIndex; i < startIndex + 5; i++) {
    cell[i].textContent = inputelementrow[x].value[v];
    v++;
  }
})

//=====================================\\

inputelementcol[0].on('input', () => {
  startIndex = 32;
  x = 0
  v = 0

  for (let i = startIndex; i < startIndex + 4 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[1].on('input', () => {
  startIndex = 152;
  x = 1
  v = 0

  for (let i = startIndex; i < startIndex + 4 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[2].on('input', () => {
  startIndex = 19;
  x = 2
  v = 0

  for (let i = startIndex; i < startIndex + 6 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[3].on('input', () => {
  startIndex = 124;
  x = 3;
  v = 0;

  for (let i = startIndex; i < startIndex + 3 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[4].on('input', () => {
  startIndex = 6;
  x = 4;
  v = 0;

  for (let i = startIndex; i < startIndex + 6 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[5].on('input', () => {
  startIndex = 126;
  x = 5;
  v = 0;

  for (let i = startIndex; i < startIndex + 4 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[6].on('input', () => {
  startIndex = 187;
  x = 6;
  v = 0;

  for (let i = startIndex; i < startIndex + 3 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[7].on('input', () => {
  startIndex = 8;
  x = 7;
  v = 0;

  for (let i = startIndex; i < startIndex + 9 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[8].on('input', () => {
  startIndex = 159;
  x = 8;
  v = 0;

  for (let i = startIndex; i < startIndex + 5 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[9].on('input', () => {
  startIndex = 55;
  x = 9;
  v = 0;

  for (let i = startIndex; i < startIndex + 4 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[10].on('input', () => {
  startIndex = 146;
  x = 10;
  v = 0;

  for (let i = startIndex; i < startIndex + 3 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})
inputelementcol[11].on('input', () => {
  startIndex = 57;
  x = 11;
  v = 0;

  for (let i = startIndex; i < startIndex + 5 * 15; i += 15) {
    cell[i].textContent = inputelementcol[x].value[v];
    v++;
  }
})



function PosEnd(end) {
  var len = end.value.length;

  if (end.setSelectionRange) {
    end.focus();
    end.setSelectionRange(len, len);
  } else if (end.createTextRange) {
    var t = end.createTextRange();
    t.collapse(true);
    t.moveEnd('character', len);
    t.moveStart('character', len);
    t.select();
  }
}

window.onclick = function() {
  for (var i = 0; i < horizon.length; i++) {
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
    for (var j = 0; j < horizon[i].length; j++) {
      answerhorizon[i][j] = cell[startIndex + j].textContent;
    }
  }
  for (var i = 0; i < vertical.length; i++) {
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
    for (var j = 0; j < vertical[i].length; j++) {
      answervertical[i][j] = cell[startIndex + j * 15].textContent;
    }
  }
}

function checkanswer() {
  checkanswerhorizon()
  checkanswervertical()
}

find = []



function checkanswervertical() {
  for (var i = 0; i < vertical.length; i++) {
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
    if (answervertical[i].join('').toLowerCase() == vertical[i]) {
      switch (i) {
        case 0:
          find[10] = 'a'
          break;
        case 1:
          find[11] = 'a'
          break;
        case 2:
          find[12] = 'a'
          break;
        case 3:
          find[13] = 'a'
          break;
        case 4:
          find[14] = 'a'
          break;
        case 5:
          find[15] = 'a'
          break;
        case 6:
          find[16] = 'a'
          break;
        case 7:
          find[17] = 'a'
          break;
        case 8:
          find[18] = 'a'
          break;
        case 9:
          find[19] = 'a'
          break;
        case 10:
          find[20] = 'a'
          break;
        case 11:
          find[21] = 'a'
          break;
      }
      for (var j = 0; j < vertical[i].length; j++) {
        cell[startIndex + j * 15].addClass('correct')
      }
    } else {
      switch (i) {
        case 0:
          find[10] = undefined
          break;
        case 1:
          find[11] = undefined
          break;
        case 2:
          find[12] = undefined
          break;
        case 3:
          find[13] = undefined
          break;
        case 4:
          find[14] = undefined
          break;
        case 5:
          find[15] = undefined
          break;
        case 6:
          find[16] = undefined
          break;
        case 7:
          find[17] = undefined
          break;
        case 8:
          find[18] = undefined
          break;
        case 9:
          find[19] = undefined
          break;
        case 10:
          find[20] = undefined
          break;
        case 11:
          find[21] = undefined
          break;
      }
    }
  }
}

function checkanswerhorizon() {
  for (var i = 0; i < horizon.length; i++) {
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
    if (answerhorizon[i].join('').toLowerCase() == horizon[i]) {
      switch (i) {
        case 0:
          find[0] = 'a'
          break;
        case 1:
          find[1] = 'a'
          break;
        case 2:
          find[2] = 'a'
          break;
        case 3:
          find[3] = 'a'
          break;
        case 4:
          find[4] = 'a'
          break;
        case 5:
          find[5] = 'a'
          break;
        case 6:
          find[6] = 'a'
          break;
        case 7:
          find[7] = 'a'
          break;
        case 8:
          find[8] = 'a'
          break;
        case 9:
          find[9] = 'a'
          break;
      }
      for (var j = 0; j < horizon[i].length; j++) {
        cell[startIndex + j].addClass('correct')
      }
    } else {
      switch (i) {
        case 0:
          find[0] = undefined
          break;
        case 1:
          find[1] = undefined
          break;
        case 2:
          find[2] = undefined
          break;
        case 3:
          find[3] = undefined
          break;
        case 4:
          find[4] = undefined
          break;
        case 5:
          find[5] = undefined
          break;
        case 6:
          find[6] = undefined
          break;
        case 7:
          find[7] = undefined
          break;
        case 8:
          find[8] = undefined
          break;
        case 9:
          find[9] = undefined
          break;
      }
      for (var j = 0; j < horizon[i].length; j++) {
        cell[startIndex + j].removeClass('correct')
      }
    }
  }
}

$('.check').onclick = function() {
  Swal.fire({
    title: 'are you sure?',
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Yes, i'm sure`
  }).then((result) => {
    if (result.isConfirmed) {
      checkanswer()
      filteredfind = find.filter(element => element === "a");
      $('.find').textContent = `word finded = ${filteredfind.length}`
      $('.left').textContent = `word left = ${22 - filteredfind.length}`

      if (filteredfind.length == 22) {
        Swal.fire({
          title: 'congratulation',
          text: `you're achieve a bronze key!`,
          imageUrl: '../assets/keybronze.png',
          imageWidth: 200,
          imageHeight: 200,
          footer: 'you can open your inventory to check'
        })
        Cookies.set('acces1', 'true', { expires: 7 })
      }
    }
  })
}