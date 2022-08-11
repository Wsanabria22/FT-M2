// Respuesta con Jquery
$('#boton').click(function() {
  let lista = document.getElementById('lista');
  lista.innerHTML = ""; //Borra la lista anterior

  let img = document.getElementsByTagName('img') // <img src="">
  if (img.length > 0) img[0].remove(); // se elimina la imagen.

  $.get("http://localhost:5000/amigos", function(data){
    data.forEach(element => {
      let li = document.createElement('li');
      li.innerHTML = element.name;
      li.id = element.id;
      $('#lista').append(li);
    });
  })
})

// Respuesta con JS y promesas
// document.getElementById('boton').addEventListener('click',getAmigos);
// function getAmigos(){
//   let lista = document.getElementById('lista');
//   lista.innerHTML = ""; // Borra la lista anterior
//   // Se traen los amigos y se crea la lista
//   fetch("http://localhost:5000/amigos") // hace peticion al servidor
//     .then(data => data.json()) // transformamos el json en un objeto
//     .then(data => { // tengo un array con objetos de amigos.
//       data.forEach(amigo => { // [{amigo1}, {amibo2},....{amigoN}]
//       let li = document.createElement('li'); // <li></li>
//       li.textContent = amigo.name; 
//       li.id = amigo.id;
//       document.getElementById('lista').appendChild(li);
//       })
//     })
// }



// Respuesta con Jquery
$('#search').click(function(){
  let idAmigo = document.getElementById('input').value;
  console.log(idAmigo);
  $.get("http://localhost:5000/amigos/"+idAmigo, function(data){
    console.log(data);
    a = document.getElementById('amigo')
    a.innerHTML = data.name;
  })
}) 

// Respuesta con JS y promesas
// document.getElementById('search').addEventListener('click',searchAmigo);
// function searchAmigo(){
//   let idAmigo = document.getElementById('input').value;
//   fetch(`http://localhost:5000/amigos/${idAmigo}`)
//     .then(data => data.json())
//     .then(data => {
//       document.getElementById('amigo').innerHTML = data.name;
//     })
//     document.getElementById('input').value = ""; // limpia el imput
// }



// Respuesta con Jquery
$('#delete').click(function(){
  let idAmigo = document.getElementById('inputDelete').value;

  $.ajax({
    url: `http://localhost:5000/amigos/${idAmigo}`,
    type: "DELETE",
    success: () => {
      document.getElementById('success').innerHTML = 'Amigo '+ idAmigo+ ' fue eliminado';
    },
  });
}) 

// Respuesta con JS y promesas
// document.getElementById('delete').addEventListener('click',deleteAmigo);
// function deleteAmigo(){
//   let idAmigo = document.getElementById('inputDelete').value;
//   fetch(`http://localhost:5000/amigos/${idAmigo}`, {
//     method: 'DELETE'
//   })
//   .then(()=>{
//     document.getElementById('success').textContent = 'Tu amigo fue borrado con exito';
//     alert('El amigo fue borrado');
//     getAmigos();
//   })
//   document.getElementById('inputDelete').value = '';
// }