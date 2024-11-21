// Sistema de Nómina
const empleados = [];
const TASA_IMPUESTOS = 0.15; // 15%
const TASA_DEDUCCIONES = 0.05; // 5%

function menu() {
  let opcion;
  do {
    console.log("\n=== SISTEMA DE NÓMINA ===");
    console.log("1. Agregar Empleado");
    console.log("2. Mostrar Nómina");
    console.log("3. Salir");

    opcion = parseInt(prompt("Seleccione una opción:"));

    switch (opcion) {
      case 1:
        agregarEmpleado();
        break;
      case 2:
        mostrarNomina();
        break;
      case 3:
        console.log("Gracias por usar el sistema.");
        break;
      default:
        console.log("Opción inválida.");
    }
  } while (opcion !== 3);
}

function agregarEmpleado() {
  const nombre = prompt("Ingrese el nombre del empleado:");
  const horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
  const tarifaHora = parseFloat(prompt("Ingrese la tarifa por hora:"));

  const salarioBruto = horasTrabajadas * tarifaHora;
  const salarioNeto =
    salarioBruto - salarioBruto * TASA_IMPUESTOS - salarioBruto * TASA_DEDUCCIONES;

  empleados.push({ nombre, horasTrabajadas, tarifaHora, salarioBruto, salarioNeto });
  console.log("Empleado agregado exitosamente.");
}

function mostrarNomina() {
  if (empleados.length === 0) {
    console.log("No hay empleados registrados en la nómina.");
  } else {
    console.log("\n=== REPORTE DE NÓMINA ===");
    empleados.forEach((empleado, index) => {
      console.log(`Empleado ${index + 1}`);
      console.log(`Nombre: ${empleado.nombre}`);
      console.log(`Horas Trabajadas: ${empleado.horasTrabajadas}`);
      console.log(`Tarifa por Hora: ${empleado.tarifaHora}`);
      console.log(`Salario Bruto: ${empleado.salarioBruto.toFixed(2)}`);
      console.log(`Salario Neto: ${empleado.salarioNeto.toFixed(2)}`);
      console.log("----------------------");
    });
  }
}

menu();