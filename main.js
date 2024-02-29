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
  var topPosition = 30;
  var leftPosition = screenWidth - windowWidth;

    // Open a new window with the WhatsApp chat link
  window.open(url, "_blank", "width=" + windowWidth + ",height=" + windowHeight + ",top=" + topPosition + ",left=" + leftPosition);
  }

// Main form deatils submit to whatsapp
  function submitForm() {
    // Get form data
    const From = document.getElementById('From').value;
    const To = document.getElementById('To').value;
    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
    const Jurney = document.getElementById('Jurney').value;
    const passenger = document.getElementById('passenger').value;

    // Form validation
    if (!From || !To || !startdate || !enddate || !Jurney || !passenger) {
        alert('Please fill in all the required fields.');
        return;
    }
    const whatsappurl="https://wa.me/918668926949?text="
    +"From:" + From +"%0a"
    +"To:" + To +"%0a"
    +"Start Date:" + startdate +"%0a"
    +"End Date:" + enddate +"%0a"
    +"Jurney:" + Jurney +"%0a"
    +"No of Passenger:" + passenger;

    window.open(whatsappurl,"_blank").focus();

    // Clear the form
    document.getElementById('carBookingForm').reset();

    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}

//maruti Dzire
function submitformdzire(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Maruti Swift Dzire 5 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}
//Innova
function submitinnova(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Innova Crysta 7, 8 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}
//Ertiga
function submitertiga(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Ertiga 7 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}
//Tempo Traveller
function submittempotraveller(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Tempo Traveller 20 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}
//Bus
function submitbus(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Bus 40 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}
//Wagon R
function submitwagonr(){
    const whatsappurl="https://wa.me/918668926949?text="
    +"Wagon R 5 Seater Enquiry" +"%0a"
    window.open(whatsappurl,"_blank").focus();
    // Inform the user that the booking is successful
    alert('Enquiry send successfull! We will contact you shortly.');
}

