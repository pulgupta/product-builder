package com.pulgupta.product.builder.repository;

import com.pulgupta.product.builder.entities.User;

import javax.validation.constraints.NotNull;
import java.util.Optional;

public interface UserRepository {

    Optional<User> findByUsername(@NotNull String username);
    boolean addUser(@NotNull User user);
}

