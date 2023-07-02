const botao = document.querySelector('.seta2');
const caixaevento = document.querySelector('.caixa');

botao.addEventListener('click', () => {
  caixaevento.scrollLeft += 350;
});

const botao2 = document.querySelector('.seta1');

botao2.addEventListener('click', () => {
  caixaevento.scrollLeft -= 350;
});


