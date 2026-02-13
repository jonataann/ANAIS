const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre")

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta")
            }, 500);
        }
    }
})
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
