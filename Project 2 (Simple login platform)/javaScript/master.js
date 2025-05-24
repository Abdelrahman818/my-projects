// Selecting elements
let firstName = document.querySelector(".f-name")
let lastName = document.querySelector(".l-name")
let eMail = document.querySelector(".e-mail")
let password = document.querySelector(".pass")

let firstNameCont = document.querySelector(".f-name-cont")
let lastNameCont = document.querySelector(".l-name-cont")
let eMailCont = document.querySelector(".e-mail-cont")
let passwordCont = document.querySelector(".pass-cont")

// REs
let firstNameRe = /^[A-Z]{4,16}$/i
let lastNameRe = /^[A-Z]{4,16}$/i
let eMailRe = /^[a-z]+[^\s]+@[^\s@]+\.[^\s@]+$/i
let passwordRe = /^(?=.*\d)(?=.*[!@#&])[A-Za-z\d!@#&]{8,16}$/i

// Coding
firstName.onblur = () => {
    if (!firstNameRe.test(firstName.value) && !firstName.hasAttribute("inv")) {
        let createErrorMsg = document.createElement("span")
        firstName.setAttribute("inv", "")
        createErrorMsg.innerHTML = "Invalid input"
        firstNameCont.appendChild(createErrorMsg)

    } else if (firstName.hasAttribute("inv") && firstNameRe.test(firstName.value)) {
        firstName.removeAttribute("inv")
        document.querySelector("input+span").remove()
    }
}

lastName.onblur = () => {
    if (!(lastNameRe.test(lastName.value)) && !lastName.hasAttribute("inv")) {
        let createErrorMsg = document.createElement("span");
        lastName.setAttribute("inv", "");
        createErrorMsg.innerHTML = "Invalid input";
        lastNameCont.appendChild(createErrorMsg);
    } else if (lastName.hasAttribute("inv") && (lastNameRe.test(lastName.value))) {
        lastName.removeAttribute("inv");
        document.querySelector("input+span").remove();
    }
};

eMail.onblur = () => {
    if (!(eMailRe.test(eMail.value)) && !eMail.hasAttribute("inv")) {
        let createErrorMsg = document.createElement("span");
        eMail.setAttribute("inv", "");
        createErrorMsg.innerHTML = "Invalid input";
        eMailCont.appendChild(createErrorMsg);
    } else if (eMail.hasAttribute("inv") && (eMailRe.test(eMail.value))) {
        eMail.removeAttribute("inv");
        document.querySelector("input+span").remove();
    }
};

password.onblur = () => {
    if (!(passwordRe.test(password.value)) && !password.hasAttribute("inv")) {
        let createErrorMsg = document.createElement("span");
        password.setAttribute("inv", "");
        createErrorMsg.innerHTML = "Invalid input";
        passwordCont.appendChild(createErrorMsg);
    } else if (password.hasAttribute("inv") && (passwordRe.test(password.value))) {
        password.removeAttribute("inv");
        document.querySelector("input+span").remove();
    }
};