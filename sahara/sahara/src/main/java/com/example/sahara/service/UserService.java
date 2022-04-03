package com.example.sahara.service;

import com.example.sahara.entity.User;
import com.example.sahara.exception.UserException;
import com.example.sahara.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    public UserRepository repository;

    public User getUserByUsernameAndPassword(String email, String password){
        User user = repository.findByEmailAndPassword(email, password);
        if(user != null)
            user.setPassword("***");
        return user;
    }

    public User addUser(String name, String email, String password){
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        return repository.save(user);
    }

    public User updateUser(User user){
        User userDb = repository.findById(user.getId()).get();
        if(!user.getName().isEmpty())
            userDb.setName(user.getName());
        if(!user.getEmail().isEmpty())
            userDb.setEmail(user.getEmail());
        if(!user.getPassword().isEmpty())
            userDb.setPassword(user.getPassword());
        User ret = repository.save(userDb);
        ret.setPassword("***");
        return ret;
    }

    public User saveUser(User user){
        return repository.save(user);
    }

    public List<User> getUsers(){
        return repository.findAll();
    }
}
