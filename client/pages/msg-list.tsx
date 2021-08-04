import { MessageList } from 'components/List';
import { TextAreaForm } from 'components/Form';
import { Typography } from 'components/Typography';
import { useCallback } from 'react';
import { Spacer } from 'components/Spacer';
import { useMsgs } from 'hooks/useMsgs';
import { useUrlQuery } from 'hooks/useUrlQuery';
import { useMemo } from 'react';
import { useCreateMsg } from 'hooks/useCreateMsg';
import { useUpdateMsg } from 'hooks/useUpdateMsg';
import { useDeleteMsg } from 'hooks/useDeleteMsg';

function MsgList() {
  const { userName = 'guest' } = useUrlQuery<{ userName: string }>();
  const { data: msgs, isLoading: msgsLoading } = useMsgs();
  const createMessage = useCreateMsg();
  const updateMessage = useUpdateMsg();
  const deleteMsg = useDeleteMsg();

  const messageOptions = useMemo(() => {
    if (msgs === undefined) return;

    return msgs.map(({ userId, ...others }) => ({
      userName: userId,
      ...others,
    }));
  }, [msgs]);

  const handleContentsSubmit = useCallback(
    (description: string) => {
      createMessage.mutate({ userId: userName, description });
    },
    [userName, createMessage.mutate]
  );

  const handleUpdate = useCallback(
    (description: string, id: string) => {
      updateMessage.mutate({ userId: userName, description, id });
    },
    [userName, updateMessage.mutate]
  );

  const handleDelete = useCallback(
    (id: string) => {
      if (!confirm('정말 삭제하시겠습니까?')) return;
      deleteMsg.mutate({ id, userId: userName });
    },
    [userName, deleteMsg.mutate]
  );

  return (
    <>
      <Typography scale='h4'>방명록</Typography>
      <Spacer mb={20} />
      <TextAreaForm
        onSubmit={handleContentsSubmit}
        buttonLabel='등록'
        placeholder='소중한 댓글이 큰 힘이 됩니다.'
        formId='new'
      />
      <MessageList
        isLoading={msgsLoading}
        options={messageOptions}
        onEdit={handleUpdate}
        onDelete={handleDelete}
        currentUserName={userName}
      />
    </>
  );
}

export default MsgList;
