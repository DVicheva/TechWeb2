package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Cart;
import com.takima.backskeleton.models.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrdersDao extends JpaRepository<Orders, Long> {
}
