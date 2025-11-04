const progress = document.querySelector('.progress')
const steps = document.querySelectorAll('.step')
const prevbtn = document.querySelector('.prev')
const nextbtn = document.querySelector('.next')

let step =0

function updateProgressBar(){
    const multiple = 100/(steps.length-1)
    const width = step*multiple
progress.style.transform = `scaleX(${width/100})`
}

function updateStepDisplay() {
    steps.forEach((s, index)=> {
    s.classList.toggle('bg-orange-500', index <= step)
    s.classList.toggle('text-white', index <= step)

    })
}

function updateButtonState(){
  prevbtn.disabled = step === 0
nextbtn.disabled = step === steps.length - 1

}

let interval =setInterval(() =>{
    updateProgressBar()
    updateStepDisplay()
    updateButtonState()
    step++
    if(step >= steps.length){
        clearInterval(interval)
    }
},2000)