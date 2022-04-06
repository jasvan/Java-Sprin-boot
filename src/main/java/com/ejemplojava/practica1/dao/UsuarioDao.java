package com.ejemplojava.practica1.dao;

import com.ejemplojava.practica1.models.Usuario;

import java.util.List;

public interface UsuarioDao {
  List<Usuario> getUsuarios();
  void eliminar(Long id);
  void registrar(Usuario usuario);
  Usuario obtenerCredenciales(Usuario usuario);
}
