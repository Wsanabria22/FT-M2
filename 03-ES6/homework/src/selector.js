// La función `traverseDomAndCollectElements` es usada para recorrer (navegar a través) el arbol del DOM 
// completo y recolectar los elementos especificos deseados por el usuario. 
// Una manera natural de escribir estas funciones es usando recursión. 
// Toma dos parametros: `matchFunc` y `startEl`.

// - `startEl` - este es el elemento del arbol del DOM donde la busqueda comenzará. 
//               Si `startEl` es `undefined`, la busqueda comienza en `document.body`.
// - `matchFunc` - la función generada por nuestro `matchFunctionMaker`. 
//               Testea si un elemento dado matchea con el selector o no, y por lo tanto si deberia 
//               ser recolectado o no.
var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = []; 

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  let elementChild = startEl.children;
  for (let i = 0; i < elementChild.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, elementChild[i]);
    resultSet = [...resultSet, ...result];
  }

// otra forma de recorrer el arbol
  if (startEl.children.length){
    for (const el of startEl.children) {
      const result = traverseDomAndCollectElements(matchFunc, el);
      resultSet = [...resultSet, ...result];
    }   
  }

  return resultSet;
};


// 'div > img'
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector.length === 0) return false;
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.',1)) return 'tag.class';
  if (selector.includes('>',1)) return 'tag.tag';
  else return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
// - `classList`, `className`, `tagName` y `id`: Estos son las 4 propiedades de los elementos del DOM 
// que vas a necesitar cuando matchees los elementos en el tree.
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction =  (elemento) => elemento.id === selector.slice(1); 
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      return elemento.classList.contains(selector.slice(1));
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elemento) {
      let [tag, nomClass] = selector.split('.');
      if (elemento.tagName.toLowerCase() === tag.toLowerCase()){
        return elemento.classList.contains(nomClass);
      } else return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function (elemento) {
      return (elemento.tagName.toLowerCase() === selector.toLowerCase());
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
