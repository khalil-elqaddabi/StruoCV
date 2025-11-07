const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
const number2 = document.querySelector(".number2")
let step = 0;
let totalSteps = 5
let currentStep =1

function updateProgressBar() {
 progress.style.width = `${step}%`
 if(currentStep===1){progress.style.width ='0%';}
 if(currentStep===2){progress.style.width ='25%';}
 if(currentStep===3){progress.style.width ='50%';}
 if(currentStep===4){progress.style.width ='75%';}
 if(currentStep===5){progress.style.width ='100%';}
}

function updateStepDisplay() {
  steps.forEach( ( s, index) =>{
    if(index < currentStep) {
      s.classList.add("step")
       console.log("step", currentStep, "index", index);
    }else{
      s.classList.remove("step")
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
    progress.style.backgroundColor = "red"
  }
})

prevbtn.addEventListener("click", () => {
  if(currentStep>1){
    currentStep--
    updateProgressBar()
    updateStepDisplay()
    showSections()
  }
})







