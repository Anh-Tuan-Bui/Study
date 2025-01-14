package com.project.production_move.service;

import com.project.production_move.model.Product;
import com.project.production_move.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getALlProducts() {
        return productRepository.findAll();
    }
}
