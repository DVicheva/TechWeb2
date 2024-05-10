package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.ForumDao;
import com.takima.backskeleton.DAO.UsersDao;
import com.takima.backskeleton.DTO.ForumDto;
import com.takima.backskeleton.models.Forum;
import com.takima.backskeleton.models.Users;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ForumService {
    @Autowired
    private ForumDao forumDao;

    @Autowired
    private UsersDao usersDao;

    public List<ForumDto> getAllTopics() {
        List<Forum> topics = forumDao.findAllByParentMessageIsNull();
        return topics.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public List<ForumDto> getRepliesForMessage(Long messageId) {
        Optional<Forum> parentMessage = forumDao.findById(messageId);
        return parentMessage.map(forum -> forumDao.findAllByParentMessage(forum)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList())).orElse(null);
    }

    public List<ForumDto> getMessagesByUser(Long userId) {
        Users user = usersDao.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        List<Forum> messages = forumDao.findAllByUser(user);
        return messages.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public ForumDto createMessage(ForumDto forumDto) {
        Forum message = new Forum();
        Users user = usersDao.findById(forumDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        message.setUser(user);
        BeanUtils.copyProperties(forumDto, message, "messageId", "parentMessage");
        message.setPostedAt(LocalDateTime.now());

        if (forumDto.getParentId() != null) {
            Forum parentMessage = forumDao.findById(forumDto.getParentId())
                    .orElseThrow(() -> new IllegalArgumentException("Message parent introuvable"));
            message.setParentMessage(parentMessage);
        }

        Forum savedMessage = forumDao.save(message);
        return mapToDTO(savedMessage);
    }

    private ForumDto mapToDTO(Forum message) {
        return ForumDto.builder()
                .messageId(message.getMessageId())
                .parentId(message.getParentMessage() != null ? message.getParentMessage().getMessageId() : null)
                .userId(message.getUser().getUser_id())
                .username(message.getUser().getUsername())
                .message(message.getMessage())
                .postedAt(message.getPostedAt())
                .title(message.getTitle())
                .replies(message.getReplies() != null ? message.getReplies().stream().map(this::mapToDTO).collect(Collectors.toList()) : null)
                .build();
    }
}
