const backBtn = document.getElementById("back-button");

backBtn.onclick = function () {
    location.href = "experience.html";
}


const educationInput = document.getElementById("education-input");
const educationErrorIcon = document.getElementById("error-education-icon");
const educationSuccessIcon = document.getElementById("success-education-icon");

const checkEducation = () => {
    educationInputValue = educationInput.value.trim();
    if(educationInputValue === " " || educationInputValue.length < 2){
        educationErrorIcon.style.visibility = "visible";
        educationSuccessIcon.style.visibility = "hidden";
        educationInput.style.borderColor = "#EF5050"
        return false;
    } else {
        educationErrorIcon.style.visibility = "hidden";
        educationSuccessIcon.style.visibility = "visible";
        educationInput.style.borderColor = "#98E37E" 
        return true;
    }
}

const description = document.getElementById("description");

const checkDescription = () => {
    console.log(description.value);
    if(description.value.length < 1) {
        description.style.borderColor = "#EF5050";
        return false;
    } else {
        description.style.borderColor = "#98E37E"
        return true;
    }
}

const endInput = document.getElementById("end-input");

const checkEndInput = () => {
    if(endInput.value === ""){
        endInput.style.borderColor = "#EF5050";
        return false;
    } else {
        endInput.style.borderColor = "#98E37E";
        return true;
    }
}


const nextButton = document.getElementById("next-button");

nextButton.onclick = function () {
    if(checkEducation() && checkDescription() && checkEndInput()){
        location.href = "resume.html";
    } else {
        alert("Form is not valid");
    }
}

// how to send get request

let dataInfo = [];

async function fetchData() {
    try {
      const response = await fetch('https://resume.redberryinternship.ge/api/degrees');
      dataInfo = await response.json();
      forSelect(dataInfo);
    } catch (error) {
      console.error(error);
    }
  }
  
const forSelect = (data) => {
    const select = document.getElementById('grade1');
    data.forEach(degree => {
      const option = document.createElement('option');
      option.value = degree.id;
      option.textContent = degree.title;
      select.appendChild(option);
    });
}

const grade = document.getElementById("grade1");

const gradeSelect = () => {
    console.log(grade);
    console.log(grade.value)
    if(grade.value === "") {
       grade.style.borderColor = "#EF5050";
       
        return false;
    } else {
        grade.style.borderColor = "#98E37E";
        return true;
    }
}


const loadSchool = function(event) {
    const school = document.getElementById('school');
    school.innerText = event.target.value;
    localStorage.setItem("school",event.target.value);
};



const loadDegree = function(event) {
    console.log('loadDegree');
    const degree = document.getElementById('degree');
    let select = event.target;
    let selectedOption = select.options[select.selectedIndex];
    let selectedOptionText = selectedOption.text;
    degree.innerText = selectedOptionText;
    localStorage.setItem("degree",selectedOptionText);
}

const loadEndDate = function(event) {
    const endDate = document.getElementById('end-date');
    endDate.innerText = event.target.value;
    localStorage.setItem("degreeEndDate",event.target.value);
}

const loadAboutDegree = function(event) {
    const degreeAbout = document.getElementById('about');
    degreeAbout.innerText = event.target.value;
    localStorage.setItem("degreeAbout",event.target.value);
}

const loadForm = () => {
    const name = localStorage.getItem("name");
    const lastname = localStorage.getItem("lastname");
    const textarea = localStorage.getItem("textarea");
    const email = localStorage.getItem("email");
    const number = localStorage.getItem("number");
    const image = localStorage.getItem("image");
    const position = localStorage.getItem("position");
    const employer = localStorage.getItem("employer");
    const experienceStart = localStorage.getItem("experienceStart");
    const experienceEnd = localStorage.getItem("experienceEnd");
    const exeperienceAbout = localStorage.getItem("exeperienceAbout");

    const nameEl = document.getElementById("name");
    const lastnameEl = document.getElementById("lastname");
    const textareaEl = document.getElementById("for-textarea");
    const emailEl = document.getElementById("for-email");
    const numberEl = document.getElementById("for-num");
    const imageEl = document.getElementById("output");
    const positionEl = document.getElementById("position");
    const employerEl = document.getElementById("employer");
    const experienceStartEl = document.getElementById("starts");
    const experienceEndEl = document.getElementById("ends");
    const exeperienceAboutEl = document.getElementById("about");

    nameEl.innerText = name;
    lastnameEl.innerText = lastname;
    textareaEl.innerText = textarea;
    emailEl.innerText = email;
    numberEl.innerText = number;
    imageEl.src = image;
    positionEl.innerText = position;
    employerEl.innerText = employer;
    experienceStartEl.innerText = experienceStart;
    experienceEndEl.innerText = experienceEnd;
    exeperienceAboutEl.innerText = exeperienceAbout;

} 









