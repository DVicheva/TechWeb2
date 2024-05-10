package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.UsersDto;
import com.takima.backskeleton.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/signup")
    public ResponseEntity<UsersDto> registerUser(@RequestBody UsersDto usersDTO) {
        UsersDto createdUser = usersService.createUser(usersDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/{username}")
    public ResponseEntity<UsersDto> getUserByUsername(@PathVariable String username) {
        UsersDto user = usersService.getUserByUsername(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UsersDto> loginUser(@RequestBody UsersDto usersDto) {
        UsersDto authenticatedUser = usersService.loginUser(usersDto.getUsername(), usersDto.getPassword());
        if (authenticatedUser != null) {
            //System.out.println("test : " + authenticatedUser.getUser_id());
            return new ResponseEntity<>(authenticatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/login/{id}")
    public ResponseEntity<UsersDto> getUserById(@PathVariable Long id) {
        UsersDto user = usersService.findByUserId(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsersDto> updateUser(@PathVariable Long id, @RequestBody UsersDto userDetails) {
        UsersDto user = usersService.findByUserId(id);

        user.setFirst_name(userDetails.getFirst_name());
        user.setLast_name(userDetails.getLast_name());
        user.setEmail(userDetails.getEmail());

        final UsersDto updatedUser = usersService.save(user);
        return ResponseEntity.ok(updatedUser);
    }
}
