fetch("partes/header.html")
.then(res => res.text())
.then(data => document.getElementById('header').innerHTML = data);
fetch("partes/footer.html")
.then(res => res.text())
.then(data => document.getElementById('footer').innerHTML = data);
document.addEventListener("DOMContentLoaded", () => {
                const juegos_index = [
                {
                    id: "GTA_V",
                    nombre: "GTA V - 500$",
                    imagen: "img/1.webp",
                    },
                {
                    id:"Horizon_Forbidden_West",
                    nombre: "Horizon Forbidden West- 600$",
                    imagen: "img/2.webp",
                },
                {
                    id:"TLOU",
                    nombre: "The Last Of Us - 600$",
                    imagen: "img/3.webp",
                },
                {
                    id:"Minecraft",
                    nombre: "Minecraft - 700$",
                    imagen: "img/4.jpg",
                },
            ]
    const contenedor = document.querySelector(".seccion-productos ul");
    juegos_index.forEach(juego => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="producto" id="producto">
                        <img src="${juego.imagen}" alt="${juego.nombre}" />
                        <h3>${juego.nombre}</h3>
                        <button type="button" onclick="comprar('${juego.id}')">Comprar</button>
        </div>
        `  ;
        contenedor.appendChild(li);
    });
});