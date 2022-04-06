package com.ejemplojava.practica1.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "usuariosb") // nombre de la tabla en la base de datos
@ToString @EqualsAndHashCode
public class Usuario {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id")
    private Long id;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "apellido")
    private String apellido;

    @Getter @Setter @Column(name = "telefono")
    private String telefono;

    @Getter @Setter @Column(name = "correo")
    private String correo;

    @Getter @Setter @Column(name = "contrasena")
    private String contrasena;
}
