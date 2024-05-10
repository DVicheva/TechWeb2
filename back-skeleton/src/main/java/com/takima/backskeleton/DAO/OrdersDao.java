package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Orders;
import com.takima.backskeleton.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdersDao extends JpaRepository<Orders, Long> {
    List<Orders> findAllByUser(Users user);
}
