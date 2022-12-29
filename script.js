let productos = [
  { id: 2, categorias: ["entretenimiento", "futbol", "deportes"], nombre: "Pelota Mundial CATAR 2022", stock: 30, precio: 19999, imgUrl: "https://i.pinimg.com/originals/dc/8c/d2/dc8cd20e204181feda97133eaef73b7c.jpg" },
  { id: 5, categorias: ["Indumentaria"], nombre: "Camiseta Argentina con 3 estrellas mas logo de campeon del mundo", stock: 10, precio: 30000, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJJZ91KEj9RlNTX8Gyex5JtbDjhgv7sO5djNvQSbqy-xFBVA3QIPtKVOQqhS19sMiPcI&usqp=CAU" },
  { id: 8, categorias: ["Indumentaria"], nombre: "Camiseta Argentina con 2 estrellas", stock: 34, precio: 23000, imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" },
  { id: 9, categorias: ["Indumentaria"], nombre: "Bordado de la 3era estrella mas la insignia del campeon", stock: 10000, precio: 6000, imgUrl: "https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2022-12/681721-48233-camiseta-2520-25282-2529.jpeg?itok=B1qtsBsO" },
]

let carrito = []
let contenedorCarrito = document.getElementById("contenedorCarrito")

let contenedor = document.getElementById("contenedorProductos")
renderizarProductos(productos)

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", renderizarProductosFiltrados)

function renderizarProductosFiltrados(e) {
  let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categorias.find(categoria => categoria.includes(buscador.value.toLowerCase())))
  // producto.categoria.toLowerCase().includes(buscador.value.toLowerCase())
  renderizarProductos(productosFiltrados)
}

function renderizarProductos(arrayDeProductos) {
  contenedor.innerHTML = ""
  for (const producto of arrayDeProductos) {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.id = producto.id
  
    tarjetaProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Quedan ${producto.stock} u.</p>
      <p>Cuesta $${producto.precio}</p>
      <img src=${producto.imgUrl}>
      <button class="boton" id=${producto.id}>Añadir al carrito</button>
    `
    contenedor.appendChild(tarjetaProducto)
  }
  let botones = document.getElementsByClassName("boton")
  for (const boton of botones) {
    boton.addEventListener("click", agregarAlCarrito)
  }
}

function agregarAlCarrito(e) {
  let productoBuscado = productos.find(producto => producto.id == e.target.id)
  let posicionDelProductoBuscado = carrito.findIndex(producto => producto.id == productoBuscado.id)
  if (posicionDelProductoBuscado != -1) {
    carrito[posicionDelProductoBuscado].unidades++
    carrito[posicionDelProductoBuscado].subtotal = carrito[posicionDelProductoBuscado].unidades * carrito[posicionDelProductoBuscado].precioUnitario
  } else {
    carrito.push({id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnitario: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio})
  }
  renderizarCarrito(carrito)
}

function renderizarCarrito(arrayDeProductos) {
  contenedorCarrito.innerHTML = ''
  for (const producto of arrayDeProductos) {
    contenedorCarrito.innerHTML += `
      <div class="flex">
        <p>${producto.nombre}</p>
        <p>${producto.precioUnitario}</p>
        <p>${producto.unidades}</p>
        <p>${producto.subtotal}</p>
      </div>
    `
  }

  let total = carrito.reduce((acc, valorActual) => acc + valorActual.subtotal, 0)
  contenedorCarrito.innerHTML += `
    <h3>TOTAL $${total}</h3>
  `
}

