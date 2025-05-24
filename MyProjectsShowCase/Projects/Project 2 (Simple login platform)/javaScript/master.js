// Selecting elements
let firstName = document.querySelector(".f-name")
let lastName = document.querySelector(".l-name")
let eMail = document.querySelector(".e-mail")
let password = document.querySelector(".pass")

let firstNameCont = document.querySelector(".f-name-cont")
let lastNameCont = document.querySelector(".l-name-cont")
let eMailCont = document.querySelector(".e-mail-cont")
let passwordCont = document.querySelector(".pass-cont")
let cont = document.querySelectorAll('.cont')

let claimBtn = document.getElementById("claim-btn")

// REs
let firstNameRe = /^[A-Z]{4,16}$/i
let lastNameRe = /^[A-Z]{4,16}$/i
let eMailRe = /^[a-z]+@[a-z]+\.[a-z]+$/i
let passwordRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,16}$/i;


// Coding
function createElement(el, innerText, attr, val = '') {
    let element = document.createElement(el);
    if (attr) {
        element.setAttribute(attr, val);
    }
    element.innerHTML = innerText;
    return element;
}

function fieldCheck(field, fieldCont, re) {
    const invMsg = fieldCont.querySelector('span[inv]');

    if (!field.value.match(re)) {
        if (!invMsg) {
            field.setAttribute('inv', '');
            fieldCont.append(createElement('span', 'Invalid input', 'inv'));
        }
    } else {
        if (invMsg) {
            invMsg.remove();
            field.removeAttribute('inv');
        }
    }
}

function finalCheck() {
    let validation = false
    fieldCheck(firstName, firstNameCont, firstNameRe)
    fieldCheck(lastName, lastNameCont, lastNameRe)
    fieldCheck(password, passwordCont, passwordRe)
    fieldCheck(eMail, eMailCont, eMailRe)
    cont = Array.from(cont)
    for (let i in cont) {
        if (cont[i].querySelector('span')) {
            validation = false
            break
        } else {
            validation = true
        }
    }
    validation?
    window.location.href = '../../../index.html':''
}

firstName.onblur = () => fieldCheck(firstName, firstNameCont, firstNameRe)
lastName.onblur = () => fieldCheck(lastName, lastNameCont, lastNameRe)
password.onblur = () => fieldCheck(password, passwordCont, passwordRe)
eMail.onblur = () => fieldCheck(eMail, eMailCont, eMailRe)
claimBtn.onclick = () => finalCheck()
