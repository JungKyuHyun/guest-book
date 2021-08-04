import { AxiosError } from 'axios';
import { Msg, Msgs } from 'models/Msg';
import { useMutation, useQueryClient } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useCreateMsg() {
  const queryClient = useQueryClient();

  return useMutation<Msg, AxiosError, Pick<Msg, 'userId' | 'description'>>(
    ({ userId, description }) => MsgServices.createMsg(userId, description),
    {
      onSuccess: async (newMsg) => {
        await queryClient.cancelQueries('msgs');

        const previousMsgs = queryClient.getQueryData<Msgs>('msgs');
        if (previousMsgs !== undefined) {
          queryClient.setQueryData('msgs', [newMsg, ...previousMsgs]);
        }
      },
    }
  );
}
