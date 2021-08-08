import { HttpClient } from 'core/HttpClient';
import { Message, Messages } from 'models/Message';

export class MsgServices {
  static async getMsgs() {
    const { data } = await HttpClient.get<Messages>('/messages');
    return data;
  }

  static async createMsg(userId: string, description: string) {
    const { data } = await HttpClient.post<Message>('/messages', {
      userId,
      description,
    });
    return data;
  }

  static async updateMsg(userId: string, description: string, id: string) {
    const { data } = await HttpClient.put<Message>(`/messages/${id}`, {
      userId,
      description,
    });
    return data;
  }

  static async deleteMsg(id: string, userId: string) {
    const { data } = await HttpClient.delete<Pick<Message, 'id'>>(
      `/messages/${id}`,
      { params: { userId } }
    );
    return data;
  }
}
