package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.models.Products;
import com.takima.backskeleton.models.Student;
import com.takima.backskeleton.services.CourseService;
import com.takima.backskeleton.services.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("products")
@RestController
@RequiredArgsConstructor
public class ProductsController {

    private final ProductsService productsService;

    @GetMapping("")
    public List<Products> getAllProducts() {
        return productsService.findAllProducts();
    }
    @GetMapping("/id/{id}")
    public Products getProductById(@PathVariable Long id) {
        return productsService.getProductById(id);
    }
}
