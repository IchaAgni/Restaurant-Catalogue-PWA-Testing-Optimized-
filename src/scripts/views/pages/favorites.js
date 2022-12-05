import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteEmpty, createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritesPage = {
  async render() {
    return `
    <section class="content">
    <div class="recommended">
      <h1 class="recommended__label">Favorite Restaurant</h1>
            <div id="post" class="posts">
       
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestaurants();
    const restosContainer = document.querySelector('#post');
    if (restos.length > 0) {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestaurantItemTemplate(resto);
      });
    } else {
      restosContainer.innerHTML += createRestaurantFavoriteEmpty();
    }
  },
};

export default FavoritesPage;
