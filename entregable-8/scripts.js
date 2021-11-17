const cartas = document.getElementById('tarjetas_productos')


document.getElementById('boton_productos').addEventListener('click', () => {
    for(i=0; i < arr_productos.length; i++){
        let producto = arr_productos[i]
        let nueva_carta = document.createElement('div')
        nueva_carta.innerHTML += `
        <div id="card" class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="..." id="card_img">
                <div class="card-body">
                    <h5 id="card_nombre" class="card-title">${producto.nombre_producto}</h5>
                    <p id="card_precio" class="card-text">${producto.precio_producto_dolares}</p>
                    <p id="card_stock" class="card-text">${producto.stock_producto}</p>
                    <p id="card_marca" class="card-text">${producto.marca_producto}</p>
                    <p id="card_categoria" class="card-text">${producto.categoria_producto}</p>
                    <a href="#" class="btn btn-primary">Agregar producto al carrito</a>
                </div>
        </div>`
        cartas.appendChild(nueva_carta)
    }
})