let mainContent = document.querySelector(".main-content");
let aboutLink = document.querySelector("#contact-link");

aboutLink.addEventListener('click', function(){
    mainContent.style.display = "none";
})