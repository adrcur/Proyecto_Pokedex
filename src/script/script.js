function MuestraOculta() {
    var elemento = document.getElementById("texto");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

function Pagina(act, des1, des2) {


    document.getElementById(act).classList = "nav-link active";
    document.getElementById(des1).classList = "nav-link";
    document.getElementById(des2).classList = "nav-link";

    switch (act) {
        case "men1":
            p_actual = "inicio";
            o_pag1 = "Pokes";
            o_pag2 = "Busca";
            break;
        case "men2":
            p_actual = "Pokes";
            o_pag1 = "inicio";
            o_pag2 = "Busca";
            break;
        case "men3":
            p_actual = "Busca";
            o_pag1 = "inicio";
            o_pag2 = "Pokes";
            break;
    }

    document.getElementById(p_actual).style.display = "block";
    document.getElementById(o_pag1).style.display = "none";
    document.getElementById(o_pag2).style.display = "none";

}

async function Api_pokemon(b_poke, opc) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${b_poke}`)
        .then(data => data.json())
        .then(response => Datos_poke(response, opc))
        .catch(errores => { console.error('Error', errores) })
}


function Busca() {
    return Api_pokemon(document.getElementById("bsc").value, 2)
}

function Datos_poke(datos, opc) {

    var imagen = datos.sprites.front_default;
    var imagen2 = datos.sprites.other.home.front_default;
    var nombre = datos.name;
    var id = datos.id;
    var peso = (datos.weight * 0.1).toFixed(2);

    var tipo1 = datos.types[0].type.name;
    var tipo2 = datos.types[1] ? datos.types[1].type.name : null;

    var hab1 = datos.abilities[0].ability.name;
    var hab2 = datos.abilities[1] ? datos.abilities[1].ability.name : null;

    if (opc == 1) {
        Tarj_Datos(imagen, imagen2, nombre, id, peso, tipo1, tipo2, hab1, hab2);

    } else {
        Info_poke(imagen2, nombre, id, peso, tipo1, tipo2, hab1, hab2);
    }

}



function Info_poke(r_img, nombre, id, peso, tipo1, tipo2, hab1, hab2) {

    document.querySelector('[pokemonimg]').src = r_img;
    document.querySelector('[contenedor]').style.display = "block";
    document.querySelector('[nombre]').textContent = `#${id}    ${nombre} `;
    document.querySelector('[peso]').textContent = `${peso} Kg `;
    document.querySelector('[tipo1]').textContent = tipo1;
    document.querySelector('[tipo2]').textContent = tipo2;
    document.querySelector('[hab1]').textContent = hab1;
    document.querySelector('[hab2]').textContent = hab2;
}


function Tarj_Datos(imagen, imagen2, nombre, id, peso, tipo1, tipo2, hab1, hab2) {


    const tarjeta_Contenedor = document.createElement("div");
    // tarjeta_Contenedor.classList.add("tarjeta-contenedor");
    tarjeta_Contenedor.classList.add("col");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pokemon");

    const img_cont = document.createElement("div");

    const link = document.createElement("a");
    link.href = "#";


    const img = document.createElement("img");
    img.loading = "Lazy"
    img.src = imagen;
    // img.id = imagen2;


    img.onclick = function () {
        Pagina('men3', 'men1', 'men2');
        // Info_poke(img.id, nombre, id, peso, tipo1, tipo2, hab1, hab2);
        Info_poke(imagen2, nombre, id, peso, tipo1, tipo2, hab1, hab2);
    };

    link.appendChild(img);
    img_cont.appendChild(link);

    const id_nombre = document.createElement("p");
    id_nombre.textContent = `#${id}    ${nombre} `;

    tarjeta.appendChild(id_nombre);
    tarjeta.appendChild(img_cont);

    tarjeta_Contenedor.appendChild(tarjeta);

    const pokedex_Contenedor = document.querySelector(".pokedexContenedor");
    pokedex_Contenedor.appendChild(tarjeta_Contenedor);

}


function No_encontrado() {
    console.log("errorrrrr");
}


function pokedex(ini, fin) {

    for (let i = ini; i <= fin; i++) {

        setTimeout(() => {
            Api_pokemon(i, 1);
        }, 100);
        // Api_pokemon(i);

    }
}

function mas() {
    p_inicio = p_fin + 1;
    p_fin = p_fin + 21;

    pokedex(p_inicio, p_fin);
}
var p_inicio = 1;
var p_fin = 21;
pokedex(p_inicio, p_fin);
