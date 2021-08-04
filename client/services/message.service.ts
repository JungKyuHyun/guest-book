import { HttpClient } from 'core/HttpClient';
import { Msg, Msgs } from 'models/Msg';

export class MsgServices {
  static async getMsgs() {
    const { data } = await HttpClient.get<Msgs>('/messages');
    return data;
  }

  static async createMsg(userId: string, description: string) {
    const { data } = await HttpClient.post<Msg>('/messages', {
      userId,
      description,
    });
    return data;
  }

  static async updateMsg(userId: string, description: string, id: string) {
    const { data } = await HttpClient.put<Msg>(`/messages/${id}`, {
      userId,
      description,
    });
    return data;
  }

  static async deleteMsg(id: string, userId: string) {
    const { data } = await HttpClient.delete<Pick<Msg, 'id'>>(
      `/messages/${id}`,
      { params: { userId } }
    );
    return data;
  }
}
