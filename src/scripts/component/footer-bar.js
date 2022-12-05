/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
class Footer extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="foot">
    <p class="copy">&copy; 2022, Resto Apps-Nisa Agni Afifah</p>
  </footer>`;
  }
}

customElements.define('footer-bar', Footer);
