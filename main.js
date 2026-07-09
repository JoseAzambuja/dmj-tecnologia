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