package com.pulgupta.product.builder.mysql.repository;

import com.pulgupta.product.builder.entities.Product;
import com.pulgupta.product.builder.repository.ProductRepository;
import io.micronaut.transaction.annotation.TransactionalAdvice;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.validation.constraints.NotNull;
import java.util.List;

@Singleton
public class ProductRepositoryImpl implements ProductRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public ProductRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @TransactionalAdvice
    public List<Product> searchProductsByName(@NotNull String name) {
        return (List<Product>) entityManager.createQuery("SELECT p FROM Product AS p WHERE p.name=:name")
                .setParameter("name", name).getResultList();
    }
}
