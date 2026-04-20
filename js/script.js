const animaisDB = [
  {
    id: "aranha_marrom",
    nome: "Aranha Marrom",
    cientifico: "Loxosceles gaucho",
    imagem: "./images/animais/aranha marrom.webp",
    descricao:
      "Aranha marrom conhecida por sua picada dolorosa e potencialmente perigosa.",
    perigo: "Alto",
    sobre:
      "A aranha marrom é uma espécie terrestre que prefere esconderijos escuros e secos, como pedras e entulhos.",
    caracteristicas:
      "Cor marrom-acinzentada, corpo pequeno e pernas longas. Geralmente mede 1 a 3 cm.",
    habitat:
      "Presente em ambientes urbanos e rurais do sul do Brasil, em locais abrigados e secos.",
    sintomas:
      "Picada dolorosa, inchaço, vermelhidão e, em casos graves, necrose local e febre.",
    socorros:
      "Limpe o local com água e sabão, coloque compressa fria e procure atendimento médico imediatamente.",
  },
  {
    id: "cobra_cascavel",
    nome: "Cobra Cascavel",
    cientifico: "Crotalus durissus",
    imagem: "./images/animais/cobra cascavel.jpeg",
    descricao: "Serpente venenosa com cascavel característica.",
    perigo: "Crítico",
    sobre:
      "A cascavel é uma serpente de grande porte, com veneno hemotóxico que afeta sangue e tecidos.",
    caracteristicas:
      "Cor marrom com manchas escuras e uma cauda com guizo. Pode ultrapassar 1,5 m de comprimento.",
    habitat:
      "Habita cerrado, campo e regiões abertas do interior do Brasil, próxima a pedras e troncos.",
    sintomas:
      "Dor intensa, inchaço, sangramento, náuseas, vômito e possível insuficiência renal.",
    socorros:
      "Mantenha a vítima calma, não faça torniquete, imobilize o membro e leve urgentemente ao hospital.",
  },
  {
    id: "cobra_coral",
    nome: "Cobra Coral",
    cientifico: "Micrurus corallinus",
    imagem: "./images/animais/cobra coral.webp",
    descricao: "Serpente altamente venenosa com cores vibrantes.",
    perigo: "Crítico",
    sobre:
      "A coral é uma serpente pequena e discreta, mas com veneno neurotóxico potente.",
    caracteristicas:
      "Anéis coloridos em vermelho, amarelo e preto, corpo fino e cabeça pequena.",
    habitat:
      "Encontrada em áreas de mata, bordas de florestas e terrenos úmidos.",
    sintomas:
      "Formigamento, fraqueza, paralisia muscular e dificuldade para respirar.",
    socorros:
      "Procure ajuda médica imediatamente; não tente sugar o veneno ou fazer cortes no local.",
  },
  {
    id: "escorpiao_amarelo",
    nome: "Escorpião Amarelo",
    cientifico: "Tityus serrulatus",
    imagem: "./images/animais/escorpiao amarelo.jpg",
    descricao: "Escorpião amarelo comum no Brasil, com veneno potente.",
    perigo: "Alto",
    sobre:
      "O escorpião amarelo é responsável por muitos acidentes ofídicos e se adapta bem a áreas urbanas.",
    caracteristicas:
      "Cor amarela vibrante, cauda arqueada e pedipalpos finos. Mede cerca de 6 cm.",
    habitat:
      "Vive em frestas, entulhos, jardins e dentro de residências, principalmente em locais úmidos.",
    sintomas:
      "Dor local intensa, sudorese, náuseas, vômitos e alteração da pressão arterial.",
    socorros:
      "Aplique frio local, mantenha a vítima calma e procure atendimento médico se houvesse piora.",
  },
];

function mostrarDetalhes(animalId) {
  const animal = animaisDB.find((a) => a.id === animalId);
  if (animal) {
    document.getElementById("detalhes-header").style.backgroundImage =
      `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${encodeURI(
        animal.imagem,
      )})`;
    document.getElementById("detalhes-nome").textContent = animal.nome;
    document.getElementById("detalhes-cientifico").textContent =
      animal.cientifico;
    const perigoDiv = document.getElementById("detalhes-perigo");
    perigoDiv.innerHTML = `
      <span class="perigo-label">Nível de Perigo</span>
      <span class="perigo-value">${animal.perigo}</span>
    `;
    perigoDiv.className =
      animal.perigo === "Alto"
        ? "perigo-div perigo-alto"
        : "perigo-div perigo-critico";
    document.getElementById("detalhes-sobre").textContent = animal.sobre;
    document.getElementById("detalhes-caracteristicas").textContent =
      animal.caracteristicas;
    document.getElementById("detalhes-habitat").textContent = animal.habitat;
    document.getElementById("detalhes-sintomas").textContent = animal.sintomas;
    document.getElementById("detalhes-socorros").textContent = animal.socorros;
    mostrarPagina("detalhes");
  }
}

function carregarGuia(animais = animaisDB) {
  const lista = document.getElementById("animais-lista");
  lista.innerHTML = "";
  animais.forEach((animal) => {
    const item = document.createElement("div");
    item.className = "animal-item";
    item.onclick = () => mostrarDetalhes(animal.id);
    item.innerHTML = `
      <div class="perigo-badge ${animal.perigo === "Alto" ? "perigo-alto" : "perigo-critico"}">${animal.perigo}</div>
      <img src="${animal.imagem}" alt="${animal.nome}">
      <div class="text-content">
        <h3>${animal.nome}</h3>
        <p><em>${animal.cientifico}</em></p>
        <p>${animal.descricao}</p>
      </div>
    `;
    lista.appendChild(item);
  });
}

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
  
  document.getElementById("cameraInput").value = "";
  document.getElementById("galeriaInput").value = "";
  
  document.querySelector("#identificar .botoes").style.display = "flex";
}

function removerImagemInicio() {
  document.getElementById("imagemSelecionadaInicio").src = "";
  document.getElementById("imagemContainerInicio").style.display = "none";
  
  document.getElementById("cameraInputInicio").value = "";
  document.getElementById("galeriaInputInicio").value = "";
 
  document.querySelector("#inicio .botoes").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  carregarGuia();
  document
    .getElementById("search-input")
    .addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const filtered = animaisDB.filter(
        (animal) =>
          animal.nome.toLowerCase().includes(query) ||
          animal.cientifico.toLowerCase().includes(query),
      );
      carregarGuia(filtered);
    });
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
          
          document.querySelector("#identificar .botoes").style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });

  
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
