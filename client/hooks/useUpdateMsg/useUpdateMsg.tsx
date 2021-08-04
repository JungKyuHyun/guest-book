import { AxiosError } from 'axios';
import { Msg, Msgs } from 'models/Msg';
import { useMutation, useQueryClient } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useUpdateMsg() {
  const queryClient = useQueryClient();

  return useMutation<Msg, AxiosError, Omit<Msg, 'timestamp'>>(
    ({ userId, description, id }) =>
      MsgServices.updateMsg(userId, description, id),
    {
      onSuccess: async (modifiedMsg) => {
        await queryClient.cancelQueries('msgs');
        const previousMsgs = queryClient.getQueryData<Msgs>('msgs');

        if (previousMsgs !== undefined) {
          const targetIndex = previousMsgs.findIndex(
            (msg) => msg.id === modifiedMsg.id
          );
          if (targetIndex < 0) return;
          const newMsg = [...previousMsgs];
          newMsg.splice(targetIndex, 1, modifiedMsg);
          queryClient.setQueryData('msgs', newMsg);
        }
      },
    }
  );
}
