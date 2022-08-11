// lista de amigos
// seleciono #lista
// estas vacia?
//get => $.get(url del back) => http://localhost:5000/amigos
// respuesta -> logica para crear un li con el nombre de cada amigo y
// sumarlo a la lista

// cuando hago click en el boton VER AMIGOS => buscar amigos

//.click(funcion)

let mostrarAmigos = () => {
  let lista = $("#lista");
  lista.empty();
  $.get("http://localhost:5000/amigos", (respuesta) => {
    respuesta.forEach((elemento) => {
      let li = `<li>${elemento.name}</li>`;
      lista.append(li);
    });
  });
};
$("#boton").click(mostrarAmigos);

$("#search").click(() => {
  let id = $("#input").val();
  $.get(`http://localhost:5000/amigos/${id}`, (respuesta) => {
    $("#amigo").text(respuesta.name);
  });
});

$("#delete").click(() => {
  let id = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: () => {
      $("#success").text(`El amigo con id: ${id} fue borrado con exito`);
    },
  });
});

$("#nuevo").click(() => {
  let nombre = $("#inputNuevo").val();
  let edad = $("#inputNuevo2").val();
  let mail = $("#inputNuevo3").val();
  let friend = { name: nombre, age: edad, email: mail };
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/amigos",
    data: JSON.stringify(friend),
    contentType: "application/json",
    success: () => $("#successNuevo").text(`Se agrego a ${nombre}`),
  });
});
