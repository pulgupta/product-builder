package com.pulgupta.product.builder.entities;

import com.pulgupta.product.builder.constants.AddressType;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String houseNumber;
    private List<String> addresslines;
    private String city;
    private String district;
    private String pincode;
    private String state;
    private String country;
    private String landmark;
    private boolean isActive;
    private AddressType type;
}
