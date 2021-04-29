/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */

// if bordertrue green else false red

let inputRef = document.querySelector('#validation-input');
let lenghRef = Number(inputRef.getAttribute("data-length"));

// console.log(lenghRef);

inputRef.addEventListener('focus', () => {
    if (inputRef.value.length === lenghRef) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
});