const backBtn = document.getElementById("back-button");
backBtn.onclick = function () {
    location.href = "private.html";
}

//POSITION VALIDATION

const positionInput = document.getElementById("position-input");
const positionErrorIcon = document.getElementById("error-position-icon");
const positionSuccessIcon = document.getElementById("success-position-icon");

const checkPosition = () => {
    positionInputValue = positionInput.value.trim();
    if(positionInputValue === " " || positionInputValue.length < 2){
        positionErrorIcon.style.visibility = "visible";
        positionSuccessIcon.style.visibility = "hidden";
        positionInput.style.borderColor = "#EF5050"
        return false;
    } else {
        positionErrorIcon.style.visibility = "hidden";
        positionSuccessIcon.style.visibility = "visible";
        positionInput.style.borderColor = "#98E37E"
        return true 
    }
}

//EMPLOYER VALIDATION

const employerInput = document.getElementById("employer-input");
const employerErrorIcon = document.getElementById("error-employer-icon");
const employerSuccessIcon = document.getElementById("success-employer-icon");

const checkEmployer = () => {
    employerInputValue = employerInput.value.trim();
    if(employerInputValue === " " || employerInputValue.length < 2){
        employerErrorIcon.style.visibility = "visible";
        employerSuccessIcon.style.visibility = "hidden";
        employerInput.style.borderColor = "#EF5050"
        return false;
    } else {
        employerErrorIcon.style.visibility = "hidden";
        employerSuccessIcon.style.visibility = "visible";
        employerInput.style.borderColor = "#98E37E" 
        return true;
    }
}

//START DATE VALIDATION

const startInput = document.getElementById("start-input");
const endInput = document.getElementById("end-input");
const checkDate = () => {
    const startDate = new Date(startInput.value);
    const endDate = new Date(endInput.value);
    
    
    if(startDate <= endDate){
        startInput.style.borderColor = "#98E37E";
        endInput.style.borderColor = "#98E37E";
        return true;
    } else {
        startInput.style.borderColor = "#EF5050";
        endInput.style.borderColor = "#EF5050";
        return false;
    }

}


//position
const loadPosition = function(event) {
    const position = document.getElementById('position');
    position.innerText = event.target.value;
    localStorage.setItem("position",event.target.value);
};

const loadEmployer = function(event) {
    const employer = document.getElementById('employer');
    employer.innerText = event.target.value;
    localStorage.setItem("employer",event.target.value);
}

const loadStarts = function(event) {
    const starts = document.getElementById('starts');
    starts.innerText = event.target.value;
    localStorage.setItem("experienceStart",event.target.value);
}

const loadEnds = function(event) {
    const forEmail = document.getElementById('ends');
    ends.innerText = event.target.value;
    localStorage.setItem("experienceEnd",event.target.value);
}

const loadAboutss = function(event) {
    const aboutss = document.getElementById('about');
    aboutss.innerText = event.target.value;
    localStorage.setItem("exeperienceAbout",event.target.value);
}



//DESCRIPTION VALIDATION
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

//NEXT BTN

const nextButton = document.getElementById("next-button");

nextButton.onclick = function () {
    if(checkPosition() && checkEmployer() && checkDate() && checkDescription()){
        location.href = "education.html";
    } else {
        alert("Form is not valid");
    }
}


const loadForm = () => {
    const name = localStorage.getItem("name");
    const lastname = localStorage.getItem("lastname");
    const textarea = localStorage.getItem("textarea");
    const email = localStorage.getItem("email");
    const number = localStorage.getItem("number");
    const image = localStorage.getItem("image");

    const nameEl = document.getElementById("name");
    const lastnameEl = document.getElementById("lastname");
    const textareaEl = document.getElementById("for-textarea");
    const emailEl = document.getElementById("for-email");
    const numberEl = document.getElementById("for-num");
    const imageEl = document.getElementById("output");

    nameEl.innerText = name;
    lastnameEl.innerText = lastname;
    textareaEl.innerText = textarea;
    emailEl.innerText = email;
    numberEl.innerText = number;
    imageEl.src = image;
    console.log(image);
}







