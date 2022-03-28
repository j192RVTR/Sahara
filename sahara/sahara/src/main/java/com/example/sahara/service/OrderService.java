package com.example.sahara.service;

import com.example.sahara.entity.Order;
import com.example.sahara.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository repository;

    public List<Order> getAllOrders(){
        return repository.findAll();
    }

    public List<Order> getOrderByUserId(long user_id){
        return repository.getOrdersByUserId(user_id);
    }

    public Order add(Order order){
        order.setDateCreated(LocalDate.now());
        return repository.save(order);
    }

    public Order update(Order order){
        return repository.save(order);
    }


}
