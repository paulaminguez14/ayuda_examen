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

//constructor


    // Método para mostrar los detalles del producto
   // mostrarDetalles() {
        // Completar: Mostrar nombre, precio y cantidad del producto.
   

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

    //constructor(nombreTienda) {
       

    // Método para agregar un producto al inventario
   
    /*
    agregarProducto(producto) {
        // Completar: Si el producto ya existe en el inventario, aumentar la cantidad.
        // Si no, agregarlo como nuevo.
    }

    // Método para eliminar un producto del inventario
    eliminarProducto(nombre) {
        // Completar: Eliminar el producto del inventario por su nombre.
    }

    // Método para mostrar todo el inventario
    mostrarInventario() {
        // Completar: Mostrar todos los productos del inventario en formato de lista.
        // Mostrar el nombre, precio y cantidad.
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


    
   // mostrarInventario() {
       
  //  }

   
  /*************************************
   * Crear algunas pruebas: un par de productos, agregarlos a una 
   * tienda electrónica, mostrar inventario, intentar agregar un
   * producto repetido, eliminar un producto etc. 
   * 
   */

// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    get precio() {
        return this._precio;
    }

    set precio(valor) {
        if (valor < 0) {
            throw new Error("El precio debe ser positivo");
        }
        this._precio = valor;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`);
    }
}

// Clase Tienda
class Tienda {
    constructor(nombreTienda) {
        this.nombreTienda = nombreTienda;
        this.inventario = [];
    }

    agregarProducto(producto) {
        const indice = this.inventario.findIndex(p => p.nombre === producto.nombre);
        if (indice !== -1) {
            this.inventario[indice].cantidad += producto.cantidad;
        } else {
            this.inventario.push(producto);
        }
    }

    eliminarProducto(nombre) {
        const producto = this.inventario.find(producto => producto.nombre === nombre);
        if (producto) {
            producto.cantidad -= 1;
            if (producto.cantidad <= 0) {
            this.inventario = this.inventario.filter(producto => producto.nombre !== nombre);
            }
        }
    }

    mostrarInventario() {
        console.log(`Inventario de ${this.nombreTienda}:`);
        this.inventario.forEach(producto => producto.mostrarDetalles());
    }
}

// Clase TiendaElectrónica que hereda de Tienda
class TiendaElectronica extends Tienda {
    constructor(nombreTienda, direccion, url) {
        super(nombreTienda);
        this.direccion = direccion;
        this.url = url;
    }

    mostrarInventario() {
        console.log(`Inventario de la Tienda Electrónica ${this.nombreTienda} (Dirección: ${this.direccion}, URL: ${this.url}):`);
        super.mostrarInventario();
    }
}

// Pruebas
const producto1 = new Producto("Ordenador", 1000, 5);
const producto2 = new Producto("Telefono", 500, 10);
const producto3 = new Producto("Ordenador", 1000, 3); //Este es el repetido para que no se añada si no que suma cantidad

const tienda = new TiendaElectronica("Tienda Electronica", "Tomares 123", "www.tiendaelectronica.com");

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.mostrarInventario();

tienda.agregarProducto(producto3); // Agrego producto repetido
tienda.mostrarInventario();

tienda.eliminarProducto("Telefono");
tienda.eliminarProducto("Telefono");
tienda.eliminarProducto("Telefono");
tienda.mostrarInventario();//aqui podemos ver que ahora son solo 7 telefonos tras borrar 3. Ya que al principio eran 10
