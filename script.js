let productos = [
    { id: 2, nombre: "Pelota Mundial CATAR 2022", stock: 30, precio: 19999, imgUrl: "" },
    { id: 5, nombre: "Camiseta Argentina con 3 estrellas mas logo de campeon del mundo", stock: 10, precio: 30000, imgUrl: "" },
    { id: 8, nombre: "Camiseta Argentina con 2 estrellas", stock: 34, precio: 23000, imgUrl: "" },
    { id: 9, nombre: "BORDADO DE LA 3ERA ESTRELLA MAS NUMERO DE JUGADOR A ELEGIR", stock: Infinito, precio: 6000, imgUrl: "" }
]

let contenedor = document.getElementById("contenedorProductos")

for (const producto of productos) {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.id = producto.id

    tarjetaProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Quedan ${producto.stock} u.</p>
      <p>Cuesta $${producto.precio}</p>
      <img src=${producto.imgUrl}>
      <button>Añadir al carrito</button>
    `

    contenedor.appendChild(tarjetaProducto)
}
