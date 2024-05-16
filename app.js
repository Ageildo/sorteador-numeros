function sortear(){
  let quantidade = document.getElementById('quantidade').value;
  let de = document.getElementById('de').value;
  let ate = document.getElementById('ate').value;

  let sorteados = [];
    let numero;
    
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
  while (sorteados.includes(numero)) {
    numero = obterNumeroAleatorio(de, ate);
  }
  sorteados.push(numero); 
}

let resultado = document.getElementById('resultado')
resultado.textContent = `Números sorteados:${sorteados.join(', ')}`;
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
