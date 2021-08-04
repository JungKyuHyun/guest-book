import { Msgs } from 'models/Msg';
import { useQuery } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useMsgs() {
  return useQuery<Msgs, Error>('msgs', MsgServices.getMsgs);
}
