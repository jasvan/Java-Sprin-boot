$(document).ready(function() {
    cargarusuarios();
  $('#usuarios').DataTable();
});

 async function cargarusuarios(){
  const request = await fetch('usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const usuarios = await request.json();

    let listaHTML = "";
    for(let usuario of usuarios){

    let usuarioHTML = "<tr>"
                    + "<td> "+ usuario.id +" </td>"
                    + "<td> "+ usuario.nombre +" </td>"
                    + "<td> "+ usuario.apellido +" </td>"
                    + "<td> "+ usuario.correo +" </td>"
                    + "<td> "+ usuario.telefono +" </td>"
                    + "<td>"
                    + "<a href=\"#\" class=\"btn btn-danger btn-circle btn-sm\">"
                    + "<i class=\"fas fa-trash\"></i></a>"
                    + "</td>"
                    + "</tr>";

        listaHTML += usuarioHTML;
    }
        document.querySelector("#usuarios tbody").outerHTML = listaHTML;
}
