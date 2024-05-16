function sortear(){
  let quantidade = document.getElementById('quantidade').value;
  let de = document.getElementById('de').value;
  let ate = document.getElementById('ate').value;

  let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
    alert(sorteados);
}
