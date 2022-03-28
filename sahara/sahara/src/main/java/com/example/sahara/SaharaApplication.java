package com.example.sahara;

import com.example.sahara.dto.Volume;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SaharaApplication {

	@Autowired
	public static RestTemplate restTemplate;

	public static void main(String[] args) {
		SpringApplication.run(SaharaApplication.class, args);
		/*restTemplate = new RestTemplate();
		 Volume volume = restTemplate
				.getForObject("https://www.googleapis.com/books/v1/volumes?q=subject:Adventure&maxResults=40", Volume.class);
		System.out.println(volume);*/
	}

	@Bean
	public RestTemplate restTemplate(){
		return new RestTemplate();
	}

}
