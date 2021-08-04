import { MessageModel } from 'models/Message/Message.model';
import { Service } from 'typedi';

@Service()
export class MessageService {
  constructor(private messageModal: MessageModel) {}

  getMessageById(id: string) {
    const message = this.messageModal.getMessageById();
    return message;
  }
}
