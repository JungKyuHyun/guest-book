import { MessageDto } from './Message.dto';

export class MessageModel {
  private id;
  private title;
  private description;
  private timestamp;

  constructor({ id, title, description, timestamp }: MessageDto) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.timestamp = timestamp;
  }

  getMessageById() {}
}
