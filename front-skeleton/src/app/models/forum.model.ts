export interface ForumMessage {
  messageId: number;
  parentId?: number | null;
  userId: number;
  username: string;
  message: string;
  postedAt: string;
  title?: string | null;
  replies?: ForumMessage[];
}
