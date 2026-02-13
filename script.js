const musica = document.getElementById("musica");

// Intento automático al cargar
window.addEventListener("load", () => {
    musica.play().catch(() => {
        // Si el navegador bloquea el autoplay,
        // se activará al primer toque
        document.body.addEventListener("click", () => {
            musica.play();
        }, { once: true });
    });
});
function crearCorazon(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}
setInterval(crearCorazon, 500);

function irASorpresa(){
    window.location.href = "sorpresa/sorpresa.html";
}
function carta(){
    window.location.href = "carta/index.html";
}
function mostrarSorpresa(){
    document.getElementById("pagina1").classList.add("oculto");
    document.getElementById("pagina2").classList.remove("oculto");
}