package com.ejemplojava.practica1.dao;
/* *
* Cada clase del tipo dao reprecenta una tablade la base de datos
*
* */
import com.ejemplojava.practica1.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public class usuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<Usuario> getUsuarios() {
        /* Consulta que se hace sobre hiberate */
        String query = "FROM Usuario"; /// objeto usuario de la clase java
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);

    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public Usuario obtenerCredenciales(Usuario usuario) {
       /// String email = "' OR 1-1 -- ";
        String query = "FROM Usuario WHERE correo = :correo ";

        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("correo", usuario.getCorreo())
                .getResultList();
        /// para evitar un null pointer exception
        if (lista.isEmpty()){
            return null;
        }

        String passwordHashed = lista.get(0).getContrasena();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        /// comparar un hash con una contraseña
        if (argon2.verify(passwordHashed, usuario.getContrasena())){
            return lista.get(0);
        }
        return null;




    }

}