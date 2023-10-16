const form = document.querySelector("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  apresentar();
});

async function apresentar() {
  // Chamando as funções.
  const { precoJusto, precoTeto, dividendoProjetado } = await import(
    "./apresentacaoDinamica.js"
  );

  // Lendo o arquivo aberto.
  const arquivoAberto = window.location.pathname.split("/").pop();

  if (arquivoAberto == "precoJusto.html") {
    precoJusto();
  } else if (arquivoAberto == "precoTeto.html") {
    precoTeto();
  } else if (arquivoAberto == "divProjetado.html") {
    dividendoProjetado();
  }
}
