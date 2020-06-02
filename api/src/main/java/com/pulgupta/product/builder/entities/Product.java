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
    String id;

    String name;
    String title;
    String summary;
    String detailedDescription;
    String type;
    Date launchDate;
    BigDecimal price;
    List<String> pictures;
}
