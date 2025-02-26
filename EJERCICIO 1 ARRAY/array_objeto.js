// Clase principal
/*INSTRUCCIONES 

Objetivo:
Construir una aplicación que gestione productos de una tienda electrónica. 
La aplicación debe utilizar clases, arrays, objetos, getters y setters. Además, 
se utilizarán herencias para extender una clase base y modificar algunos métodos 
de la clase hija.


Instrucciones:
Crea las clases Producto y Tienda. Define las propiedades y métodos necesarios.
Crea la clase TiendaElectrónica que herede de Tienda y sobrescriba el método 
mostrarInventario.
Implementa la lógica para agregar productos, eliminar productos, y mostrar el inventario.
Asegúrate de validar correctamente los datos a la hora de agregar productos.
Los productos deben mostrarse en un formato adecuado en la consola cuando se invoque 
el método mostrarInventario.

*/
/***************************************************
Producto: 
Cada producto tiene las siguientes propiedades:
nombre (String): El nombre del producto.
precio (Number): El precio del producto.
cantidad (Number): La cantidad disponible de ese producto.

Métodos:
Método getter y setter para la propiedad precio. No se permitirá un precio negativo.
Producto: El producto debe tener un método para mostrar los detalles del producto.
*****************************************************/
// Clase Producto
class Producto {

    //constructor
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre;
        this._precio = precio > 0 ? precio : 0;
        this._cantidad = cantidad;
    }

    // Getters y Setters
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }

    get cantidad() {
        return this._cantidad;
    }

    // Método para mostrar los detalles del producto
    // mostrarDetalles() {
        // Completar: Mostrar nombre, precio y cantidad del producto.
    mostrarDetalles() {
        console.log(`Producto: ${this._nombre}, Precio: ${this._precio} euros, Cantidad: ${this._cantidad}`);
    }
}


   

/**************************************************************
 * Tienda
  La tienda tendrá las siguientes propiedades
Un nombre (nombreTienda).
Un inventario (inventario), que será un array bidimensional, donde cada fila 
representará un producto on su nombre, precio y la cantidad disponible en inventario.
 
La tienda tendrá los siguientes métodos:
Agregar producto: Método para agregar un nuevo producto al inventario.
Eliminar producto: Método para eliminar un producto del inventario.
Mostrar inventario: Método para mostrar todo el inventario de la tienda en
 forma de lista, indicando el nombre, precio y cantidad de cada producto.

 Validaciones:
Los productos deben tener un nombre que no sea vacío y un precio mayor que cero.
Al agregar un producto, si ya existe, se debe aumentar la cantidad disponible de
 ese producto, no agregarlo nuevamente.

*************/

// Clase Tienda
class Tienda {
     //constructor(nombreTienda) {
    constructor(nombreTienda) {
        this.nombreTienda = nombreTienda;
        this.inventario = [];
    }

     // Método para agregar un producto al inventario
    agregarProducto(producto) {
        // Completar: Si el producto ya existe en el inventario, aumentar la cantidad.
        // Si no, agregarlo como nuevo.
        if (!producto.nombre || producto.precio <= 0) {
            console.log("Error: Nombre del producto vacio o precio invalido.");
            return;
        }
        
        let existente = this.inventario.find(p => p.nombre === producto.nombre);
        if (existente) {
            existente._cantidad += producto.cantidad;
        } else {
            this.inventario.push(producto);
        }
    }

    // Método para eliminar un producto del inventario
    eliminarProducto(nombre) {
        // Completar: Eliminar el producto del inventario por su nombre.
        this.inventario = this.inventario.filter(producto => producto.nombre !== nombre);
    }

    // Método para mostrar todo el inventario
    mostrarInventario() {
         // Completar: Mostrar todos los productos del inventario en formato de lista.
        // Mostrar el nombre, precio y cantidad.
        console.log(`Inventario de ${this.nombreTienda}:`);
        this.inventario.forEach(producto => producto.mostrarDetalles());
    }
}

   
       


   
   
  

/******************
 * La clase TiendaElectrónica debe heredar de la clase Tienda. 
 * Esta clase añade las propiedades dirección y url.
 * 
 * Crear también el método mostrarinventario de forma adecuada
 * 
 * 
 ******************************************/
// Clase TiendaElectrónica que hereda de Tienda
class TiendaElectronica extends Tienda {
    constructor(nombreTienda, direccion, url) {
        super(nombreTienda);
        this.direccion = direccion;
        this.url = url;
    }

    
    mostrarInventario() {
        console.log(`Inventario de ${this.nombreTienda} (Direccion: ${this.direccion}, URL: ${this.url}):`);
        this.inventario.forEach(producto => producto.mostrarDetalles());
    }
}


   
  /*************************************
   * Crear algunas pruebas: un par de productos, agregarlos a una 
   * tienda electrónica, mostrar inventario, intentar agregar un
   * producto repetido, eliminar un producto etc. 
   * 
   */

  console.log("\nCrear algunas pruebas: un par de productos, agregarlos a una \
    tienda electrónica, mostrar inventario, intentar agregar un\
    producto repetido, eliminar un producto etc.");
   
   let tienda = new TiendaElectronica("Tienda electrónica", "Calle prueba 1", "www.tiendaelectronica.com");
   let producto1 = new Producto("Pc", 1200, 5);
   let producto2 = new Producto("raton", 25, 10);
   let producto3 = new Producto("Teclado", 45, 7);
   
   // Agregar productos
   console.log("\nAgregando productos...");
   tienda.agregarProducto(producto1);
   tienda.agregarProducto(producto2);
   tienda.agregarProducto(producto3);
   
   // Mostrar inventario
   console.log("\nMostrando inventario...");
   tienda.mostrarInventario();
   
   // Intentar agregar un producto repetido
   console.log("\nAgregando mas unidades del producto existente (Raton)...");
   tienda.agregarProducto(new Producto("Raton", 25, 5));
   tienda.mostrarInventario();
   
   // Eliminar un producto
   console.log("\nEliminando el producto Pc...");
   tienda.eliminarProducto("Pc");
   tienda.mostrarInventario();