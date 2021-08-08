export interface Message {
  id: string;
  userId: string;
  description: string;
  timestamp: number;
}

export type Messages = ReadonlyArray<Message>;
