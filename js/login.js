const uname = document.querySelector('#uname');
const form = document.querySelector('form');

uname.addEventListener('input', () => {
  uname.setCustomValidity('');
  uname.checkValidity();
});

uname.addEventListener('invalid', () => {
  if(uname.value === '') {
    uname.setCustomValidity('Please enter your username.');
  }
});