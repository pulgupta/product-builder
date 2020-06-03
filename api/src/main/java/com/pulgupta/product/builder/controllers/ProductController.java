package com.pulgupta.product.builder.controllers;

import com.pulgupta.product.builder.entities.Product;
import com.pulgupta.product.builder.service.ProductService;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.QueryValue;

import javax.inject.Inject;
import java.util.List;

@Controller(value = "/products")
public class ProductController {

    @Inject
    ProductService productService;

    @Get
    public List<Product> getProductsByName(@QueryValue String name) {
        return productService.searchProductsByName(name);
    }
}
