package com.pulgupta.product.builder.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;

    int rating;
    String feedback;
    boolean disabled;

    @NotNull
    @Column(nullable = false)
    String productId;

    @NotNull
    @Column(nullable = false)
    String userId;
}
