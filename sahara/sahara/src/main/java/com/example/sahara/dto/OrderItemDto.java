package com.example.sahara.dto;

import com.example.sahara.entity.Product;
import lombok.Data;

@Data
public class OrderItemDto {
    private Product product;
    private int quantity;
}
