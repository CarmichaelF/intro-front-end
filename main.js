alert("Olá mundo!");
document.querySelectorAll("h1").forEach(
  (title, index) =>
    (title.onclick = () => {
      alert(`Você clicou no ${index} título!`);
    })
);
