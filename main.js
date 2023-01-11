//Declaração de variável "image" e atribuição de um elemento DOM(Representação do HTML em forma de uma árvore).
//Pegue um elemento utilizando o ID "dog-image" como referência e guarde em uma variável.
const image = document.getElementById("dog-image");

//Atribuição de uma função ao evento de clique do usuário.
//Emita um alerta contendo a mensagem "Au au!" quando o usuário clicar na imagem.
image.onclick = () => {
  alert("Au au!");
};
