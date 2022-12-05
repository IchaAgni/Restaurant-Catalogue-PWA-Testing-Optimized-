class Header extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

        <header class="header">
        <div class="header-div">
         <h1 class="header_title">Resto Nisss</h1>
         </div>
         <button  id="menu" class="header__menu" href="#">☰</button>
          <nav id="drawer" class="nav">
          <ul id="list" class="nav_list">
            <li class="nav-item"><a href="#/home-page" tabindex="0">Home</a></li>
            <li class="nav-item"><a href="#/favorites" tabindex="0">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/nisa-agni-afifah-188865204/" tabindex="=0">About
                Us</a></li>
          </ul>
        </nav>
    
      </header>`;
  }
}

customElements.define('header-bar', Header);
