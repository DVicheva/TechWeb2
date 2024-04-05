package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CartDao extends JpaRepository<Cart, Long> {

}
