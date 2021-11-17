// Creo la class para los productos

class Producto{
    
    constructor(nombre_producto,precio_producto_dolares,stock_producto,categoria_producto,marca_producto,url_imagen_producto){
        this.nombre_producto = nombre_producto
        this.precio_producto_dolares = precio_producto_dolares
        this.stock_producto = stock_producto
        this.categoria_producto = categoria_producto
        this.marca_producto = marca_producto
        this.imagen = url_imagen_producto
    }
}


// Creo todos los productos

let zapatillas_nike_1 = new Producto('Zapatilla Nike SB Stephan Janoski Roja', 350, 4, 'Zapatilla', 'Nike','https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')
let remera_adidas_1 = new Producto('Remera Adidas Simple Negra', 150, 10, 'Remera', 'Adidas','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')
let pantalon_nike_1 = new Producto('Pantalon Stephan Janoski Negro', 500, 4, 'Pantalon', 'Nike','https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
let pantalon_adidas_1 = new Producto('Pantalon Adidas Simple Negro', 200, 10, 'Pantalon', 'Adidas','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
let remera_nike_2 = new Producto('Remera Nike SB Janoski Edición Limitada', 700, 2, 'Remera', 'Nike','https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')

let arr_productos = [zapatillas_nike_1, remera_adidas_1, pantalon_nike_1, pantalon_adidas_1, remera_nike_2]
