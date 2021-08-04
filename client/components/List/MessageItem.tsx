import styled from '@emotion/styled';
import { TextAreaForm } from 'components/Form';
import { MessageItemProps } from 'components/List/type';
import { Typography } from 'components/Typography';
import { BREAK_POINTS } from 'styles/breakpoints';

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

export function MessageItem({
  id,
  userName,
  description,
  timestamp,
  isEdit = false,
  onEdit,
}: MessageItemProps) {
  return (
    <Li>
      <HeaderContainer>
        <Typography scale='subtitle1' fontWeight={700}>
          {userName}
        </Typography>
        <Typography scale='caption2' as='sub' color='grey700'>
          {new Date(timestamp).toLocaleString('ko-KR', dateTimeFormatOptions)}
        </Typography>
      </HeaderContainer>

      {isEdit ? (
        <TextAreaForm
          defaultValue={description}
          buttonLabel='저장'
          onSubmit={onEdit}
          formId={id}
          autoFocus
          rows={5}
        />
      ) : (
        <DescContainer>
          <Typography scale='body2' innerHTML={description} />
        </DescContainer>
      )}
    </Li>
  );
}

const Li = styled.li`
  position: relative;
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;

  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.dp1}; ;
`;

const HeaderContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  sub {
    margin-left: 0;
    margin-top: 8px;
  }

  @media (min-width: ${BREAK_POINTS.sm}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;

    sub {
      margin-left: 8px;
      margin-top: 0;
    }
  }
`;

const DescContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
