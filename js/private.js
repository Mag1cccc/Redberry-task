const backBtn = document.getElementById("back-btn");
backBtn.onclick = function () {
    location.href = "index.html";
}

//Regural Expression 
const checkLetter = /^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/ //georgian letter
const emailRegex = /^[a-zA-Z]+@redberry.ge$/ //email

//for number check
//regural expression for georgian letter
// const mobilenumber = /^[0-9]{9}&/
//regural expression for georgian +995



//Validation Name and Surname
const form = document.getElementById("form");
const userName = document.getElementById("userName");
const surName = document.getElementById("surName");
const small = document.getElementById("smallest");
const nameSmall = document.getElementById("nameSmall");
const successNameIcon = document.getElementById("successNameIcon");
const errorNameIcon = document.getElementById("errorNameIcon");
const successSurNameIcon = document.getElementById("successSurNameIcon");
const errorSurNameIcon = document.getElementById("errorSurNameIcon");



const check = () => {
    const userNameValue = userName.value.trim();
    const surNameValue = surName.value.trim();
    
    if(userNameValue === ' ' || userNameValue.length < 2 || !userNameValue.match(checkLetter)) {
        nameSmall.style.color = "#EF5050";
        userName.style.borderColor = "#EF5050";
        successNameIcon.style.visibility = "hidden";
        errorNameIcon.style.visibility = "visible";
        errorNameIcon.style.color = "#EF5050";
        
    } else {
        nameSmall.style.color = "#2E2E2E";
        userName.style.borderColor = "#98E37E";
        errorNameIcon.style.visibility = "hidden";
        successNameIcon.style.visibility = "visible";
        successNameIcon.style.color = "#98E37E";
    }
    if(surNameValue === ' ' ||  surNameValue.length < 2  || !userNameValue.match(checkLetter) ) {
        small.style.color = "#EF5050";
        surName.style.borderColor = "#EF5050";
        successSurNameIcon.style.visibility = "hidden";
        errorSurNameIcon.style.visibility = "visible";
        errorSurNameIcon.style.color = "#EF5050";
        
    } else {
        small.style.color = "#2E2E2E";
        surName.style.borderColor = "#98E37E";
        errorSurNameIcon.style.visibility = "hidden";
        successSurNameIcon.style.visibility = "visible";
        successSurNameIcon.style.color = "#98E37E";
    }
}


//Validation Email

const emailForm = document.getElementById("email-form");
const emailLabel = document.getElementById("email-label");
const emailInput = document.getElementById("email-input");
const emailErrorIcon = document.getElementById("error-email-icon");
const emailSuccessIcon = document.getElementById("success-email-icon");



const checkEmail = () => {
    emailInputValue = emailInput.value.trim();
    if (emailInputValue === " " || emailInputValue.length < 2 || !emailInput.value.match(emailRegex)) {
        emailErrorIcon.style.visibility = "visible";
        emailSuccessIcon.style.visibility = "hidden";
        emailLabel.style.color = "#E52F2F";
        emailInput.style.borderColor = "#EF5050";
        return false;
    } else {
        emailErrorIcon.style.visibility = "hidden";
        emailSuccessIcon.style.visibility = "visible";
        emailLabel.style.color = "#98E37E";
        emailInput.style.borderColor = "#98E37E";
    }
}


//Validation Number

const numberLabel = document.getElementById("number-label");
const numberInput = document.getElementById("number-input");
const numErrorIcon = document.getElementById("error-num-icon");
const numSuccessIcon = document.getElementById("success-num-icon");
const numSmall = document.getElementById("num-small");



const checkMobile = /^995[0-9]{9}$/ 
// const checkMobileNumber = /^[0-9]{9}&/;

const checkNumber = () => {
    const numberInputValue = numberInput.value.trim();
    if(numberInputValue === " " || !numberInputValue.match(checkMobile)) {
        numberInput.style.borderColor = "#EF5050";
        numSuccessIcon.style.visibility = "hidden";
        numErrorIcon.style.visibility = "visible";
        return false;
    } else {
        numberInput.style.borderColor = "#98E37E";
        numErrorIcon.style.visibility = "hidden";
        numSuccessIcon.style.visibility = "visible";
    }
}



//Upload button (ატვირთვა)

const uploadBtn = document.getElementById("upload-btn");
const errorUploadBtnIcon = document.getElementById("error-icon");
const successUploadBtnIcon = document.getElementById("success-icon");


const checkUpload = () => {
    const uploadBtnValue = uploadBtn.value;
    
    if(uploadBtnValue === " ") {
        errorUploadBtnIcon.style.visibility = "visible";
        successUploadBtnIcon.style.visibility = "hidden";
       
    } else {
        successUploadBtnIcon.style.visibility = "visible";
        errorUploadBtnIcon.style.visibility = "hidden";
        
    }
}



//Button(შემდეგი)

const nextButton = document.getElementById("next-btn")

nextButton.onclick = () => {
    check();
    checkEmail();
    checkNumber();
}



