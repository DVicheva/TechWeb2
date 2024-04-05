package com.takima.backskeleton.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200") // Autorise les requêtes depuis cette origine
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Autorise ces méthodes HTTP
                .allowedHeaders("*"); // Autorise tous les en-têtes
    }
}

