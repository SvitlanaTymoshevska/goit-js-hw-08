import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryParentEl = document.querySelector('.gallery');

const galleryEls = galleryItems.map(makeGalleryItem).join('');
galleryParentEl.insertAdjacentHTML('beforeend', galleryEls);
galleryParentEl.addEventListener('click', onPreviewImgClick);

const modal = new SimpleLightbox(
                                    '.gallery a',
                                    {
                                        captionsData: 'alt',
                                        captionDelay: 250,
                                    }
                                );

function makeGalleryItem({ preview, original, description }) {
    const itemEl = `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="Image ${description}" />
                    </a>`;
    return itemEl;
}

function onPreviewImgClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }; 

    modal.open(event);
}
