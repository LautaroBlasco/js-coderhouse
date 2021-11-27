let clientes = document.getElementById('cartas-clientes')
let boton_izquierda = document.getElementById('flecha-izquierda')

let usuarios;

function cargarUsuarios(){
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => usuarios = data)
        .then(data => {
            for(let i = 0; i < 4; i++) {
                clientes.innerHTML += `
                <div class="card-cliente cargando_usuarios">
                    <img class="imagen-cliente" src="${data.results[i].picture.large}" alt="Card image cap">
                    <div class="texto-card-cliente">
                        <h1>${data.results[i].name.last}, ${data.results[i].name.first}</h1>
                        <p class="evaluacion-cliente">★★★★★</p>
                    </div>
                </div>`
            }
        })
}

cargarUsuarios()

function modificarUsuarios(){
    clientes.innerHTML = ""
    for(let i = 0; i < 4; i++) {
        clientes.innerHTML += `
                    <div class="card-cliente cargando_usuarios">
                        <img class="imagen-cliente" src="${usuarios.results[i].picture.large}" alt="Card image cap">
                        <div class="texto-card-cliente">
                            <h1>${usuarios.results[i].name.last}, ${usuarios.results[i].name.first}</h1>
                            <p class="evaluacion-cliente">★★★★★</p>
                        </div>
                    </div>`
        usuarios.results.push(usuarios.results[0])
        usuarios.results.shift()
    }
}


$("#flecha-izquierda").click(function(){
    clientes.innerHTML = ""
    modificarUsuarios()
})

$("#flecha-derecha").click(function(){
    clientes.innerHTML = ""
    modificarUsuarios()
})



// Funcion con jquery para modificar el color de la navbar al bajar 200vh (hasta la sección de "catalogo")

$(window).scroll(function(){
    if ($(this).scrollTop() > window.innerHeight * 2 - 100) {
       $('#navbar_restaurant').addClass('navbar_restaurant_alternativa');
    } else {
       $('#navbar_restaurant').removeClass('navbar_restaurant_alternativa');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > window.innerHeight / 3) {
       $('#boton_subida').addClass('boton_subida');
    } else {
       $('#boton_subida').removeClass('boton_subida');
    }
});


$("#flecha-izquierda").click(function(){
    clientes.innerHTML = ""
    modificarUsuarios()
})