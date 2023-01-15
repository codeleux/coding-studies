<h1 align="center">
<br>
  <a href="https://github.com/codeleux/platzi-studies"><img src="https://i.imgur.com/dsHmk6H.jpg" alt="33 Concepts Every JS Developer Should Know" width=200" /></a>
  <br>
    <br>
  33 Conceptos que todo desarrollador de JavaScript debe saber
  <br><br>
</h1>

## Introducción
Este documento hace referencia a el repositorio de [leonardomso](https://github.com/leonardomso) ([33 Concepts Every JavaScript Developer Should Know](https://github.com/leonardomso/33-js-concepts)), por lo que en vez de mostrar links y referencias, explicaré cada tematica con mis propias palabras.

---

## Tabla de contenido

1. **[Call Stack](#1-call-stack)**
2. **[Primitive Types](#2-primitive-types)**
3. **[Value Types and Reference Types](#3-value-types-and-reference-types)**
4. **[Implicit, Explicit, Nominal, Structuring and Duck Typing](#4-implicit-explicit-nominal-structuring-and-duck-typing)**
5. **[== vs === vs typeof](#5--vs--vs-typeof)**
6. **[Function Scope, Block Scope and Lexical Scope](#6-function-scope-block-scope-and-lexical-scope)**
7. **[Expression vs Statement](#7-expression-vs-statement)**
8. **[IIFE, Modules and Namespaces](#8-iife-modules-and-namespaces)**
9. **[Message Queue and Event Loop](#9-message-queue-and-event-loop)**
10. **[setTimeout, setInterval and requestAnimationFrame](#10-settimeout-setinterval-and-requestanimationframe)**
11. **[JavaScript Engines](#11-javascript-engines)**
12. **[Bitwise Operators, Type Arrays and Array Buffers](#12-bitwise-operators-type-arrays-and-array-buffers)**
13. **[DOM and Layout Trees](#13-dom-and-layout-trees)**
14. **[Factories and Classes](#14-factories-and-classes)**
15. **[this, call, apply and bind](#15-this-call-apply-and-bind)**
16. **[new, Constructor, instanceof and Instances](#16-new-constructor-instanceof-and-instances)**
17. **[Prototype Inheritance and Prototype Chain](#17-prototype-inheritance-and-prototype-chain)**
18. **[Object.create and Object.assign](#18-objectcreate-and-objectassign)**
19. **[map, reduce, filter](#19-map-reduce-filter)**
20. **[Pure Functions, Side Effects, State Mutation and Event Propagation](#20-pure-functions-side-effects-state-mutation-and-event-propagation)**
21. **[Closures](#21-closures)**
22. **[High Order Functions](#22-high-order-functions)**
23. **[Recursion](#23-recursion)**
24. **[Collections and Generators](#24-collections-and-generators)**
25. **[Promises](#25-promises)**
26. **[async/await](#26-asyncawait)**
27. **[Data Structures](#27-data-structures)**
28. **[Expensive Operation and Big O Notation](#28-expensive-operation-and-big-o-notation)**
29. **[Algorithms](#29-algorithms)**
30. **[Inheritance, Polymorphism and Code Reuse](#30-inheritance-polymorphism-and-code-reuse)**
31. **[Design Patterns](#31-design-patterns)**
32. **[Partial Applications, Currying, Compose and Pipe](#32-partial-applications-currying-compose-and-pipe)**
33. **[Clean Code](#33-clean-code)**

---

## 1. Call Stack

El Call Stack se basa en un concepto basico de JavaScript, este lenguaje es 'Single-Threaded', osea que no puede ejecutar 2 cosas al mismo tiempo, siempre siguen un hilo de ejecución, por lo que JavaScript tiene que manejar todo de una manera, cierto?
<br><br>

> ### ¿Que es el Call Stack?

Una pila de llamadas es un mecanismo para que un intérprete (como el intérprete de JavaScript en un navegador web) realice un seguimiento de en que lugar se llama a múltiples funciones, qué función se esta ejecutando actualmente y qué funciones son llamadas desde esa función, etc. -MDN web docs

El Call Stack es un mecanismo que tiene como objetivo el permitir a un intérprete (Node, V8, Bun), realizar el seguimiento de en donde se llaman las funciones, que función en especifico se esta llamando, y que funciones se llaman desde funciones (muchas funciones 😔), etc.

- Cuando el documento llama a la función, el interprete (cuaquiera), lo añade al Call Stack, y luego empieza a ejecutar las funciones.
- Cualquier función que sea llamada por la funciones que estan en el Call Stack serán añadidas a el mismo, arriba de la pila, y serán ejecutadas cuando les toque su turno xd
- Cuando una función termina es eliminada de la pila, y se ejecuta la siguiente.
- Si la pila necesita más espacio del que se le asignó, se producirá un error de "desbordamiento de pila". -MDN Web Docs

###### ejemplo de como funciona el call stack ;)
<img src='https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack.png'>

<br>

---
## 2. Primitive Types

Los datos primitivos, son aquellos que no son objetos (ya que en JavaScript casi todo es un objeto o una función), y que tampoco tienen metodos, en total hay 7 tipos de datos primitivos, los cuales son:

- String
- Number
- bigInt
- Boolean
- undefined
- null
- Symbol

<br>

> ### String

En la gran mayoria de lenguajes de programación, string es una secuencia de caracteres para representar el texto.

En JavaScript es uno de los valores primitivos, representa el texto y (casi) siempre contiene algún caracter unicode encerrado en alguna comilla ('', "", ``)

Ejemplo: 
```js
'Esto es un string'
"Esto tambien es un string"
`Este tipo de string se usa para una cosita especial ;)`
```

<br>

> ### Number

Este tipo de dato es de tipo numerico (obviamente), pero a diferencia del string no hay que colocar nada especial para especificar implicitamente este tipo de dato, solo es necesario colocar el numero en cuestión, el unico inconveniente es que tiene un limite (el famosisimo limite de 32-bits) el cual es 2.147'483.647

Ejemplo: 
```js
9 
21004   // Todos son valores de tipo number validos.
2147483647
```

<br>

> ### Boolean

Un booleano en la indole de ciencias de la informatica es un dato logico que solo tiene 2 valores, true y false.

Ejemplo:
```js
true 
false
```

<br>

> ### bigInt

Este es otro tipo de dato numerico, tal y como number, pero este no cuenta con el limite de 32-bits

Si en algun momento te preguntas si estos 2 se pueden combinar, te lo respondo:

Para mantener el codigo organizado no se recomienda hacer operaciones combinadas con los valores number y bigInt, ya que fiarse de la coerción en JavaScript, ya que eso conduce a tener un codigo 'ilegible' en mayor medida.

bigInt solo se recomienda usar con valores mayores a 2^53

<br>

> ### Symbol

Los Symbol se utilizan a menudo para añadir las claves de propiedades unicas a un objeto, estas no serán iguales a ningun otro codigo que se le pueda añadir al objeto, y están ocultas de la mayoria de mecanismos integrados del sistema.

<br>

> ### undefined

Este es un valor primitivo que se le asigna automaticamente a variables, arrays, etc, que fueron declaradas sin valor alguno (o que lo perdió en el codigo) o de argumentos generados que no existen en el codigo.

Ejemplo:
```js
let undefinedValue
    // Como no se inicializó la variable, esta no tiene valor, por lo que:
console.log(undefinedValue)     // undefined
```

<br>

> ### Null

El valor de null representa la ausencia de cualquier objeto, pero este no es como undefined, ya que define la ausencia explicita, no una falta de datos.

Un dato curioso de null es que si usas typeOf en null, te devuelve la respuesta object, esto es un bug de JavaScript que no fue intencional, pero que realmente no se puede cambiar asi como asi, ya que un cambio de comportamiento de ese estilo en JavaScript, rompería codigo antiguo.

Ejemmplo:
```js
const nullValue = null
    // Se define explicitamente
typeOf null     // Object
```

<br>

### Ejemplo final

```js
const everyPrimitiveTypeInOneObject = {
  string: 'Hola Mundo!',
  number: 32478,
  boolean: true,
  bigInt: BigInt(2139),    // JavaScript nunca declara un bigInt de manera implicita.
  symbol: Symbol(),
  undefined: undefined,
  null: null
}
```
<br>

---

## 3. Value Types and Reference Types

En JavaScript hay 2 tipos de valores, los de valor y los de referencia.

Los de valor son variables que solo contienen datos primitivos, y por consecuente no es necesario darle mucha importancia con respecto a la memoria en la que es guardada.

Por otro lado los de referencia son variables que contienen objetos, funciones e incluso arrays, y estos son guardados en la memoria con un valor de referencia, este valor es como un codigo que nos lleva a una parte de la memoria que está reservada unicamente para la variable.

<br>

> ### Value Types

Los value types, al ser referenciados en una variable distinta no se copia la referencia, se copia su valor.

Vamos a empezar con un ejemplo sencillo:

```js
let value1 = 10
const value2 = value1    // 10

value1 = 20
// value2 === 10
```

Aqui podemos ver que se declaran 2 variables, value1 es igual a 10, y value2 que es igual a value1.

Por logica podemos intuir que value2 es igual a 10, pero ¿Que pasaría si le cambiamos el valor a value1?, en una respuesta corta, value2 no se actualiza en caso de que value1 lo haga, ya que al solo contener un dato primitivo, value2 copia el dato, si todavia es complicado de ententer, voy a explicar el codigo anterior paso por paso:

```js
let value1 = 10
// Se crea una variable con un dato primitivo por dentro.

const value2 = value1
// Se crea otra variable que copia el contenido de value1

value1 = 20
// Se le re-asigna un valor a value1

console.log(value2)    // da 10, ya que se copió el contenido y no la referencia (explicada despues).
```

<br>

> ### Reference Types

Los reference types, al ser referenciados (valga la redundancia) en una variable distinta, no se copia su contenido, sino que el codigo de referencia es pasado a la variable, por lo que si el valor original cambia, todos las variables que tengan sus datos lo harán tambien.

Como expliqué antes, las referencias solo afectan a objetos, funciones y arrays, por lo que lo voy intentar explicar de manera similar al anterior:

```js
const obj1 = { value: 1 }
const obj2 = obj1    // value: 1

obj1.value++    // obj1.value === 2

console.log(obj2.value)    // 2
```

Aqui vemos que se declaran 2 variables, pero estas contienen objetos, no valores primitivos, y ocurre una cosa muchisimo mas diferente en el codigo con respecto al anterior, en primer plano vemos que se inicializa una variable (obj1) con un elemento value que es igual a 1, y obj2 se inicializa copiando la referencia a obj1, por lo que son exactamente iguales.

En otra parte del codigo se le suma 1 a `obj1.value`, y luego imprimimos a la consola el value de obj2, y apreciamos que es el mismo valor que tiene el obj1.

Si sigue siendo dificil de ententer voy a explicar el codigo paso a paso:

```js
const obj1 = { value: 1 }
// Se inicializa la variable con un elemento value, que es igual a 1

const obj2 = obj1
// Se inicializa la variable con una referencia a obj1

obj1.value++
// Se suma 1 a obj1.value, por lo que ahora es igual a 2

console.log(obj2.value)    // 2
// El elemento value de obj2 se actualizó a el de obj1
```
<br>

---
## 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

> ### Implicit and Explicit

Estos 2 teas son muy importantes en JavaScript, ya que este al ser un lenguaje de tipado debil, nunca se siente demasiado presente en nuestro pensamiento durante el codigo.

Implicito es como llamamos a nuestro codigo al que se le otorgó un tipo sin ser declarado como tal en el codigo, como por ejemplo cuando inicializamos una variable con un string, realmente nunca le decimos que es un string, pero el motor lo reconoce como tal, y lo declara por nosotros.

Ejemplo:

```js
const implicitString = 'Este string fue valorizado implicitamente'

const implicitBoolean = true
```

<br>

En cambio lo explicito se refiere a declarar que un valor es de el tipo que es referenciado en el codigo.

Ejemplo: 

```js
const explicitString = String(true)

console.log(explicitString) // 'true'
```

Claramente existen muchas maneras de declarar un tipo como explicito, incluso hay para la mayoria de valores primitivos:
- El operador + y el constructor Number() pueden ser usados para convertir otros datos en numeros.
```js
const plusOperator = +'20'  // 20
const numberConstructor = Number('99')
```
- Los operadores ! y !! son usados para representar explicitamente que un valor es `true` o `false`.
```js
const negativeOperator = !'Cualquier valor' // false
const positiveOperator = !!'Cualquier valor x2' // true
```

<br>

> ### Sistema de Tipos

Antes de venir a explicar los diferentes tipos, deberiamos tener un leve conocimiento sobre ¿Que son los tipos?.

Primero deberiamos intentar entender que es un tipo, lo cual voy a intentar explicar de manera rapida:

Los tipos pueden ser una forma de clasificar valores (variables, funciones, objetos, constantes, etc). Dependiendo de la base de el sistema de tipos, podemos estatuir que determinado valor es lo que es.

Con esta idea podriamos pensar en los tipos como un conjunto, formado por los valores que hacer parte del mismo.

>> ##### Esta información de tipos permite comprobar que nuestro programa se comporta como debe. En el caso de un lenguaje con tipado estático, el compilador podrá chequear de forma estática las asignaciones para verificar que los tipos son compatibles entre sí. En el caso de un lenguaje dinámico, estas comprobaciones se realizán en tiempo de ejecución.    - [Blog Koalite](https://blog.koalite.com/2018/01/tipados-nominal-y-tipado-estructural/#:~:text=En%20un%20sistema%20de%20tipos,los%20mismos%20elementos%20o%20no.)
<br>

> ### Tipado Nominal
En los lenguajes que tienen algún tipado nominal, dos tipos son compatibles entre sí cuando tienen el mismo nombre, sin importar en lo absoluto su estructura.

Ejemplo: (codigo de C# porque es considerablemente más corto que el de java)
```js
class Person {
  public int Id { get; set; }
  public string Name { get; set; }
}
class Product {
  public int Id { get; set; }
  public string Name { get; set; }
}

Person paco = new Person { Id = 2, Name = "Paco" };
Product morcilla = paco;  // no son compatibles
```
source: [Blog Koalite](https://blog.koalite.com/2018/01/tipados-nominal-y-tipado-estructural/#:~:text=En%20un%20sistema%20de%20tipos,los%20mismos%20elementos%20o%20no.)

Estas 2 clases tienen una estructura completamente identica, pero no son compatibles entre si.
>> Y esto es Bueno™. O al menos lo parece, porque nos evita cometer fallos como intentar vender personas o casarnos con productos. 
##### Blog Koalite

<br>

> ### Tipado Estructural

Es muy facil intuír el como funciona el tipado estructural conociendo el funcionamiento de el nominal, pero si todavia no te llega, lo voy a explicar.

El tipado estructural permite la compatibilidad de tipos dependiendo de la estructura de los mismos, pero no tienen que ser identicos.

Ejemplo: (si, otra vez un ejemplo de Blog Koalite)
```js
type Shape { width: number, height: number }
type Box { color: string, width: number, height: number }
 
let s: Shape = { width: 10, height: 5 };
let b: Box = s; // Error, Shape no tiene color
 
let b2: Box = { color: 'blue', width: 8, height: 4 };
let s2: Shape = b2; // OK, Box tiene todo lo que necesita Shape
```
##### esto es typescript btw

Este tipado trae diferentes ventajas sobre el nominal, como el ser más flexible y aprovechar el polimorfismo, practicamente un Duck Typing pero de los lenguajes compilados, pero OJO, no hay uno mejor sobre el otro, deberias escoger lenguajes con el tipado que más te guste, o el que sea necesario para el trabajo que busques resolver.

<br>

> ### Duck Typing

El Duck Typing es conocido por ser el favorito de los lenguajes interpretados, muy pocos lenguajes compilados tienen excepciones para usar este tipado.

Este mismo se basa en una frase bastante conocida en el mundo del razonamiento inductivo que dice así: "Cuando algo camina como pato, nada como pato y suena como un pato, puede ser un pato.", esto parece logico, pero en ciencias informaticas lo podemos resolver de la siguiente manera: "Puede hacer las cosas que hace un pato, no tiene que ser un pato, pero por las caracteristicas que se dan, puede serlo".

En programación esto se define en un tipado que solo requiere ciertos aspectos de un objeto para ser usados, no de el tipo de el objeto, ni del nombre.

Ejemplo: 
```js
class Duck {
  blink() {
    console.log('¡Cuac!')
  }
  feather() {
    console.log('¡Al pato se le cayó una pluma!')
  }
}

class Human {
  blink() {
    console.log('Una persona imita el sonido de un pato')
  }
  feather() {
    console.log('Una persona encuentra una pluma en el piso y se la lleva consigo')
  }
}

function inTheForest(classElement) {
  classElement.blink()
  classElement.feather()
}

const juan = new Duck()
const alejandro = new Human()

function game() {
  inTheForest(juan) // ¡Cuac! - '¡Al pato se le cayó una pluma!'
  inTheForest(alejandro)  // 'Una persona imita el sonido de un pato' - 'Una persona encuentra una pluma en el piso y se la lleva consigo'
}

game()
```

En el codigo se puede ver que se crean 2 clases, la clase Duck representa un pato, y la clase Human representa a una persona, entonces aunque ambas funciones tengan una estructura similar, no es lo que busca cuando son llamados, si no que busca si tienen la caracteristica, función u objeto en especifico.

<br>

---
## 5. == vs === vs typeof

> ### Operadores de igualdad

En JavaScript existen 2 operadores de igualdad: 
- Operador de igualdad debil (==)
- Operador de igualdad estricta (===)

El operador de igualdad debil (==) hace una coerción entre los tipos que se le dan, para intentar flexibilizar las comparaciones, por lo que normalmente prioriza el contenido al momento de devolver el resultado, en caso de que la coerción no sea posible va a devolver false (obviamente).

Ejemplo:
```js
console.log(11 == '11')  // true
// Hace la coerción de tipos, por lo que a pesar de ser un string es "igual" a el numero.
```
<br>
En cambio el operador de igualdad estricta (===) compara el tipo y el contenido de lo que se le dio a referencia, por lo que tecnicamente si es una comparación 100% veridica, aunque esto tiene ciertas excepciones.

Ejemplo:
```js
console.log(11 === '11')  // false

console.log(11 === 11)  // true
```

> ### Operador typeof

En JavaScript existe un operador que devuelve un string indicando el tipo de el operando, esto suena muy ambiguo pero lo voy a explicar con codigo.

Modo de uso:
```js
typeof operando
typeof (operando)
```
(cualquiera sirve)

Ejemplo:
```js
const myFunction = () => console.log('Esta es MI función')
const myNumber = 20
const myShape = 'circulo'
const today = new Date()

typeof myFunction  // 'function'
typeof myNumber  // 'number'
typeof myShape  // 'string'
typeof today  // 'object'
```
<br>

## 6. Function Scope, Block Scope and Lexical Scope

Aqui vamos a hablar de los scopes, como funcionan y que abarcan en su conjunto: 

Los scopes representan literalmente lo que abarca cada dato, en donde se puede acceder, etc.

<br>

> ### Local y Global Scope

Los scopes se dividen en 2 partes principales, el global, y el local.

El Scope global representa a cualquier variable/función a la que se puede acceder desde cualquier parte del archivo, normalmente es porque son declaradas fuera de cualquier función, o algo por el estilo.

El Scope global hace referencia a las variables/funciones, que no pueden ser accedidas fuera de su scope (ya lo explico), esto se refiere a los datos que están dentro de funciones o encerradas en llaves (pero que no son objetos).

Ejemplo:
```js
const globalVar = 'Puedes acceder a mí en todo el documento!'

function functionScope() {
  const functionVar = 'Solo puedes acceder a mi en esta función!'
  console.log(functionVar)  // 'Solo puedes acceder a mi en esta función!'
}

if (true) {
  const blockVar = 'Solo puedes acceder a mi en este "bloque"!'
  console.log(blockVar)  // 'Solo puedes acceder a mi en este "bloque"!'
}

console.log(globalVar)  // 'Puedes acceder a mí en todo el documento!'
console.log(functionVar)  // Error
console.log(blockVar) // Error
```

<br>

> ### Function Scope

Como se puede apreciar en el codigo anterior, el scope de función aplica dentro de una función (lol), y este hace que solo se pueda acceder a las variables y objetos declaradas en este scope.

<br>

> ### Block Scope

Este aplica un poco más hacia lo que pertenece algo, digamos un condicional como `if`, o una iteración como `for`, practicamente todo lo que esté dentro llaves ({}) y no sea un objeto pertenece a un bloque.

Ejemplo:
```js
if (true) {
  const value1 = '¡Esto es un string!'

  if (true) {
    const value2 = '¡Esto es otro string!'

    console.log(value2)  // '¡Esto es otro string!'
  }

  console.log(value1)  // '¡Esto es un string!'
  console.log(value2)  // Error
}
```

<br>

---

## 7. Expression vs Statement

Se viene explicación corta ya que este tema es sencillo:

En general, en el ambito de la programación, una expresión es un pedazo de codigo que produce un valor, por lo que a entendimiento más sencillo podriamos decir que: "Cualquier codigo que genere un valor es una expresión".

En cambio un statement (o declaración), no genera un valor como resultado, por lo que practicamente es una pieza de codigo cuyo objetivo es dar una orden a la maquina, en vez de devolver un valor.

##### TODO: Intentar alargar este, esta DEMASIADO corto.

<br>

---

## 8. IIFE, Modules and Namespaces

> ### IIFE

Los immediately-invoked function expression, tambien conocidos como "IIFE" (se leen algo como 'aifi'), es una manera de definir y ejecutar una función en una sola declaración.

Estructura basica:
```js
(function(args) {
  // Las cosas que normalmente van dentro de una función xd
})()

// O si quieres con sintaxis de ES6
((args) => {
  // Las cosas que normalmente van dentro de una función 
})()
```

Con el codigo que vemos aquí podemos ver varias cosas, como que la función es anonima, o que se encierran en parentesis y luego se ponen parentesis despues (se usa asi `(function)()`).

La caracteristica clave es que se ejecuta inmediatamente al definirse, y esto puede ser util dependiendo del contexto, tiene cosas muy utiles como generar un scope unicos para la función, esto evita colisiones entre variables u otros problemas que puedan surgir mientras el codigo escala.

<br>

> ### Modules

En JavaScript un modulo es un pedazo de codigo que se ejecuta en un scope diferente al del codigo, esto permite definir variables y funciones solo disponibles dentro de el mismo, los modulos se ubican en archivos diferentes cada uno, con esto, se puede exportar e importar en diferentes archivos en todo el proyecto, haciendo codigo que tiene el unico objetivo de ser reutilizado multiples veces.

Ejemplo: 
```js
export function moduleFunction() {
  console.log('Si importas este modulo puedes ejecutar esta función en cualquier documento!')
}

export const moduleVariable = 'Esta variable será exportada!'
```

O tambien puedes exportarlas de esta manera:

```js
function moduleFunction() {
  console.log('Si importas este modulo puedes ejecutar esta función en cualquier documento!')
}

const moduleVariable = 'Esta variable será exportada!'

export { moduleFunction, moduleVariable }
```

Y las puedes importar en el documento por medio de la keyword reservada `import`, de esta manera:

```js
import { moduleFunction, moduleVariable } from 'ruta del archivo'
```

> ### Namespaces

Un namespace es el contexto para identificar, un grupo logico de nombres que se usa en el programa, en el mismo contexto, scope y un identificador es una representación de una entidad

##### TODO: siento que suena complicado

Ejemplo:
```js
const exampleObject = {
  value1: 'Esto es un valor!',
  value2: 'Esto es otro valor!'
}

// Namespace
exampleObject.value1
```

<br>

---

## 9. Message Queue and Event Loop

Empecemos reincorporando una tematica que integramos en el primer punto de la liste de los conceptos (El Call Stack), JavaScript es **single-threaded**, esto significa que no puede realizar 2 cosas a la vez, y la gran mayoría de las veces no es un problema tan grande, pero esto significa que si hacemos una acción que demora 1 minuto en realizarse, JavaScript va a estar ese minuto entero sin ser responsivo.

##### JS implementa soluciones como el asincronismo y Event Loop, que ya explicaré, el asincronismo va para un punto adelante.

Primero pensemos en una función que devuelve un valor:

```js
const greeting = () => {
  console.log('Hola!')
}

greeting()  // 'Hola!'
```

Si ejecutamos esta función será llevada al Call Stack y luego será ejecutada, pero que podría ocurrir si una función requiere obtener información externa, consumir API's o que tenga un setTimeout, evidentemente esto ralentizaria nuestro codigo, pero JS trae una caracteristica que permite que esto no sea un problema.

Esta vez pensemos en una función que devuelve el mismo valor que la anterior, pero esta contiene un setTimeout:

```js
const delayedGreeting = () => {
  setTimeout(() => {
    console.log('Hola!')
  }, 1000)
}

delayedGreeting()  // Un segundo despues de la ejecución, devuelve 'Hola!'
```

Lo que hace esto aqui, es que delayedGreeting se ejecuta en el call stack, y se elimina inmediatamente se ejecuta, pero la funcion no ha devuelto su valor, entonces que ocurre aqui?, en realidad el Callback de la función es llevada a un entorno llamado "Web API", en donde se espera a que se termine de ejecutar la función asincronamente, cuando ya se termina de ejecutar es llevada a el "Queue", en donde se envian las funciones a el Call Stack turno por turno.

Ejemplo: 

```js
const greet1 = () => console.log('Primero!')
const greet2 = () => setTimeout(() => console.log('Segundo!'), 1000)
const greet3 = () => console.log('Tercero!')

greet1()
greet2()
greet3()

/*
  Explicaré que ocurre paso por paso:
    1. Se crean 3 funciones, cada una devuelve a la consola un orden.
    2. Se ejecutan las funciones.∫
      - La consola devuelve:
        'Primero!'
        'Tercero!'
        'Segundo!'

    3. greet3 se ejecuta primero que greet2 ya que este mismo no está mas en el call stack, si no en el queue, por lo que puede seguir perfectamente.
*/
```

Con esto podemos ver que a pesar de que greet2 se demora ejecutando un segundo, greet3 puede ignorar esa espera, ya que greet2 ya no existe en el call stack una vez que es ejecutado, es llevado a otra zona en donde la espera no hará un contratiempo en el codigo.

<br>

## 10. setTimeout, setInterval and requestAnimationFrame

> ### Function Scheduling

Function Scheduling, o Planificación de funciones es a como me gusta referirme a los 2 metodos que nos permiten ejecutar funciones, pero no en el mismo momento que son invocadas, si no que en algún momento despues de hacerlo.

Los metodos son los siguientes:
- `setTimeout` - Nos permite ejecutar una función despues de el tiempo que le indiquemos.
- `setInterval` - Nos permite ejecutar una función en el intervalo que le indiquemos, y lo seguira repitiendo hasta que le indiquemos que se detenga.

<br>

> ### setTimeout

Como expliqué antes, setTimeout se usa para ejecutar funciones despues de ciertos milisegundos que le indiquemos, y esto nos puede ayudar en muchas cosas, como aprovechar el uso de el Event Loop y su Message Queue.

Sintaxis: 
```js
const timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

Ejemplos:
```js
function sayHi() {
  console.log('¡Hola!')
}

setTimeout(sayHi, 1000)  // '¡Hola!'
// Ejecuta la funcion a los 1000ms (1seg)

```

```js
// Esta vez con una función con argumentos
function sayHi(name) {
  console.log(`¡Hola ${name}!`)
}

setTimeout(sayHi, 2000, 'Juan')  // '¡Hola Juan!
// Ejecuta la funcion a los 2000ms (2seg)
```

<br>

> ### setInterval

Este es un tanto más diferente al anterior, ya que aunque este haga delay a las funciones, no es su objetivo principal, si no que repite las mismas en intervalos, va a repetir las funciones una y otra vez hasta que le indiquemos que se detenga, por lo tanto debe ser usado con mayor cautela que el anterior visto:

Sintaxis: 
```js
const timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

Ejemplos: 
```js
function sayHi() {
  console.log('¡Hola!')
}

setInterval(sayHi, 5000)  // '¡Hola!'
// Se ejecuta la función en intervalos de 5000ms (5seg)
```

```js
// Ahora con argumentos ;)
function sayHi(name) {
  console.log(`¡Hola ${name}!`)
}

setInterval(sayHi, 4000, 'Sebastian') // '¡Hola Sebastian!'
// Se ejecuta la función en intervalos de 4000ms (4seg)
```

Pero ahí estamos generando intervalor infinitos, no hay nada que los detenga, y esto nos va a causar problemas en algún momento, por lo que JavaScript tiene el metodo de `clearInterval()`, el cual detendrá el intervalo una vez invocado.

<br>

> ### clearInterval

Como pudimos ver en la explicación anterior, clearInterval detiene este intervalo infinito de funciones, y es muchisimo más simple de utilizar.

Sintaxis: 
```js
clearInterval(func)
```

Así que demos un ejemplo que se pueda aplicar en un entorno "real":
```js
let count = 0  // Se crea una variable que está diseñada para cambiar

const addOne = () => {
  count += 1
  console.log(count)
}
// Se crea una función que sume 1 a la variable "count" cada que es invocada

const countInterval = setInterval(addOne, 1000)
//  Se crea una variable que invoca "addOne" cada 1000ms (1seg)

const clearCountInterval = setTimeout(() => {
  clearInterval(countInterval)
}, 6000)
// Se crea una variable que empieza una cuenta para finalizar el intervalo anterior

countInterval()
clearCountInterval()
// Se invocan ambas variables.
```

Y con esto concluye esta tematica... pero si vemos bien, hay un 3er tema en el titulo... requestAnimationFrame

<br>

> ### requestAnimationFrame

`TODO: Transcribir la información escrita que tengo de este.`

<br>

## 11. Javascript Engines

JavaScript es un lenguaje dinamico e interpretado, lo que significa que de alguna manera se tiene que pasar el codigo a la maquina, por lo que este depende de los diferentes Engines que existen en para el mismo, Engines como: 

- V8 (para buscadores Chromium-based)
- SpiderMonkey (Firefox)
- Javascript Core Webkit (Safari)
- Chakra (Internet Explorer)

Así que deberiamos verlos uno por uno para entender su funcionalidad y diferencias.

<br>

> ### Como funciona un interprete - engine?

Normalmente los interpretes de Javascript funcionan de manera similar:
1. Lo primero que se hace es [*parsear*](https://www.techtarget.com/searchapparchitecture/definition/parser) el codigo, de está manera se creará un *abstract syntax tree*, que en teoría sería como en la siguiente imagen.
<img src="https://ruslanspivak.com/lsbasi-part7/lsbasi_part7_ast_01.png">
<br>

1. El *abstract syntax tree*/el codigo será compilado a *bytecode* (Codigo flexible y portatil que puede ser compilado a machine code).
1. Y por ultimo este *bytecode* será compilado de nuevo, pero esta vez a machine code, codigo que será ejecutado en tiempo real.

Otra cosa que sería interesante para aclarar es que regularmente los interpretes aceptan tanto codigo ECMAScript como WebAssembly.
<br>

> ### V8
V8 es practicamente el Engine más conocido y popular actualmente, es desarrollado por "the Chromium Project" para Google Chrome y otros navegadores basados en Chromium (Como Edge, Brave, Opera, etc), este mismo puede ser usado autonomamente, o incluso ser <a href="https://v8.dev/docs/embed">incorporado a C++</a>.

Otra cosa pueden ser los Entornos de ejecución que basan a V8 como su interprete, como `node.js` y `deno`.

<br>

> ### SpiderMonkey
Este interprete fue creado por Brendan Eich, el mismisimo creador de JavaScript, quien creó el lenguaje y el interprete para el navegador **Netscape**, Brendan también fue Co-fundador y ex-CEO de Mozilla Foundation y Mozilla Corporation, por lo que tiene un poco de sentido que el navegador Mozilla Firefox haya "heredado" muchas funcionalidades.

<br>

> ### Javascript Core

Javascript Core es el interprete creado y desarrollado por Apple Inc., es un proyecto open source, con el objetivo de traer un Engine eficiente, rapido y de bajo consumo a aplicaciones web, aunque a pesar de ese ser el objetivo, es un interprete multipropositos que se puede usar en todo lado.

Lo que este Engine nos ofrece es su rendimiento, velocidad, seguridad, estabilidad y compatibilidad, que hacen ver este como un buen engine. 

Una cosa que vale la pena mencionar es que como en V8 existen entornos de ejecución basados en el mismo, como `node` y `deno`, existe uno que está basado en Javascript Core que se especializa en velocidad y rendimiento, conocido como [Bun](https://bun.sh/).

<br>
<br>

> Lo importante es encontrar el interprete que nos favorezca más y nos de mejores resultados dependiendo de nuestro proyecto, no es correcto ir por uno porque es "mejor", ya que es completamente subjetivo.

<br>

