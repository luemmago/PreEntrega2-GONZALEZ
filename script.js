let inicio = new Date()

console.log(Math.PI)

for (let i = 0; i < 1000; i++) {
  console.log(i)  
}

let fecha = new Date()
console.log(fecha)
console.log(fecha.toLocaleDateString())
console.log(fecha.getDay())
console.log(fecha.getDate())
console.log(fecha.getMonth())

let final = new Date()
console.log("demoró ", final - inicio)
let name = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let edad = prompt("Ingrese su edad")
alert("Su nombre completo es " + name + " " + apellido)
if (edad >= 18) {
    alert("El Costo Financiero Total es del 75%")
    let MontoASolicitar = Number(prompt("ingrese monto a solicitar"))
    let MontoAPagar = MontoASolicitar * 1.75
    let CantidadDeCuotas = Number(prompt("Ingrese el numero de cuotas que desea pagar su préstamo personal"))

    alert("Monto a solicitar: " + MontoASolicitar + "\n" + "Interes por financiacion: " + "\n" + "Monto total financiado: " + MontoAPagar.toFixed(2) + "\n" + "En Cantidad de cuotas: " + CantidadDeCuotas + "\n" + "Monto de cada cuota: " + (MontoAPagar / CantidadDeCuotas).toFixed(2))

    let opcion = Number(prompt("Ingrese 1 para aceptar el préstamo \n ingrese 2 para calcular de nuevo \n ingrese 0 para salir"))
    if (opcion == 0) { alert("GRACIAS POR VISITARNOS, VUELVE PRONTO")}
    while (opcion != 0) {
        if (opcion == 1) {
             alert("Su préstamo fue aprobado con éxito, disfrute de su dinero")
            } else if (opcion == 2) {
            let MontoASolicitar = Number(prompt("ingrese monto a solicitar"))
            let MontoAPagar = MontoASolicitar * 1.75
            let CantidadDeCuotas = Number(prompt("Ingrese el numero de cuotas que desea pagar su préstamo personal"))
    
            alert("Monto a solicitar: " + MontoASolicitar + "\n" + "Interes por financiacion: " + "\n" + "Monto total financiado: " + MontoAPagar.toFixed(2) + "\n" + "En Cantidad de cuotas: " + CantidadDeCuotas + "\n" + "Monto de cada cuota: " + (MontoAPagar / CantidadDeCuotas).toFixed(2))
    
    
        }
    
    }
}else {alert("Eres menor de edad, no puedes continuar")}
