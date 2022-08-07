// ----------------VAR, LET y CONST ---------------------------
// let y const no me permiten tener nombres de variables duplicadas
// let es reasignable, y const solo si es una referencia en memoria
// let como const tiene scope de bloque {}
var a = 1; // 1

var a = function () {
  var a = 3;
  console.log(a); // 3
};

a(); // 3
a = 2;
console.log(a); //2


if (true) {
  let green1 = "green";
  console.log(green1);
}
let green1 = "blue";
console.log(green1); // Uncaught SyntaxError: Identifier 'green' has already been declared


const b = {
  nombre: "soy b",
};
console.log(b); // {b.color = "verde"}
b.color = "verde";
console.log(b); // {nombre: 'soy b', color: 'verde'}


// no es reasignable una cariable const
const b = [1,2]
b = [3,4]   // no se puede
// Uncaught TypeError: Assignment to constant variable.

const array = [1, 2, 3];
console.log(array); // [1, 2, 3]
array.push(7);
console.log(array); // [1, 2, 3, 7]

// ciclo for con var y let

var creaFuncion = function () {
  var arreglo = [];
  for (let i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo;
};

// var arr = creaFuncion();
// arr[0](); // 3
// arr[1](); // 3
// arr[2](); // 3

//------------------ ARROW FUNCTIONS ------------------------------
// hay un return implicito

let hijos = ["Nicky", "Sebas", "Luna"];

let mama = hijos.map(function (elemento) {
  return elemento.concat(" su mama es Jime");
});
// 1 parametro y una instruccion => sin llaves y return implicito
let mama1 = hijos.map((elemento) => elemento.concat(" su mami es Jime"));

// console.log(mama);
// console.log(mama1);

// mas instrucciones => si o si llaves y el return
let familia = hijos.map((el) => {
  console.log(el);
  return el.concat(" tiene una familia de 5 integrantes");
});

// console.log(familia);

//sin parametros () antes de la flecha

// let saludo = () => "Hello Part Time 08!";
// let saludo1 = function () {
//   return "hello!";
// };
// console.log(saludo());

// 2 o mas parametros

// let arr = [1, 2, 3, 4, 5];
// let array = arr.map((el, index) => el * index);
// console.log(array);

// => this se bindea al contexto donde se creo

// let persona = {
//   nombre: "Jimena",
//   apellido: "Medina",
//   hijos: ["Nicky", "Sebas", "Luna"],
//   print() {
//     return this.hijos.forEach((h) =>
//       console.log(this.nombre + " es la mama de " + h)
//     );
//   },
// };
// console.log(persona.print());

// -------------------------- CLASS -------------------------------------
// function Persona(name, lastName) {
//   (this.name = name), (this.lastName = lastName);
// }
// Persona.prototype.saludar = function () {
//   console.log("Hola!");
// };

// class Persona {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }
//   saludar() {
//     console.log("Hola!");
//   }
// }

// class Empleado extends Persona {
//   constructor(name, job) {
//     super(name);
//     this.job = job;
//   }
//   contar() {
//     console.log("1, 3, 3....");
//   }
// }

// let alguien = new Empleado("Jime", "instructor");
// console.log(alguien.saludar());
// console.log(alguien);

// -------------------------- Object Literals ----------------------

let a = 1,
  b = 2,
  c = 3;

let obj = {
  a,
  b,
  c,
};

//console.log(obj);
// Computed property names

// function Persona(name, lastName, prop, value) {
//   this.name = name;
//   this.lastName = lastName;
//   this[prop] = value;
// }

// let jime = new Persona("Jime", "Medina", "hijos", ["Nicky", "Sebas", "Luna"]);
// let marce = new Persona("Marce", "Torres", "Edad", 34);
// console.log(jime, marce);

// ----------------------- TEMPLATE STRINGS ------------------------
// let nombre = "Jime";
// let edad = 33;

// console.log(`Hola, soy ${nombre.toUpperCase()} y tengo ${edad * 2}`);
//---------------------- DESTRUCTURING ----------------------------

const user = {
  nombre: "Jimena",
  apellido: "Medina",
  userName: "lalala",
  extra: { dispositivos: [1, 2, 3], preguntaSecreta: "soy una pregunta" },
  isAdmin: false,
};

const {extra: { preguntaSecreta: question },} = user;

const { nombre: name, apellido: lastName } = user;
console.log(name, lastName);
console.log(question);

// ---------- SPREAD Y REST OPERATORS ------------------------
//spread
let arr = [1, 2, 3, 4];
let array = [...arr, 5, 6, 7];
let arr1 = [3, 3, 3];
let string = "hola";
let arr2 = ["jime", true, ...arr, ...arr1, ...string]; // h o l a
console.log(arr2);

let array = [1, 1, 1, 1, 11, 2, 2, 22, 3, 9, 8, 1, 1, 22];
array = [...new Set(array)];
console.log(array);

//rest
function suma(...losArgumentos) {
  return losArgumentos.reduce((prev, cur) => {
    return prev + cur;
  });
}
console.log(suma(1, 2, ...arr));
console.log(suma(1, 2, 3, 4, 5));

// function suma(a, b, c) {
//   return a + b + c;
// }

//----------------------PROMESAS -------------------------

/*
Promesa => accion a futuro  asincronica
        => un plan

  Aprobar el M2
       feliz => se cumple la promesa  .then( que hago si se cumple  ===> festejo!) 
       triste => la promesa no se cumple .catch( que hago ===> recursar) 
       
       
pido un archivo
    .then(me llega el archivo => lo muestro en pantalla)
    .then()
    .then()
    .catch( no llego => muestro un gif con un 404, archivo no encontrado)

*/
