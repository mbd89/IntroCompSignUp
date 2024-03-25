/*  Below code was copied and pasted from google with slight modifications :) */


const form = document.getElementById("form");
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('pass');
const email = document.getElementById("mail");




form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});




const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const firstnameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const lastnameValue = lastName.value.trim();
    
 

    if (firstnameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        setSuccess(firstName);
    }

    if (emailValue === '') {
        setError(email, 'Looks like this is not an email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (lastnameValue === '') {
        setError(lastName, 'Last name cannot be empty');
    } else {
        setSuccess(lastName);
    }

};
