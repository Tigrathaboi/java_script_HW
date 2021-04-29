/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

let counterValue = document.querySelector('#value');
let incRef = document.querySelectorAll('button')[0];
let decRef = document.querySelectorAll('button')[1];
let counter = 0;

function decrement() {
  incRef.addEventListener("click", () => {
    counter-=1;
    counterValue.innerHTML = counter;
  });
};

function increment() {
  decRef.addEventListener("click", () => {
    counter+=1;
    counterValue.innerHTML = counter;
  });
};

increment();
decrement();