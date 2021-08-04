import { css, SerializedStyles } from '@emotion/react';
import { colors } from 'styles/colors';

const BUTTON_SIZE = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZE;

const VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  danger: 'danger',
  disabled: 'disabled',
  text: 'text',
} as const;

export type ButtonVariant = keyof typeof VARIANT;

export const SIZE_OF_STYLES: { [key in ButtonSize]: SerializedStyles } = {
  [BUTTON_SIZE.large]: css`
    padding: 8px 22px;
    font-weight: 700;
    font-size: 15px;
    min-height: 48px;
  `,
  [BUTTON_SIZE.medium]: css`
    padding: 6px 16px;
    font-weight: 500;
    font-size: 14px;
    min-height: 40px;
  `,
  [BUTTON_SIZE.small]: css`
    padding: 4px 10px;
    font-weight: 500;
    font-size: 13px;
    min-height: 36px;
  `,
  [BUTTON_SIZE.xSmall]: css`
    padding: 4px;
    font-weight: 500;
    font-size: 13px;
    min-height: 30px;
    min-width: 48px;
  `,
};

export const VARIANT_OF_STYLES: { [key in ButtonVariant]: SerializedStyles } = {
  [VARIANT.primary]: css`
    background: ${colors.blue500};
    color: ${colors.black};

    &:hover {
      background: ${colors.blue600};
    }
  `,
  [VARIANT.secondary]: css`
    background: ${colors.grey300};
    color: ${colors.black};

    &:hover {
      background: ${colors.grey400};
    }
  `,
  [VARIANT.dark]: css`
    background: ${colors.black};
    color: ${colors.grey50};

    &:hover {
      background: ${colors.grey900};
    }
  `,
  [VARIANT.danger]: css`
    background: ${colors.red400};
    color: ${colors.grey50};

    &:hover {
      background: ${colors.red500};
    }
  `,
  [VARIANT.disabled]: css`
    background: ${colors.grey500};
    color: ${colors.grey300};
  `,
  [VARIANT.text]: css`
    background: transparent;
    color: ${colors.black};
    box-shadow: none;

    &:hover {
      background: ${colors.grey100};
    }
  `,
};
