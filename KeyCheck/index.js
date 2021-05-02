let displayRef = document.querySelector(".display-key");

let event_keyRef = document.querySelector(".js-modal-event-key");
let event_locationRef = document.querySelector(".js-modal-event-location");
let event_whichRef = document.querySelector(".js-modal-event-which");
let event_codeRef = document.querySelector(".js-modal-event-code");

// console.log(displayRef);
// console.log(event_keyRef);
// console.log(event_locationRef);
// console.log(event_whichRef);
// console.log(event_codeRef);

window.addEventListener('keydown', onKeyboard);

function onKeyboard(event){
    event_keyRef.innerHTML = event.key;
    if(event.key === " ") {
        event_keyRef.innerHTML = "Space";
    }
    event_codeRef.innerHTML = event.code;
    event_whichRef.innerHTML = event.keyCode;
    displayRef.innerHTML = event.keyCode;
};
