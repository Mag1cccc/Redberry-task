const backBtn = document.getElementById("back-btn");
backBtn.onclick =  () => {
    location.href = "index.html";
}

//Regural Expression 
const checkLetter = /^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/ //georgian letter
const emailRegex = /^[a-zA-Z]+[0123456789]+@redberry.ge$/ //email
const checkMobile = /^995[0-9]{9}$/  //number


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


//Validation Name

const checkName = () => {
    const userNameValue = userName.value.trim();
    
    if(userNameValue === ' ' || userNameValue.length < 2 || !userNameValue.match(checkLetter)) {
        nameSmall.style.color = "#EF5050";
        userName.style.borderColor = "#EF5050";
        successNameIcon.style.visibility = "hidden";
        errorNameIcon.style.visibility = "visible";
        errorNameIcon.style.color = "#EF5050";
        return false;
        
    } else {
        nameSmall.style.color = "#2E2E2E";
        userName.style.borderColor = "#98E37E";
        errorNameIcon.style.visibility = "hidden";
        successNameIcon.style.visibility = "visible";
        successNameIcon.style.color = "#98E37E";
        return true;
    }
}


//Validation Surname

const checkSurName = () => {
    const surNameValue = surName.value.trim();

    if(surNameValue === ' ' ||  surNameValue.length < 2  || !surNameValue.match(checkLetter) ) {
        small.style.color = "#EF5050";
        surName.style.borderColor = "#EF5050";
        successSurNameIcon.style.visibility = "hidden";
        errorSurNameIcon.style.visibility = "visible";
        errorSurNameIcon.style.color = "#EF5050";
        return false;
    } else {
        small.style.color = "#2E2E2E";
        surName.style.borderColor = "#98E37E";
        errorSurNameIcon.style.visibility = "hidden";
        successSurNameIcon.style.visibility = "visible";
        successSurNameIcon.style.color = "#98E37E";
        return true;
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
        return true;
    }
}


//Validation Number

const numberLabel = document.getElementById("number-label");
const numberInput = document.getElementById("number-input");
const numErrorIcon = document.getElementById("error-num-icon");
const numSuccessIcon = document.getElementById("success-num-icon");
const numSmall = document.getElementById("num-small");

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
        return true;
    }
}


//Upload button (ატვირთვა)

const uploadBtn = document.getElementById("upload-btn");
const errorUploadBtnIcon = document.getElementById("error-icon");
const successUploadBtnIcon = document.getElementById("success-icon");
const myFile = document.getElementById("my-file");

const checkUpload = () => {
    const myFileValue = myFile.value;
    console.log(myFileValue);
    if(myFileValue === "") {
        errorUploadBtnIcon.style.visibility = "visible";
        successUploadBtnIcon.style.visibility = "hidden";
        return false;
    } else {
        successUploadBtnIcon.style.visibility = "visible";
        errorUploadBtnIcon.style.visibility = "hidden";
        return true;
    }
}

const loadFile = function(event) {
    const image = document.getElementById('output');
    console.log(event.target.files[0])
    image.src=URL.createObjectURL(event.target.files[0]);
    
};

//name
const loadName = function(event) {
    const name = document.getElementById('name');
    name.innerText = event.target.value;
    localStorage.setItem("name",userName.value);
};

//lastname 

const loadLastName = function(event) {
    const lastName = document.getElementById('lastname');
    lastName.innerText = event.target.value;
}

const loadTextArea = function(event) {
    const textArea = document.getElementById('for-textarea');
    textArea.innerText = event.target.value;
}

const loadEmail = function(event) {
    const forEmail = document.getElementById('for-email');
    forEmail.innerText = event.target.value;
}

const loadNumber = function(event) {
    const forNum = document.getElementById('for-num');
    forNum.innerText = event.target.value;
}


//Button(შემდეგი)

const nextButton = document.getElementById("next-btn")

nextButton.onclick = () => {
    if(checkName() && checkSurName() && checkEmail() && checkNumber() && checkUpload()){
        location.href = "experience.html";
    } else {
        alert('Form is not valid')
    }
}


// const loadForm = () => {
//     const storageName = localStorage.getItem("name");
//     if(userName.value === ""){
//         userName.value = storageName;
//         userName.onchange();
//     }
// }


