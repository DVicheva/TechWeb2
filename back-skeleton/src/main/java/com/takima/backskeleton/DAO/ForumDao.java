package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Forum;
import com.takima.backskeleton.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ForumDao extends JpaRepository<Forum, Long> {
    List<Forum> findAllByParentMessageIsNull();
    List<Forum> findAllByParentMessage(Forum parentMessage);
    List<Forum> findAllByUser(Users user);
}
