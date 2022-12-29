let productos = [
    { id: 2, nombre: "Pelota Mundial CATAR 2022", stock: 30, precio: 19999, imgUrl: "https://i.pinimg.com/originals/dc/8c/d2/dc8cd20e204181feda97133eaef73b7c.jpg" },
    { id: 5, nombre: "Camiseta Argentina con 3 estrellas mas logo de campeon del mundo", stock: 10, precio: 30000, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJJZ91KEj9RlNTX8Gyex5JtbDjhgv7sO5djNvQSbqy-xFBVA3QIPtKVOQqhS19sMiPcI&usqp=CAU" },
    { id: 8, nombre: "Camiseta Argentina con 2 estrellas", stock: 34, precio: 23000, imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" },
    { id: 9, nombre: "Bordado de la 3era estrella mas la insignia del campeon", stock: 10000, precio: 6000, imgUrl: "https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2022-12/681721-48233-camiseta-2520-25282-2529.jpeg?itok=B1qtsBsO" },
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
