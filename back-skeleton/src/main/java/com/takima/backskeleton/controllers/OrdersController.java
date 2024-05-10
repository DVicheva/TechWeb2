package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.OrdersDto;
import com.takima.backskeleton.services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @PostMapping("/create")
    public ResponseEntity<OrdersDto> createOrder(@RequestBody OrdersDto ordersDto) {
        OrdersDto createdOrder = ordersService.createOrder(ordersDto);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrdersDto>> getOrdersByUserId(@PathVariable Long userId) {
        List<OrdersDto> orders = ordersService.getOrdersByUserId(userId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
