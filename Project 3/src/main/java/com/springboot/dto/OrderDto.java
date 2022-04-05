package com.springboot.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderDto {
    private String name;
    private String address;
    private String address2;
    private String email;
    private String cardNumber;
    private String expirationDate;
    private String securityCode;
    private String country;
    private String state;
    private String zip;
    private String cardName;
    private List<OrderItemDto> productOrders;
}
