class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul>
          <a href="./precoJusto.html" target="_self">
            <li>
              <img
                src="../public/img/price_check.svg"
                alt="Imagem de preço justo."
              />
              <p>Preço Justo</p>
            </li>
          </a>
          
          <a href="./precoTeto.html" target="_self">
            <li>
              <img
                src="../public/img/price_change.svg"
                alt="Imagem de valor máximmo"
              />
              <p>Preço Teto</p>
            </li>
          </a>
          
          <a href="./divProjetado.html" target="_self">
            <li>
              <img
                src="../public/img/currency_exchange.svg"
                alt="Imagem de dinheiro de volta"
              />
              <p>Expectativa</p>
            </li>
          </a>
        </ul>
      </nav>
      `;
  }
}

customElements.define("menu-component", Menu);
