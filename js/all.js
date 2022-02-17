const body = document.body;

const verificarIdade = () => {
  let idades = document.querySelector("#txtIdades").value;
  idades = idades.split(",");

  let maiorIdade = 0;
  let menorIdade = 0;

  idades.forEach((idade) => {
    idade > 17 ? maiorIdade++ : menorIdade++;
    criarTexto(idade);
    document.querySelector("#txtIdades").value = "";
  });
  const linha = document.createElement("hr");
  body.appendChild(linha);
  textoContarPessoas(maiorIdade, menorIdade);
};

const criarTexto = (idade) => {
  const p = document.createElement("p");
  const texto = document.createTextNode(
    `${idade} é ${idade > 18 ? `maior de idade ` : `menor de idade`}`
  );
  p.appendChild(texto);

  body.appendChild(p);
};

const textoContarPessoas = (maiorIdade, menorIdade) => {
  const h2 = document.createElement("h2");
  const texto = document.createTextNode(
    `${maiorIdade} são maiores de idade e ${menorIdade} são menores de idade`
  );
  h2.appendChild(texto);
  body.appendChild(h2);
};
