// Typed animation
var typed = new Typed("#typed", {
    strings: ["Amparo High School Student", "Grade 9 student",],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true,
});

// Theme
function theme() {
    const lightBtn = document.getElementById("lightBtn");
    const darkBtn = document.getElementById("darkBtn");

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")){
        darkBtn.style.display = "block";
        lightBtn.style.display = "none";  
    } else {
        darkBtn.style.display = "none";
        lightBtn.style.display = "block";
    }
}

// Menue toogle
const menuItems = document.querySelectorAll('.nav .item');

menuItems.forEach(item=> {
    item.addEventListener('click', () => {
        menuItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active')
    });
});