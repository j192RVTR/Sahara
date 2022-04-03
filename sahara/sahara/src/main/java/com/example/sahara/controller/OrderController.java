package com.example.sahara.controller;

import com.example.sahara.dto.OrderDto;
import com.example.sahara.dto.OrderItemDto;
import com.example.sahara.entity.Order;
import com.example.sahara.entity.OrderItem;
import com.example.sahara.service.OrderItemService;
import com.example.sahara.service.OrderService;
import com.example.sahara.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    ProductService productService;

    @Autowired
    OrderService orderService;

    @Autowired
    OrderItemService orderItemService;

    @GetMapping
    public List<Order> list() {
        return this.orderService.getAllOrders();
    }

    @GetMapping("/user/{id}")
    public List<Order> getOrdersByUser(@PathVariable("id") long id){
        return orderService.getOrderByUserId(id);
    }

    @PostMapping("/user/{id}")
    public Order create(@PathVariable("id") long id, @RequestBody OrderDto form){
        List<OrderItemDto> formDtos = form.getProductOrders();
        Order order = new Order();
        order.setUserId(id);
        order.setStatus("PAID");
        order = this.orderService.add(order);

        List<OrderItem> orderProducts = new ArrayList<>();
        for (OrderItemDto dto : formDtos) {
            orderProducts.add(orderItemService.add(new OrderItem(order, productService.getProductById(dto
                    .getProduct()
                    .getId()), dto.getQuantity())));
        }

        order.setOrderProducts(orderProducts);

        return this.orderService.update(order);
    }

    @PostMapping
    public Order create(@RequestBody OrderDto form) {
        List<OrderItemDto> formDtos = form.getProductOrders();
        Order order = new Order();
        order.setStatus("PAID");
        order = this.orderService.add(order);

        List<OrderItem> orderProducts = new ArrayList<>();
        for (OrderItemDto dto : formDtos) {
            orderProducts.add(orderItemService.add(new OrderItem(order, productService.getProductById(dto
                    .getProduct()
                    .getId()), dto.getQuantity())));
        }

        order.setOrderProducts(orderProducts);

        return this.orderService.update(order);
    }
}
