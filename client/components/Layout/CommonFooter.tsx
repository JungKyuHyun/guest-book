import { css, useTheme } from '@emotion/react';

export function CommonFooter() {
  const { color } = useTheme();

  return (
    <footer
      css={css`
        height: 80px;
        border-top: 1px solid ${color.grey100};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <a
        css={css`
          color: #0070f3;
          text-decoration: none;
        `}
        href='https://github.com/JungKyuHyun'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by JungKyuHyun
      </a>
    </footer>
  );
}
