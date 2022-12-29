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

## 2. Primitives Types

Los datos primitivos, son aquellos que no son objetos (ya que en JavaScript casi todo es un objeto o una función), y que tampoco tienen metodos, en total hay 7 tipos de datos primitivos, los cuales son:

- String
- Number
- bigInt
- Boolean
- undefined
- null
- Symbol

> ### String

<br>
En la gran mayoria de lenguajes de programación, string es una secuencia de caracteres para representar el texto.

En JavaScript es uno de los valores primitivos, representa el texto y (casi) siempre contiene algún caracter unicode encerrado en alguna comilla ('', "", ``)

Ejemplo: 
```js
'Esto es un string'
"Esto tambien es un string"
`Este tipo de string se usa para una cosita especial ;)`
```

> ### Number

<br>
Este tipo de dato es de tipo numerico (obviamente), pero a diferencia del string no hay que colocar nada especial para especificar implicitamente este tipo de dato, solo es necesario colocar el numero en cuestión, el unico inconveniente es que tiene un limite (el famosisimo limite de 32-bits) el cual es 2.147'483.647

Ejemplo: 
```js
9 
21004   // Todos son valores de tipo number validos.
2147483647
```

> ### Boolean

<br>
Un booleano en la indole de ciencias de la informatica es un dato logico que solo tiene 2 valores, true y false.

Ejemplo:
```js
true 
false
```

> ### bigInt

<br>
Este es otro tipo de dato numerico, tal y como number, pero este no cuenta con el limite de 32-bits

Si en algun momento te preguntas si estos 2 se pueden combinar, te lo respondo:

Para mantener el codigo organizado no se recomienda hacer operaciones combinadas con los valores number y bigInt, ya que fiarse de la coerción en JavaScript, ya que eso conduce a tener un codigo 'ilegible' en mayor medida.

bigInt solo se recomienda usar con valores mayores a 2^53

> ### Symbol

<br>
Los Symbol se utilizan a menudo para añadir las claves de propiedades unicas a un objeto, estas no serán iguales a ningun otro codigo que se le pueda añadir al objeto, y están ocultas de la mayoria de mecanismos integrados del sistema.

> ### undefined

<br>
Este es un valor primitivo que se le asigna automaticamente a variables, arrays, etc, que fueron declaradas sin valor alguno (o que lo perdió en el codigo) o de argumentos generados que no existen en el codigo.

Ejemplo:
```js
let undefinedValue
    // Como no se inicializó la variable, esta no tiene valor, por lo que:
console.log(undefinedValue)     // undefined
```

> ### Null

<br>
El valor de null representa la ausencia de cualquier objeto, pero este no es como undefined, ya que define la ausencia explicita, no una falta de datos.

Un dato curioso de null es que si usas typeOf en null, te devuelve la respuesta object, esto es un bug de JavaScript que no fue intencional, pero que realmente no se puede cambiar asi como asi, ya que un cambio de comportamiento de ese estilo en JavaScript, rompería codigo antiguo.

Ejemmplo:
```js
const nullValue = null
    // Se define explicitamente
typeOf null     // Object
```

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
---

## 3. Value Types and Reference Types

En JavaScript hay 2 tipos de valores, los de valor y los de referencia.

Los de valor son variables que solo contienen datos primitivos, y por consecuente no es necesario darle mucha importancia con respecto a la memoria en la que es guardada.

Por otro lado los de referencia son variables que contienen objetos, funciones e incluso arrays, y estos son guardados en la memoria con un valor de referencia, este valor es como un codigo que nos lleva a una parte de la memoria que está reservada unicamente para la variable.

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