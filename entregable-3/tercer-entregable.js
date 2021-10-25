// for para calcular cuantos numeros pares hay antes del numero solicitado

let numero_ingresado = prompt('Ingresa un número')
let array_numeros_pares = []
let total_numeros_pares = 0

for(let i = 1; i <= numero_ingresado; i++){
    if(i%2 == 0){
        array_numeros_pares.push(i)
        total_numeros_pares += 1
    }
}

// Muestro los resultados
console.log(`La cantidad de numeros pares que hay antes del número ingresado son: ${total_numeros_pares}`)
console.log(`Los números pares que hay antes de tu número son: ${array_numeros_pares}`)