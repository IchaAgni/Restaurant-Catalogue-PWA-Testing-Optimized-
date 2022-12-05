// eslint-disable-next-line no-unused-vars
const assert = require('assert');

Feature('Liking_Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#post');
  I.see('Tidak ada restaurant untuk ditampilkan', '#post');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.post-item', 10);
  I.seeElement('.post-item');
  I.waitForElement('.post-item__title a', 10);
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.post-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);
});
