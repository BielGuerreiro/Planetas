const planetas = document.querySelectorAll(".planeta-item");

planetas.forEach((planeta) => {
  planeta.addEventListener("click", () => {
    document.querySelector(".planeta-item.ativo").classList.remove("ativo");
    planeta.classList.add("ativo");
  });
});
