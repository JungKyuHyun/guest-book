import { User } from 'models/User';
import { useQuery } from 'react-query';
import { getUserById } from 'services/getUserById';

export function useUser(userId?: string) {
  return useQuery<User, Error>(['user', userId], () => getUserById(userId!), {
    enabled: userId !== undefined,
  });
}
