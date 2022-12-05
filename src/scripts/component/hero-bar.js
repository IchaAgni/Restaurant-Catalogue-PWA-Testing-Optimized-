class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero__inner">
                <h1 class="hero__title">Selamat datang di Website Resto Nisss</h1>
                <p class="hero__tagline">Disini kami menyediakan beberapa restaurant di Indonesia yang bisa anda lihat dibawah ini</p>
                <picture>
                  <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
                  <img src='./images/heros/hero-image_2-large.jpg' alt="hero poster">
                </picture>
                </div>
            </div>
          `;
  }
}
customElements.define('hero-bar', Hero);
