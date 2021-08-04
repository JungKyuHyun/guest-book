import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { boxShadows } from 'styles/boxshadows';
import {
  ButtonVariant,
  ButtonSize,
  SIZE_OF_STYLES,
  VARIANT_OF_STYLES,
} from './constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFill?: boolean;
  children?: ReactNode;
}

export function Button({
  variant = 'secondary',
  type = 'button',
  size = 'medium',
  isFill = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      size={size}
      variant={disabled ? 'disabled' : variant}
      disabled={disabled}
      isFill={isFill}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<
  Required<Pick<ButtonProps, 'size' | 'variant' | 'isFill'>>
>`
  appearance: none;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  line-height: 1.75;
  min-width: 64px;

  box-shadow: ${boxShadows.dp1};

  ${({ isFill }) =>
    isFill &&
    css`
      width: 100%;
    `};
  ${({ size }) => SIZE_OF_STYLES[size]};
  ${({ variant }) => VARIANT_OF_STYLES[variant]};

  &:disabled {
    box-shadow: none;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }
`;
