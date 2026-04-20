function mostrarPagina(id) {
  const paginas = document.querySelectorAll(".page");

  paginas.forEach((pagina) => {
    pagina.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function selecionarImagem(tipo) {
  document.getElementById(tipo + "Input").click();
}

function removerImagem() {
  document.getElementById("imagemSelecionada").src = "";
  document.getElementById("imagemContainer").style.display = "none";
  document.getElementById("aviso").style.display = "block";
  // Limpar os inputs
  document.getElementById("cameraInput").value = "";
  document.getElementById("galeriaInput").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("cameraInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagemSelecionada").src = e.target.result;
          document.getElementById("aviso").style.display = "none";
          document.getElementById("imagemContainer").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });

  document
    .getElementById("galeriaInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagemSelecionada").src = e.target.result;
          document.getElementById("aviso").style.display = "none";
          document.getElementById("imagemContainer").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
});
