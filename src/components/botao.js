class Botao extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="butoes" id="botao">
            <input class="calcular" type="submit" value="Calcular" />
            <input class="limpar" type="reset" value="Limpar" />
        </section>`;
  }
}

customElements.define("botao-component", Botao);
