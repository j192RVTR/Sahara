package com.example.sahara.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="orderProducts")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "MM/dd/yyyy") private LocalDate dateCreated;

    private String status;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    private long userId;

    @OneToMany(mappedBy = "pk.order")
    @Valid
    private List<OrderItem> orderProducts = new ArrayList<>();

    @Transient
    public Double getTotalOrderPrice() {
        double sum = 0D;
        List<OrderItem> orderProducts = getOrderProducts();
        for (OrderItem op : orderProducts) {
            sum += op.getTotalPrice();
        }

        return sum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<OrderItem> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(List<OrderItem> orderProducts) {
        this.orderProducts = orderProducts;
    }

    @Transient
    public int getNumberOfProducts() {
        return this.orderProducts.size();
    }
}