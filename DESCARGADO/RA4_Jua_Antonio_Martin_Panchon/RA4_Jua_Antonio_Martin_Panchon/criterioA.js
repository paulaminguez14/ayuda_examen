/*
REALIZAREMOS LOS EJEMPLOS DE LAS FUNCIONES:
    1.isNaN() 
    2.isFinite()
    3.encodeURI()()
    4.eval()
    5.Number()
    6.parseInt()
*/

//1. isNan() te devuelve true si no es un nº. //
console.log("PRUEBA DE LA FUNCION isNaN()");
//Dará false porque es un nº
console.log(isNaN(250));
//Dará true
console.log(isNaN("Como estas"));


//2.isFinite() devuelve true si es un valor finito.
console.log("PRUEBA DE LA FUNCION isFinite()");
//Dará true porque es un nº finito
console.log(isFinite(22250));
//Dará false porque no es un nº por lo tanto no es finito
console.log(isFinite("Este es false"));
//Dará false porque es el primer nº al que dice que es infinito
console.log(isFinite(1.7976931348623159e+308));
//Dará true porque es un nº menos del primer nº que es infinito.
console.log(isFinite(1.7976931348623158e+308));

/*3.encodeURI() ()
Codifica solo los caracteres que no son válidos en una URL en su conjunto, como espacios ( ), 
caracteres de puntuación que no forman parte de la estructura de la URL, y otros caracteres especiales.*/
console.log("PRUEBA DE LA FUNCION encodeURI()");
let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
console.log(encoded);

//4.eval() si es una expresión te evalua la expresión. No usar, realizar la expresión directamente.
console.log("PRUEBA DE LA FUNCION eval()");
let a = 15;
let b = 3;
let texto = "a / b";
//lo ideal
let res = a / b;
//muestra el resultado de la division (5)
console.log(eval(texto));
console.log(eval(res));

//5.Number() pasa un valor a nº, te devuelve NaN si no se puede cambiar.
console.log("PRUEBA DE LA FUNCION Number()");
//te devuelve el numero 12345
console.log(Number("12345"));
//te devuelve NaN porque no lo puede pasar a nº
console.log(Number("Hola"));
//Te devuelve 1 que es el valor de true
console.log(Number(true));
//Te devuelve 0 que es el valor de false
console.log(Number(false));

//6.parseInt() pasa de string a Int mostrando el primer Integer devuelve NaN si primero detecta algo que no pueda pasar a nº
console.log("PRUEBA DE LA FUNCION parseInt()");
//dará 10 todos los resultados menos el ultimo que dará NaN porque detecta primero texto.
console.log(parseInt("10"));
console.log(parseInt("10.50"));
console.log(parseInt(" 10 "));
console.log(parseInt("   10"));
console.log(parseInt("   10 esta parte la ignora"));
console.log(parseInt("aqui da NaN porque encuentra primero el texto10"));

