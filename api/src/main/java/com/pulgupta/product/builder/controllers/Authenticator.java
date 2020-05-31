package com.pulgupta.product.builder.controllers;

import com.pulgupta.product.builder.dto.Authentication;
import com.pulgupta.product.builder.entities.User;
import com.pulgupta.product.builder.service.AuthenticatorService;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;

@Controller
public class Authenticator {

    Logger logger = LoggerFactory.getLogger(Authenticator.class);

    @Inject
    AuthenticatorService authService;

    @Post(value = "/login")
    public boolean isAuthenticated(@Body Authentication authentication) {
        return authService.isUserAuthenticated(authentication);
    }

    @Post(value = "/register")
    public boolean register(@Body User user) {
        logger.info("user is {} {} {} {}", user.getEmail(), user.getDob());
        return authService.register(user);
    }
}
