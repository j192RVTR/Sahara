package com.springboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name = "products",
        uniqueConstraints = @UniqueConstraint(
                name = "title_unique",
                columnNames = "title"
        )
)
public class Product {


    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long id;

    @Column(
            name = "title",
            nullable = false
    )
    private String title;
    @Column(length = 5000)
    private String description;
    private String creator;
    private Date creationDate;
    @Column(length = 400)
    private String imageUrl;
    private String category;
    private String subcategory;
    private String subsubcategory;
    private double price;

}