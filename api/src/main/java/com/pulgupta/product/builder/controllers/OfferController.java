package com.pulgupta.product.builder.controllers;

import com.pulgupta.product.builder.dto.Offer;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;

@Controller("/offers")
public class OfferController {

    @Get()
    @Produces(MediaType.APPLICATION_JSON)
    public Offer getCurrentOffers() throws InterruptedException {
        return new Offer("Heavy discount on first order", "Get 25% discount on your first order. ORDER NOW!");
    }
}
