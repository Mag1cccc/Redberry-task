const backBtn = document.getElementById("back-btn");
backBtn.onclick = function () {
    location.href = "index.html";
}

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const surName = document.getElementById("surName");
const small = document.getElementById("smallest");
const nameSmall = document.getElementById("nameSmall");
const successNameIcon = document.getElementById("successNameIcon");
const errorNameIcon = document.getElementById("errorNameIcon");
const successSurNameIcon = document.getElementById("successSurNameIcon");
const errorSurNameIcon = document.getElementById("errorSurNameIcon");

// value[0] = '+'
// value[1] = '9'
// value[0] = '9'
// value[1] = '5'

//regural expression for georgian letter
// const letter = /^[აბგდ]+$/

//for number check
//regural expression for georgian letter
// const mobilenumber = /^[0-9]{9}&/
//regural expression for georgian +995
// const mobile = /^+995[0-9]{9}$/ 


// for letter check
//!userNameValue.match(letter) 
//!surNameValue.match(letter)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    check();
})

const check = () => {
    const userNameValue = userName.value.trim();
    const surNameValue = surName.value.trim();
    
    if(userNameValue === ' ' || userNameValue.length < 2) {
        // userNameValue.style.color = "#EF5050";
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
    if(surNameValue === ' ' ||  surNameValue.length < 2) {
        // userNameValue.style.color = "#EF5050";
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



