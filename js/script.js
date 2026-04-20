function mostrarPagina(id) {
  const paginas = document.querySelectorAll(".page");

  paginas.forEach(pagina => {
    pagina.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

