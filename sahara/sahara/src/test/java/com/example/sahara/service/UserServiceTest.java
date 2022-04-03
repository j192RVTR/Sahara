package com.example.sahara.service;

import com.example.sahara.entity.Product;
import com.example.sahara.entity.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;

import javax.xml.crypto.Data;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService service;

    @Test
    void getUserByUsernameAndPassword() {
        User user = new User();
        user.setEmail("email");
        user.setPassword("password");
        user.setName("name");
        service.saveUser(user);
        User user1 = service.getUserByUsernameAndPassword("email", "password");
        System.out.println(user1);
        User user2 = service.getUserByUsernameAndPassword("", "");
        System.out.println(user2);
    }

    @Test
    void addUser() {
        User user = service.addUser("Mark", "m@email.com", "password");
        System.out.println(user);
        try {
            User user2 = service.addUser("Meek", "m@email.com", "nice");
        }
        catch (DataIntegrityViolationException dive){
            System.out.println("email is already taken");
        }
    }

    @Test
    void updateUser() {
        User user = new User();
        user.setEmail("email");
        user.setPassword("password");
        user.setName("name");
        service.saveUser(user);
        User user1 = service.getUserByUsernameAndPassword("email", "password");
        System.out.println(user1);
        User user2 = new User(1, "email", "password", "");
        System.out.println(service.updateUser(user2));
        System.out.println(service.getUsers());
    }

    @Test
    void saveUser() {
    }

    @Test
    void testJackson(){
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> productList = new ArrayList<>();
        String[] categories = {
                "Adventure", "Fantasy", "Classic", "Thriller", "Mystery", "Horror","Religion", "Manga", "Biography", "History", "Horror", "Mystery", "Romance", "Sci", "Historical"
        };
        try{
            JsonNode node = objectMapper.readTree(new URL("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=FILTER_UNDEFINED&langRestrict=en&orderBy=newest&fields=totalItems,items(volumeInfo/title,id)&maxResults=40"));
            JsonNode arrayNode = node.get("items");
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            for(JsonNode id_node: arrayNode){
                String id= id_node.get("id").asText();
                //System.out.println(id);
                JsonNode live_node = objectMapper.readTree(new URL(String.format("https://www.googleapis.com/books/v1/volumes/%s?fields=id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publisher,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks,saleInfo/listPrice,saleInfo/retailPrice", id)));
                JsonNode volume_node = live_node.get("volumeInfo");
                String title = volume_node.get("title").asText();
                String author = volume_node.get("authors").get(0).asText();
                String description = volume_node.get("description").asText();
                String date = volume_node.get("publishedDate").asText();
                String category = "books";
                String subcategory = "fiction";
                String subsubcategory = "";
                JsonNode cats = volume_node.get("categories");
                boolean exit = false;
                for(String ssc: categories){
                    for(JsonNode ccc: cats){
                        if(ccc.asText().toLowerCase(Locale.ROOT).contains(ssc.toLowerCase(Locale.ROOT))){
                            subsubcategory = ssc;
                            exit = true;
                            break;
                        }
                    }
                    if(exit)
                        break;
                }

                JsonNode imageNode = volume_node.get("imageLinks");
                boolean con = true;
                String imageUrl = "";
                if(imageNode.has("extraLarge")){
                    imageUrl = imageNode.get("extraLarge").asText();
                    con = false;
                }
                if(con && imageNode.has("large")){
                    imageUrl=imageNode.get("large").asText();
                    con=false;
                }
                if(con && imageNode.has("medium")){
                    imageUrl = imageNode.get("medium").asText();
                    con = false;
                }
                if(con)
                    System.out.println("Failed to get image for " + title);
                double price = 9.99;
                try{
                    JsonNode price_node = live_node.get("saleInfo");
                    price = price_node.get("listPrice").get("amount").asDouble();
                }
                catch (Exception e){
                    System.out.println("No price node exists for " + title);
                }
                Product product = new Product();
                product.setPrice(price);
                product.setCreator(author);
                product.setDescription(description);
                product.setTitle(title);
                product.setCategory(category);
                product.setSubcategory(subcategory);
                product.setSubsubcategory(subsubcategory);
                product.setImageUrl(imageUrl);
                try{
                    product.setCreationDate(df.parse(date));
                }
                catch (ParseException pe){
                    System.out.println("Failed to parse date for " + title);
                }
                productList.add(product);
                System.out.println(product);
            }
            //System.out.println(productList);
        }
        catch (IOException me){
            me.printStackTrace();
        }
    }

    @Test
    void testFM(){
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> productList = new ArrayList<>();
        String[] categories = { "pop"

        };
        try{
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            for(String searchCategory: categories) {
                JsonNode node = objectMapper.readTree(new URL(String.format("http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=%s&api_key=70e0a4f30ff8f0fd967f721491e8f172&format=json&limit=5", searchCategory)));
                JsonNode arrayNode = node.get("albums").get("album");
                for (JsonNode id_node : arrayNode) {
                    String id = id_node.get("mbid").asText();
                    String name = id_node.get("name").asText();
                    String artist = id_node.get("artist").get("name").asText();
                    JsonNode imageNode = id_node.get("image");
                    String imageUrl = "";
                    for(JsonNode sizes: imageNode){
                        System.out.println(sizes.get("size").asText());
                        if(sizes.get("size").asText().equals("extralarge")){
                            imageUrl = sizes.get("#text").asText();
                        }
                    }
                    String url = String.format("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=70e0a4f30ff8f0fd967f721491e8f172&artist=%s&album=%s&format=json", URLEncoder.encode(artist, StandardCharsets.UTF_8.toString()), URLEncoder.encode(name, StandardCharsets.UTF_8.toString()));
                    System.out.println(url);
                    JsonNode live_node = objectMapper.readTree(new URL(url)).get("album");

                    if(!live_node.has("wiki")) {
                        continue;
                    }
                    String description = live_node.get("wiki").get("content").asText();
                    String summary = live_node.get("wiki").get("summary").asText();
                    Date date = getDateFromSummary(summary);

                    String category = "music";

                    double price = 9.99;
                    Product product = new Product();
                    product.setPrice(price);
                    product.setCreator(artist);
                    product.setDescription(description);
                    product.setTitle(name);
                    product.setCategory(category);
                    product.setSubcategory(searchCategory);
                    product.setSubsubcategory("");
                    product.setImageUrl(imageUrl);
                    product.setCreationDate(date);
                    productList.add(product);
                    System.out.println(product);
                }
                //System.out.println(productList);
            }
        }
        catch (IOException me){
            me.printStackTrace();
        }
    }
    private static Date getDateFromSummary(String description){
        SimpleDateFormat sdf = new SimpleDateFormat("MMMM dd, yyyy");
        Date date = null;
        String[] months = {"January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"};
        try {
            for(String month: months){
                int index = description.toLowerCase(Locale.ROOT).indexOf("released on " + month.toLowerCase(Locale.ROOT));
                if(index != -1) {
                    String value = description.substring(index + 12, index + 12 + month.length() + 9);
                    System.out.println(value);
                    System.out.println(index);
                    date = sdf.parse(value);
                    System.out.println(date);
                }
            }

        }
        catch (Exception e){
            System.out.println("Try something else...");
        }
        return date;
    }

    @Test
    void testMovie(){
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode node = objectMapper.readTree(new URL("file:src/test/resources/movie_genre.json"));
                JsonNode genreArray = node.get("genres");
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                for (JsonNode genre : genreArray) {
                    int genre_id = genre.get("id").asInt();
                    String genre_name = genre.get("name").asText();
                    String url = String.format("https://api.themoviedb.org/3/discover/movie?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=%s&with_watch_monetization_types=flatrate", genre_id);
                    JsonNode genre_list_node = objectMapper.readTree(new URL(url)).get("results");
                    for (JsonNode genre_movie : genre_list_node) {
                        String title = genre_movie.get("title").asText();
                        int id = genre_movie.get("id").asInt();
                        String imdb_url = String.format("https://api.themoviedb.org/3/movie/%s?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US", id);
                        System.out.println(imdb_url);
                        JsonNode movie_node = objectMapper.readTree(new URL(imdb_url));
                        String crew_url = String.format("https://api.themoviedb.org/3/movie/%s/credits?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US", id);
                        JsonNode directory_node = objectMapper.readTree(new URL(crew_url));
                        String creator = "";
                        for(JsonNode jobs: directory_node.get("crew")){
                            if(jobs.get("job").asText().equals("Director")){
                                creator = jobs.get("name").asText();
                            }
                        }
                        String description = movie_node.get("overview").asText();
                        Date date = null;
                        try {
                            date = sdf.parse(movie_node.get("release_date").asText());
                        } catch (ParseException pe) {
                            System.out.println("Failed to parse date for " + title);
                        }
                        String category = "video";
                        String imageUrl = "https://image.tmdb.org/t/p/w500" + movie_node.get("poster_path").asText();

                        Product product = new Product();
                        product.setPrice(29.99);
                        product.setCreator(creator);
                        product.setDescription(description);
                        product.setTitle(title);
                        product.setCategory(category);
                        product.setSubcategory("movie");
                        product.setSubsubcategory(genre_name);
                        product.setImageUrl(imageUrl);
                        product.setCreationDate(date);
                        System.out.println(product);
                    }
                }

            } catch (IOException ioe) {
                ioe.printStackTrace();
            }
    }

    @Test
    void testTV(){
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode node = objectMapper.readTree(new URL("file:src/test/resources/tv_genre.json"));
            JsonNode genreArray = node.get("genres");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            System.out.println("HIT1");
            for (JsonNode genre : genreArray) {
                int genre_id = genre.get("id").asInt();
                String genre_name = genre.get("name").asText();
                String url = String.format("https://api.themoviedb.org/3/discover/tv?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=%s&with_watch_monetization_types=flatrate", genre_id);
                JsonNode genre_list_node = objectMapper.readTree(new URL(url)).get("results");
                System.out.println(url);
                for (JsonNode genre_movie : genre_list_node) {
                    String title = genre_movie.get("name").asText();
                    int id = genre_movie.get("id").asInt();
                    String imdb_url = String.format("https://api.themoviedb.org/3/tv/%s?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US", id);
                    System.out.println(imdb_url);
                    JsonNode movie_node = objectMapper.readTree(new URL(imdb_url));
                    String creator = movie_node.get("created_by").size() != 0
                            ? movie_node.get("created_by").get(0).get("name").asText()
                            : movie_node.get("production_companies").get(0).get("name").asText();
                    String description = movie_node.get("overview").asText();
                    Date date = null;
                    try {
                        date = sdf.parse(movie_node.get("first_air_date").asText());
                    } catch (ParseException pe) {
                        System.out.println("Failed to parse date for " + title);
                    }
                    String category = "video";
                    String imageUrl = "https://image.tmdb.org/t/p/w500" + movie_node.get("poster_path").asText();

                    Product product = new Product();
                    product.setPrice(24.99);
                    product.setCreator(creator);
                    product.setDescription(description);
                    product.setTitle(title);
                    product.setCategory(category);
                    product.setSubcategory("tv");
                    product.setSubsubcategory(genre_name);
                    product.setImageUrl(imageUrl);
                    product.setCreationDate(date);
                    System.out.println(product);
                }
            }

        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
    }
}