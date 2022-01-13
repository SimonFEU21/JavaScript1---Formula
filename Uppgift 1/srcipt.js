// const regForm = document.querySelector('#regForm');

// regForm.addEventListener('submit', function(e){
// e.preventDefault(); /* Stoppar sidan från att refresha när man klickar på submit */

// let firstName = e.currentTarget [0].value;

// console.log(firstName);
// }) 


const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');

const validateText = (input) => {
    if(input.value.trim() === ''){
        setError(input, 'Name can\'t be empty')
        return false;
    }
}