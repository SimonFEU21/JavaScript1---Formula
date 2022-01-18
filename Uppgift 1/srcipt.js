const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

const validateText = (input) => {
    if(input.value.trim() === '') { 
      setError(input, 'Name can\'t be empty')
      return false;
    }
    else if(input.value.trim().length < 2) {
      setError(input, 'Name must be atleast 2 chars long')
      return false;
    }
    else {
      setSuccess(input)
      return true;
    }
  }

  const validateEmail = email => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    if(email.value.trim() === '') {
      setError(email, 'You need to enter a email address');
      return false;
    } 
    else if(!regEx.test(email.value)) {
      setError(email, 'Email address is not valid');
      return false;
    }
    else {
      setSuccess(email)
      return true;
    }
  }



form.addEventListener('submit', e => {
    e.preventDefault();
