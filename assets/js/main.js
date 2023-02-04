
// navbar style
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}

// mobile nav
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navItems = document.getElementById('nav--items');

menu.addEventListener("click", ()=>{
  navItems.classList.add("active");
})

close.addEventListener("click", ()=>{
  navItems.classList.remove("active");
})

//contact us hide both the message text area and upload on load 
$(document).ready(function() {
  
  $("#job_applicant").hide();
  $("#care_request").hide();
});
//contact us show input based on service or applicant

$("#inquiry_type").change(function () {
  var selected_option = $('#inquiry_type').val();

  if (selected_option === 'service') {
    $("#care_request").show();
    $("#job_applicant").hide();
  }
  if (selected_option ==='employment') {
    $("#job_applicant").show();
      $("#care_request").hide();
  }
})


// lg service
const deepBtn = document.getElementById('deep--btn');
const scheduledBtn = document.getElementById('scheduled--btn');
const oneTimeBtn = document.getElementById('one-time--btn');
const movingBtn = document.getElementById('moving--btn');

const deep = document.getElementById('lg--deep--service');
const scheduled = document.getElementById('lg--scheduled--visits');
const oneTime = document.getElementById('lg--one--time');
const moving = document.getElementById('lg--moving');

deepBtn.addEventListener("click", () =>{
  deepBtn.classList.add("active");
  scheduledBtn.classList.remove("active");
  oneTimeBtn.classList.remove("active");
  movingBtn.classList.remove("active");
  deep.classList.add("active");
  scheduled.classList.remove("active");
  oneTime.classList.remove("active");
  moving.classList.remove("active");
})
scheduledBtn.addEventListener("click", () =>{
  deepBtn.classList.remove("active");
  scheduledBtn.classList.add("active");
  oneTimeBtn.classList.remove("active");
  movingBtn.classList.remove("active");
  deep.classList.remove("active");
  scheduled.classList.add("active");
  oneTime.classList.remove("active");
  moving.classList.remove("active");
})
oneTimeBtn.addEventListener("click", () =>{
  deepBtn.classList.remove("active");
  scheduledBtn.classList.remove("active");
  oneTimeBtn.classList.add("active");
  movingBtn.classList.remove("active");
  deep.classList.remove("active");
  scheduled.classList.remove("active");
  oneTime.classList.add("active");
  moving.classList.remove("active");
})
movingBtn.addEventListener("click", () =>{
  deepBtn.classList.remove("active");
  scheduledBtn.classList.remove("active");
  oneTimeBtn.classList.remove("active");
  movingBtn.classList.add("active");
  deep.classList.remove("active");
  scheduled.classList.remove("active");
  oneTime.classList.remove("active");
  moving.classList.add("active");
})


// lg living

const bathingBtn = document.getElementById('bathing--btn');
const diabilitiesBtn = document.getElementById('diabilities--btn');
const medicalBtn = document.getElementById('medical--btn');
const errandsBtn = document.getElementById('errands--btn');

const bathing = document.getElementById('lg--bathing');
const disabilities = document.getElementById('lg--disabilities');
const medical = document.getElementById('lg--medical');
const errands = document.getElementById('lg--errands');

bathingBtn.addEventListener("click", () =>{
  bathingBtn.classList.add("active");
  diabilitiesBtn.classList.remove("active");
  medicalBtn.classList.remove("active");
  errandsBtn.classList.remove("active");

  bathing.classList.add("active");
  disabilities.classList.remove("active");
  medical.classList.remove("active");
  errands.classList.remove("active");
})

diabilitiesBtn.addEventListener("click", () =>{
  bathingBtn.classList.remove("active");
  diabilitiesBtn.classList.add("active");
  medicalBtn.classList.remove("active");
  errandsBtn.classList.remove("active");

  bathing.classList.remove("active");
  disabilities.classList.add("active");
  medical.classList.remove("active");
  errands.classList.remove("active");
})

medicalBtn.addEventListener("click", () =>{
  bathingBtn.classList.remove("active");
  diabilitiesBtn.classList.remove("active");
  medicalBtn.classList.add("active");
  errandsBtn.classList.remove("active");

  bathing.classList.remove("active");
  disabilities.classList.remove("active");
  medical.classList.add("active");
  errands.classList.remove("active");
})

errandsBtn.addEventListener("click", () =>{
  bathingBtn.classList.remove("active");
  diabilitiesBtn.classList.remove("active");
  medicalBtn.classList.remove("active");
  errandsBtn.classList.add("active");

  bathing.classList.remove("active");
  disabilities.classList.remove("active");
  medical.classList.remove("active");
  errands.classList.add("active");
})



var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});