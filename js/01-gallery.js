import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListElement = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item js-gallery-item">
      <a class="gallery__link" href="${original}" ><img class="gallery__image js-image" src="${preview}" data-source="${original}" alt="${description}" /></a>
    </li>`
    )
    .join("");
}

galleryListElement.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryListElement.addEventListener("click", handlerOnImageClick);

function handlerOnImageClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  //повертає <li> на який клікнув користувач:
  const currentItem = event.target.closest(".js-gallery-item");

  // у цьому <li> переходить в <img> і бере посилання на велику картинку з data-source
  const sourceOriginalImage = currentItem.querySelector(".js-image").getAttribute("data-source");

  // в масиві об"єктів знаходить потрібний об"єкт:
  const galleryItem = galleryItems.find(({ original }) => original === sourceOriginalImage);

  const instance = basicLightbox.create(`
	    <div><img src="${galleryItem.original}" alt="${galleryItem.description}"></div>
`);
  instance.show();
  window.addEventListener("keydown", onEscClick);

  function onEscClick(event) {
    if (event.code === "Escape" && basicLightbox.visible()) {
      instance.close();
      window.removeEventListener("keydown", onEscClick);
    }
  }
}
