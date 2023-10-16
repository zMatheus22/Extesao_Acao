async function teste_Graham() {
  const { calculoGraham } = await import("../js/calculo.js");
  let resultado = 0;
  const main = document.querySelector("main");

  main.innerHTML = `<h1>Teste do calculo de Graham</h1>`;

  main.innerHTML += `<p>Se o LPA e o VPA for respectivamente 2 e 2 deve ser 9,49</p>`;
  resultado = calculoGraham(2, 2);
  if (resultado == 9.49) {
    main.innerHTML += `<p>O valor está correto: 9,49</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o LPA e o VPA for respectivamente 11.56 e 56.58 deve ser 121,31</p>`;
  resultado = calculoGraham(11.56, 56.58);
  if (resultado == 121.31) {
    main.innerHTML += `<p>O valor está correto: 121,31</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o LPA e o VPA for respectivamente 8.985 e 5.568 deve ser 33,55</p>`;
  resultado = calculoGraham(8.985, 5.568);
  if (resultado == 33.55) {
    main.innerHTML += `<p>O valor está correto: 33,55</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }
}

async function teste_Preco_Teto() {
  const { calculoPrecoTeto } = await import("../js/calculo.js");
  let resultado = 0;
  const main = document.querySelector("main");

  main.innerHTML = `<h1>Teste do calculo de Preço Teto</h1>`;

  main.innerHTML += `<p>Se o 'Dividendo Projetado' e o 'Dy Dejetado' for respectivamente R$ 0,21 e 6% deve ser 3,50</p>`;
  resultado = calculoPrecoTeto(0.21, 6);
  if (resultado == 3.5) {
    main.innerHTML += `<p>O valor está correto: 3,50</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o 'Dividendo Projetado' e o 'Dy Dejetado' for respectivamente R$ 4,40 e 12% deve ser 36,66</p>`;
  resultado = calculoPrecoTeto(4.4, 12);
  if (resultado == 36.67) {
    main.innerHTML += `<p>O valor está correto: 36,66</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o 'Dividendo Projetado' e o 'Dy Dejetado' for respectivamente R$ 1,00 e 10% deve ser 10,00</p>`;
  resultado = calculoPrecoTeto(1, 10);
  if (resultado == 10.0) {
    main.innerHTML += `<p>O valor está correto: 10,00</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }
}

async function teste_Dividendo_Projetado() {
  const { calculoDividendoProjetado } = await import("../js/calculo.js");
  const main = document.querySelector("main");
  let resultado = 0;

  main.innerHTML = `<h1>Teste do calculo de Dividendo Projetado</h1>`;

  main.innerHTML += `<p>Se o LPA e o PAYOUT for respectivamente 2 e 100% deve ser 2,00</p>`;
  resultado = calculoDividendoProjetado(2, 100);
  if (resultado == 2.0) {
    main.innerHTML += `<p>O valor está correto: 2,00</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o LPA e o PAYOUT for respectivamente 11.36 e 40% deve ser 4,54</p>`;
  resultado = calculoDividendoProjetado(11.36, 40);
  if (resultado == 4.54) {
    main.innerHTML += `<p>O valor está correto: 4,54</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }

  main.innerHTML += `<p>Se o LPA e o PAYOUT for respectivamente 36.98 e 20% deve ser 7,40</p>`;
  resultado = calculoDividendoProjetado(36.98, 20);
  if (resultado == 7.4) {
    main.innerHTML += `<p>O valor está correto: 7,40</p>`;
  } else {
    main.innerHTML += `<p>Erro no Teste, o valor que veio é ${resultado}</p>`;
  }
}
