class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <p>
                Desenvolvido por
                <a href="https://github.com/zMatheus22" target="_blank">
                <strong>Matheus Vinicyus Strada</strong>
                </a>
            </p>`;
  }
}

customElements.define("footer-component", Footer);
