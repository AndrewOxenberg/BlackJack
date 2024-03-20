
//all of this does nothing
window.addEventListener('resize', () => {
    let circle = document.querySelector('.solid')
    let screenWidth = window.innerWidth



    if (screenWidth >= 1440) {
        circle.setAttribute('r', "2px");
    }
    else if (screenWidth >= 1024) {
        circle.setAttribute('r', "2px");
    }
    else if (screenWidth >= 768) {
        circle.setAttribute('r', "2");
    }
    else if (screenWidth >= 425) {
        circle.setAttribute('r', '20');
    }
    else //screenWidth 320
    {
        circle.setAttribute('r', '200');
    }


})






/* xs */
/* @media (min-width: 320px) {
   
} */

/* sm */
/* @media (min-width: 425px) {
   
} */

/* md */
/* @media (min-width: 768px) {
    
} */

/* lg */
/* @media (min-width: 1024px) {
    
} */

/* xl */
/* @media (min-width: 1440px) {
   
} */