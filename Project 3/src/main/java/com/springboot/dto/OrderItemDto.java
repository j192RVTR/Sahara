package com.springboot.dto;

import com.springboot.entity.Product;
import lombok.Data;

@Data
public class OrderItemDto {
    private Product product;
    private int quantity;
}