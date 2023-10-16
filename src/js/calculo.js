function calculoGraham(lpa, vpa) {
  // √ (22,5 x LPA x VPA)
  return Math.sqrt(22.5 * lpa * vpa).toFixed(2);
}

function calculoDividendoProjetado(lpa, payout) {
  // LPA x PAYOUT
  return (lpa * (payout / 100)).toFixed(2);
}

function calculoPrecoTeto(calculoDPA, dividendoDesejado) {
  // Dividendo Projetado ÷ DY Desejato
  return (calculoDPA / (dividendoDesejado / 100)).toFixed(2);
}

export { calculoGraham, calculoDividendoProjetado, calculoPrecoTeto };
