let mainContent = document.querySelector(".main-content");
let contactContent = document.querySelector(".contact-content");

let aboutLink = document.querySelector("#contact-link");
let homeLink = document.querySelector("#home-link");

let mainContentDefaultDisplay = mainContent.style.display;
// let contactContentDefaultDisplay = contactContent.style.display;

aboutLink.addEventListener('click', function(){
    mainContent.style.display = "none";
    contactContent.style.display = "block";
})

homeLink.addEventListener('click', function(){
    mainContent.style.display = mainContentDefaultDisplay;
    contactContent.style.display = "none";
})