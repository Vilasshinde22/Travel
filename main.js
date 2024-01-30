let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top' })
sr.reveal('.form-container form', { delay: 800, origin: 'left' })
sr.reveal('.heading', { delay: 800, origin: 'top' })
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' })
sr.reveal('.services-container .box', { delay: 600, origin: 'top' })
sr.reveal('.about-container .box', { delay: 600, origin: 'top' })
sr.reveal('.reviews-container', { delay: 600, origin: 'top' })
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' })

function openWhatsApp() {
    // Replace "1234567890" with your WhatsApp number
    var whatsappNumber = "8668926949";
    var url = "https://wa.me/" + whatsappNumber;
  
    // Calculate the position to open the window on the right side
  var screenWidth = window.screen.width;
  var windowHeight = 500; // You can adjust the height as needed
  var windowWidth = 400; // You can adjust the width as needed
  var topPosition = 0;
  var leftPosition = screenWidth - windowWidth;

    // Open a new window with the WhatsApp chat link
    //window.open(url, "_blank", "width=500,height=600,top=0,right=0");

    // Open a new window with the WhatsApp chat link
  window.open(url, "_blank", "width=" + windowWidth + ",height=" + windowHeight + ",top=" + topPosition + ",left=" + leftPosition);
  }