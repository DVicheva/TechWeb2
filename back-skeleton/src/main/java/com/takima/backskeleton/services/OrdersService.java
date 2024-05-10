package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.OrdersDao;
import com.takima.backskeleton.DAO.UsersDao;
import com.takima.backskeleton.DTO.OrdersDto;
import com.takima.backskeleton.models.Orders;
import com.takima.backskeleton.models.Users;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {
    @Autowired
    private OrdersDao ordersDao;

    @Autowired
    private UsersDao usersDao;

    public OrdersDto createOrder(OrdersDto ordersDto) {
        Users user = usersDao.findById(ordersDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        Orders order = new Orders();
        BeanUtils.copyProperties(ordersDto, order);
        order.setUser(user);

        Orders savedOrder = ordersDao.save(order);
        return mapToDTO(savedOrder);
    }

    public List<OrdersDto> getOrdersByUserId(Long userId) {
        Users user = usersDao.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        List<Orders> orders = ordersDao.findAllByUser(user);
        return orders.stream().map(this::mapToDTO).toList();
    }

    private OrdersDto mapToDTO(Orders order) {
        return OrdersDto.builder()
                .orderId(order.getOrderId())
                .userId(order.getUser().getUser_id())
                .orderDate(order.getOrderDate())
                .status(order.getStatus())
                .details(order.getDetails())
                .price(order.getPrice())
                .build();
    }

    private Orders mapToEntity(OrdersDto ordersDto) {
        Orders order = new Orders();
        order.setOrderId(ordersDto.getOrderId());
        order.setOrderDate(ordersDto.getOrderDate());
        order.setStatus(ordersDto.getStatus());
        order.setDetails(ordersDto.getDetails());
        order.setPrice(ordersDto.getPrice());
        return order;
    }
}
