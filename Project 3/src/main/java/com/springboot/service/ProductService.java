package com.springboot.service;

import com.springboot.dto.Volume;
import com.springboot.entity.Product;
import com.springboot.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;
    public List<Product> getProducts(){
        return repository.findAll();
    }

    public List<Product> getProductsSorted(String order, String field){
        Sort dir = (order.equals("ASC")) ? Sort.by(field).ascending() : Sort.by(field).descending();
        return repository.findAll(dir);
    }

    public Product getProductById(long id){
        return repository.findById(id).get();
    }

    public Product update(Product product){
        return repository.save(product);
    }

    public List<Product> addBooks(){
        List<Product> fiction = Volume.getFictionBooks("fiction");
        List<Product> ret = new ArrayList<>();
        for(Product product : fiction){
            try{
                ret.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }
        List<Product> nonfiction = Volume.getNonFictionBooks("nonfiction");
        for(Product product : nonfiction){
            try{
                ret.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }
        return ret;
    }

    public List<Product> addNonfiction(){
        List<Product> nonfiction = Volume.getNonFictionBooks("nonfiction");
        List<Product> products = new ArrayList<>();
        for(Product product: nonfiction){
            try{
                products.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }
        return products;
    }

    public List<Product> addAlbums(){
        List<Product> albums = Volume.getAlbums();
        List<Product> ret = new ArrayList<>();
        for(Product product : albums){
            try{
                ret.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }
        return ret;
    }

    public List<Product> addMoviesAndTv(){
        List<Product> movies = Volume.getMovies();
        List<Product> ret = new ArrayList<>();
        for(Product product : movies){
            try{
                ret.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }
        List<Product> tvs = Volume.getTVs();
        for(Product product : tvs){
            try{
                ret.add(repository.save(product));
            }
            catch (Exception e){
                System.out.println("Failed to save " + product.getTitle());
                System.out.println("Title copy?");
            }
        }

        return ret;
    }

    public List<Product> getRecentProducts(){
        Date today = new Date();
        Date recent = new Date(today.getTime()- (long) (1000) *(3600)*(24)*(180));
        return repository.findAllByCreationDateAfter(recent);
    }
}
