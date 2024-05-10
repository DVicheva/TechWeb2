package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Cart;
import com.takima.backskeleton.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/{userId}/add")
    public ResponseEntity<Cart> addProductToCart(@PathVariable Long userId, @RequestBody Cart cart) {
        Cart newCart = cartService.addProductToCart(userId, cart);
        return ResponseEntity.ok(newCart);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Cart>> getCartByUserId(@PathVariable Long userId) {
        List<Cart> cartList = cartService.getCartByUserId(userId);
        return ResponseEntity.ok(cartList);
    }

    @DeleteMapping("/{cartId}/remove")
    public ResponseEntity<Void> removeProductFromCart(@PathVariable Long cartId) {
        cartService.removeProductFromCart(cartId);
        return ResponseEntity.noContent().build();
    }
}
