package com.pulgupta.product.builder.repository;

import com.pulgupta.product.builder.entities.Product;

import javax.validation.constraints.NotNull;
import java.util.List;

public interface ProductRepository {
    List<Product> searchProductsByName(@NotNull String name);
}
