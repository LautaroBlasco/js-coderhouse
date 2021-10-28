let remera = document.getElementById('remera')
let short = document.getElementById('short')
let camiseta = document.getElementById('camiseta')

let tres_cuotas = document.getElementById('trescuotas') 
let seis_cuotas = document.getElementById('seiscuotas') 


// Funcion para sumar la cantidad de cuotas
function cant_cuotas(){
    if (tres_cuotas.checked){
        return 3
    }
    if (seis_cuotas.checked){
        return 6
    }
}
// Funcion para sumar los valores de los productos elegidos
function productos(){
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

// Funcion para comprobar que la compra es valida y devolver el valor
function comprar(){    
    if (cant_cuotas() == undefined || productos() === 0){
        alert ('INGRESOS INVALIDOS')        
    }else{ 
        alert('el precio final del carrito es: $'+ productos() + '\nY la cantidad de cuotas seleccionadas son: '+  cant_cuotas()+'\nEl precio final por cuota es: $'+ (productos()/cant_cuotas()))   
    }
}

