let remera = document.getElementById('remera')
let short = document.getElementById('short')
let camiseta = document.getElementById('camiseta')

let tres_cuotas = document.getElementById('trescuotas') 
let seis_cuotas = document.getElementById('seiscuotas') 
let nueve_cuotas = document.getElementById('nuevecuotas') 


// Funcion para sumar la cantidad de cuotas
function cant_cuotas(){
    if (tres_cuotas.checked){
        return 3
    }
    if (seis_cuotas.checked){
        return 6
    }
    if (nueve_cuotas.checked){
        return 9
    }
}
// Funcion para sumar los valores de los productos elegidos
function precio_productos(){
    let valor_final = 0
    if (short.checked){
        valor_final += 200
    }
    if (camiseta.checked){
        valor_final += 100
    }
    if (remera.checked){
        valor_final += 100
    }
    return valor_final
}

// Objeto donde se ingresa cada pedido realizado

class pedido{

    constructor(precio_total,cuotas){
        this.precio_total = precio_total
        this.cuotas = cuotas
    }

    intereses(){
        if (this.cuotas > 6){
            this.precio_total = this.precio_total * (1.15)
        }
    }

    comprar(){
        if (this.cuotas == undefined || this.precio_total === 0){
            alert ('INGRESOS INVALIDOS')
    }else{
        this.intereses();
        alert('el precio final del carrito es: $'+ this.precio_total + '\nY la cantidad de cuotas seleccionadas son: '+  this.cuotas+'\nEl precio final por cuota es: $'+ (this.precio_total/this.cuotas))   
    }
}
}

function comprar(){
    let pedidoX = new pedido(precio_productos(),cant_cuotas()).comprar()
}

