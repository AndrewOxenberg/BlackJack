let settings_popup = document.querySelector('.settings_popup')
let stats_popup = document.querySelector('.stats_popup')
let achievements_popup = document.querySelector('.achievements_popup')
let leaderboard_popup = document.querySelector('.leaderboard_popup')
let about_popup = document.querySelector('.about_popup')

let settings_attribute = document.querySelector('.settings_attribute')
let stats_attribute = document.querySelector('.stats_attribute')
let achievements_attribute = document.querySelector('.achievements_attribute')
let leaderboard_attribute = document.querySelector('.leaderboard_attribute')
let about_attribute = document.querySelector('.about_attribute')

let navbar_attributes = document.querySelectorAll('.navbar_attribute')
let popups = document.querySelectorAll('.popup')

let settings = document.querySelector('.hamburger_button')

function showNav(index) {
//   navbar_attributes.forEach(navbar_attribute => navbar_attribute.style.display = 'none');
//   navbar_attributes[index].style.display = 'block';
}

settings_attribute.addEventListener('click', () => {
  settings_popup.style.display = 'block'
})

export function closeNavbar() {
    popups.forEach(popup => popup.style.display = 'none')
    // settings.classList.add('active')
}

