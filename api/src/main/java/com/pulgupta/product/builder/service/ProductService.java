package com.pulgupta.product.builder.service;

import com.pulgupta.product.builder.entities.Product;
import com.pulgupta.product.builder.repository.ProductRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class ProductService {

    @Inject
    ProductRepository productRepository;

    public List<Product> searchProductsByName(String name) {
        return productRepository.searchProductsByName(name);
    }
}
