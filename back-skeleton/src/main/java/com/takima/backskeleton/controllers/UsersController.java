package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.UsersDto;
import com.takima.backskeleton.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("connexion")
public class UsersController {

    @Autowired
    private UsersService usersService;
    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<UsersDto> registerUser(@RequestBody UsersDto usersDTO) {
        UsersDto createdUser = usersService.createUser(usersDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping("/{username}")
    public ResponseEntity<UsersDto> getUserByUsername(@PathVariable String username) {
        UsersDto user = usersService.getUserByUsername(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<UsersDto> loginUser(@RequestBody UsersDto usersDto) {
        UsersDto authenticatedUser = usersService.loginUser(usersDto.getUsername(), usersDto.getPassword());
        if (authenticatedUser != null) {
            return new ResponseEntity<>(authenticatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // Authentification échouée
        }
    }
    @CrossOrigin
    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser() {
        // Implémenter la logique de déconnexion ici
        // Par exemple, vous pouvez effacer les informations d'identification de l'utilisateur de la session
        return new ResponseEntity<>("User logged out successfully", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsersDto> getUserById(@PathVariable Long id) {
        UsersDto user = usersService.findByUserId(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsersDto> updateUser(@PathVariable Long id, @RequestBody UsersDto userDetails) {
        UsersDto user = usersService.findByUserId(id);

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setUsername(userDetails.getUsername());

        // Mettre à jour les autres attributs test

        final UsersDto updatedUser = usersService.save(user);
        return ResponseEntity.ok(updatedUser);
    }
}