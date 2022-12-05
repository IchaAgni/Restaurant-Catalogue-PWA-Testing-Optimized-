/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (resto) => `
        <article class="post-item">
          <img class="post-item__thumbnail"
               src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="gambar tempat">
          <div class="post-item__content">
            <h2 class="post-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h2>
            <p class="post-item__description">${resto.description}</p>
          </div>
        </article>
`;

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.pictureId}" />
  <div class="button">
    <div class="like_button"></div>
  </div>
  <div class="resto__info">
    <h3>Information</h3><br>
    <h4>Rating</h4>
    <p>${resto.rating}</p><br>
    <h4>Alamat</h4>
    <p>${resto.address}</p><br>
    <h4>Kota</h4>
    <p>${resto.city}</p><br>
    <h4>Deskripsi</h4>
    <p>${resto.description}</p><br>
    <h4>Menu Makanan</h4>
    <p>${resto.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p><br>
    <h4>Menu Minuman</h4>
    <p>${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p><br>
    <h4>Customer Review</h4>
    ${resto.customerReviews.map((review) => `
    <p>Nama : ${review.name}</p>
    <p>Review : ${review.review}</p>
    <p>Tanggal : ${review.date}</p>
    `).join('<br>')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createRestaurantFavoriteEmpty = () => `
  <p>Tidak ada restaurant untuk ditampilkan</p>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnLikedButtonTemplate,
  createRestaurantFavoriteEmpty,
};
