package com.pulgupta.product.builder.mysql.repository;

import com.pulgupta.product.builder.entities.User;
import com.pulgupta.product.builder.repository.UserRepository;
import io.micronaut.transaction.annotation.TransactionalAdvice;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Singleton
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public UserRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @TransactionalAdvice
    public Optional<User> findByUsername(@NotNull String username) {
        User user = (User) entityManager.createQuery("SELECT u FROM User AS u WHERE u.username=:username")
                .setParameter("username", username).getSingleResult();
        return Optional.ofNullable(user);
    }

    @Override
    @TransactionalAdvice
    public boolean addUser(@NotNull User user) {
        entityManager.persist(user);
        return true;
    }
}
