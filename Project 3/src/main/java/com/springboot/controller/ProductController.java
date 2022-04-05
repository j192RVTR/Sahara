package com.springboot.controller;

import com.springboot.entity.Product;
import com.springboot.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getProducts(){
        return service.getProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") long id){
        return service.getProductById(id);
    }

    @GetMapping("/recent")
    public List<Product> getRecentProducts(){
        return service.getRecentProducts();
    }

    @PostMapping("/books")
    public List<Product> addBooks(){
        return service.addBooks();
    }

    @PostMapping("/nonfiction")
    public List<Product> addNonfiction() {
        return service.addNonfiction();
    }
    @PostMapping("/albums")
    public List<Product> addAlbums(){
        return service.addAlbums();
    }

    @PostMapping("/movies")
    public List<Product> addMovies(){
        return service.addMoviesAndTv();
    }
}
