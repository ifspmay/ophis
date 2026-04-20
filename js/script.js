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

function selecionarImagemInicio(tipo) {
  document.getElementById(tipo + "InputInicio").click();
}

function removerImagem() {
  document.getElementById("imagemSelecionada").src = "";
  document.getElementById("imagemContainer").style.display = "none";
  document.getElementById("aviso").style.display = "block";
  // Limpar os inputs
  document.getElementById("cameraInput").value = "";
  document.getElementById("galeriaInput").value = "";
  // Mostrar botões novamente
  document.querySelector("#identificar .botoes").style.display = "flex";
}

function removerImagemInicio() {
  document.getElementById("imagemSelecionadaInicio").src = "";
  document.getElementById("imagemContainerInicio").style.display = "none";
  // Limpar os inputs
  document.getElementById("cameraInputInicio").value = "";
  document.getElementById("galeriaInputInicio").value = "";
  // Mostrar botões novamente
  document.querySelector("#inicio .botoes").style.display = "flex";
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
          // Esconder botões
          document.querySelector("#identificar .botoes").style.display = "none";
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
          // Esconder botões
          document.querySelector("#identificar .botoes").style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });

  // Para o section inicio
  document
    .getElementById("cameraInputInicio")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagemSelecionadaInicio").src =
            e.target.result;
          document.getElementById("imagemContainerInicio").style.display =
            "block";
          // Esconder botões
          document.querySelector("#inicio .botoes").style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });

  document
    .getElementById("galeriaInputInicio")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagemSelecionadaInicio").src =
            e.target.result;
          document.getElementById("imagemContainerInicio").style.display =
            "block";
          // Esconder botões
          document.querySelector("#inicio .botoes").style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });
});

function identificarAnimal(tipo) {
  // Simulação: sempre mostra a cobra coral
  document.getElementById("modalIdentificacao").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalIdentificacao").style.display = "none";
}
