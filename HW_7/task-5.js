/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

let inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');

inputRef.addEventListener("input", () => {
    if(inputRef.value === "") {
        outputRef.textContent = "незнакомец";
    } else {
        outputRef.textContent = inputRef.value;
    }
});