package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.ForumDto;
import com.takima.backskeleton.services.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/forum")
@CrossOrigin
public class ForumController {
    @Autowired
    private ForumService forumService;

    @GetMapping("/topics")
    public ResponseEntity<List<ForumDto>> getAllTopics() {
        List<ForumDto> topics = forumService.getAllTopics();
        return new ResponseEntity<>(topics, HttpStatus.OK);
    }

    @GetMapping("/{messageId}/replies")
    public ResponseEntity<List<ForumDto>> getRepliesForMessage(@PathVariable Long messageId) {
        List<ForumDto> replies = forumService.getRepliesForMessage(messageId);
        return new ResponseEntity<>(replies, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ForumDto>> getMessagesByUser(@PathVariable Long userId) {
        List<ForumDto> messages = forumService.getMessagesByUser(userId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<ForumDto> createMessage(@RequestBody ForumDto forumDto) {
        if (forumDto.getUsername() == null || forumDto.getUsername().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        ForumDto createdMessage = forumService.createMessage(forumDto);
        return new ResponseEntity<>(createdMessage, HttpStatus.CREATED);
    }
}
