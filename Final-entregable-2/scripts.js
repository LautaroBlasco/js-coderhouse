const usuarios = [];

const usuario_form = document.getElementById('formUsuario');
const boton_usuarios = document.getElementById('boton-mostrar');
const div_usuarios = document.getElementById('listaUsuarios')


usuario_form.addEventListener('submit', (e) => {
    e.preventDefault()

    let datosForm = new FormData(e.target)
    let usuario = new Usuario(datosForm.get('nombre'),datosForm.get('email'), datosForm.get('contraseña'),datosForm.get('direccion'))
    usuarios.push(usuario)
    localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    usuario_form    .reset();
})

boton_usuarios.addEventListener('click', () => {
    let Usuarios_parse = JSON.parse(localStorage.getItem('Usuarios'))
    Usuarios_parse.forEach( (usuario, indice) => {
    div_usuarios.innerHTML += `
    <div class="card" style="width: 18rem;" id="cliente${indice + 1}">
        <div class="card-body">
            <h5 class="card-title">Usuario numero: ${indice + 1}</h5>
            <p class="card-text">Nombre: ${usuario.nombre}</p>
            <p class="card-text">Email: ${usuario.email}</p>
            <p class="card-text">Contraseña: ${usuario.contraseña}</p>
            <p class="card-text">Direccion: ${usuario.direccion}</p>
        </div>
    </div>
    `
})
})