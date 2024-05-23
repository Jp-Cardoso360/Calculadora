let tela = document.querySelector('.tela');
inserir = (num) => {
  tela.textContent += num;
}
  
somar = () => {
  tela.textContent = eval(tela.textContent);
}
limpar = () =>{
  tela.textContent = "";
}