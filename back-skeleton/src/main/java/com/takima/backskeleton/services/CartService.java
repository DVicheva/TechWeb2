package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CartDao;
import com.takima.backskeleton.DAO.UsersDao;
import com.takima.backskeleton.models.Cart;
import com.takima.backskeleton.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartDao cartDao;

    @Autowired
    private UsersDao usersDao;

    public Cart addProductToCart(Long userId, Cart cart) {
        Users user = usersDao.findById(userId).orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        cart.setUser(user);
        return cartDao.save(cart);
    }

    public List<Cart> getCartByUserId(Long userId) {
        Users user = usersDao.findById(userId).orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        return cartDao.findAllByUser(user);
    }

    public void removeProductFromCart(Long cartId) {
        cartDao.deleteById(cartId);
    }
}
