function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Todos os campos são obrigatórios!");
    return false;
  }

  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    alert("Digite um email válido!");
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true;
}

// Botão voltar ao topo
const btnTopo = document.getElementById("btnTopo");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
