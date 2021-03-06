import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, Colors } from 'styles/colors';
import { DEFAULT_TYPE_STYLES, Scale, DEFAULT_HTML_TAG } from './constants';
import { sanitizeHTML } from 'utils/sanitize';

const TypographyRoot = styled.span<
  Partial<Omit<TypographyProps, 'className' | 'children' | 'innerHTML'>> &
    Pick<TypographyProps, 'className'>
>`
  ${({ scale }) => scale !== undefined && DEFAULT_TYPE_STYLES[scale]};
  position: relative;
  margin: 0;
  color: ${({ theme, color }) =>
    color !== undefined && (theme.color?.[color] ?? colors.grey900)};
  white-space: pre-line;
  word-break: keep-all;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

interface TypographyProps {
  className?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  scale?: Scale;
  color?: Colors;
  fontWeight?: 400 | 700;
  innerHTML?: string;
}

export function Typography({
  className,
  children,
  as,
  scale = 'body2',
  color = 'grey900',
  fontWeight,
  innerHTML,
}: TypographyProps) {
  const renderElement =
    as !== undefined
      ? as
      : innerHTML !== undefined
      ? 'span'
      : DEFAULT_HTML_TAG[scale];

  return React.createElement(
    TypographyRoot,
    {
      as: renderElement,
      className,
      fontWeight,
      scale,
      color,
      dangerouslySetInnerHTML: sanitizeHTML(innerHTML),
    },
    children
  );
}
<a />;
