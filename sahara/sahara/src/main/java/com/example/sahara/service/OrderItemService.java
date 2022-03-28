package com.example.sahara.service;

import com.example.sahara.entity.OrderItem;
import com.example.sahara.repository.OrderItemRepository;
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
