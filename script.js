let prestamo = [
    { nombre: "credito", precio: 0, categoria: "Nulo" },
    { nombre: "credito", precio: 5000, categoria: "Chico" },
    { nombre: "credito", precio: 10000, categoria: "mediano" },
    { nombre: "credito", precio: 100000, categoria: "grande" }
]

let total = 0

for (let i = 0; i < prestamo.length; i++) {
    console.log(prestamo[i].precio)
    total = total + prestamo[i].precio
}
console.log("El total es: ", total)
console.log("------------")
total = 0

for (const prestamo of prestamo) {
    console.log(prestamo.precio)
    total = total + prestamo.precio
}

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
    if (opcion == 0) { alert("GRACIAS POR VISITARNOS, VUELVE PRONTO") }
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
} else { alert("Eres menor de edad, no puedes continuar") }


productos.sort((a, b) => {
  if (a.nombre < b.nombre) {
    return 1
  }
  if (a.nombre > b.nombre) {
    return -1
  }
  return 0
})
console.log(productos)

//REDUCE
let CantidadDeCuotas = precio.reduce((acum, pre) => acum +  mon.precio, 0)
console.log(costoTotalProductos)

//FILTER
let MontoASolicitar = precio.filter((precio) => precio.MontoASolicitar > 3000 && precio.categoria === "credito")
console.log(MontoASolicitar)
// respuesta pruede ser [] o [{...}] o [{...}, {...}, {...}]

//FIND
let montobuscado = nombre.find(precio => nombre.id === 2)
console.log(montobuscado)
