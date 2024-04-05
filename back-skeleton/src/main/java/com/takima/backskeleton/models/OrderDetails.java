package com.takima.backskeleton.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "order_details")
@Getter
@Setter
@NoArgsConstructor
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderDetailId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;

    private int quantity;
    
    private double price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;

}
