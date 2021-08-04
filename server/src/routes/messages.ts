import { readDB, writeDB } from 'dbController';
import { Routes, HttpMethod } from './type';
import { v4 } from 'uuid';
import { MessageDto } from 'models/Message';

const getMsgs = () => readDB<ReadonlyArray<MessageDto>>('messages') ?? [];
const setMsgs = (data: any) => writeDB('messages', data);

export const messagesRoute: Routes = [
  {
    method: HttpMethod.GET,
    route: '/messages',
    handler: (req, res) => {
      const msgs = getMsgs();
      res.send(msgs);
    },
  },
  {
    method: HttpMethod.GET,
    route: '/messages/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find((m) => m.id === id);
        if (!msg) {
          res.status(404).send('메시지를 찾을 수 없습니다.');
          return;
        }
        res.send(msg);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
  {
    method: HttpMethod.POST,
    route: '/messages',
    handler: ({ body }, res) => {
      try {
        const msgs = getMsgs();
        if (body?.userId === undefined) {
          res.status(404).send('사용자 정보가 없습니다.');
          return;
        }
        const newMsg = {
          id: v4(),
          description: body?.description ?? '',
          userId: body.userId,
          timestamp: Date.now(),
        };
        writeDB('messages', [newMsg, ...msgs]);
        res.send(newMsg);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
  {
    method: HttpMethod.PUT,
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) {
          res.status(404).send('메시지를 찾을 수 없습니다.');
          return;
        }
        if (msgs[targetIndex].userId !== body.userId) {
          res.status(404).send('사용자가 다릅니다.');
          return;
        }

        const modifiedMsg = {
          ...msgs[targetIndex],
          description: body.description,
        };
        const newMsg = [...msgs];
        newMsg.splice(targetIndex, 1, modifiedMsg);
        setMsgs(newMsg);

        res.send(modifiedMsg);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
  {
    method: HttpMethod.DELETE,
    route: '/messages/:id',
    handler: ({ query, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) {
          res.status(404).send('메시지를 찾을 수 없습니다.');
          return;
        }
        if (msgs[targetIndex].userId !== query.userId) {
          res.status(404).send('사용자가 다릅니다.');
          return;
        }
        const newMsg = [...msgs];
        newMsg.splice(targetIndex, 1);
        setMsgs(newMsg);
        res.send(id);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
];
