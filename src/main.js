import { closeNavbar } from "./navbar.js"


let settings = document.querySelector('.hamburger_button')
let navbar = document.querySelector('.navbar_container')
let overlay = document.querySelector('.overlay')
let imgOverlays = document.querySelectorAll('img')
let decision_button = document.querySelectorAll('.decision_button')
let popupTrigger = document.querySelector('.table_difficulty_button')
let closeButton = document.querySelectorAll('.close_button')
let dealerTotal = document.querySelector('.dealer_total')
let playerTotal = document.querySelector('.player_total')
let diffPopup = document.querySelectorAll('.difficulty_popup');

let difficultySelectorEasy = document.querySelector('.dif_tab_button_easy')
let difficultySelectorMedium = document.querySelector('.dif_tab_button_medium')
let difficultySelectorHard = document.querySelector('.dif_tab_button_hard')
let difficultySelectorExpert = document.querySelector('.dif_tab_button_expert')
let difficultySelectorMaster = document.querySelector('.dif_tab_button_master')
let difficultySelectorSandbox = document.querySelector('.dif_tab_button_sandbox')
let tabs = document.querySelectorAll('.tab')
let nextButton = document.querySelector('.next_button')
let prevButton = document.querySelector('.prev_button')

let difSelectButtonEasy = document.querySelector('.select_dif_button_easy')
let difSelectButtonMedium = document.querySelector('.select_dif_button_medium')
let difSelectButtonHard = document.querySelector('.select_dif_button_hard')
let difSelectButtonExpert = document.querySelector('.select_dif_button_expert')
let difSelectButtonMaster = document.querySelector('.select_dif_button_master')
let difSelectButtonSandbox = document.querySelector('.select_dif_button_sandbox')

let difficultyLabel = document.querySelector('.difficulty_label')



let currentIndex = 0;


showTab(currentIndex);


settings.addEventListener('click', () => {

  navbar.classList.toggle('show_navbar')
  overlay.classList.toggle('active')
  imgOverlays.forEach(img => img.classList.toggle('active')); // Toggle for each image
  decision_button.forEach(decision_button => decision_button.classList.toggle('active')); // Toggle for each image
  popupTrigger.classList.toggle('active')
  playerTotal.classList.toggle('active')
  dealerTotal.classList.toggle('active')
  closeNavbar()
})



//popup

//open popup from difficulty button
popupTrigger.addEventListener('click', () => {

  overlay.classList.remove('active')
  toggleBackground()
  settings.classList.add('active')
  diffPopup[currentIndex / 3].style.display = 'block';
})

//close popup from X button
function closePopup() {
  diffPopup.forEach(diffPopup => diffPopup.style.display = 'none')
  toggleBackground()
  closeNavbar()
  navbar.classList.remove('show_navbar')
  settings.classList.remove('active')
}


function showTab(index) {
  tabs.forEach(tab => tab.style.display = 'none');
  tabs[index].style.display = 'block';
}



difficultySelectorEasy.addEventListener('click', () => {
  showTab(0)
})

difficultySelectorMedium.addEventListener('click', () => {
  showTab(1)
})

difficultySelectorHard.addEventListener('click', () => {
  showTab(2)
})

difficultySelectorExpert.addEventListener('click', () => {
  showTab(3)
})

difficultySelectorMaster.addEventListener('click', () => {
  showTab(4)
})

difficultySelectorSandbox.addEventListener('click', () => {
  showTab(5)
})


function toggleBackground() {
  overlay.classList.toggle('active')
  imgOverlays.forEach(img => img.classList.toggle('active')); // Toggle for each image
  decision_button.forEach(decision_button => decision_button.classList.toggle('active')); // Toggle for each image
  popupTrigger.classList.toggle('active')
  playerTotal.classList.toggle('active')
  dealerTotal.classList.toggle('active')
}

//selcting and storing difficulty
difSelectButtonEasy.addEventListener('click', () => {
  difficultyLabel.innerText = 'Easy'
  closePopup()
})
difSelectButtonMedium.addEventListener('click', () => {
  difficultyLabel.innerText = 'Medium'
  closePopup()
})

difSelectButtonHard.addEventListener('click', () => {
  difficultyLabel.innerText = 'Hard'
  closePopup()
})

difSelectButtonExpert.addEventListener('click', () => {
  difficultyLabel.innerText = 'Expert'
  closePopup()
})

difSelectButtonMaster.addEventListener('click', () => {
  difficultyLabel.innerText = 'Master'
  closePopup()
})

difSelectButtonSandbox.addEventListener('click', () => {
  difficultyLabel.innerText = 'Sandbox'
  closePopup()
})


closeButton.forEach(closeButton => closeButton.addEventListener('click', closePopup));


prevButton.addEventListener('click', () => {
  diffPopup[1].style.display = 'none';
  diffPopup[0].style.display = 'block';
  currentIndex = 0;
  showTab(currentIndex);
});

nextButton.addEventListener('click', () => {
  diffPopup[0].style.display = 'none';
  diffPopup[1].style.display = 'block';
  currentIndex = 3;
  showTab(currentIndex);
});