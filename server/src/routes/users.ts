import { readDB } from 'dbController';
import { Routes, HttpMethod } from './type';

const getUsers = () => readDB<any>('users');

export const usersRoute: Routes = [
  {
    method: HttpMethod.GET,
    route: '/users',
    handler: (req, res) => {
      const users = getUsers();
      res.send(users);
    },
  },
  {
    method: HttpMethod.GET,
    route: '/users/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const users = getUsers();
        const user = users[id];
        if (user === undefined) throw Error('사용자가 없습니다.');

        res.send(user);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
];
