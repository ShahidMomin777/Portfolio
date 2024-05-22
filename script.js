// const showMenu =(toggleId,navId)=>{
//     const toggle= document.getElementById(toggleId), 
//     nav= document.getElementById(navId);

//     if(toggle && nav){
//         toggle.addEventListener('click' , ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }

// showMenu('nav-toggle','nav_menu');


//======scroll reveal animation======

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2000,
    delay: 200
});

sr.reveal('.home-data, .about-img,.skills-desc',{});
sr.reveal('.social-icon',{interval:200});
sr.reveal('.home__img,.about-desc,.skills-right',{delay:400});
sr.reveal('.grid-box,.work-img,.contact-input',{interval:300});