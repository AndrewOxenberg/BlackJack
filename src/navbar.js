let settings_popup = document.querySelector('.settings_popup')
let stats_popup = document.querySelector('.stats_popup')
let achievements_popup = document.querySelector('.achievements_popup')
let leaderboard_popup = document.querySelector('.leaderboard_popup')
let about_popup = document.querySelector('.about_popup')
let navPopups = document.querySelectorAll('.nav_popup')

let settings_attribute = document.querySelector('.settings_attribute')
let stats_attribute = document.querySelector('.stats_attribute')
let achievements_attribute = document.querySelector('.achievements_attribute')
let leaderboard_attribute = document.querySelector('.leaderboard_attribute')
let about_attribute = document.querySelector('.about_attribute')

let navbar_attributes = document.querySelectorAll('.navbar_attribute')
let popups = document.querySelectorAll('.popup')

let settings = document.querySelector('.hamburger_button')



settings_attribute.addEventListener('click', () => {
  navPopups.forEach(navPopup => navPopup.style.display = 'none')
  settings_popup.style.display = 'block'
})

stats_attribute.addEventListener('click', () => {
  navPopups.forEach(navPopup => navPopup.style.display = 'none')
  stats_popup.style.display = 'block'
})

achievements_attribute.addEventListener('click', () => {
  navPopups.forEach(navPopup => navPopup.style.display = 'none')
  achievements_popup.style.display = 'block'
})

leaderboard_attribute.addEventListener('click', () => {
  navPopups.forEach(navPopup => navPopup.style.display = 'none')
  leaderboard_popup.style.display = 'block'
})

about_attribute.addEventListener('click', () => {
  navPopups.forEach(navPopup => navPopup.style.display = 'none')
  about_popup.style.display = 'block'
})

export function closeNavbar() {
    popups.forEach(popup => popup.style.display = 'none')
}

