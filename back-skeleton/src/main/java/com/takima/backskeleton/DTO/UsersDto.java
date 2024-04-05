package com.takima.backskeleton.DTO;


import lombok.*;

@Builder
@Getter

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsersDto {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private int id;
}
