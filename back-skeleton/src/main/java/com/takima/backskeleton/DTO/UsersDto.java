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
    private String first_name;
    private String last_name;
    private String email;
    private long user_id;
}
