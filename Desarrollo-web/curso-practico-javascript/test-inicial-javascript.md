###### Este test se realiza en la [parte inicial del curso](https://platzi.com/clases/3271-javascript-practico/51004-test-de-javascript/) para medir nuestros conocimientos de javascript

# Test de JavaScript

## JavaScript basico

### 1️⃣ Responde las siguientes preguntas:

> ¿Que es una variable y para que sirve?

Una variable es un espacio reservado en la memoria, que aloja cualquier tipo de dato, desde los datos primitivos, hasta los objetos y funciones.

> ¿Cual es la diferencia entre declarar e inicializar una variable?

Declarar una variable se define como el momento en donde una variable es creada sin ningun tipo de dato alojado en el.

Ejemplo:

 ```js
 let emptyVariable
 ```

Inicializar una variable es cuando ademas de declarar esta misma, le damos un valor inicial.

Ejemplo:

 ```js
 const initializedVariable = '🤑'
 ```

> ¿Cual es la diferencia entre sumar numeros y concatenar strings?

La suma de numeros se refuere a la suma de valores con el tipo de dato 'number' (obviamente), concatenar strings es 'combinar' 2 strings sumandolos.

Ejemplo:

 ```js
 console.log(12 + 14)   // Suma de numeros

 console.log('Concatenación de ' + 'Strings')   // Concatenación de strings con suma
 ```

> ¿Cual operador me permite sumar o concatenar?

La respuesta es corta, el operador '+' es el que se usa para ambos propositos.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre = string
- Apellido = string
- Nombre de usuario de platzi = string
- Edad = number
- Correo electronico = string
- Mayor de edad = boolean
- Dinero ahorrado = number
- Deudas = number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior:

```js
const name = 'Jose Miguel'
const surname = 'Arroyave Rincón'
const platziUsername = 'Jefferson Jair' // la cuenta no es mia xd
const age = 14
const email = 'codeleux@gmail.com'
const isAnAdult = false
const savedMoney = 118000
const debts = 0
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```js
const fullName = console.log(`${name} ${surname}`)
const realMoney = console.log(savedMoney - debts)
```

## Funciones

### 1️⃣ Responde las siguientes preguntas:
> ¿Qué es una función?

Una función es un bloque de codigo que devuelve un valor dependiendo de los parámetros que se le entreguen, o de su contexto de ejecución.

> ¿Cuándo me sirve usar una función en mi código?

Las funciones sirven para reutilizar codigo, en caso de necesitarse varias veces en un mismo documento, por lo que podemos encapsular este bloque de codigo para realizar la misma acción en otra parte sin tener que reescribirla.

> ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Estos 2 se refieren a lo mismo, pero en contextos diferentes.

Un parametro es aquel que se define al momento de redactar la función.

Ejemplo:

 ```js
 function greeting(parameter) {
    console.log(`¡Hola ${parameter}!, espero que hayas tenido un buen día.`)
 }
 ```

Un argumento es aquel que escribimos sobre los parametros al momento de ejecutar la función.

Ejemplo: 
 ```js
 greeting(argument)
 ```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
function presentation(fullName, nickname) {
    console.log(`Mi nombre es ${fullName}, pero me gusta que me llamen ${nickname}.`)
}
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
> ¿Qué es un condicional?

Un condicional es una estructura de codigo que compara una condición, y toma una decisión a partir de la respuesta que este de. (Un booleano normalmente)

> ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Existen 2 tipos de condicionales en JavaScript, if, else y else if o switch.

if else y else if: Estos nos permiten hacer distintas comparaciones según nuestras necesidades, este tipo de condicional funciona como una cadena, esto hace que anidar muchos lo hace sintacticamente 'feo'.

Ejemplo: 
 ```js
 if (condition) {
    // Si la condición es cierta se ejecuta este codigo
 } else if (condition2) {
    // Si la condición anterior es falsa, se dirige hacia el siguiente else if o else, y si esta es cierta se ejecuta.
 } else {
    // Si ninguno de los 2 condiciones anteriores es cierta, se ejecuta este si o si.
 }
 ```

switch: Este permite analizar diferentes situaciones de UN UNICO VALOR, lo cual lo hace menos versatil que else if, pero la estructura de este sintacticamente mejor, ya que es mas legible y facil de entender, otra cosa es que este no funciona como una cadena, switch solo busca uno que sea cierto, no le importa aquellos que no son ciertos.

Ejemplo:
 ```js
 switch (condition) {
    case condition1:
        // Si la condición es cierta se ejecuta este codigo
        break // Se tiene que declarar cuando acaba la condición para seguir escribiendo otras condiciones
    case condition2:
        // Si la condición es cierta se ejecuta este codigo
        break
    default:
        // Ejecuta el codigo por defecto si ninguno de los anteriores tiene una condicion cierta.
        // Default es totalmente opcional
        break
 }
 ```

> ¿Puedo combinar funciones y condicionales?

Si, y resulta que es una practica muy común para crear codigo reutilizable que analice una situación y haga algo al respecto xd.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```js
const subscriptionType = 'basic'

if (subscriptionType === 'free') {
    console.log("Solo puedes tomar los cursos gratis")
} else if (subscriptionType === 'basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
} else if (subscriptionType === 'expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```js
const subscriptions = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

if(subscriptionType) console.log(subscriptions[subscriptionType])
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
>¿Qué es un ciclo?

Un ciclo es una estructura de codigo que nos permite iterar y ejecutar codigo hasta que se cumpla una función

>¿Qué tipos de ciclos existen en JavaScript?

Existen varios tipos de ciclos, como los while, for y do while.

while: Como podemos ver traduciendo literalmente el nombre, es que mientras una condición se cumpla, se repite la ejecución de el codigo, y cuando esa condición deja de ser cierta, para de hacerlo.

Ejemplo: 
```js
while (condition) {
    // Mientras la condición sea cierta, esto se ejecutará infinitamente hasta que deje de ser cierta
}
```

for: Este tipo de ciclos tiene una estructura que se repite cuantas veces le digamos que lo haga, esto puede ser usado para hacer iteraciones con los indexes de un array por ejemplo.

Ejemplo: 
```js
for (let i = 0; i < 10; i++) { // Crea una variable, mientras esa variable sea menor a lo que le indiquemos le va a sumar 1, y se repite el codigo cada vez que se actualiza 'i'
    console.log(i) // va a poner en la consola los numeros del 1 al 9
}
```

do while: Este ciclo hace practicamente lo mismo que while, pero este ejecuta el codigo sin importar de si la condición es cierta o no, ya que verifica si la condición es cierta despues de realizar el codigo.

Ejemplo: 
```js
let i = 0

do {
i++ // Esto es meramente un ejemplo
} while (i < 5)
```

> ¿Qué es un ciclo infinito y por qué es un problema?

Un ciclo infinito ocurre en los while, en donde la condición siempre se cumple y es estatica, por lo que el ciclo se repite infinitamente, esto puede saturar la memoria del navegador y puede dar perdida de rendimiento o incluso crasheos.

> ¿Puedo mezclar ciclos y condicionales?

Si se pueden mezclar, ya sea un condicional es un ciclo, o viceversa.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```js
let i = 0

while (i < 5) {
    console.log(`El valor de i es: ${i}`)
    i++
}
```
```js
let i = 10

while (i >= 2) {
    console.log(`El valor de i es: ${i}`)
    i--
}
```

## Listas

1️⃣ Responde las siguientes preguntas:
> ¿Qué es un array?

Un array o un arreglo, es una zona de almacenamiento de datos, tal y como lo es una variable, esta puede contener todo tipo de datos, pero la especialidad de este, es que puede contener mas de uno, puede contener demasiados, incluso puede contener arrays!, y tambien hay una manera de acceder a cada dato que haya estructurado en el conocida como el index, para acceder a este se tiene que usar el nombre del array junto a las '[]', con el numero en donde este ubicado.

Ejemplo: 
```js
const array = [
    'Un arreglo puede contener todo tipo de datos',
    1,
    'desde strings, hasta objetos'
    { valor: 'objeto dentro del string' },
    true,
    [
        'Los arrays que contienen arrays dentro de ellos son conocidos como:',
        'Arrays multidimensionales'
    ]
]

console.log(array[5][2]) // Esto devuelve 'Arrays multidimensionales'
```

> ¿Qué es un objeto?

En Javascript un objeto es una entidad completamente independiente con propiedades y tipos, puede ser representado con practicamente cualquier cosa, como por ejemplo un celular, un celular tiene propiedades, como su tamaño, su modelo, su marca, etc; y la manera de crearlas es con las llaves ({}), los objetos tienen que ser redactados por medio de los namespaces (buscalos si quieres).

Ejemplo: 
```js
const object = {
    valor: 1,
    texto: 'Esto es un objeto'
    'algo mas': ['un array xd']
}

console.log(object.valor, object.'algo mas') // Para acceder a ellos se usa esta sintaxis
```

> ¿Cuándo es mejor usar objetos o arrays?

Pues, depende de lo que necesites, tu puedes usar arrays para listas simples, o iteraciones con for para acceder a los indexes de cada array, en cambio los objetos pueden ser mas utiles para... lo que sirven los objetos, pueden ser usados como listas complejas, descripciones completas, y son tan versatiles que son la base de la POO (Programación orientada a objetos), la cual es una de los paradigmas de programación más usados

> ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

En los ejemplos anteriores se puede evidenciar que si se puede, y definitivamente es muy util, puedes hacer un diccionario de objetos, entre otras cosas

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
const myPhone = ['iPhone X', 'Redmi 4a']

function printFirstElement(arr) {
    console.log(arr[0])
}
imprimirArray(myPhone) // Imprime 'iPhone X'
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

function printFullArray(arr) {
    arr.forEach(element => console.log(element))
}
printFullArray(weekDays)
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```js
const myPhone = {
    color: 'Negro',
    pantalla: 'A medias xd',
}

function printFullObject(obj) {
    for (const element in obj) {
        console.log(`${element}: ${obj[element]}`)
    }
}
printFullObject(myPhone)
```


###### Aghhhhhh por fin termineeee :DDDD, me demoré como 1.5 horas haciendo esto por lo largo que es xd, literalmente 342 lineas en el documento markdown.