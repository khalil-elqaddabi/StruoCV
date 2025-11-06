const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

let step = 0;
let totalSteps = 5
let currentStep =1

function updateProgressBar() {
 progress.style.width = `${step}%`
 if(currentStep===1)progress.style.width ='0%'
 if(currentStep===2)progress.style.width ='20%'
 if(currentStep===3)progress.style.width ='40%'
 if(currentStep===4)progress.style.width ='60%'
 if(currentStep===5)progress.style.width ='80%'
}

function updateStepDisplay() {
  steps.forEach( ( s, index) =>{
    if(index + 1 === currentStep) {
      s.classList.add("active-icon")
       console.log("step", currentStep, "index", index);
    }
  })
}
updateStepDisplay()

function showSections(){
  currentStep ==1
  
}
showSections()

nextbtn.addEventListener("click",() =>{
  if(currentStep < totalSteps){
    currentStep++
    updateProgressBar()
    showSections()
    updateStepDisplay()
  }
})

prevbtn.addEventListener("click", () => {
  if(currentStep>1){
    currentStep--
    updateProgressBar()
    showSections()
  }
})







