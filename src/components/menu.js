class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav>
          <ul>
            <li><a href="./precoJusto.html">Preço justo</a></li>
            <li><a href="./precoTeto.html">Preço teto</a></li>
            <li><a href="./divProjetado.html">Dividendo Projetado</a></li>
          </ul>
        </nav>
      `;
  }
}

customElements.define("menu-component", Menu);
