// Sistema de Inventario
const inventario = [];

function menu() {
  let opcion;
  do {
    console.log("\n=== SISTEMA DE INVENTARIO ===");
    console.log("1. Agregar Producto");
    console.log("2. Mostrar Inventario");
    console.log("3. Buscar Producto");
    console.log("4. Salir");

    opcion = parseInt(prompt("Seleccione una opción:"));

    switch (opcion) {
      case 1:
        agregarProducto();
        break;
      case 2:
        mostrarInventario();
        break;
      case 3:
        buscarProducto();
        break;
      case 4:
        console.log("Gracias por usar el sistema.");
        break;
      default:
        console.log("Opción inválida.");
    }
  } while (opcion !== 4);
}

function agregarProducto() {
  const codigo = prompt("Ingrese el código del producto:");
  const nombre = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  const cantidad = parseInt(prompt("Ingrese la cantidad en stock:"));

  inventario.push({ codigo, nombre, precio, cantidad });
  console.log("Producto agregado exitosamente.");
}

function mostrarInventario() {
  if (inventario.length === 0) {
    console.log("El inventario está vacío.");
  } else {
    console.log("\n=== INVENTARIO ===");
    inventario.forEach((producto, index) => {
      console.log(`Producto ${index + 1}`);
      console.log(`Código: ${producto.codigo}`);
      console.log(`Nombre: ${producto.nombre}`);
      console.log(`Precio: ${producto.precio}`);
      console.log(`Cantidad: ${producto.cantidad}`);
      console.log("----------------------");
    });
  }
}

function buscarProducto() {
  const codigo = prompt("Ingrese el código del producto a buscar:");
  const producto = inventario.find((p) => p.codigo === codigo);

  if (producto) {
    console.log("Producto encontrado:");
    console.log(`Código: ${producto.codigo}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio}`);
    console.log(`Cantidad: ${producto.cantidad}`);
  } else {
    console.log("Producto no encontrado.");
  }
}

menu();