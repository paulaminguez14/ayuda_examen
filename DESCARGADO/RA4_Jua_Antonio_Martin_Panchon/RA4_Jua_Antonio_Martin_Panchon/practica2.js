/*
a) Se trata de implementar una clase llamada Producto, cuyo constructor recibe los parámetros
nombre, precio y marca. Dicha clase tendrá los métodos getters y setters a través de los cuales se
pueden obtener y modificar sus propiedades. Añadir un método información que devuelva
información básica del producto (mostrando nombre, precio y marca).
*/

/*Clase Producto que recibe como parámetro nombre, precio y marca y tiene sus getter y setter
en el setter precio se realiza la comprobación del nuevo precio para que solo deje precios positivos */


class Producto {
    constructor(nombre, precio, marca, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.cantidad = cantidad;
    }
    //get para nombre devuleve "nombre"
    get getNombre() {
        return this.nombre;
    }
    //get para precio devuleve "precio"
    get getPrecio() {
        return this.precio;
    }
    //get para marca devuelve "marca"
    get getMarca() {
        return this.marca;
    }
    //get para camtidad devuelve "cantidad"
    get getCantidad(){
        return this.cantidad
    }

    //Setter nombre que cambia el valor a nombre
    set setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    //set precio que cambia el precio solo si el valor es mayor que 0.
    set setPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
        } else {
            console.log("Por favor, el precio debe ser mayor que 0");
        }
    }
    //set marca cambia el valor a marca
    set setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }

    //set cantidad cambia el valor a cantidad
    set setCantidad(nuevaCantidad){
        if(nuevaCantidad > 0){
            this.cantidad = nuevaCantidad;
        }else{
            console.log("Debes introducir una cantidad positiva");
        }
    }

    //Añadimos un informacion que meustre toda la informacion
    informacion() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Marca: ${this.marca}, Cantidad ${this.cantidad}`);
    }
    //Método aplicar descuento que le hace un 10% de descuento a todos los productos
    aplicarDescuento(){
        this.precio = this.precio * 0.9;
        console.log(`El precio del producto con el descuento aplicado pasa a ser de ${this.precio}`);
    }
    
    //Método estático precioPromedio precio promedio de un array
    static precioPromedio(productos){

        if(productos.length === 0){
            console.log("No hay elementos en el inventario");
        }

        const precioTotal = productos.reduce((acc, producto) => acc + (producto.getPrecio * producto.getCantidad), 0);
        const cantidadTotal = productos.reduce((acc, producto) => acc + producto.getCantidad, 0);
        const precioPromedio = precioTotal / cantidadTotal
        //Con el toFixed(2) hacemos que nos redondee a 2 decimales;
        console.log(`El precio promedio de los productos es ${precioPromedio.toFixed(2)} Es el resultado de dividir ${precioTotal} entre ${cantidadTotal}`);
    }

    //Método contarPorMarca cuenta los productos de una marca hay.
    static contarPorMarca(productos, marcaConcreta){
        if (productos.length === 0){
            console.log ("No hay elementos en el inventario");
        }

        const prodcutosFiltrados = productos.filter(producto => producto.getMarca === marcaConcreta);
        const cantidadProductos = prodcutosFiltrados.length;

        console.log(`Hay ${cantidadProductos} productos de la marca ${marcaConcreta}`);
    }

    // Implementamos el método precioFinalIVA que nos devolverá el precio de un producto ya con su IVA
    precioFinalIVA(){
        this.precio = this.precio * 1.21;
        console.log(`El precio final con IVA del producto ${this.nombre} es de ${this.precio}`);
    }

    //método verificarStock si un producto está por debajo de 5 avisará de reponerlo
    verificarStock(){
        if(this.cantidad < 5){
            console.log(`El stock del producto ${this.nombre} es bajo solo te queda ${this.cantidad}`);
        }else{
            console.log(`El stock del producto ${this.nombre} es suficiente aun te quedan ${this.cantidad}`);
        }
    }

}

/*b) Se va a implementar también una clase llamada Electrodoméstico que hereda de Producto y añade
dos propiedades específicas que son consumoEnergetico (será uno de los siguientes valores: A++,
A+,A,B,C,D,E,F) y garantia. También tendrá sus getters y setters. Hay que sobreescribir el método
información para que incluya la nueva información de un Electrodoméstico.*/

/* Clase Electrodoméstico que hereda de Producto. Tiene 2 propiedades específicas
consumoEnergetico y garantía. getters y setter y sobreescribir informacion para que muestre lo nuevo
*/

class Electrodomestico extends Producto {
    constructor(nombre, precio, marca, cantidad, consumoEnergetico, garantia) {
        super(nombre, precio, marca, cantidad);
        this.consumoEnergetico = consumoEnergetico
        this.garantia = garantia;
    }


    //getter que no heredan del padre
    get getConsumoEnergetico() {
        return this.consumoEnergetico;
    }

    get getGarantia() {
        return this.garantia;
    }
    //setter que no heredan del padre

    set setConsumoEnergetico(NuevoConsumo){
        switch (NuevoConsumo) {
            case "A+":
                this.consumoEnergetico = "A+";
                break;
            case "A":
                this.consumoEnergetico = "A";
                break;
            case "B":
                this.consumoEnergetico = "B";
                break
            case "C":
                this.consumoEnergetico = "C";
                break
            case "D":
                this.consumoEnergetico = "D";
                break
            case "E":
                this.consumoEnergetico = "E";
                break
            case "F":
                this.consumoEnergetico = "F";
                break
            default:
                console.log("Debes introducir un valor correcto para el consumo");
        }
    }

    set setGarantia(nuevaGarantia) {
        this.garantia = nuevaGarantia;
    }

    //Sobreescrivimos el metodo informacion con las dos propiedades nuevas

    informacion() {
        super.informacion();
        console.log(`ConsumoEnergetico: ${this.consumoEnergetico}, Garantia: ${this.garantia}`);
    }

    //aplicarDescuento que aplicará otro 10% a los precios mayores de 600

    aplicarDescuento(){
        super.aplicarDescuento();
        if(this.precio > 600){
            this.precio = this.precio * 0.9;
            console.log(`El precio definitivo por ser mayor de 600 euros es ${this.precio}`);
        }else{
            console.log(`No se aplica otro descuento extra al precio porque es inferior a 600 euros PRECIO FINAL: ${this.precio}`)
        }
    }
    
}



/*
c) Se va a implementar también una clase llamada EquipoInformatica que hereda de Producto y añade
las propiedades Procesador y MemoriaRam. También tendrá sus getters y setters y el método de
información sobreescrito.
*/

/* Clase EquipoInformatica que hereda de Producto. Tiene 2 propiedades específicas
Procesador y MemoriaRam. getters y setter y sobreescribir informacion para que muestre lo nuevo
*/


class EquipoInformatica extends Producto {
    constructor(nombre, precio, marca, cantidad, procesador, memoriaRam) {
        super(nombre, precio, marca, cantidad);
        this.procesador = procesador
        this.memoriaRam = memoriaRam;
    }


    //getter que no heredan del padre
    get getProcesador() {
        return this.procesador;
    }

    get getMemoriaRam() {
        return this.memoriaRam;
    }

    //setter que no heredan del padre

    set setProcesador(nuevoProcesador){
        this.procesador = nuevoProcesador;
    } 

    set setMemoriaRam(nuevaMemoriaRam) {
        this.memoriaRam = nuevaMemoriaRam;
    }

    //Sobreescrivimos el metodo informacion con las dos propiedades nuevas
    informacion() {
        super.informacion();
        console.log(`${this.procesador}, MemoriaRam: ${this.memoriaRam}`);
    }

    // marca Dell tienen 5% adicional el resto nada

    aplicarDescuento(){
        super.aplicarDescuento();
        if(this.marca == "Dell"){
            this.precio = this.precio * 0.95;
            console.log(`El precio del producto con el 5% extra por ser marca Dell es de ${this.precio}`);
        }else{
            console.log(`El producto no tiene descuento extra por NO ser marca Dell, PRECIO FINAL: ${this.precio}`);
        }
    }
}

/*
d) También se creará una clase Inventario que se encargará de gestionar una colección de productos 
(de distintos tipos). Dicha clase tendrá los siguientes métodos: 
d1) agregarProducto(producto) 
d2) eliminarProducto(nombre) 
d3) buscarProducto(nombre) 
d4) mostrarProductos() 
*/


/*
Clase Inventario gestiona colección de productos. Métodos:
d1) agregarProducto(producto) 
d2) eliminarProducto(nombre) 
d3) buscarProducto(nombre) 
d4) mostrarProductos() 
*/

class Inventario {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`Producto ${producto.getNombre} agregado al inventario.`);
    }

    // Método para eliminar un producto por nombre
    eliminarProducto(nombre) {
        const index = this.productos.findIndex(producto => producto.getNombre === nombre);
        if (index !== -1) {
            this.productos.splice(index, 1);
            console.log(`Producto ${nombre} eliminado del inventario.`);
        } else {
            console.log(`No se puede eliminar el Producto ${nombre} porque no se encuentra en el inventario.`);
        }
    }

    // Método para buscar un producto por nombre
    buscarProducto(nombre) {
        const producto = this.productos.find(producto => producto.getNombre === nombre);
        if (producto) {
            console.log(`Producto encontrado:`);
            producto.informacion();
        } else {
            console.log(`Producto ${nombre} no encontrado en el inventario.`);
        }
    }

    // Método para mostrar todos los productos en el inventario
    mostrarProductos() {
        if (this.productos.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Productos en el inventario:");
            this.productos.forEach(producto => producto.informacion());
        }
    }

    //Añadimos método que calcula el valor total de los productos.
    calcularPrecioTotal() {
        /*El método reduce itera sobre el array y acumula el valor
        siendo acc el acumulador y producto el elemento actual que recorre
        la flecha indica el código a ejecutar al llamar a la función.
        En este caso el acumulador + la multiplicacion de precio por cantidad. El 0 final es el valor que tiene el acc al inicio*/
        const total = this.productos.reduce((acc, producto) => acc + (producto.getPrecio * producto.getCantidad), 0);
        console.log(`El valor total de los productos en el inventario es: ${total}`);
        return total;
    }

     // Método que aplica un descuento automático en los últimos 3 días del mes
     descuentoAutomatico() {
        // Fecha actual
        const fechaActual = new Date();

        // Obtener el día actual
        const diaActual = fechaActual.getDate();

        // Obtener el último día del mes
        const ultimoDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();

        // Verificar si estamos en los últimos 3 días del mes
        if (diaActual > (ultimoDiaDelMes - 3)) {
            console.log("¡Descuento automático aplicado a todos los productos!");

            // Aplicar un descuento del 10% a todos los productos del inventario
            this.productos.forEach(producto => {
                producto.precio = producto.getPrecio * 0.9; // Aplica el 10% de descuento
                console.log(`Producto ${producto.getNombre} tiene un nuevo precio de ${producto.getPrecio} con descuento.`);
            });
        } else {
            console.log("No estamos en los últimos 3 días del mes, no se aplica descuento.");
        }
    }

    // Método para verificar la fecha ficticia (para pruebas)
    verificarFechaFicticia(fechaFicticia) {
        const diaFicticio = fechaFicticia.getDate();
        const ultimoDiaDelMesFicticio = new Date(fechaFicticia.getFullYear(), fechaFicticia.getMonth() + 1, 0).getDate();

        console.log(`Fecha ficticia: ${fechaFicticia.toLocaleDateString()}`);

        if (diaFicticio > (ultimoDiaDelMesFicticio - 3)) {
            console.log("¡Descuento automático aplicado a todos los productos!");
            // Aplicar un descuento del 10% a todos los productos del inventario
            this.productos.forEach(producto => {
                producto.precio = producto.getPrecio * 0.9;
                console.log(`Producto ${producto.getNombre} tiene un nuevo precio de ${producto.getPrecio} tras el descuento.`);
            });
        } else {
            console.log("No estamos en los últimos 3 días del mes, no se aplica descuento.");
        }
    }
}   




module.exports = { Producto, Electrodomestico, EquipoInformatica, Inventario };
/*METODO DESCUENTOAUTOMATICO()
QUE LO HAGA CON LA FECHA ACTUAL
PERO TAMBIEN CREAR UNA FECHA FICTICIA PARA COMPROBAR QUE SE APLICA
APLICAR UN DESCUENTO A TODOS LOS PRODUCTOS DEL INVENTARIO
DE FORMA AUTOMATICA SI ESTAMOS EN LOS 3 ULTIMOS DIAS DEL MES*/

//Metodos implementados el precioFinalIVA y verificarStock