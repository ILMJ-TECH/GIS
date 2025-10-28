const botaoUm = document.getElementById("botaoVerde");
const botaoDois = document.getElementById("botaoNormal");
const formulario = document.querySelector(".formulario");
const programacao = document.querySelector(".sessao_laranja");

botaoUm.addEventListener("click", () => {
  formulario.scrollIntoView({
    behavior: "smooth",
  });
});

botaoNormal.addEventListener("click", () => {
  programacao.scrollIntoView({
    behavior: "smooth",
  });
});
