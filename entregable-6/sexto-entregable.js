//Objeto para manipular las cuotas
class cuotas{
    constructor(){
        //Creamos una lista de nodos con todas las cuotas que tenemos disponibles
        this.cuotas_seleccionadas = document.getElementsByName('cuotas')
    }
    
    //Miramos cual está "seleccionada"
    cuota_seleccionada(){
        for(let i=0;i<this.cuotas_seleccionadas.length;i++){
            
            //Compruebo mediante un if cual de todos los radiobuttons fue seleccionado
            if(this.cuotas_seleccionadas[i].checked){
                return this.cuotas_seleccionadas[i].value
            }
        }
        
    }
}

// Usando un objeto para guardar el valor de los productos

let productos_formato_objeto = {}
let nodos_productos = document.getElementsByName('productos')

for(i=0;i<document.getElementsByName('productos').length;i++){
    productos_formato_objeto[nodos_productos[i].id] = nodos_productos[i].value
}

// Funcion creada para crear una array con los valores de los productos e ir agregandolos al "valor_final" de los productos seleccionados

function productos_seleccionados(){
    let valor_final = 0
    let precios_productos_array = Object.values(productos_formato_objeto)
    for(i=0; i<precios_productos_array.length; i++){
        if(nodos_productos[i].checked){
            valor_final += parseInt(precios_productos_array[i])
        }
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
            this.precio_total = this.precio_total * (2)
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
    let cuotas_seleccionadas = new cuotas
    console.log(productos_seleccionados())
    let pedidoX = new pedido(productos_seleccionados(),cuotas_seleccionadas.cuota_seleccionada()).comprar()
}
