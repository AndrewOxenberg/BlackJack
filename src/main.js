
let settings = document.querySelector('.hamburger_button')
let navbar = document.querySelector('.navbar_container')
let overlay = document.querySelector('.overlay')
let imgOverlays = document.querySelectorAll('img')
let decision_button = document.querySelectorAll('.decision_button')
let popupTrigger = document.querySelector('.table_difficulty_button');

let difficultySelectorEasy = document.querySelector('.dif_tab_button_easy');
let difficultySelectorMedium = document.querySelector('.dif_tab_button_medium');
let difficultySelectorHard = document.querySelector('.dif_tab_button_hard');

settings.addEventListener('click', () => {

    navbar.classList.toggle('show_navbar')
    overlay.classList.toggle('active')
    imgOverlays.forEach(img => img.classList.toggle('active')); // Toggle for each image
    decision_button.forEach(decision_button => decision_button.classList.toggle('active')); // Toggle for each image
    popupTrigger.classList.toggle('active')



  
})


//popup

let popup = document.querySelector('.difficulty_popup');

//open popup from difficulty button
popupTrigger.addEventListener('click', () => {

    if (popup.style.display === 'none'|| !overlay.classList.contains('active')) {
        toggleBackground()
    }
    popup.style.display = 'block'
    openTab('easy')
})

//close popup from X button
let closeButton = document.querySelector('.close_button')
closeButton.addEventListener('click', () => {


    if (popup.style.display === 'block' || overlay.classList.contains('active')) {
        toggleBackground()
    }
    popup.style.display = 'none'


})


function openTab(tabName) {

    var i, tabcontent, tablinks

    // Hide all tabs
    tabcontent = document.getElementsByClassName('tab');

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block'
}



difficultySelectorEasy.addEventListener('click', openTab('easy'));;

difficultySelectorMedium.addEventListener('click', () => {
  openTab('medium');
});

difficultySelectorHard.addEventListener('click', () => {
  openTab('hard');
});

function toggleBackground() {
    overlay.classList.toggle('active')
    imgOverlays.forEach(img => img.classList.toggle('active')); // Toggle for each image
    decision_button.forEach(decision_button => decision_button.classList.toggle('active')); // Toggle for each image
    popupTrigger.classList.toggle('active')
}



