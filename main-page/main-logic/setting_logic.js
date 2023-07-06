function setTheme(condition) {
  if (condition) {
    document.documentElement.style.setProperty('--primary-color', '#383838');

    document.documentElement.style.setProperty('--secondary-color', '#656565');

    document.documentElement.style.setProperty('--text-color', '#E3E3E3');

    document.documentElement.style.setProperty('--line-color', '#212121');

    Cookies.set('theme', true, { expires: 7 })
  } else {
    document.documentElement.style.setProperty('--primary-color', '#fff');

    document.documentElement.style.setProperty('--secondary-color', '#f0f0f0');

    document.documentElement.style.setProperty('--text-color', '#2a2a2a');

    document.documentElement.style.setProperty('--line-color', 'darkgray');

    Cookies.remove('theme')
  }
}
//handle settings
function createSetting() {
  let table = create('table');
  table.id = 'setting-table'
  table.addClass('none')
  table.innerHTML = `
  <tr>
    <td colspan="2">
      <br><br><br><br>
      <h2>General</h2><br>
      <hr>
    </td>
  </tr>
  <tr>
    <td>
      <label for="theme-checkbox">
        <p>Dark mode</p>
      </label>
    </td>
    <td>
      <label class="switch">
        <input type="checkbox" id="theme-checkbox">
        <span class="slider round"></span>
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <label for="audio-checkbox">
        <p>Audio disable</p>
      </label>
    </td>
    <td>
      <label class="switch">
        <input type="checkbox" id="audio-checkbox">
        <span class="slider round"></span>
      </label>
    </td>
  </tr>
    <tr class='none'>
      <td colspan="2">
      <hr><br>
        <h2>Other</h2><br>
        <hr>
      </td>
    </tr> 
    <tr class='none'>
      <td>
        <label for="rain-checkbox">
          <p>Raining</p>
        </label>
      </td>
    <td>
      <label class="switch">
        <input type="checkbox" id="rain-checkbox">
        <span class="slider round"></span>
      </label>      
    </tr>
`;
  sidebar.appendChild(table)
}
createSetting()


var isSetteing = false

function setting(condition) {
  isSetteing = true

  const children = sidebar.children;
  if (!condition) {
    for (let i = 3; i < children.length - 1; i++) {
      children[i].addClass('none');
    }
    $('#setting-table').removeClass('none')

    $('#theme-checkbox').on('click', function() {
      this.checked ? setTheme(true) : setTheme()
    })
  } else {
    for (let i = 2; i < children.length - 1; i++) {
      children[i].removeClass('none');
    }
    $('#setting-table').addClass('none')
    isSetteing = false
  }
}

function checkSetting() {
  let theme = Cookies.get('theme')
  if (theme) {
    setTheme(true)
    $('#theme-checkbox').checked = true
  }
  
  let combine = Cookies.get('combineSucces')
  if (combine) {
    checkSucces(false)
  }
  
  
  let rainning = Cookies.get('rainning')
  if (rainning) {
    $('#rain-checkbox').checked = true
  }
  
}

$('#audio-checkbox').on('click',function() {
  if (this.checked) {
    audio.pause()
  }else {
    audio.css('display','block')
    audio.play()
  }
})

$('#rain-checkbox').on('click', function() {
  if (this.checked) {
    Cookies.set('rainning', true, { expires: 7 })
    rainning = true
    checkSucces(true)
  } else {
    Cookies.remove('rainning')
    $a('.rain').forEach(element => {
      element.innerHTML = '';
    })
    c_rain.css('opacity', 0)
    audio.pause()
  }
})

if(Cookies.get('diary')){
  $('.hide-diary').removeClass('hide-diary')
}