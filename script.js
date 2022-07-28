const specialCharErrorMsg = "*No special characters allowed";
const requiredErrorMsg = "*This field is required!";
const passwordNotMatch = "*Password do not match!";
const emailErrorMsg = "*Must have @ and end with .com";
const phoneErrorMsg = "*Only numbers are allowed";
const shadowError = "box-shadow: 0 0 10px 3px #522e8a;"

function lettersOnly(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function numbersOnly(number) {
    return /^[0-9]+$/.test(number);
}

function showError(element) {
    const errorWindow = document.querySelector(`#${element.id}-error`);
    errorWindow.textContent = passwordNotMatch;
    element.style = shadowError;
}

function validate() {

    const inputs = document.querySelectorAll(".inputs");
    inputs.forEach(element => {
        const errorWindow = document.querySelector(`#${element.id}-error`);
        if (element.value === "") {
            errorWindow.textContent = requiredErrorMsg;
            element.style = shadowError;
        }
        else {
            element.style = "initial";
            errorWindow.textContent = "";

        }
    });

    const names = document.querySelectorAll(".names");
    names.forEach(element => {
        if (lettersOnly(element.value) == false && element.value != "") {
            const errorWindow = document.querySelector(`#${element.id}-error`);
            errorWindow.textContent = specialCharErrorMsg;
            element.style = shadowError;
        }
    });

    const phoneNumber = document.querySelector("#phone-number");
    if (numbersOnly(phoneNumber.value) === false && phoneNumber.value != "") {
        const errorWindow = document.querySelector("#phone-number-error");
        errorWindow.textContent = phoneErrorMsg;
        phoneNumber.style = shadowError;
    }

    const email = document.querySelector("#email");
    if (!email.value.includes("@") || !email.value.toLowerCase().includes(".com")) {
        const errorWindow = document.querySelector("#email-error");
        errorWindow.textContent = emailErrorMsg;
        email.style = shadowError;
    }

    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");

    if (password.value != confirmPassword.value) {
        showError(password);
        showError(confirmPassword);
    }

}

const button = document.querySelector('#submit-button');
button.addEventListener('click', validate);