import { css } from '@emotion/react';

type Space = 0 | 2 | 4 | 8 | 12 | 20 | 24 | 28 | 40;

type Props = {
  mt?: Space;
  mb?: Space;
};

export function Spacer({ mt = 0, mb = 0 }: Props) {
  return (
    <div
      css={css`
        display: block;
        margin-top: ${mt}px;
        margin-bottom: ${mb}px;
      `}
    />
  );
}
