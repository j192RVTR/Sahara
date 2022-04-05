package com.springboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(
        name = "users",
        uniqueConstraints = @UniqueConstraint(
                name = "email_unique",
                columnNames = "email"
        )
)
public class User {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private long id;

    private String name;
    @Column(name = "email",
            nullable = false)
    private String email;

    private String password;
}