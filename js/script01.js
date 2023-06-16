//Variables
const producto = 'Monitor 20 pulgadas'
const precio = ' 30 USD'
const espacios = '                      mucho espacio                '

//Metodos
console.log("****************METODOS*************")

//1) Podemos enviar mensajes por consola
console.log("--------' console.log() '----------")
console.log(producto)

//2) Nos sirve para saber la cantidad de caracteres
console.log("---------' .length '--------------")
console.log(producto.length)

//3) Nos sirve para saber donde (entrega un numeral) se encuentra una palabra
//Entrega -1 si no encuentra la palabra y es sensible a mayusculas
console.log("--------' .indexOf('Palabra que quieres encontrar') '----------")
console.log(producto.indexOf('Monitor'))

//4) Nos servirá para saber si existe o no una palabra en el string
//Devuelve un booleano y es sensible a mayusculas
console.log("--------' .include() '----------")
console.log(producto.includes('Monitor'))


//Concatenar Strings y Template Strings
console.log("****************CONCATENAR Y TEMPLATE*************")

//1) Nos servirá para concatenar
console.log("--------' .concat(variable 'o frase que quieras concatenar') '----------")
console.log(producto.concat(precio))
console.log(producto.concat(' En Descuento'))

//Existen varias formas de concatenar, podemos usar el signo '+' o ",".
//2) Para concatenar texto
console.log(producto + "tiene un precio de: " + precio)
console.log(producto, 'tiene un precio de: ', precio)


//En ECMA se implementó una nueva forma de concatenar con Template Strings o Template Literals
//3) Nueva forma de concatenar
 console.log(`El producto ${producto} tiene un precio de $${precio}`);

 
//Cortar Espacios en blanco en un string.
//Esto nos servirá para evitar errores en usuarios o correos con los espacios que sobren.
//1)Para cortar los espacios del inicio
console.log(espacios.trimStart());

//2)Cortar los espacios del final
console.log(espacios.trimEnd())

//3)Cortar espacios de ambos extremos podemos sumar ambos metodos o usar .trim()
console.log(espacios.trimStart().trimEnd())
//o
console.log(espacios.trim())


//Metodos String - Replace, Slice y Substring
//1) Replace es un metodo que nos sirve para reemplazar una parte del string por otra o un string completo por otro.
console.log(producto.replace('pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))

//2) Slice nos sirve para cortar un string, devuelve el rango que decidimos cortar.
console.log(producto.slice(0, 10))
//Cortará desde la posició 0 a la 10 y lo devolverá.
//si solo le entregas una posición, cortará desde ahí hasta el final y lo devolverá.
console.log(producto.slice(8))
//Si se le entrega una primera posición mayor primero y una menor luego, no corta hacía atras. No devuelve nada.

//3) Substring es una alternativa a Slice.
//Con parametros normales, funciona igual que slice.
console.log(producto.substring(0,10))
//con parametros mayor - menor dará vuelta los datos para entregarte algo con sentido
console.log(producto.substring(10,0))
//sería lo mismo que 0,10

//4)charAt para cortar especificamente un caracter
console.log(producto.charAt(0))
//Esto devuelve solo la 'M'

//REPEAT Y SPLIT
//1) repeat() repite según variable asignada. Si se le entrega un float, Js lo redondea.
console.log(producto.repeat(4))

//2)Split para dividir strings por la variable asignada
console.log(producto.split(" "))
//Creará un array que contendrá cada palabra.


//toUpperCase() y toLowerCase() Para modificar un String todo a mayuscula y todo minuscula.
console.log(producto.toLocaleLowerCase())
console.log(producto.toUpperCase())

//toString() convierte un número en un String.
let numero = 1000;
console.log(numero)
console.log(numero.toString())