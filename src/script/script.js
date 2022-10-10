function MuestraOculta() {
    var elemento = document.getElementById("texto");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}


// function p(act, des1, des2) {

//     var act_elem = document.getElementById(act);
//     var act_des1 = document.getElementById(des1);
//     var act_des2 = document.getElementById(des2);

//     act_elem.classList = "nav-link active";
//     act_des1.classList = "nav-link";
//     act_des2.classList = "nav-link";

// }

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
var Datos_poke
var response
function Api_pokemon() {
    let b_poke = document.getElementById("bsc").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${b_poke}`)
        .then(data => data.json())
        .then(response => Datos_poke(response))
        // .then(response => Datos(response))
        .catch(err => No_encontrado())
    console.log(b_poke);
}
function Datos(response) {
    x = response;
    z = response.types[1] != null ? response.types[1].type.name : null;
    //  elvisLives = response.types[1].type.name == null ? "Sip" : "Nop";
    // document.getElementById("contenedor").style.display = "block";
}

function Datos_poke(datos) {
    // document.querySelector('[imagen]');
    img = datos.sprites.other.home.front_default;
    // document.querySelector('[imagen]').setAttribute('src', img);

    // pokeImg.setAttribute('src', sprite);

    // var pokeImg = document.querySelector('[pokemoning]');
    // pokeImg.setAttribute('src', img);
    // document.getElementById("imgpk").src = img;

    document.querySelector('[pokemonimg]').src = img;

    var nombre = datos.name;
    var id = datos.id;
    var peso = datos.weight * 0.1;

    var tipo1 = datos.types[0].type.name;
    var tipo2 = datos.types[1] ? datos.types[1].type.name : null;

    var hab1 = datos.abilities[0].ability.name;
    var hab2 = datos.abilities[1] ? datos.abilities[1].ability.name : null;

   
    
    document.querySelector('[contenedor]').style.display = "block"; 
    // document.querySelector('[nombre]').textContent = nombre;
    document.querySelector('[nombre]').textContent = `#${id}    ${nombre} `;
    document.querySelector('[peso]').textContent = `${peso} Kg `;
    document.querySelector('[tipo1]').textContent = tipo1;
    document.querySelector('[tipo2]').textContent = tipo2;
    document.querySelector('[hab1]').textContent = hab1;
    document.querySelector('[hab2]').textContent = hab2;

    x = datos;
    console.log(x);
    
    
}

function No_encontrado() {
    console.log("errorrrrr");
}