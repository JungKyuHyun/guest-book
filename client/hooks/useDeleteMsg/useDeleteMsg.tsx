import { AxiosError } from 'axios';
import { Msg, Msgs } from 'models/Msg';
import { useMutation, useQueryClient } from 'react-query';
import { MsgServices } from 'services/message.service';

export function useDeleteMsg() {
  const queryClient = useQueryClient();

  return useMutation<string, AxiosError, Pick<Msg, 'id' | 'userId'>>(
    ({ id, userId }) => MsgServices.deleteMsg(id, userId),
    {
      onSuccess: async (deletedId) => {
        await queryClient.cancelQueries('msgs');
        const previousMsgs = queryClient.getQueryData<Msgs>('msgs');

        if (previousMsgs !== undefined) {
          const targetIndex = previousMsgs.findIndex(
            (msg) => msg.id === deletedId
          );
          if (targetIndex < 0) return;
          const newMsg = [...previousMsgs];
          newMsg.splice(targetIndex, 1);
          queryClient.setQueryData('msgs', newMsg);
        }
      },
    }
  );
}
