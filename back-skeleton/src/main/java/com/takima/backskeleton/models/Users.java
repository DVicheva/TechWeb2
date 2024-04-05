package com.takima.backskeleton.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "users_user_id_seq")
    private long userId;
    private String username;
    private String password;
    private String first_name;
    private String last_name;
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Orders> orderId;
}
