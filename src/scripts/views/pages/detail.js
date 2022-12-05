import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailRestaurant(url.id);
    // console.log(resto);
    const restoContainer = document.querySelector('#resto');
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
        description: resto.description,
      },
    });
  },
};

export default Detail;
