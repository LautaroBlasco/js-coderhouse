let clientes = document.getElementById('cartas-clientes')
let boton_izquierda = document.getElementById('flecha-izquierda')

let usuarios;

// ====================================================================
// Funciones para cargar y modificar los usuarios desde la API de randomuser.

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
if((window.location.pathname == '/entregable-jquery/') || (window.location.pathname == '/entregable-jquery/index.html')){
    cargarUsuarios()
}


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


// ====================================================================
// Jquery para modificar usuarios con botones

$("#flecha-izquierda").click(function(){
    clientes.innerHTML = ""
    modificarUsuarios()
})

$("#flecha-derecha").click(function(){
    clientes.innerHTML = ""
    modificarUsuarios()
})


// ====================================================================
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


// ===================================================================
// Redireccionamiento a usuario al clickear en la navbar

function redireccionUsuario(){
    window.location.href ='usuario.html'
}

$('#usuario-navbar').click(redireccionUsuario)


// ====================================================================
// Creacion y almacenamiento de usuarios en local storage


class ObjetoUsuario{
    constructor(email, nombre, contrasenia){
        this.email = email;
        this.nombre = nombre;
        this.contrasenia = contrasenia;
    }
}

let listaUsuarios = []
let formUsuario = document.getElementById('formUsuario')
$('#contrasenias_distintas').hide()

if((window.location.pathname == 'http://127.0.0.1:5500/entregable-jquery/usuario.html')){
    formUsuario.addEventListener('submit', (e) =>{
        e.preventDefault()
        let datosFormulario = new FormData(e.target)
    
        if(datosFormulario.get("contrasenia") === datosFormulario.get('confirmacionContrasenia')){
            const usuario = new ObjetoUsuario(datosFormulario.get("email"),datosFormulario.get("nombre"),datosFormulario.get("contrasenia"))
            console.log(usuario)
            listaUsuarios.push(usuario)
            localStorage.setItem('usuarios', JSON.stringify(listaUsuarios))
    
    
            // Propiedades estéticas de la página
            $('#contrasenias_distintas').hide();
            $('#contrasenia').removeClass('contraseña_errada');
            $('#confirmacionContrasenia').removeClass('contraseña_errada');
        }else{
            // Propiedades estéticas de la página
            $('#contrasenia').addClass('contraseña_errada');
            $('#confirmacionContrasenia').addClass('contraseña_errada');
            $('#contrasenias_distintas').show()
        }
    })
}



// ====================================================================
// DARK MODE de la página usando localstorage

let darkMode;

if(localStorage.getItem('dark-mode')){
    darkMode = localStorage.getItem('dark-mode')
} else{
    darkMode = '0'
}

localStorage.setItem('dark-mode', darkMode)

$(() => {
    if(localStorage.getItem('dark-mode') == '1'){
        $('#boton-dark-mode').hide()
        $('#boton-light-mode').show()

        // Cambios de clases del dark-mode
        $('#clientes').addClass('dark-mode-clientes')
        $('#catalogo').addClass('dark-mode-catalogo')
        $('#curvas-catalogo').addClass('black-mode-curvas-catalogo')
        $('#main').addClass('dark-mode-main')
        $('#main-usuario').addClass('main-usuario')
    }else{
        $('#boton-light-mode').hide()
        $('#clientes').removeClass('dark-mode-clientes')
        $('#catalogo').removeClass('dark-mode-catalogo')
        $('#curvas-catalogo').removeClass('black-mode-curvas-catalogo')
        $('#main').removeClass('dark-mode-main')
        $('#main-usuario').removeClass('main-usuario')
    }

    $('#boton-dark-mode').on('click', () => {
        $('#boton-dark-mode').hide()
        $('#boton-light-mode').show()
        localStorage.setItem('dark-mode', '1')
        $('#clientes').addClass('dark-mode-clientes')
        $('#catalogo').addClass('dark-mode-catalogo')
        $('#curvas-catalogo').addClass('black-mode-curvas-catalogo')
        $('#main').addClass('dark-mode-main')
        $('#navbar_restaurant').addClass('dark-mode.navbar-alternativa')
        $('#main-usuario').addClass('main-usuario')
    })

    $('#boton-light-mode').on('click', () => {
        $('#boton-dark-mode').show()
        $('#boton-light-mode').hide()
        localStorage.setItem('dark-mode', '0')
        $('#clientes').removeClass('dark-mode-clientes')
        $('#catalogo').removeClass('dark-mode-catalogo')
        $('#curvas-catalogo').removeClass('black-mode-curvas-catalogo')
        $('#main').removeClass('dark-mode-main')
        $('#main-usuario').removeClass('main-usuario')
    })

})

// Animaciones de jquery para que desaparezca el botón de los catálogos

$('.boton_card_menu').click(function(){
    $('.boton_card_menu').animate({
        opacity: "0%"
    },{
    duration: 1500,
    easing: "linear",
    complete: () => {
        console.log('ya vamos a tener menu :(')
    }
})
})
