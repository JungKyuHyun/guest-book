import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button test', () => {
  it('renders without crashing', () => {
    render(<Button />);
  });
});
