package com.pulgupta.product.builder.service;

import com.pulgupta.product.builder.dto.Authentication;
import com.pulgupta.product.builder.entities.User;
import com.pulgupta.product.builder.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.NoResultException;
import java.util.Optional;

@Singleton
public class AuthenticatorService {

    Logger logger = LoggerFactory.getLogger(AuthenticatorService.class);

    @Inject
    UserRepository userRepository;

    public boolean isUserAuthenticated(Authentication authentication) {
        try {
            Optional<User> userOptional = userRepository.findByUsername(authentication.getUsername());
            return userOptional.map(user -> authentication.getPassword().equals(user.getPassword())).get();
        } catch (NoResultException e) {
            logger.warn("No user found with username {}", authentication.getUsername());
            return false;
        }
    }

    public boolean register(User user) {
        return userRepository.addUser(user);
    }
}
