// Nav icon 
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');


navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}


// Phone Mask   
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', ()=> {
        if (input.value == "+") input.value = '';
    })
    input.addEventListener('blur', ()=> {
        if (input.value == '+') input.value = '';
    })
});

//  Google Map 
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.43465797304362, lng: 30.55726652617661 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: './img/map/location-pin.svg'
    }); 
  }
