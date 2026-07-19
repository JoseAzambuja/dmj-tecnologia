// Seleciona todos os elementos com a classe "card"
const cards = document.querySelectorAll(".card");

// Cria o observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            // Quando o card entrar na tela
            entry.target.classList.add("show");
        } else {
            // Remove a classe ao sair da tela (opcional)
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.2
});

// Observa cada card
cards.forEach((card) => {
    observer.observe(card);
});
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-lateral");

console.log(btnMenu);
console.log(menu);

btnMenu.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Clique!");
    menu.classList.toggle("aberto");
});
const fecharMenu = document.getElementById("fechar-menu");

fecharMenu.addEventListener("click", () => {
    menu.classList.remove("aberto");
});