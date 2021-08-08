import { Messages } from 'models/Message';
import { useQuery } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useMsgs() {
  return useQuery<Messages, Error>('msgs', MsgServices.getMsgs);
}
