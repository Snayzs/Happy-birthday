var acces = [false, false, false];
var masterkey = [false, false, false];
var chestOpened = [false, false, false]


let acces1 = Cookies.get('acces1')
let acces2 = Cookies.get('acces2')
let acces3 = Cookies.get('acces3')
acces[0] = acces1
acces[1] = acces2
acces[2] = acces3




let open1 = Cookies.get('open0')
let open3 = Cookies.get('open1')
let open2 = Cookies.get('open2')

function checkChestOpened() {
  if (open1 != undefined || open2 != undefined || open3 != undefined) {
    masterkey[0] = open1
    masterkey[2] = open2
    masterkey[1] = open3
  }
  if (masterkey[0]) {
    chestOpened[0] = true
  }
  if (masterkey[1]) {
    chestOpened[1] = true
  }
  if (masterkey[2]) {
    chestOpened[2] = true
  }
}

window.onload = checkChestOpened()