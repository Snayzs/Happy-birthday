const w_achiv = $('.wrapper-achievement ul')

const list_a = []
const myachievement = [
  {
    title: "The Chemical Master",
    description: "berhasil mensintesis molekul air"
  },
  {
    title: "Treasure Hunter",
    description: "berhasil memecahkan misteri harta karun"
  },
  {
    title: "The Master Of Baking",
    description: "berhasil membuat hidangan penutup dengan indah"
  },
  {
    title: "Mystery Finder",
    description: "berhasil menemukan bebek misteri"
  },
  {
    title: "The Journey",
    description: "berhasil menemukan halaman terakhir"
  }
];


var c = Cookies.get('coin') || 0
coin = parseInt(c)

$('#coin').textContent = `Coin : $${coin}`

function setAchievement() {
  const achievementCookies = {
    alchemic: myachievement[0],
    treasure: myachievement[1],
    bakery: myachievement[2],
    duck: myachievement[3],
    journey: myachievement[4]
  };

  for (const cookie in achievementCookies) {
    if (Cookies.get(cookie)) {
      list_a.push(achievementCookies[cookie]);
      
    }
  }
}


function fill_a() {
  var filteredArray = list_a.reduce((unique, obj) => {
    var found = unique.some(item => item.title === obj.title);
    if (!found) {
      unique.push(obj);
    }
    return unique;
  }, []);

  for (let i = 0; i < filteredArray.length; i++) {

    let img = new Image()
    img.src = "../assets/star.png"

    let title = create('h3')
    title.textContent = list_a[i].title

    let p = create('p')
    p.textContent = list_a[i].description

    let li = create('li')
    li.appendChild(img)
    li.appendChild(title)
    li.appendChild(p)
    
    if (w_achiv.children.length <= filteredArray.length-1) {
      w_achiv.appendChild(li)
      
    }
  }
}

setAchievement()
fill_a()