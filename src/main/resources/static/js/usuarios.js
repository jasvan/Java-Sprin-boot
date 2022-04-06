$(document).ready(function () {
  cargarUarios();
  $('#usuarios').DataTable();
  actualizarEmailUsuario().outerHTML = localStorage.correo;
});

function actualizarEmailUsuario(){
  document.getElementById('text-email-usuario');

}
async function cargarUarios()
{
      const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
      });
      const usuarios = await request.json();
      let listaHTML = "";
      for (let usuario of usuarios)
      {
          //let telefono = usuario.telefono == null || "" ? "-": usuario.telefono;
            let usuarioHTML = "<tr> " +
                              "<td> " + usuario.id + " </td>" +
                              "<td> " + usuario.nombre + " </td>" +
                              "<td> " + usuario.apellido + " </td>" +
                              "<td> " + usuario.correo + " </td>" +
                              "<td> " + usuario.telefono+ " </td>" +
                              "<td> " + usuario.contrasena + " </td>" +
                              "<td> " +
                              "<a href=\"#\" onclick='eliminarUsuario(" + usuario.id + ")' class=\"btn btn-danger btn-circle btn-sm\">" +
                              "<i class=\"fas fa-trash\"></i></a>" +
                              "</td>" +
                              "</tr>";

            listaHTML += usuarioHTML;
      }
      document.querySelector("#usuarios tbody").outerHTML = listaHTML;
}
// hacer reutilizable los headers
function getHeaders(){
    return{
    'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': localStorage.token
    };
}

async function eliminarUsuario(id)
{
  if (!confirm('Desea eliminar este usuario?')) {  return;  }

      const request = await fetch('api/delete/usuarios/' + id, {
        method: 'DELETE',
        headers: getHeaders()
      });
      location.reload();
}