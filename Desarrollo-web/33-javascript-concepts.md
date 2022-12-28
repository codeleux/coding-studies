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