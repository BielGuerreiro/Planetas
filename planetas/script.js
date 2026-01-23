const btnExpandir = document.querySelector(".expandir");
const imagemPlaneta = document.querySelector(".mundo img");

btnExpandir.addEventListener("click", () => {
  // Alterna a classe de zoom
  imagemPlaneta.classList.toggle("zoom-active");

  // Troca o ícone de expandir para comprimir
  const icone = btnExpandir.querySelector("i");
  if (imagemPlaneta.classList.contains("zoom-active")) {
    icone.classList.replace("bx-expand", "bx-exit-fullscreen");
  } else {
    icone.classList.replace("bx-exit-fullscreen", "bx-expand");
  }
});

function toggleBox(id) {
  // Seleciona todas as boxes
  const allBoxes = document.querySelectorAll(".info-box");

  // Pega a box específica que foi clicada
  const targetBox = document.getElementById(`box-${id}`);

  // Se a box clicada já estiver aberta, fecha ela
  if (targetBox.classList.contains("active")) {
    targetBox.classList.remove("active");
  } else {
    // Fecha todas as outras antes de abrir a nova
    allBoxes.forEach((box) => box.classList.remove("active"));
    targetBox.classList.add("active");
  }
}
