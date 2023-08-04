import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListElement = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" alt="${description}" /></a>
    </li>`
    )
    .join("");
}

galleryListElement.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
