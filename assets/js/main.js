document.oncontextmenu = function(){return false;}
/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav_link');
function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link')
}
navlink.forEach((a) => a.addEventListener('click', activeLink))
/*=============== Background Header =============== */
    function scrollHeader (){
        const header = document.getElementById('header');
    // when the scrool is greater than 50 viewport height , add the scroll-header class to header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll' ,scrollHeader);
/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects_container', {
    selectors: {
        target: '.project_item'
    },
    animation: {
        duration: 300
    }
});
/* Active Work*/
const linkWork = document.querySelectorAll('.category_btn');
function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active_work'));
    this.classList.add('active_work')
}
linkWork.forEach((a) => a.addEventListener('click', activeWork))
/*=============== Testimonials Swiper =============== */
var testimonialsswiper = new Swiper(".testimonial_container", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

/*=============== Contact Form =============== */

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact_name'),
contactEmail = document.getElementById('contact_email'),
Message = document.getElementById('message'),
ContactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    //check if the field has a value
    if(contactName.value ==='' || contactEmail.value ==='' || Message.value === '') {
        //add and remove color
        ContactMessage.classList.remove('color-light');
        ContactMessage.classList.add('color-dark');
        //show message 
        ContactMessage.textContent = 'Write all the input fields'
    } else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_ixlgn6p','template_30w7sis','#contact-form','2RqKRO4ziRqZ9iV43')
        .then(() => {
            //show message and add color , window + dot to open emoji
            ContactMessage.classList.add('color-light');
            ContactMessage.textContent = 'Message sent ✔';

            //  remove message after 5s
            setTimeout(() => {
                ContactMessage.textContent = '';
            },5000);
        },(Error) => {
            alert('OOPs! SOMETHING WENT WRONG... ', Error)
        }
        );
        //clear input fields
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
};
contactForm.addEventListener('submit',sendEmail)

/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu') || "",
navToggle = document.getElementById('nav-toggle') || "",
navClose = document.getElementById('nav-close') || "";



/*===== Menu Show =====*/
/* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        })
    }
/*===== Hide Show =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav_link') || "";
function linkAction(){
    const navMenu = document.getElementById('nav-menu') || "";
    //when we click on each link ,we remove the show-mnue  class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click',linkAction));

/*=============== Background Header =============== */
function scrollHeader (){
    const header = document.getElementById('header') ;
// when the scrool is greater than 50 viewport height , add the scroll-header class to header tag
if(this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}
window.addEventListener('scroll' ,scrollHeader);




/*=============== Style Switcher =============== */

const styleSwitcherToggle = document.querySelector('.style_switcher-toggler') ,
styleSwitcher = document.querySelector('.style_switcher') ;

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});
//hide switcher on scroll

window.addEventListener('scroll',() =>{
    if(styleSwitcher.classList.contains('open')){
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        }
        else {
            style.setAttribute('disabled','true');
        }
    });
}