

// lg service
const deepBtn = document.getElementById('deep--btn');
const scheduledBtn = document.getElementById('scheduled--btn');
const oneTimeBtn = document.getElementById('one-time--btn');
const movingBtn = document.getElementById('moving--btn');

const deep = document.getElementById('lg--deep--service');
const scheduled = document.getElementById('lg--scheduled--visits');
const oneTime = document.getElementById('lg--one--time');
const moving = document.getElementById('lg--moving');

deepBtn.addEventListener("click", () => {
  console.log("clicked")
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

// const bathingBtn = document.getElementById('bathing--btn');
// const diabilitiesBtn = document.getElementById('diabilities--btn');
// const medicalBtn = document.getElementById('medical--btn');
// const errandsBtn = document.getElementById('errands--btn');

// const bathing = document.getElementById('lg--bathing');
// const disabilities = document.getElementById('lg--disabilities');
// const medical = document.getElementById('lg--medical');
// const errands = document.getElementById('lg--errands');

// bathingBtn.addEventListener("click", () =>{
//   bathingBtn.classList.add("active");
//   diabilitiesBtn.classList.remove("active");
//   medicalBtn.classList.remove("active");
//   errandsBtn.classList.remove("active");

//   bathing.classList.add("active");
//   disabilities.classList.remove("active");
//   medical.classList.remove("active");
//   errands.classList.remove("active");
// })

// diabilitiesBtn.addEventListener("click", () =>{
//   bathingBtn.classList.remove("active");
//   diabilitiesBtn.classList.add("active");
//   medicalBtn.classList.remove("active");
//   errandsBtn.classList.remove("active");

//   bathing.classList.remove("active");
//   disabilities.classList.add("active");
//   medical.classList.remove("active");
//   errands.classList.remove("active");
// })

// medicalBtn.addEventListener("click", () =>{
//   bathingBtn.classList.remove("active");
//   diabilitiesBtn.classList.remove("active");
//   medicalBtn.classList.add("active");
//   errandsBtn.classList.remove("active");

//   bathing.classList.remove("active");
//   disabilities.classList.remove("active");
//   medical.classList.add("active");
//   errands.classList.remove("active");
// })

// errandsBtn.addEventListener("click", () =>{
//   bathingBtn.classList.remove("active");
//   diabilitiesBtn.classList.remove("active");
//   medicalBtn.classList.remove("active");
//   errandsBtn.classList.add("active");

//   bathing.classList.remove("active");
//   disabilities.classList.remove("active");
//   medical.classList.remove("active");
//   errands.classList.add("active");
// })





function autoFill(type) {

  if (type === 'care') {
    document.getElementById("inquiry_type").selectedIndex = 1;
    document.getElementById("job_applicant").style.display = "none";
          document.getElementById("care_request").style.display = "unset";
  }
    if (type === 'job') {
    document.getElementById("inquiry_type").selectedIndex = 2;
      document.getElementById("care_request").style.display = "none";
      document.getElementById("job_applicant").style.display = "unset";
    }
  
  }
  function selectChange(){
    o = document.getElementById("inquiry_type");
    val = o.options[o.selectedIndex].value
    console.log(val)
    if (val === 'care') {
      
        document.getElementById("job_applicant").style.display = "none";
          document.getElementById("care_request").style.display = "unset";
    }
    else  if(val ==='job'){
        document.getElementById("job_applicant").style.display = "unset";
          document.getElementById("care_request").style.display = "none";
    }
    else {
         document.getElementById("job_applicant").style.display = "non";
          document.getElementById("care_request").style.display = "none";
    }

  }
      