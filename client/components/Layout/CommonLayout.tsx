import styled from '@emotion/styled';
import { ReactChild } from 'react';
import { BREAK_POINTS } from 'styles/breakpoints';
import { CommonFooter } from './CommonFooter';

interface Props {
  children: ReactChild;
}

export function CommonLayout({ children }: Props) {
  return (
    <>
      <Body>{children}</Body>
      <CommonFooter />
    </>
  );
}

const Body = styled.main`
  position: relative;
  margin: 20px;

  @media (min-width: ${BREAK_POINTS.sm}px) {
    margin: 40px;
  }
`;
