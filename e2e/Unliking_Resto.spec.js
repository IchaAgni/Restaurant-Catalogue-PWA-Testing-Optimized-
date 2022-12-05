/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item');
  I.waitForElement('.post-item__title a', 10);

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#favorites');
  I.seeElement('.post-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);

  I.click(likedRestaurantName);
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.dontSeeElement('.post-item');
  I.see('Tidak ada restaurant untuk ditampilkan', '#post');
});
