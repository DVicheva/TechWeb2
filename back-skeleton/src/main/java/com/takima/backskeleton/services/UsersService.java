package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.UsersDao;
import com.takima.backskeleton.DTO.UsersDto;
import com.takima.backskeleton.models.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UsersService {

    private final UsersDao usersDao;

    public UsersDto createUser(UsersDto usersDto) {
        Users user = new Users();
        BeanUtils.copyProperties(usersDto, user);
        return mapToDTO(usersDao.save(user));
    }

    public UsersDto getUserByUsername(String username) {
        Users user = usersDao.findByUsername(username);
        return mapToDTO(user);
    }

    public UsersDto findByUserId(Long id) {
        Users user = usersDao.findByUserId(id);
        return mapToDTO(user);
    }

    public UsersDto loginUser(String username, String password) {
        Users user = usersDao.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return mapToDTO(user);
        } else {
            return null; // L'authentification a échoué
        }
    }

    public UsersDto save(UsersDto usersDto) {
        Users user = mapToEntity(usersDto);
        Users savedUser = usersDao.save(user);
        return mapToDTO(savedUser);
    }

    private UsersDto mapToDTO(Users user) {
        UsersDto usersDto = new UsersDto();
        BeanUtils.copyProperties(user, usersDto);
        return usersDto;
    }

    private Users mapToEntity(UsersDto usersDto) {
        Users user = new Users();
        user.setUser_id(usersDto.getUser_id());
        user.setUsername(usersDto.getUsername());
        user.setPassword(usersDto.getPassword());
        user.setFirst_name(usersDto.getFirst_name());
        user.setLast_name(usersDto.getLast_name());
        user.setEmail(usersDto.getEmail());
        return user;
    }
}
