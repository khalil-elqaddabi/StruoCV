
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
  if(currentStep===5){progress.style.width ='100%'; sectioncv();}
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
    valid= page2()
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
 Certifica.push(`${inom.value} : ${link.value}`)
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
  const errlinked = document.querySelector('#err_linkd')
  const errporto = document.querySelector('#err_porto')
  const errgit = document.querySelector('#err_git')
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
if( LInkdin.value === ""){
  errlinked.textContent = "Please enter your linkdin url";
  isValid = false;
}else if( !linksRegex.test(LInkdin.value)){
    errlinked.textContent = "Please enter a valid linkdin url";
  isValid = false;
    
    
  }
if( Portofilio.value === ""){
  errporto.textContent = "Please enter your linkdin url";
  isValid = false;
}else if( !linksRegex.test(Portofilio.value)){
    errporto.textContent = "Please enter a valid linkdin url";
  isValid = false;
    
    
  }
if( GitHub.value === ""){
  errgit.textContent = "Please enter your linkdin url";
  isValid = false;
}else if( !linksRegex.test(GitHub.value)){
    errgit.textContent = "Please enter a valid linkdin url";
  isValid = false;
    
    
  }
  return isValid;
}

// page2 validation
function page2(){
  // inputs
  const Ptitle = document.getElementById('title_pro').value.trim()

  // spans
  const allerrors = document.querySelectorAll('.color')
 const errtitle = document.getElementById('err_title')
 console.log("errors" ,allerrors)
allerrors.forEach((error)=> {
  error.style.color='red'
  error.textContent=""
})
  let isValid = true;

  // Validate name
  if (Ptitle == "") {
    errtitle.textContent = "titre professionnel is required";
    isValid = false;
  } 
 

  return isValid;
  
}









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
  description :  quill.root.innerHTML,
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

function dcv1(){
  var element = document.getElementById('cv1');
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();

// Old monolithic-style usage:
html2pdf(element, opt);
}
function sectioncv(){
  const section = document.getElementById("section5")
  section.innerHTML=`
   <form action="/" class="bg-white w-[90%] rounded-lg shadow-lg ">
          <div class="fhoto flex flex-col items-center mt-8 gap-[20px] pb-6 flex flex-col gap-[100px]">
           
     
            <h2><b>Prévisualisation du CV</b></h2>
            <!-- cv 1 --> 
          <div>
          <div id="cv1">
           <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden  border">
    <!-- Header -->
    <div class=" text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300">
      <div class="flex items-center space-x-4">
        <!-- Profile Image -->
        <img src=" ${image_view.src}" alt="Photo" class="w-24 h-24 rounded-full border-2 border-white">
        <div>
          <h1 class="text-3xl font-bold text-black">${obj.prenom} ${obj.nom}</h1>
          <p class="mt-1 text-gray-300">${obj.lprotitle}</p>
        </div>
      </div>
      <div class="mt-4 md:mt-0 text-right text-gray-300 text-sm">
        <p>Email:  ${obj.lemail}</p>
        <p>Téléphone: ${obj.lphone}</p>
        <p>Ville: ${obj.ville}</p>
        <p>Nationalité: ${obj. lnationality}</p>
      </div>
    </div>


    <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="space-y-6">
        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Informations Personnelles</h2>
          <p><strong>Date de naissance:</strong> ${obj.ldateofbirth}</p>
          <p><strong>Lieu de naissance:</strong> ${obj.lplaceofbirth}</p>
          <p><strong>LinkedIn:</strong> <a href="${obj.llinkedin}" class="text-gray-700 hover:text-gray-900">linkedin.com</a></p>
          <p><strong>Portfolio:</strong> <a href="${obj.lportofilio}" class="text-gray-700 hover:text-gray-900">Portofilio.com</a></p>
          <p><strong>GitHub:</strong> <a href="${obj.lgithub}" class="text-gray-700 hover:text-gray-900">github.com</a></p>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Langues</h2>
          <ul class="list-disc list-inside text-gray-700" id="languecv">
        
          </ul>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Hobbies</h2>
          <ul class="list-disc list-inside text-gray-700"id="loisircv">
            
          </ul>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:col-span-2 space-y-6">
        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Éducation</h2>
          <div class="mb-2 text-gray-700" id="universitycv">
            
          </div>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Expérience Professionnelle</h2>
          <div class="mb-2 text-gray-700" id="experiencecv">
           
          </div>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Compétences</h2>
          <p class="mb-2" id="technique"><strong >Techniques:</strong> 
            
          </p>
          <p id="softskil"><strong>Soft Skills:</strong>
            
          </p>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Certifications</h2>
          <ul class="list-disc list-inside text-gray-700" id="certificacv">
           
          </ul>
        </div>
      </div>
    </div>
  
  </div>
</div>
  <div class="mt-10 flex justify-center  ">
    <button type="button" onclick="dcv1()" class=" cursor-pointer rounded-md px-10 py-2 text-[white] bg-blue-600"> telecharge</button>
  </div>
          </div>
<!-- cv 2 -->
 <div>
 <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-center justify-between p-6 border-b border-gray-300">
      <div class="text-left md:text-left">
        <h1 class="text-3xl font-bold text-gray-900">Jean Dupont</h1>
        <p class="mt-1 text-gray-600">Ingénieur Logiciel</p>
        <p class="mt-2 text-gray-500 text-sm">Email: jean.dupont@example.com</p>
        <p class="text-gray-500 text-sm">Téléphone: +33 6 12 34 56 78</p>
        <p class="text-gray-500 text-sm">Ville: Paris, France</p>
        <p class="text-gray-500 text-sm">Nationalité: Française</p>
      </div>
      <!-- Profile Image on the right -->
      <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
        <img src="https://intranet.youcode.ma/storage/users/profile/1636-1760996311.png" alt="Photo" class="w-24 h-24 rounded-full border-2 border-gray-300">
      </div>
    </div>

    <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="space-y-6">
        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Informations Personnelles</h2>
          <p><strong>Date de naissance:</strong> 1 Janvier 1990</p>
          <p><strong>Lieu de naissance:</strong> Paris</p>
          <p><strong>LinkedIn:</strong> <a href="#" class="text-gray-700 hover:text-gray-900">linkedin.com/in/jeandupont</a></p>
          <p><strong>Portfolio:</strong> <a href="#" class="text-gray-700 hover:text-gray-900">jeandupont.com</a></p>
          <p><strong>GitHub:</strong> <a href="#" class="text-gray-700 hover:text-gray-900">github.com/jeandupont</a></p>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Langues</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Français (natif)</li>
            <li>Anglais (avancé)</li>
            <li>Espagnol (intermédiaire)</li>
          </ul>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Hobbies</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Lecture</li>
            <li>Voyages</li>
            <li>Programmation</li>
          </ul>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:col-span-2 space-y-6">
        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Éducation</h2>
          <div class="mb-2 text-gray-700">
            <p><strong>Domaine:</strong> Développement Web</p>
            <p><strong>Université:</strong> Université de Paris</p>
          </div>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Expérience Professionnelle</h2>
          <div class="mb-2 text-gray-700">
            <p><strong>Poste:</strong> Développeur Front-End</p>
            <p><strong>Entreprise:</strong> XYZ Tech</p>
            <p><strong>Lieu:</strong> Paris</p>
            <p><strong>Contrat:</strong> CDI</p>
            <p><strong>Période:</strong> Janvier 2020 - Décembre 2023</p>
            <p><strong>Réalisations:</strong> Création d'applications web performantes et maintenables.</p>
          </div>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Compétences</h2>
          <p class="mb-2"><strong>Techniques:</strong> 
            <span class="inline-block bg-gray-200 text-gray-900 px-2 py-1 rounded mr-2 mb-1">HTML</span>
            <span class="inline-block bg-gray-200 text-gray-900 px-2 py-1 rounded mr-2 mb-1">CSS</span>
            <span class="inline-block bg-gray-200 text-gray-900 px-2 py-1 rounded mr-2 mb-1">JavaScript</span>
            <span class="inline-block bg-gray-200 text-gray-900 px-2 py-1 rounded mr-2 mb-1">React</span>
          </p>
          <p><strong>Soft Skills:</strong>
            <span class="inline-block bg-gray-300 text-gray-900 px-2 py-1 rounded mr-2 mb-1">Communication</span>
            <span class="inline-block bg-gray-300 text-gray-900 px-2 py-1 rounded mr-2 mb-1">Travail en équipe</span>
            <span class="inline-block bg-gray-300 text-gray-900 px-2 py-1 rounded mr-2 mb-1">Résolution de problèmes</span>
          </p>
        </div>

        <div>
          <h2 class="font-semibold text-lg border-b border-gray-300 pb-1 mb-2 text-gray-800">Certifications</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Certification Développement Web Avancé</li>
            <li>Certification Analyse de Données</li>
          </ul>
        </div>
      </div>
    </div>
  </div >
  <div class="mt-10 flex justify-center ">
      <button type="button" onclick="" class=" cursor-pointer rounded-md px-10 py-2 text-[white] bg-blue-600"> telecharge</button>
    </div>

  </div>
  <!-- done -->
</div>
</form>
  `
  languestok.forEach( langue =>{
  const ul = document.getElementById('languecv')
  ul.innerHTML += `<li>${langue}</li>`
  
})
Loisir.forEach( loisir =>{
  const ul = document.getElementById('loisircv')
  ul.innerHTML += `<li>${loisir}</li>`
  
})
Certifica.forEach( cirti =>{
  const ul = document.getElementById('certificacv')
  ul.innerHTML += `<li>${cirti}</li>`
  
})
University.forEach( uni =>{
  const div = document.getElementById('universitycv')
  div.innerHTML += `<li>${uni}</li>`
  
})
experienceslist.forEach( exper =>{
  const div = document.getElementById('experiencecv')
  div.innerHTML += `<li>${exper}</li>`
  
})
compitancelist.forEach( teck =>{
  const p = document.getElementById('technique')
  p.innerHTML += `<span>${teck}</span>`
  
})
Softskills.forEach( skill =>{
  const p = document.getElementById('softskil')                                 
  p.innerHTML += `<span>${skill}</span>`
  
})
// console.log(languestok)
}

const upload_img = document.getElementById('dropzone-file')
const image_view = document.getElementById('viewimg')
upload_img.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file && ( file.size / (1024 * 1024)) < 2) {
    
    const reader = new FileReader();
    reader.onload = function(e) {
      image_view.src = e.target.result;

    };
    
    reader.readAsDataURL(file);
    
    
  }
  else{
    alert("chose picture with size < 2 MB")
  }
});