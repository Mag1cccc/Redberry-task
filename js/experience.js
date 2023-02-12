const backBtn = document.getElementById("back-btn");
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
    } else {
        positionErrorIcon.style.visibility = "hidden";
        positionSuccessIcon.style.visibility = "visible";
        positionInput.style.borderColor = "#98E37E" 
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
    } else {
        employerErrorIcon.style.visibility = "hidden";
        employerSuccessIcon.style.visibility = "visible";
        employerInput.style.borderColor = "#98E37E" 
    }
}

//START DATE VALIDATION

const startInput = document.getElementById("start-input");

// const checkStartDate = () => {
//     startInputValue = startInput.value.trim();
//     if(startInputValue === " " || startInput == " " || startInput == undefined) {
//         startInput.style.borderColor = "#EF5050"
//     } else {
//         startInput.style.borderColor = "#98E37E"
//     }
// }


//END DATE VALIDATION
//



//DESCRIPTION VALIDATION
const description = document.getElementById("description");

const checkDescription = () => {
    console.log(description.value);
    if(description.value < 1) {
        description.style.borderColor = "#EF5050"
    } else {
        description.style.borderColor = "#98E37E"
    }
}