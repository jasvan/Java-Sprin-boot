package com.ejemplojava.practica1.controllers;

import com.ejemplojava.practica1.dao.UsuarioDao;
import com.ejemplojava.practica1.models.Usuario;
import com.ejemplojava.practica1.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UsuarioDao usuarioDao;

    /// cargar autimaticamente la properties. inyecccion de dependencias
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){

        Usuario usuarioLogeado = usuarioDao.obtenerCredenciales(usuario);
        if (usuarioLogeado != null){
          String  tokenjwt = jwtUtil.create(String.valueOf(usuarioLogeado.getId()), usuarioLogeado.getCorreo());
          return tokenjwt;
        }else {
            return "FAIL";
        }
    }
}
