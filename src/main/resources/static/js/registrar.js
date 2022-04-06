$(document).ready(function () {

});

// REGISTRAR USUARIO
// ELIMINAR USUARIO

async function registrarUario()
{
        let datos = {};
        let repiteContrasena;

        datos.nombre = document.getElementById('txtNombre').value;
        datos.apellido = document.getElementById('txtApellido').value;
        datos.correo = document.getElementById('txtCorreo').value;
        datos.telefono = document.getElementById('txtTelefono').value;
        datos.contrasena = document.getElementById('txtContrasena').value;
        repiteContrasena = document.getElementById('txtRepiteContrasena').value;

        if(!datos.nombre){  alert('El campo nombre nu puede estar vacio !');  return;}
            else if(!datos.apellido){  alert('El campo apellido nu puede estar vacio !');  return ;}
            else if(!datos.correo){  alert('El campo correo nu puede estar vacio !');    return ;}
            else if(!datos.telefono){  alert('El campo telefono nu puede estar vacio !');  return ;}
            else if(!datos.contrasena){  alert('la contraseña no puede estar vacia !');      return ;}
            else if(repiteContrasena != datos.contrasena){ alert("las contraseñas son diferetes");  return ;}
        else
        {
              const request = await fetch("api/new/usuarios", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                 body: JSON.stringify(datos)

                });
                alert(" La cuenta fue creada con exito ! ");
                window.location.href='login.html';
        }

}
