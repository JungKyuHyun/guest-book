export interface Msg {
  id: string;
  userId: string;
  description: string;
  timestamp: number;
}

export type Msgs = ReadonlyArray<Msg>;
