import '@emotion/react';
import { boxShadows } from 'styles/boxshadows';
import { colors } from 'styles/colors';

declare module '@emotion/react' {
  export interface Theme {
    color: typeof colors;
    boxShadow: typeof boxShadows;
  }
}
