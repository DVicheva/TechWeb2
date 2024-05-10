import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { AuthService } from '../services/auth.service';
import { ForumMessage } from '../models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  topics: ForumMessage[] = [];
  replies: ForumMessage[] = [];
  selectedTopic: ForumMessage | null = null;
  newMessage: string = '';
  newTitle: string = '';

  constructor(
    private forumService: ForumService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics(): void {
    this.forumService.getAllTopics().subscribe({
      next: (topics) => {
        this.topics = topics;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des topics', err);
      }
    });
  }

  selectTopic(topic: ForumMessage): void {
    this.selectedTopic = topic;
    this.loadReplies(topic.messageId);
  }

  loadReplies(messageId: number): void {
    this.forumService.getRepliesForMessage(messageId).subscribe({
      next: (replies) => {
        this.replies = replies;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des réponses', err);
      }
    });
  }

  createTopic(): void {
    const userId = this.authService.getUserId();
    const username = this.authService.getUsername()!;
    if (userId && this.newTitle && this.newMessage) {
      const newTopic: ForumMessage = {
        messageId: 0,
        userId: userId,
        username: username,
        message: this.newMessage,
        postedAt: new Date().toISOString(),
        title: this.newTitle,
        parentId: null
      };

      this.forumService.createMessage(newTopic).subscribe({
        next: () => {
          this.loadTopics();
          this.newMessage = '';
          this.newTitle = '';
        },
        error: (err) => {
          console.error('Erreur lors de la création du topic', err);
        }
      });
    }
  }

  replyToMessage(): void {
    const userId = this.authService.getUserId();
    const username = this.authService.getUsername()!;
    if (userId && this.selectedTopic && this.newMessage) {
      const newReply: ForumMessage = {
        messageId: 0,
        userId: userId,
        username: username,
        message: this.newMessage,
        postedAt: new Date().toISOString(),
        title: null,
        parentId: this.selectedTopic.messageId
      };

      this.forumService.createMessage(newReply).subscribe({
        next: () => {
          this.loadReplies(this.selectedTopic!.messageId);
          this.newMessage = '';
        },
        error: (err) => {
          console.error('Erreur lors de la création de la réponse', err);
        }
      });
    }
  }

  backToTopics(): void {
    this.selectedTopic = null;
    this.replies = [];
  }
}
