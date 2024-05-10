package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Cart;
import com.takima.backskeleton.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {
    List<Cart> findAllByUser(Users user); // Utiliser directement l'objet Users

}
