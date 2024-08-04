/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    

    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()

  //check if field has value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '')
    {
    //Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    //show message
    contactMessage.textContent = 'Write all the input fields 📩'
    }
    else{
      //serviceID - template - #form - publickey
      emailjs.sendForm('service_84w4png','template_nmm5yfe','#contact-form','52C7jckZftzVWuBwc')
      .then(() =>{
        //show message and add color

        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        //Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)

      }, (error) =>{
        alert('OOP! SOMETHING HAS FAILED...')
      })
    
    //To clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = '' 
    }
    

}
contactForm.addEventListener('submit',sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

