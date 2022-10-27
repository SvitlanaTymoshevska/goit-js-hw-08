import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};
const formDate = {};
   
refs.form.addEventListener('input', throttle(onFormFieldsInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFormFields();

function onFormFieldsInput(e) {
    formDate[e.target.name] = e.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formDate))
}

function onFormSubmit(e) {
    e.preventDefault();
    
    const sentFormData = formDate;
    console.log(sentFormData);
    
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
}

function populateFormFields() {
    const formFieldsDate = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formFieldsDate) {
        refs.email.value = formFieldsDate.email;
        refs.message.value = formFieldsDate.message;
    }
}