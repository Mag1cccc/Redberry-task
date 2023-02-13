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


