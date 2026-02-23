package com.fsad.tribalcraft.controller;

import com.fsad.tribalcraft.model.Product;
import com.fsad.tribalcraft.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> allProducts(@RequestParam(required = false) String q) {
        return productService.getAll(q);
    }

    @GetMapping("/{id}")
    public Product productById(@PathVariable Long id) {
        return productService.findById(id);
    }

    @PostMapping
    public Product create(@Valid @RequestBody Product product) {
        return productService.create(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @Valid @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.delete(id);
    }
}
