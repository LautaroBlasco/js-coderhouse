
// Crear una funcion que ordene la lista de forma creciente o decreciente ingresando una string
// Crear una funcion que permita filtrar la lista dependiendo si un número es mayor o menor usando string y el numero deseado como argumentos


//De menor a mayor
class Ordenar_array{

    constructor(){
        this.mi_array = Array.from({length: 30}, () => Math.floor(Math.random() * 30));
    }

    decision_usuario(eleccion){
        if(eleccion == 'a')
            this.Ordenar_array_menor_a_mayor(this.mi_array)
        if(eleccion == 'd'){
            this.Ordenar_array_mayor_a_menor(this.mi_array)
        }
        return this.mi_array
    }


    menor_a_mayor(mi_array){
    for(let i=0; i<mi_array.length; i++){
        let b = i + 1
        if(mi_array[i] > mi_array[b]){
            let temporal = mi_array[i]
            mi_array[i] = mi_array[b]
            mi_array[b] = temporal 
        }
    }
}   

    mayor_a_menor(mi_array){
        for(let i=0; i<mi_array.length; i++){
            let b = i + 1
            if(mi_array[i] < mi_array[b]){
                let temporal = mi_array[i]
                mi_array[i] = mi_array[b]
                mi_array[b] = temporal 
            }
        }
    }

    Ordenar_array_menor_a_mayor(mi_array){
        let vueltas = 0
        while(vueltas < mi_array.length){
            this.menor_a_mayor(mi_array)
            vueltas +=1
        }
}

    Ordenar_array_mayor_a_menor(mi_array){
        let vueltas = 0
        while(vueltas < mi_array.length){
            this.mayor_a_menor(mi_array)
            vueltas +=1
        }
    }

}

function ejecucion_del_script(){
    let eleccion = prompt('ingrese en que forma quiere ordenar su array (ascendente,descendente) \n *(ingresar "a" o "d" respectivamente)')
    let objeto = new Ordenar_array
    console.log(`La array generada por números randoms es: [${objeto.mi_array}]`)
    console.log(objeto.decision_usuario(eleccion))
}

ejecucion_del_script()