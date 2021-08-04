export interface User {
  id: string;
  userId: string;
  nickName: string;
  createdAt: number;
}

export type Users = ReadonlyArray<User>;
