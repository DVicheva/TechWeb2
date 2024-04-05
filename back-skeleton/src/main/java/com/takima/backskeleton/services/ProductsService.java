package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.ProductsDao;
import com.takima.backskeleton.models.Products;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductsService {

    private final ProductsDao products;

    public List<Products> findAllProducts() {
        return products.findAll();
    }

    public Products getProductById(long id) {
        return products.findById(id).orElseThrow();
    }

}