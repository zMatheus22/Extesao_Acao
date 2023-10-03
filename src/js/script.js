const form = document.querySelector("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  aprecentarDoPrecoJusto();
});

function aprecentarDoPrecoJusto() {
  const precoJusto = document.getElementById("precoJusto");
  const lpa = document.getElementById("iLPA");
  const vpa = document.getElementById("iVPA");

  const resultado = calculoGraham(lpa.value, vpa.value);

  precoJusto.innerHTML = `<h2>Valor justo <strong>R$ ${resultado}</strong></h2>`;
}

function calculoGraham(lpa, vpa) {
  // √ (22,5 x LPA x VPA)
  return Math.sqrt(22.5 * lpa * vpa).toFixed(2);
}
