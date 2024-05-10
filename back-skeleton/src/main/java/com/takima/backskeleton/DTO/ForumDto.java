package com.takima.backskeleton.DTO;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ForumDto {
    private Long messageId;
    private Long parentId;
    private Long userId;
    private String username;
    private String message;
    private LocalDateTime postedAt;
    private String title;
    private List<ForumDto> replies;
}
