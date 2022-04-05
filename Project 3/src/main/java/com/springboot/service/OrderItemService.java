package com.springboot.service;

import com.springboot.entity.OrderItem;
import com.springboot.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository repository;

    public OrderItem add(OrderItem orderItem){
        return repository.save(orderItem);
    }
}
