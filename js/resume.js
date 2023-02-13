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
const school = localStorage.getItem("school");
const degree = localStorage.getItem("degree");
const degreeEndDate = localStorage.getItem("degreeEndDate");
const degreeAbout = localStorage.getItem("degreeAbout");


const loadForm = () => {
    

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
    const schoolEl = document.getElementById("school");
    const degreeEl = document.getElementById("degree");
    const degreeEndDateEl = document.getElementById("end-date");
    const degreeAboutEl = document.getElementById("about");
    
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
    schoolEl.innerText = school;
    degreeEl.innerText = degree;
    degreeEndDateEl.innerText = degreeEndDate;
    degreeAboutEl.innerText = degreeAbout;
}





const sendCv = () => {
    fetch('https://resume.redberryinternship.ge/api/cvs', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: this.name,
        surname: lastname,
        email: email,
        phone_number: number,
        experiences: [
          {
            position: position,
            employer: employer,
            start_date: experienceStart,
            due_date: experienceEnd,
            description: exeperienceAbout
          }
        ],
        educations: [
          {
            institute: school,
            degree: this.degree,
            due_date: degreeEndDate,
            description: degreeAbout
          }
        ],
        image: image,
        about_me: textarea
    })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

