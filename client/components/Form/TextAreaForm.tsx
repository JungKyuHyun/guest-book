import { FormEvent, useCallback, useRef } from 'react';
import { Button } from 'components/Button';
import { Textarea, TextareaProps } from 'components/Textarea';
import styled from '@emotion/styled';
import { BREAK_POINTS } from 'styles/breakpoints';
import { toast } from 'react-toastify';

interface Props extends Omit<TextareaProps, 'onSubmit'> {
  className?: string;
  onSubmit?: (text: string, formId: string) => void;
  buttonLabel?: string;
  placeholder?: string;
  defaultValue?: string | number;
  formId: string;
}

export function TextAreaForm({
  className,
  onSubmit,
  buttonLabel,
  placeholder,
  formId,
  defaultValue,
  ...others
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (textareaRef.current === null) return;

      if (textareaRef.current.value.trim().length < 5) {
        toast.info('5자 이상 입력해 주세요.');
        return;
      }

      onSubmit?.(textareaRef.current.value, formId);
      textareaRef.current.value = '';
    },
    [onSubmit]
  );

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Textarea
        defaultValue={defaultValue}
        ref={textareaRef}
        rows={3}
        placeholder={placeholder}
        {...others}
      />
      <Button type='submit'>{buttonLabel}</Button>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  Textarea {
    min-width: 100%;
  }

  Button {
    margin-top: 8px;
    margin-left: 0;
  }

  @media (min-width: ${BREAK_POINTS.sm}px) {
    flex-direction: row;

    Textarea {
      min-width: 360px;
    }

    Button {
      margin-top: 0;
      margin-left: 8px;
    }
  }
`;
