import { boxShadows } from './boxshadows';
import { colors } from './colors';

export const theme = {
  color: colors,
  boxShadow: boxShadows,
};

export type Theme = typeof theme;
