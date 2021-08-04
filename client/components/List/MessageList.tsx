import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { List, MessageItemProps } from './type';
import { MessageItem } from './MessageItem';
import { useCallback, useState } from 'react';
import { Typography } from 'components/Typography';

interface SimpleListProps extends List<MessageItemProps> {
  className?: string;
  isLoading?: boolean;
  onEdit?: (text: string, id: string) => void;
  onDelete?: (id: string) => void;
  currentUserName?: string;
}

export function MessageList({
  className,
  onEdit,
  onDelete,
  options,
  isLoading = false,
  currentUserName,
}: SimpleListProps) {
  const [editId, setEditId] = useState<string | null>(null);

  const handleEditClick = useCallback(
    (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setEditId((prev) => (prev === null || prev !== id ? id : null));
    },
    []
  );

  const handleEdit = useCallback(
    (text: string, id: string) => {
      setEditId(null);
      onEdit?.(text, id);
    },
    [onEdit]
  );

  const handleDelete = useCallback(
    (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setEditId(null);
      onDelete?.(id);
    },
    [onDelete]
  );

  if (isLoading) {
    return <Typography>댓글를 가져오는 중입니다...</Typography>;
  }

  if (options === undefined) {
    return <Typography>첫번째 댓글을 남겨주세요!</Typography>;
  }

  return (
    <ul className={className}>
      {options.map(({ id, userName, ...others }) => (
        <ItemContainer key={id}>
          <MessageItem
            id={id}
            userName={userName}
            isEdit={id === editId}
            onEdit={handleEdit}
            {...others}
          />
          {currentUserName === userName && (
            <>
              <DeleteButton
                size='xSmall'
                variant='text'
                onClick={handleDelete(id)}
              >
                [삭제]
              </DeleteButton>
              <EditButton
                size='xSmall'
                variant='text'
                onClick={handleEditClick(id)}
              >
                [{editId === id ? '취소' : '수정'}]
              </EditButton>
            </>
          )}
        </ItemContainer>
      ))}
    </ul>
  );
}

const DeleteButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 64px;
`;

const EditButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ItemContainer = styled.div`
  position: relative;
`;
