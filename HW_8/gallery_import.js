import gallery from "./gallery-items.js";

let DocRefs = {
  ul: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".js-lightbox"),
  lightBoxImage: document.querySelector(".lightbox__image"),
  lightBoxCloseButton: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
  lightBoxOverlay: document.querySelector(".lightbox__overlay"),
  lightBoxSlider: document.querySelector(".slider__control")
};

let images = [];
let index = 0;

gallery.forEach((img) => {
  let li = `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${img.original}"
    >
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.preview}"
        alt="${img.description}"
      />
    </a>
  
  </li>
  `;
  images.push(img.preview);
  DocRefs.ul.insertAdjacentHTML("beforeend", li);
});

DocRefs.ul.addEventListener('click', open);
DocRefs.lightBoxCloseButton.addEventListener("click", close);

function open(event) {
  event.preventDefault();
  index = images.indexOf(event.target.dataset.source);
  if (event.target.nodeName !== "IMG") return;
  window.addEventListener("keyup", KeyEvents);
  DocRefs.lightBoxImage.setAttribute('src', `${images[index]}`);
  DocRefs.lightBox.classList.add("is-open");
}

function close() {
  window.removeEventListener("keyup", KeyEvents);
  DocRefs.lightBoxImage.setAttribute('src', '');
  DocRefs.lightBox.classList.remove("is-open");
}

window.onclick = function(event) {
  if (event.target == DocRefs.lightBoxOverlay) {
    close();
  }
}

function KeyEvents(event) {
  if (event.code === "Escape") close();
  if (event.code === "ArrowLeft") {
    if(index != 0){
      index -= 1;
      console.log(index);
      DocRefs.lightBoxImage.setAttribute('src', `${images[index]}`);
    } else {
      index = images.length - 1;
      DocRefs.lightBoxImage.setAttribute('src', `${images[index]}`);
    }
    
  }
  if (event.code === "ArrowRight") {
    if(index + 1 == images.length){
      index = 0;
      DocRefs.lightBoxImage.setAttribute('src', `${images[index]}`);
    } else {
      index += 1;
      console.log(index);
      DocRefs.lightBoxImage.setAttribute('src', `${images[index]}`);
    }
  
  }
}