package com.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

@Data
@Entity
public class OrderItem {

    @EmbeddedId
    @JsonIgnore
    private OrderItemPK pk;

    @Column(nullable = false) private Integer quantity;

    public OrderItem() {
        super();
    }

    public OrderItem(Order order, Product product, Integer quantity) {
        pk = new OrderItemPK();
        pk.setOrder(order);
        pk.setProduct(product);
        this.quantity = quantity;
    }

    @Transient
    public Product getProduct() {
        return this.pk.getProduct();
    }

    @Transient
    public Double getTotalPrice() {
        return getProduct().getPrice() * getQuantity();
    }
}
