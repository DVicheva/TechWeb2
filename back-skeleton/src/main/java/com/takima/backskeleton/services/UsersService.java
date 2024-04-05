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

    public UsersDto createUser(UsersDto usersDTO) {
        Users user = new Users();
        BeanUtils.copyProperties(usersDTO, user);
        return mapToDTO(usersDao.save(user));
    }

    public UsersDto getUserByUsername(String username) {
        Users user = usersDao.findByUsername(username);
        return mapToDTO(user);
    }

    private UsersDto mapToDTO(Users user) {
        UsersDto usersDTO = new UsersDto();
        BeanUtils.copyProperties(user, usersDTO);
        return usersDTO;
    }

    public UsersDto loginUser(String username, String password) {
        Users user = usersDao.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return mapToDTO(user);
        } else {
            return null; // L'authentification a échoué
        }
    }

    public void logoutUser() {

        // Par exemple, vous pouvez effacer les informations d'identification de l'utilisateur de la session

    }


    public UsersDto findByUserId(Long id) {
        Users user = usersDao.findByUserId(id);
        return mapToDTO(user);
    }

    public Users mapToEntity(UsersDto usersDto) {
        Users user = new Users();
        user.setUserId(usersDto.getId());
        user.setEmail(usersDto.getEmail());
        user.setUsername(usersDto.getUsername());
        user.setFirst_name(usersDto.getFirstName());
        user.setLast_name(usersDto.getLastName());


        return user;
    }


    public UsersDto save(UsersDto userDto) {
        Users user = mapToEntity(userDto);
        usersDao.save(user);
        return userDto;
    }
}


