
//Aquí realizaremos las instacias de todas las clases


//Instanciamos CLASE PRODUCTO

const { Producto, Electrodomestico, EquipoInformatica, Inventario } = require('./practica2');
//Si creamos un producto sin nombre, precio, marca y cantidad, se devuelve undefined.
let producto2= new Producto ("Congelador");
producto2.informacion();

let producto1 = new Producto ("Nevera", 100, "LG", 8);
//Probamos los getter de producto
console.log(producto1.getNombre);
console.log(producto1.getPrecio);
console.log(producto1.getMarca);
console.log(producto1.getCantidad);

producto1.informacion();
//probamos los setter de producto 
producto1.setNombre = "Congelador";
producto1.setPrecio = 150;
producto1.setMarca = "Samsung";
producto1.setCantidad = 10
//llamamos a informacion para probar el metodo informacion y ver los cambios en los setter
producto1.informacion();

//Valor no válido para el precio y cantidad
producto1.setPrecio = -35;
producto1.setCantidad = -2;

//Comprobamos el metodo aplicarDescuento
producto1.aplicarDescuento();


//ISNTANCIA CLASE ELECTRODOMESTICO

//Instanciamos la clase Electrodomestico
let electrodomestico1 = new Electrodomestico ("Secador", 120, "Balay", 9, "A+", 3);
//Probamos los getter de Electrodomestico incluidos los del padre
console.log(electrodomestico1.getNombre);
console.log(electrodomestico1.getPrecio);
console.log(electrodomestico1.getMarca);
console.log(electrodomestico1.getCantidad);
console.log(electrodomestico1.getConsumoEnergetico);
console.log(electrodomestico1.getGarantia);

//Mostramos con la informacion
electrodomestico1.informacion();
//probamos los setter de Electrodomestico incluidos los del padre
electrodomestico1.setNombre = "Congelador";
electrodomestico1.setPrecio = 900;
electrodomestico1.setMarca = "Samsung";
electrodomestico1.setCantidad = 12;
electrodomestico1.setConsumoEnergetico = "C";
electrodomestico1.setGarantia = 2;
//llamamos a informacion para probar el metodo informacion y ver los cambios en los setter
electrodomestico1.informacion();

//Valor no válido para el consumo
electrodomestico1.setConsumoEnergetico = "R";

//Comprobamos el aplicarDescuento
electrodomestico1.aplicarDescuento();

//Comprobamos el aplicarDescuento a un precio inferior 600
electrodomestico1.setPrecio = 100;
electrodomestico1.aplicarDescuento();

//ISNTANCIA CLASE EQUIPOINFORMATICA

//Instanciamos la clase EquipoInformatica
let equipo1 = new EquipoInformatica ("Ordenador", 1250, "ASUS", 16, "Intel i5", "10GB");
//Probamos los getter de Electrodomestico incluidos los del padre
console.log(equipo1.getNombre);
console.log(equipo1.getPrecio);
console.log(equipo1.getMarca);
console.log(equipo1.getCantidad);
console.log(equipo1.getProcesador);
console.log(equipo1.getMemoriaRam);
//Mostramos con la informacion
equipo1.informacion();
//probamos los setter de Electrodomestico incluidos los del padre
equipo1.setNombre = "Portatil";
equipo1.setPrecio = 1500;
equipo1.setMarca = "HP";
equipo1.setCantidad = 2;
equipo1.setProcesador = "Intel i3";
equipo1.setMemoriaRam = "8GB";
//llamamos a informacion para probar el metodo informacion y ver los cambios en los setter
equipo1.informacion();
//Comprobamos que aplicarDescuento funciona con marca Dell y sin marca Dell
equipo1.aplicarDescuento();
//Ponemos otra vez el precio de 1500 para ver si le aplica el 5% extra
equipo1.setPrecio = 1500;
equipo1.setMarca = "Dell";
equipo1.aplicarDescuento();


//INSTACIA CLASE INVENTARIO

let inventario1 = new Inventario();
//comprobamos que el inventario está vacío
inventario1.mostrarProductos();
//agregamos producto
inventario1.agregarProducto(electrodomestico1);
//mostramos
inventario1.mostrarProductos();
//mostramos el precio total
inventario1.calcularPrecioTotal();
//agregamos otros
inventario1.agregarProducto(equipo1);
//mostramos todos los productos (habrán 2)
inventario1.mostrarProductos();
//Comprobamos el valor total de los productos
inventario1.calcularPrecioTotal();
//Comprobar el precioPromedio de los productos
Producto.precioPromedio(inventario1.productos);
//Probamos el contarPorMarca con un producto que sí está
Producto.contarPorMarca(inventario1.productos, "Samsung");
//Probamos a crear otro producto Samsung y probamos a contar de nuevo
let electrodomestico2 = new Electrodomestico ("Nevera", 120, "Samsung", 6, "A", 1);
inventario1.agregarProducto(electrodomestico2);
Producto.contarPorMarca(inventario1.productos, "Samsung")
//Una marca que no esté
Producto.contarPorMarca(inventario1.productos, "Huawei");
//eliminamos
inventario1.eliminarProducto("Portatil");
//vemos que se ha eliminado
inventario1.mostrarProductos();
//eliminamos alguno que no esté en el inventario
inventario1.eliminarProducto("Paraguas");
//buscamos uno que no esté
inventario1.buscarProducto("Secadora");
//Buscamos uno que sí esté
inventario1.buscarProducto("Congelador");

//PROBAMOS EL Método de precioFinalIVA
console.log(producto1.getPrecio);
producto1.precioFinalIVA();
//PROBAMOS EL Método verificarStock con una cantidad menor de 5
producto1.verificarStock()
//PROBAMOS EL Método verificarStock con una cantidad mayor de 5

producto1.setCantidad = 1;
producto1.verificarStock();
inventario1.mostrarProductos();
inventario1.eliminarProducto("Nevera");
inventario1.eliminarProducto("Congelador");

inventario1.mostrarProductos();



/*Añadimos productos al inventario para probar 
el descuento automático  además creamos una fecha
ficcticia para hacer pasar por final de mes*/
console.log("COMPROBACION DEL DESCUENTO POR FECHA")
//aqui vemos  el precio antes del descuento
console.log(electrodomestico1.getPrecio);
const fechaFicticia = new Date('2024-11-29');  // Cambiar la fecha para probar

// añadimos productos al inventario
inventario1.agregarProducto(electrodomestico1);
inventario1.agregarProducto(electrodomestico2);


// Aplicar descuento automáticamente si estamos en los últimos 3 días del mes
inventario1.descuentoAutomatico();

// PROBAMOS QUE CON LA FECHA FICCTICIA SI REALIZA EL DESCUENTO
inventario1.verificarFechaFicticia(fechaFicticia);

