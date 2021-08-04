import { css, useTheme } from '@emotion/react';
import { TextareaHTMLAttributes, forwardRef, Ref } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFill?: boolean;
}

export const Textarea = forwardRef(function (
  { isFill = false, ...others }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const { color, boxShadow } = useTheme();

  return (
    <textarea
      css={css`
        padding: 12px;
        border-radius: 4px;
        border: none;
        box-shadow: ${boxShadow.dp1};
        min-width: 300px;

        ${isFill &&
        css`
          width: 100%;
        `}

        &:focus-visible,
        &:focus {
          outline: ${color.blue400} solid 1px;
          background: ${color.grey50};
        }
      `}
      ref={ref}
      {...others}
    />
  );
});
