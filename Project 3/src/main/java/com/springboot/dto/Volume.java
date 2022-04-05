package com.springboot.dto;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.IOException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Volume {
    private long id;
    private String google_id;
    private String title;
    private String subtitle;
    private String[] authors;
    private String publisher;
    private String publishDateString;
    private String description;
    private String ISBN10;
    private String ISBN13;
    private String[] categories;
    private String imageLink;
    private String country;
    private double listPrice;
    private double retailPrice;

    private Product getProduct(){
        String formatted_title = title;
        if(subtitle != null && !subtitle.equals(""))
            formatted_title += ": " + subtitle;

        Product product = new Product();
        product.setTitle(formatted_title);
        product.setCreator(authors[0]);
        product.setDescription(description);
        product.setPrice(listPrice);
        return product;
    }

    public static List<Product> getFictionBooks(String subcategory){
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> productList = new ArrayList<>();
        String[] categories = {
                "Horror", "Adventure", "Fantasy", "Classic", "Thriller", "Mystery", "Romance", "Science Fiction"
        };

        for(int page=0;page<10;page++){
            try {
                JsonNode node = objectMapper.readTree(new URL(String.format("https://www.googleapis.com/books/v1/volumes?q=subject:%s&filter=FILTER_UNDEFINED&langRestrict=en&orderBy=newest&fields=totalItems,items(volumeInfo/title,id)&maxResults=40&startIndex=%s", "fiction", (page*40))));
                int totalItems = node.get("totalItems").asInt();
                if(totalItems - page*40 < 40){
                    page=11;
                }
                JsonNode arrayNode = node.get("items");
                SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                for (JsonNode id_node : arrayNode) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    String id = id_node.get("id").asText();
                    JsonNode live_node = objectMapper.readTree(new URL(String.format("https://www.googleapis.com/books/v1/volumes/%s?fields=id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publisher,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks,saleInfo/listPrice,saleInfo/retailPrice", id)));
                    JsonNode volume_node = live_node.get("volumeInfo");
                    String title = volume_node.get("title").asText();
                    String author = volume_node.get("authors").get(0).asText();
                    if(!volume_node.has("description"))
                        continue;
                    String description = volume_node.get("description").asText();
                    if(!volume_node.has("publishedDate"))
                        continue;
                    String date = volume_node.get("publishedDate").asText();
                    String category = "books";
                    String subsubcategory = "";
                    JsonNode cats = volume_node.get("categories");
                    if(!volume_node.has("categories"))
                        continue;
                    boolean exit = false;
                    for (String ssc : categories) {
                        for (JsonNode ccc : cats) {
                            if (ccc.asText().toLowerCase(Locale.ROOT).contains(ssc.toLowerCase(Locale.ROOT))) {
                                subsubcategory = ssc;
                                exit = true;
                                break;
                            }
                        }
                        if (exit)
                            break;
                    }

                    JsonNode imageNode = volume_node.get("imageLinks");
                    boolean con = true;
                    String imageUrl = "";
                    if (imageNode.has("extraLarge")) {
                        imageUrl = imageNode.get("extraLarge").asText();
                        con = false;
                    }
                    if (con && imageNode.has("large")) {
                        imageUrl = imageNode.get("large").asText();
                        con = false;
                    }
                    if (con && imageNode.has("medium")) {
                        imageUrl = imageNode.get("medium").asText();
                        con = false;
                    }
                    if (con) {
                        System.out.println("Failed to get image for " + title);
                        continue;
                    }

                    double price = 9.99;
                    try {
                        JsonNode price_node = live_node.get("saleInfo");
                        price = price_node.get("listPrice").get("amount").asDouble();
                    } catch (Exception e) {
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
                    try {
                        product.setCreationDate(df.parse(date));
                    } catch (ParseException pe) {
                        System.out.println("Failed to parse date for " + title);
                    }
                    productList.add(product);
                    //System.out.println(product);
                }
                //System.out.println(productList);
            } catch (IOException me) {
                me.printStackTrace();
            }
        }
        return productList;
    }

    public static List<Product> getNonFictionBooks(String subcategory){
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> productList = new ArrayList<>();
        String[] categories = {
                "Religion", "Biography", "History", "Art", "True Crime", "Cookbooks", "Garden", "Health"
        };
        for(String searchCategory: categories) {
            try {
                JsonNode node = objectMapper.readTree(new URL(String.format("https://www.googleapis.com/books/v1/volumes?q=subject:%s&filter=FILTER_UNDEFINED&langRestrict=en&orderBy=newest&fields=totalItems,items(volumeInfo/title,id)&maxResults=40", searchCategory)));
                int totalItems = node.get("totalItems").asInt();
                JsonNode arrayNode = node.get("items");
                SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                for (JsonNode id_node : arrayNode) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    }
                    catch (Exception e){
                        e.printStackTrace();
                    }
                    String id = id_node.get("id").asText();
                    JsonNode live_node = objectMapper.readTree(new URL(String.format("https://www.googleapis.com/books/v1/volumes/%s?fields=id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publisher,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks,saleInfo/listPrice,saleInfo/retailPrice", id)));
                    JsonNode volume_node = live_node.get("volumeInfo");
                    String title = volume_node.get("title").asText();
                    if(!volume_node.has("authors"))
                        continue;
                    String author = volume_node.get("authors").get(0).asText();
                    if(!volume_node.has("description"))
                        continue;
                    String description = volume_node.get("description").asText();
                    if(!volume_node.has("publishedDate"))
                        continue;
                    String date = volume_node.get("publishedDate").asText();
                    String category = "books";
                    String subsubcategory = "";
                    if(!volume_node.has("categories"))
                        continue;
                    JsonNode cats = volume_node.get("categories");

                    boolean exit = false;
                    for (String ssc : categories) {
                        for (JsonNode ccc : cats) {
                            if (ccc.asText().toLowerCase(Locale.ROOT).contains(ssc.toLowerCase(Locale.ROOT))) {
                                subsubcategory = ssc;
                                exit = true;
                                break;
                            }
                        }
                        if (exit)
                            break;
                    }

                    if(!volume_node.has("imageLinks"))
                        continue;
                    JsonNode imageNode = volume_node.get("imageLinks");
                    boolean con = true;
                    String imageUrl = "";
                    if (imageNode.has("extraLarge")) {
                        imageUrl = imageNode.get("extraLarge").asText();
                        con = false;
                    }
                    if (con && imageNode.has("large")) {
                        imageUrl = imageNode.get("large").asText();
                        con = false;
                    }
                    if (con && imageNode.has("medium")) {
                        imageUrl = imageNode.get("medium").asText();
                        con = false;
                    }
                    if (con) {
                        System.out.println("Failed to get image for " + title);
                        continue;
                    }

                    double price = 9.99;
                    try {
                        JsonNode price_node = live_node.get("saleInfo");
                        price = price_node.get("listPrice").get("amount").asDouble();
                    } catch (Exception e) {
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
                    try {
                        product.setCreationDate(df.parse(date));
                    } catch (ParseException pe) {
                        System.out.println("Failed to parse date for " + title);
                    }
                    productList.add(product);
                    //System.out.println(product);
                }
                //System.out.println(productList);
            } catch (IOException me) {
                me.printStackTrace();
            }
        }
        return productList;
    }


    public static List<Product> getAlbums(){
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> productList = new ArrayList<>();
        String[] categories = { "pop", "rock", "blues", "country", "disco"

        };
        try{
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            for(String searchCategory: categories) {
                JsonNode node = objectMapper.readTree(new URL(String.format("http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=%s&api_key=70e0a4f30ff8f0fd967f721491e8f172&format=json&limit=20", searchCategory)));
                JsonNode arrayNode = node.get("albums").get("album");
                for (JsonNode id_node : arrayNode) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    }
                    catch (Exception e){
                        e.printStackTrace();
                    }
                    String id = id_node.get("mbid").asText();
                    String name = id_node.get("name").asText();
                    String artist = id_node.get("artist").get("name").asText();
                    JsonNode imageNode = id_node.get("image");
                    String imageUrl = "";
                    for(JsonNode sizes: imageNode){
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
                }
            }
        }
        catch (IOException me){
            me.printStackTrace();
        }
        return productList;
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

    public static List<Product> getMovies(){
        List<Product> productList = new ArrayList<>();
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode node = objectMapper.readTree(new URL("file:src/main/resources/movie_genre.json"));
            JsonNode genreArray = node.get("genres");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            for (JsonNode genre : genreArray) {
                int genre_id = genre.get("id").asInt();
                String genre_name = genre.get("name").asText();
                String url = String.format("https://api.themoviedb.org/3/discover/movie?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=%s&with_watch_monetization_types=flatrate", genre_id);
                JsonNode genre_list_node = objectMapper.readTree(new URL(url)).get("results");
                for (JsonNode genre_movie : genre_list_node) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    }
                    catch (Exception e){
                        e.printStackTrace();
                    }
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
                    productList.add(product);
                }
            }

        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        return productList;
    }

    public static List<Product> getTVs(){
        List<Product> productList = new ArrayList<>();
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode node = objectMapper.readTree(new URL("file:src/main/resources/tv_genre.json"));
            JsonNode genreArray = node.get("genres");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            for (JsonNode genre : genreArray) {
                int genre_id = genre.get("id").asInt();
                String genre_name = genre.get("name").asText();
                String url = String.format("https://api.themoviedb.org/3/discover/tv?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=%s&with_watch_monetization_types=flatrate", genre_id);
                JsonNode genre_list_node = objectMapper.readTree(new URL(url)).get("results");
                System.out.println(url);
                for (JsonNode genre_movie : genre_list_node) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    }
                    catch (Exception e){
                        e.printStackTrace();
                    }
                    String title = genre_movie.get("name").asText();
                    int id = genre_movie.get("id").asInt();
                    String imdb_url = String.format("https://api.themoviedb.org/3/tv/%s?api_key=e68b0c5c9e9afe80826ffef498afb1f0&language=en-US", id);
                    System.out.println(imdb_url);
                    JsonNode movie_node = objectMapper.readTree(new URL(imdb_url));
                    String creator =
                            movie_node.get("created_by").size() != 0
                                    ? movie_node.get("created_by").get(0).get("name").asText()
                                    : movie_node.get("production_companies").size() != 0
                                    ? movie_node.get("production_companies").get(0).get("name").asText()
                                    : movie_node.get("networks").size() != 0
                                    ? movie_node.get("networks").get(0).get("name").asText()
                                    : "";
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
                    productList.add(product);
                }
            }

        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        return productList;
    }
}
