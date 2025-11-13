
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
const number2 = document.querySelector(".number2")
const info1 = document.getElementById("info")
const section = document.querySelectorAll(".action")



// inputs //
// p1
const first_name =document.getElementById('first_name')
const last_name =document.getElementById('last_name')
const Email =document.getElementById('email')
const Phone =document.getElementById('phone')
const Adress =document.getElementById('adress')
const City =document.getElementById('city')
const Nationality =document.getElementById('national')
const Dateofbirth =document.getElementById('date_birth')
const Placeofbirth =document.getElementById('origin')
const LInkdin =document.getElementById('linkdin')
const Portofilio =document.getElementById('Portofilio')
const GitHub =document.getElementById('github')
// p2
const Ptitle =document.getElementById('title_pro')
// const Description =document.getElementById('editor-container')
const Softskills =[]
const compitancelist = []
const Loisir =[]
const languestok = []
const Langues =document.getElementById('ilangue')
const Niveau =document.getElementById('choi')
// p3
const University =[]
const experienceslist = []
const Certifica =[]
const Degree =document.getElementById('iuni')
const Field =document.getElementById('iinfo')
const Institution =document.getElementById('inst')
const lLocation =document.getElementById('loc')
const Dateofstrt =document.getElementById('ds')
const Dateofend =document.getElementById('de')
// Expériences professionnelles
const Job = document.getElementById('ijob')
const Company = document.getElementById('icom')
const ContractType = document.getElementById('iloc')
const Date_start = document.getElementById('ids')
const Date_end = document.getElementById('ide')
const Achievements = document.getElementById('ach')
// p4
const certifica = document.getElementById('inom')
const link = document.getElementById('ilink')




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
  let valid = false ; 
  if(currentStep == 1){
    valid = page1()
  }
  if(currentStep == 2){
    valid= true
  }
  if(currentStep == 3){
    valid= true
  }
  if(currentStep == 4){
    valid= true
  }
  if(   valid && currentStep < totalSteps){
    currentStep++
    updateProgressBar()
    showSections()
    updateStepDisplay()
    updatenformDisplay()
       saveAllData()

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
  compitancelist.push(condidat.value)

  li.innerHTML = `
    <span>${condidat.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;
  // delete button
  li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.lcompitance[index]
       obj.lcompitance.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
   
 
  ul.appendChild(li)
  condidat.value = "";
}

// Soft skills
function addSoft(){
  const ul=document.getElementById('soft')
  const soft=document.getElementById('isoft')
  if(soft.value.trim() === "") return;
  Softskills.push(soft.value)
  let li =document.createElement('li')
  li.classList.add('listC')
  
  li.innerHTML = `
    <span>${soft.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

 li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.lsoftskills[index]
       obj.lsoftskills.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
  ul.appendChild(li)
  soft.value = "";
}

// loisir
function addLoi(){
  const ul=document.getElementById('loi')
  const soft=document.getElementById('iloi')
  if(soft.value.trim() === "") return;
  Loisir.push(soft.value)
  let li =document.createElement('li')
  li.classList.add('listC')
  
  li.innerHTML = `
    <span>${soft.value}</span>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

 li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.lloisir[index]
       obj.lloisir.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
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
  languestok.push(`${ilangue.value} : ${choi.value}`)

  
  
  li.innerHTML = `
  <div>
    <div> <i>languem</i> : ${ilangue.value}</div>
    <div> <i>niveau</i> : ${choi.value}</div>
    </div>
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>
  `;

  // delete button
 li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.llangues[index]
       obj.llangues.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
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
  University.push(`${iuni.value} - ${info.value} - ${inst.value} - ${loc.value} - ${ds.value} - ${de.value}`)
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
 li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.univercity[index]
       obj.univercity.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
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
  experienceslist.push(`${job.value} - ${comp.value} - ${contra.value} - ${loc.value} - ${ds.value} - ${de.value} - ${ach.value}`)
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
   
    li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.experienceslist[index]
       obj.experienceslist.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })

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
 Certifica.push(`${inom.value} - ${link.value}`)
  let li=document.createElement('li')
  li.classList.add('listC')

  li.innerHTML=`
  
  <div>
    <div> <span class="text-gray-500">Univercity : </span>  ${inom.value}</div>
    <div> <span class="text-gray-500">domine : </span>  ${link.value}</div>
    </div>
    
    <button class="removeBtn text-red-500 font-bold ml-3">X</button>`

  li.querySelectorAll(".removeBtn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       obj.certifica[index]
       obj.certifica.splice(index,1)
       console.log("is remove" , index)
       ul.children[index].remove();
       li.innerHTML=''
    })
  })
    ul.appendChild(li)
    inom.value = "";
  link.value = "";
  
}


// =======================validatuyion===============================//


// page1 validation

function page1(){
  // inputs
  const fname = document.getElementById('first_name').value.trim()
  const lname = document.getElementById('last_name').value.trim()
  const email = document.getElementById('email').value.trim()
  const phone = document.getElementById('phone').value.trim()

  // spans
  const allerrors = document.querySelectorAll('.color')
  const errFname = document.getElementById('f_name')
  const errLname = document.querySelector('#l_name')
  const erremail = document.querySelector('#err_email')
  const errphone = document.querySelector('#err_p')
 console.log("errors" ,allerrors)
allerrors.forEach((error)=> {
  error.style.color='red'
  error.textContent=""
})
 /* regexes */
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^\+212[67]\d{8}$/;
  const linksRegex = /^https?:\/\/[^\s]+$/;

  let isValid = true;

  // Validate name
  if (fname == "") {
    errFname.textContent = "Name is required";
    isValid = false;
  } else if (!nameRegex.test(fname)) {
    errFname.textContent = "Name must contain only letters (min 3 characters)";
    isValid = false;
  }
  if (lname === "") {
    errLname.textContent = "Name is required";
    isValid = false;
  } else if (!nameRegex.test(fname)) {
    errLname.textContent = "Name must contain only letters (min 3 characters)";
    isValid = false;
  }

  // Validate email
  if (email === "") {
    erremail.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    erremail.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate phone
  if (phone === "") {
    errphone.textContent = "Phone number is required";
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    errphone.textContent = "Phone must be in format: +212XXXXXXXXX";
    isValid = false;
  }

  

  return isValid;


}

// page2 validation
// function page2(){

//    inputs
//   const fname = document.getElementById('first_name').value.trim()
//   const lname = document.getElementById('last_name').value.trim()
//   const email = document.getElementById('email').value.trim()
//   const phone = document.getElementById('phone').value.trim()

//   spans
//   const allerrors = document.querySelectorAll('.color')
//   const errtitle = document.getElementById('err_title')
//   const errLname = document.querySelector('#l_name')
//   const erremail = document.querySelector('#err_email')
//   const errphone = document.querySelector('#err_p')
//  console.log("errors" ,allerrors)
// allerrors.forEach((error)=> {
//   error.style.color='red'
//   error.textContent=""
// })
//   let isValid = true;

//   // Validate name
//   if (fname == "") {
//     errFname.textContent = "Name is required";
//     isValid = false;
//   } 
//   if (lname === "") {
//     errLname.textContent = "Name is required";
//     isValid = false;
//   } 

//   // Validate email
//   if (email === "") {
//     erremail.textContent = "Email is required";
//     isValid = false;
//   } 
//   // Validate phone
//   if (phone === "") {
//     errphone.textContent = "Phone number is required";
//     isValid = false;
//   } 

  

//   return isValid;
  
// }









let obj = {}

function saveAllData(){

 obj = {
  prenom : first_name.value,
  nom : last_name.value,
  lemail : Email.value,
  lphone : Phone.value,
  ladress : Adress.value,
  ville : City.value,
  lnationality : Nationality.value,
  ldateofbirth : Dateofbirth.value,
  lplaceofbirth : Placeofbirth.value,
  llinkedin : LInkdin.value,
  lportofilio : Portofilio.value,
  lgithub : GitHub.value,
  lprotitle : Ptitle.value,
  // ldescription : Descrption.value,
  lcompitance : compitancelist
,
  lsoftskills : Softskills,
  lloisir : Loisir,
  llangues : languestok,
  ldegree : Degree.value,
  lfield : Field.value,
  univercity : University,
  experienceslist : experienceslist,
  llocation : lLocation.value,
  ldateofstart : Dateofstrt.value,
  ldateodend : Dateofend.value,
  ljob : Job.value,
  lcompany : Company.value,
  lcontracttype : ContractType.value,
  ldate_start : Date_start.value,
  ldate_end : Date_end.value,
  lachivements : Achievements.value,
  certifica : Certifica,
  lcertifica : Certifica.value,
  llink : link.value,


}

   localStorage.setItem("cvdata" ,JSON.stringify(obj))
   
}
// const keys = Object.keys(obj)
// const valueobj = Object.values(obj)
// console.log( keys)
// console.log(valueobj)
// for(let i=0 ; i<keys.length; i++){
//   localStorage.setItem(keys[i], valueobj[i])
// }

// localStorage.setItem("imge".image_view.src)


// obj.lcompitance.forEach( compet =>{
//   document.getElementById
// })
