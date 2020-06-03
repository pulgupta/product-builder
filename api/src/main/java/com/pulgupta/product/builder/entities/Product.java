package com.pulgupta.product.builder.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String title;
    private String summary;
    private String detailedDescription;
    private String type;
    private Date launchDate;
    private BigDecimal price;

    @OneToMany
    private List<String> pictures;
}
