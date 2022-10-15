

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const pass = document.querySelector('password');
const confirm = document.querySelector('confirm-password');
const errorMsg = document.querySelector('.error-msg');
if (pass.value != confirm.value) {
    confirm.style.borderColor = 'red';
    e.preventDefault();
    pass.classList.add('error');
    confirm.classList.add('error');
    errorMsg.style.display = 'block';

}
});
    
