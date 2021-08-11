import { Textarea } from './Textarea';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { matchers, createSerializer } from '@emotion/jest';
import { colors } from 'styles/colors';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import { boxShadows } from 'styles/boxshadows';
import '@testing-library/jest-dom/extend-expect';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

function ThemeTextarea(others: any) {
  return (
    <ThemeProvider theme={theme}>
      <Textarea {...others} />
    </ThemeProvider>
  );
}

describe('<Textarea />', () => {
  afterEach(cleanup);

  it('match snapshot', () => {
    // 방법 1
    const tree1 = renderer.create(<ThemeTextarea />).toJSON();
    expect(tree1).toMatchSnapshot();

    // 방법 2
    const { container } = render(
      <ThemeTextarea defaultValue='i am textarea' />
    );
    const textarea = screen.getByDisplayValue('i am textarea');
    expect(textarea).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<ThemeTextarea />);
  });

  it('should render placeholder correctly', () => {
    render(<ThemeTextarea placeholder='i am placeholder' />);
    const textarea = screen.getByPlaceholderText('i am placeholder');
    expect(textarea).toBeInTheDocument();
  });

  it('should change the data', () => {
    render(<ThemeTextarea placeholder='i am placeholder' />);
    const textarea = screen.getByPlaceholderText(
      'i am placeholder'
    ) as HTMLInputElement;
    fireEvent.change(textarea, { target: { value: 'change value' } });
    expect(textarea.value).toBe('change value');
  });

  it('should render default styles', () => {
    const tree = renderer.create(<ThemeTextarea />).toJSON();
    expect(tree).toHaveStyleRule('padding', '12px');
    expect(tree).toHaveStyleRule('border-radius', '4px');
    expect(tree).toHaveStyleRule('border', 'none');
    expect(tree).toHaveStyleRule('box-shadow', boxShadows.dp1);
    expect(tree).toHaveStyleRule('padding', '12px');
    expect(tree).toHaveStyleRule('outline', `${colors.blue400} solid 1px`, {
      target: ':focus-visible',
    });
    expect(tree).toHaveStyleRule('background', colors.grey50, {
      target: ':focus-visible',
    });
    expect(tree).toHaveStyleRule('outline', `${colors.blue400} solid 1px`, {
      target: ':focus',
    });
    expect(tree).toHaveStyleRule('background', colors.grey50, {
      target: ':focus',
    });
  });
});
