import { HttpClient } from 'core/HttpClient';
import { User } from 'models/user';

export const getUserById = async (userId: string) => {
  const { data } = await HttpClient.get<User>(`/user/${userId}`);
  return data;
};
