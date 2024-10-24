package com.project.production_move.controller;

import com.project.production_move.model.Product;
import com.project.production_move.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/product")
    public List<Product> getALlProducts() {
        return productService.getALlProducts();
    }
}
