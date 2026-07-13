// ===============================
// INVITACIÓN DE GRADUACIÓN
// Sergio Canaviri Félix
// ===============================

// Elementos
const btnAbrir = document.getElementById("btnAbrir");
const contenido = document.getElementById("contenido");
const inicio = document.getElementById("inicio");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

// ===============================
// Abrir invitación
// ===============================

btnAbrir.addEventListener("click", () => {

    inicio.style.display = "none";

    contenido.style.display = "block";

    musica.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });

});

// ===============================
// Botón Música
// ===============================

let reproduciendo = true;

btnMusica.addEventListener("click", () => {

    if (reproduciendo) {

        musica.pause();

        btnMusica.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        musica.play();

        btnMusica.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    }

    reproduciendo = !reproduciendo;

});

// ===============================
// CUENTA REGRESIVA
// Cambia la fecha por la de tu graduación
// ===============================

const fechaEvento = new Date("2026-07-19T20:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        clearInterval(contador);

        dias.innerHTML = "00";
        horas.innerHTML = "00";
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";

        alert("🎓 ¡Ha llegado el gran día!");

        return;

    }

    dias.innerHTML =
        Math.floor(diferencia / (1000 * 60 * 60 * 24));

    horas.innerHTML =
        Math.floor((diferencia %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));

    minutos.innerHTML =
        Math.floor((diferencia %
        (1000 * 60 * 60)) /
        (1000 * 60));

    segundos.innerHTML =
        Math.floor((diferencia %
        (1000 * 60)) /
        1000);

}, 1000);

// ===============================
// Animación al hacer scroll
// ===============================

const secciones =
document.querySelectorAll("section");

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

secciones.forEach((sec) => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "1s";

    observar.observe(sec);

});
// ========================================
// PARTE 2 - EFECTOS Y FUNCIONES EXTRA
// ========================================

// Animación de las imágenes de la galería

const imagenes = document.querySelectorAll(".imagenes img");

imagenes.forEach((img) => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = "0.4s";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});

// ========================================
// Botón volver arriba
// ========================================

const btnTop = document.createElement("button");

btnTop.innerHTML = "⬆";

btnTop.style.position = "fixed";
btnTop.style.bottom = "100px";
btnTop.style.right = "25px";
btnTop.style.width = "55px";
btnTop.style.height = "55px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#0B1F3A";
btnTop.style.color = "#fff";
btnTop.style.fontSize = "22px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";

document.body.appendChild(btnTop);

// Mostrar botón

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});

// Volver arriba

btnTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ========================================
// Efecto de aparición para tarjetas
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ========================================
// Mensaje de bienvenida
// ========================================

window.addEventListener("load",()=>{

    console.log("Bienvenido a la invitación de graduación.");

});

// ========================================
// Fecha automática en el footer
// ========================================

const footer = document.querySelector("footer");

const anio = new Date().getFullYear();

footer.innerHTML += `<p>© ${anio} - Todos los derechos reservados</p>`;

// ========================================
// Fin Parte 2
// ========================================
// ==========================================
// PARTE 3 - EFECTOS PREMIUM
// ==========================================

// Mensaje al llegar al final de la página

window.addEventListener("scroll", () => {

    const altura =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (window.scrollY >= altura - 5) {

        console.log("Gracias por visitar mi invitación.");

    }

});

// ==========================================
// Cambiar color del botón de música
// ==========================================

setInterval(() => {

    if (btnMusica) {

        btnMusica.style.boxShadow =
            "0 0 25px gold";

        setTimeout(() => {

            btnMusica.style.boxShadow =
                "0 0 8px rgba(0,0,0,.3)";

        }, 500);

    }

}, 2000);

// ==========================================
// Animación de escritura
// ==========================================

const titulo = document.querySelector(".contenido h1");

if (titulo) {

    const texto = titulo.innerText;

    titulo.innerHTML = "";

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            titulo.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribir, 120);

        }

    }

    escribir();

}

// ==========================================
// Mostrar fecha actual en consola
// ==========================================

const hoy = new Date();

console.log(
    "Fecha actual:",
    hoy.toLocaleDateString()
);

// ==========================================
// Precargar imágenes
// ==========================================

const fotos = [

    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg"

];

fotos.forEach((ruta) => {

    const img = new Image();

    img.src = ruta;

});

// ==========================================
// Saludo según la hora
// ==========================================

const hora = new Date().getHours();

if (hora < 12) {

    console.log("Buenos días.");

} else if (hora < 19) {

    console.log("Buenas tardes.");

} else {

    console.log("Buenas noches.");

}

// ==========================================
// FIN DEL SCRIPT
// ==========================================

console.log("Invitación cargada correctamente.");