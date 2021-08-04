import { css, SerializedStyles } from '@emotion/react';

export const SCALE = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  subtitle3: 'subtitle3',
  body1: 'body1',
  body2: 'body2',
  caption1: 'caption1',
  caption2: 'caption2',
} as const;

export type Scale = keyof typeof SCALE;

export const DEFAULT_HTML_TAG: { [key in Scale]: keyof JSX.IntrinsicElements } =
  {
    [SCALE.h1]: 'h1',
    [SCALE.h2]: 'h2',
    [SCALE.h3]: 'h3',
    [SCALE.h4]: 'h4',
    [SCALE.h5]: 'h5',
    [SCALE.h6]: 'h6',

    [SCALE.subtitle1]: 'h6',
    [SCALE.subtitle2]: 'h6',
    [SCALE.subtitle3]: 'h6',
    [SCALE.body1]: 'p',
    [SCALE.body2]: 'p',
    [SCALE.caption1]: 'span',
    [SCALE.caption2]: 'span',
  };

export const DEFAULT_TYPE_STYLES: { [key in Scale]: SerializedStyles } = {
  [SCALE.h1]: css`
    font-size: 96px;
    font-weight: lighter;
    letter-spacing: -1.5px;
  `,
  [SCALE.h2]: css`
    font-size: 60px;
    font-weight: lighter;
    letter-spacing: -0.5px;
  `,
  [SCALE.h3]: css`
    font-size: 48px;
    font-weight: normal;
    letter-spacing: 0;
  `,
  [SCALE.h4]: css`
    font-size: 34px;
    font-weight: normal;
    letter-spacing: 0.25px;
  `,
  [SCALE.h5]: css`
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0;
  `,
  [SCALE.h6]: css`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.15px;
  `,
  [SCALE.subtitle1]: css`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.15px;
  `,
  [SCALE.subtitle2]: css`
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.1px;
  `,
  [SCALE.subtitle3]: css`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1px;
  `,
  [SCALE.body1]: css`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.5px;
  `,
  [SCALE.body2]: css`
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.1px;
  `,
  [SCALE.caption1]: css`
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.1px;
  `,
  [SCALE.caption2]: css`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0;
  `,
};
