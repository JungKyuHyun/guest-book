import { AxiosError } from 'axios';
import { Message, Messages } from 'models/Message';
import { useMutation, useQueryClient } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useCreateMsg() {
  const queryClient = useQueryClient();

  return useMutation<
    Message,
    AxiosError,
    Pick<Message, 'userId' | 'description'>
  >(({ userId, description }) => MsgServices.createMsg(userId, description), {
    onSuccess: async (newMsg) => {
      await queryClient.cancelQueries('msgs');

      const previousMsgs = queryClient.getQueryData<Messages>('msgs');
      if (previousMsgs !== undefined) {
        queryClient.setQueryData('msgs', [newMsg, ...previousMsgs]);
      }
    },
  });
}
