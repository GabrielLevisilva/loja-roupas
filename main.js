const botao = document.querySelector('#seta2');
const caixaevento = document.querySelector('.caixa');

botao.addEventListener('click', () => {
  caixaevento.scrollLeft += 350;
});

