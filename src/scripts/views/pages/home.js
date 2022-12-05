import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="recommended">
    <br>
    <center><h1 class="recommended__label">Explore Restaurant</h1></center>
      <div id="post" class="posts">
    </div>
  </section>
  `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.homeRestaurant();
    const restosContainer = document.querySelector('#post');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
