
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
const number2 = document.querySelector(".number2")
const info1 = document.getElementById("info")
const section = document.querySelectorAll(".action")

let step = 0;
let totalSteps = 5
let currentStep =1

function updateProgressBar() {
 progress.style.width = `${step}%`
 if(currentStep===1){
  progress.style.width ='0%';
 }
 if(currentStep===2){
  progress.style.width ='25%'; 
  }
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



function updatenformDisplay(){
  section[step].classList.remove('active');
  step++;
  if(step>section.length){
    step=section.length-1;
  }
  section[step].classList.add('active')
}
function updatepformDisplay(){
  section[step].classList.remove('active');
  step--;
  if(step>section.length){
    step=section.length-1;
  }
  section[step].classList.add('active')
}


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
    updatenformDisplay()
    
    progress.style.backgroundColor = "gray"
  }
})

prevbtn.addEventListener("click", () => {
  if(currentStep>1){
    currentStep--
    updateProgressBar()
    updateStepDisplay()
    showSections()
    updatepformDisplay()
    
  }
})


const quill = new Quill('#editor-container', {
  theme: 'snow',
  placeholder: 'Décrivez-vous ici...',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['clean']
    ]
  }
});
// compitance
function addCompitance(){
  const ul=document.getElementById('compit')
  const condidat=document.getElementById('condidat')
  if(condidat.value.trim() === "") return;
  let li =document.createElement('li')
  li.classList.add('listC')
  
  li.innerHTML = `
    <span>${condidat.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li)
  condidat.value = "";
}

// Soft skills
function addSoft(){
  const ul=document.getElementById('soft')
  const soft=document.getElementById('isoft')
  if(soft.value.trim() === "") return;
  let li =document.createElement('li')
  li.classList.add('listC')
  
  li.innerHTML = `
    <span>${soft.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li)
  soft.value = "";
}

// loisir
function addLoi(){
  const ul=document.getElementById('loi')
  const soft=document.getElementById('iloi')
  if(soft.value.trim() === "") return;
  let li =document.createElement('li')
  li.classList.add('listC')
  
  li.innerHTML = `
    <span>${soft.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li)
  soft.value = "";
}



// addlangue
function addLangue(){
  const ul=document.getElementById('langue')
  const ilangue=document.getElementById('ilangue')
  const choi=document.getElementById('choi')
  if(ilangue.value.trim() === "") return;
  let li =document.createElement('li')
  li.classList.add('listC')

  
  
  li.innerHTML = `
  <div>
    <div> <i>languem</i> : ${ilangue.value}</div>
    <div> <i>niveau</i> : ${choi.value}</div>
    </div>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li)
  ilangue.value = "";
}



// ====adduniversity====//
function addUni(){
  const ul=document.getElementById('uni')
  const iuni=document.getElementById('iuni')
  const info=document.getElementById('iinfo')
  const inst=document.getElementById('inst')
  const loc=document.getElementById('loc')
  const ds=document.getElementById('ds')
  const de=document.getElementById('de')
  if(iuni.value.trim() === "" || info.value.trim()==='') return;
  let li =document.createElement('li')
  li.classList.add('listC')

  
  
  li.innerHTML = `
  <div>
    <div> <span class="text-gray-500">Univercity : </span>  ${iuni.value}</div>
    <div> <span class="text-gray-500">domine : </span>  ${info.value}</div>
    <div> <span class="text-gray-500">institution : </span>  ${inst.value}</div>
    </div>
    <div>
    <div> <span class="text-gray-500">location : </span>  ${loc.value}</div>
    <div> <span class="text-gray-500">startDate : </span>  ${ds.value}</div>
    <div> <span class="text-gray-500">endtDate : </span>  ${de.value}</div>
    </div>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li)
  iuni.value = "";
  info.value = "";
  inst.value = "";
  loc.value = "";
  ds.value = "";
  de.value = "";
  
}

//=====experience====//
function addEx(){
  const ul = document.getElementById('ex')
  const job =  document.getElementById('ijob')
  const comp =  document.getElementById('icom')
  const contra =  document.getElementById('contra')
  const loc =  document.getElementById('iloc')
  const ds =  document.getElementById('ids')
  const de =  document.getElementById('ide')
  const ach =  document.getElementById('ach')
  let li=document.createElement('li')
  li.classList.add('listx')

  li.innerHTML=`
  <div class="flex justify-between">
  <div>
    <div> <span class="text-gray-500">Univercity : </span>  ${job.value}</div>
    <div> <span class="text-gray-500">domine : </span>  ${comp.value}</div>
    <div> <span class="text-gray-500">institution : </span>  ${contra.value}</div>
    </div>
    <div class="mr-[30px]">
    <div> <span class="text-gray-500">location : </span>  ${loc.value}</div>
    <div> <span class="text-gray-500">startDate : </span>  ${ds.value}</div>
    <div> <span class="text-gray-500">endtDate : </span>  ${de.value}</div>
    </div>
    </div>
    <span class="text-gray-500">achievements : </span> ${ach.value}
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>`
    li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });

    ul.appendChild(li)
    job.value = "";
  comp.value = "";
  contra.value = "";
  loc.value = "";
  ds.value = "";
  de.value = "";
  ach.value = "";
}

//=====addcertifica====//
function addcertifica(){
  const ul = document.getElementById('nom')
  const inom =  document.getElementById('inom')
  const link =  document.getElementById('ilink')
 
  let li=document.createElement('li')
  li.classList.add('listC')

  li.innerHTML=`
  
  <div>
    <div> <span class="text-gray-500">Univercity : </span>  ${inom.value}</div>
    <div> <span class="text-gray-500">domine : </span>  ${link.value}</div>
    </div>
   
    
    
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>`
    li.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });

    ul.appendChild(li)
    inom.value = "";
  link.value = "";
  
}




