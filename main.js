const botao = document.querySelector('.seta2');
const caixaevento = document.querySelector('.caixa');

botao.addEventListener('click', () => {
  caixaevento.scrollLeft += 350;
});

const botao2 = document.querySelector('.seta1');

botao2.addEventListener('click', () => {
  caixaevento.scrollLeft -= 350;
});

const caixaevento2 = document.querySelector('.caixa2');

const botao3 = document.querySelector('.seta3');

botao3.addEventListener('click', () => {
  caixaevento2.scrollLeft -= 350;
});

const botao4 = document.querySelector('.seta4');

botao4.addEventListener('click', () => {
  caixaevento2.scrollLeft += 350;
});


