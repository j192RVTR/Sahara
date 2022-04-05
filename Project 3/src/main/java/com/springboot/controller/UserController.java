package com.springboot.controller;

import com.springboot.entity.User;
import com.springboot.exception.UserException;
import com.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping
    public List<User> getUsers(){
        return service.getUsers();
    }

    @PostMapping("/validate")
    public User validate(@RequestBody User user){

        User user1 = service.getUserByUsernameAndPassword(user.getEmail(), user.getPassword());
        if(user1==null){
            throw new UserException("Login failed. Incorrect Email or Password.");
        }
        return user1;
    }

    @PostMapping
    public User register(@RequestBody User user){
        try {
            return service.saveUser(user);
        }
        catch (DataIntegrityViolationException dive){
            throw new UserException("Register failed. User found with that email.");
        }
    }

    @PutMapping
    public User update(@RequestBody User user){
        try {
            return service.updateUser(user);
        }
        catch (DataIntegrityViolationException dive){
            throw new UserException("Update failed. User found with that email.");
        }
    }
}
