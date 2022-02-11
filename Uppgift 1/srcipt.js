/*My variables*/

const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const userList = document.querySelector('.userList')



const users = []

const addUser = (user) => {

const li = document.createElement('li')
userList.appendChild(li);

const name = document.createElement('p')
li.appendChild(name);

const email = document.createElement('p')
li.appendChild(email);

name.innerText = `${user.firstName} ${user.lastName}`;
email.innerText = user.email;
}


/*Validation for type = text input fields */

const validateText = (input) => {
  if(input.value.trim() === '') { 
    setError(input, 'Name can\'t be empty')
    return false;
  }
  else if(input.value.trim().length < 2) {
    setError(input, 'Name must be atleast 2 characters long')
    return false;
  }
  else {
    setSuccess(input)
    return true;
  }
}


/*Validation for type = email input fields */

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


/* Changeing styles if user put Incorrect information */

const setError = (input, textMessage) => {
  const parent = input.parentElement;
  parent.classList.add('is-invalid');
  parent.classList.remove('is-valid');
  parent.querySelector('.invalid-input').innerText = textMessage;
}


/* Changeing styles if user put Correct information */

const setSuccess = input => {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid');
  parent.classList.add('is-valid');
}


/* Validates user inputs */

const validate = input => {
  switch(input.type) {
    case 'text': return validateText(input)
    case 'email': return validateEmail(input)
    default:
      break;
  }
}




/* Store information to console log */

form.addEventListener('submit', e => {
  e.preventDefault();
  
  errors = []

  for(let i = 0; i < form.length; i++) {
    errors[i] = validate(form[i])
  }

  console.log(errors)

  if(!errors.includes(false)) {
    const user = {
      id: Date.now().toString(),
      firstName : firstName.value,
      lastName : lastName.value,
      email : email.value
    }
    console.log(user);

    users.push(user)
    console.log(users);

    addUser(user);
  }

})

