const params = new URLSearchParams(window.location.search);
    const juego = params.get("juego");
    const juegos = {
    GTA_V: {
        titulo: "gta 5",
        imagen: "img/1.webp",
        descripcion: "Es un videojuego de acción-aventura de mundo abierto, desarrollado por Rockstar Games, situado en la ciudad ficticia de Los Santos y el estado de San Andreas."
    },
    Horizon_Forbidden_West: {
        titulo: "Horizon Forbbiden West",
        imagen: "img/2.webp",
        descripcion: "Es un videojuego de rol y acción en mundo abierto, secuela de Zero Dawn, donde la cazadora Aloy explora tierras fronterizas peligrosas para salvar la biosfera de una plaga misteriosa."
    },
    TLOU: {
        titulo: "The Last Of Us",
        imagen: "img/3.webp",
        descripcion: "Videojuego de acción-aventura y survival horror en tercera persona"
    },
    Minecraft: {
        titulo: "Minecraft",
        imagen: "img/4.jpg",
        descripcion: "Es un popular videojuego tipo sandbox de mundo abierto, enfocado en la exploración, recolección de recursos y construcción utilizando cubos 3D."
    }
};
if (juegos[juego]) {
    document.getElementById("titulo").textContent = juegos[juego].titulo;
    document.getElementById("imagen").src = juegos[juego].imagen;
    document.getElementById("descripcion").textContent = juegos[juego].descripcion;
} else {
    document.getElementById("titulo").textContent = "Juego no encontrado";
}