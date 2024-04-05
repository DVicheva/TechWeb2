package com.takima.backskeleton.DAO;


import com.takima.backskeleton.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersDao extends JpaRepository<Users, Long> {

    @Query("SELECT user FROM Users user WHERE user.username = :username")
    Users findByUsername(String username);

    @Query("SELECT user FROM Users user WHERE user.userId = :id")
    Users findByUserId(long id);
}
