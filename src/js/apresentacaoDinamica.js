async function precoJusto() {
  // Chamando a função.
  const { calculoGraham } = await import("./calculo.js");

  // Lendo os inputs.
  const lpa = document.getElementById("iLPA");
  const vpa = document.getElementById("iVPA");

  // Atribuindo a variavel onde vai de escrito o valor final.
  const preco = document.getElementById("apresentacaoDoValor");

  // Fazendo o calculo e atribuindo a variavel.
  const graham = calculoGraham(lpa.value, vpa.value);

  // Retornado o valor final no HTML.
  preco.innerHTML = `<h2>Valor justo <strong>R$ ${graham}</strong></h2>`;
}

async function dividendoProjetado() {
  // Chamando a função.
  const { calculoDividendoProjetado } = await import("./calculo.js");

  // Lendo os inputs.
  const lpa = document.getElementById("iLPA");
  const payout = document.getElementById("iPAYOUT");

  // Atribuindo a variavel onde vai de escrito o valor final.
  const preco = document.getElementById("apresentacaoDoValor");

  // Fazendo o calculo e atribuindo a variavel.
  const divProjetado = calculoDividendoProjetado(lpa.value, payout.value);

  // Retornado o valor final no HTML.
  preco.innerHTML = `<h2>Dividendo Projetado <strong>R$ ${divProjetado}</strong></h2>`;
}

async function precoTeto() {
  // Chamando a função.
  const { calculoPrecoTeto } = await import("./calculo.js");
  const { calculoDividendoProjetado } = await import("./calculo.js");

  // Lendo os inputs.
  const lpa = document.getElementById("iLPA");
  const payout = document.getElementById("iPAYOUT");
  const dy = document.getElementById("iDY");

  // Atribuindo a variavel onde vai de escrito o valor final.
  const preco = document.getElementById("apresentacaoDoValor");

  // Fazendo o calculo e atribuindo a variavel.
  const divProjetado = calculoDividendoProjetado(lpa.value, payout.value);
  const valorTeto = calculoPrecoTeto(divProjetado, dy.value);

  // Retornado o valor final no HTML.
  preco.innerHTML = `<h2>Valor para o preço teto <strong>R$ ${valorTeto}</strong></h2>`;
}

export { precoJusto, dividendoProjetado, precoTeto };
