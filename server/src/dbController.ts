import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

type Filename = 'messages' | 'users';

const basePath = resolve();

const filenames: { [key in Filename]: string } = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json'),
};

export const readDB = <T = unknown>(target: Filename) => {
  try {
    return JSON.parse(readFileSync(filenames[target], 'utf-8')) as T;
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (target: Filename, data: any) => {
  try {
    return writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};
