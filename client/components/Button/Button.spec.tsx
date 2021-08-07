import { Button } from './Button';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import { colors } from 'styles/colors';
import { boxShadows } from 'styles/boxshadows';

expect.extend(matchers);

describe('<Button />', () => {
  afterEach(cleanup);

  it('match snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<Button />);
  });

  it('When passing children, draw it', () => {
    // arrange
    const childrenString = '버튼';
    const { getByText } = render(<Button>{childrenString}</Button>);

    // assert
    expect(getByText(childrenString)).toBeTruthy();
  });

  it('should call onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    fireEvent.click(getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick prop when the "disabled" button clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    fireEvent.click(getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should render a button but no others', () => {
    const tree = renderer.create(<Button />).toJSON();
    // secondary style
    expect(tree).toHaveStyleRule('color', colors.black);
    expect(tree).toHaveStyleRule('background', colors.grey300);
    expect(tree).toHaveStyleRule('background', colors.grey400, {
      target: ':hover',
    });

    // medium size
    expect(tree).toHaveStyleRule('padding', '6px 16px');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('min-height', '40px');

    // common style
    expect(tree).toHaveStyleRule('box-shadow', boxShadows.dp1);
    expect(tree).toHaveStyleRule('line-height', '1.75');
    expect(tree).toHaveStyleRule('border-radius', '4px');
    expect(tree).toHaveStyleRule('min-width', '64px');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
    expect(tree).toHaveStyleRule('border', '0');
    expect(tree).toHaveStyleRule('white-space', 'nowrap');
    expect(tree).toHaveStyleRule('appearance', 'none');
    expect(tree).toHaveStyleRule('user-select', 'none');
    expect(tree).toHaveStyleRule('display', 'inline-flex');
    expect(tree).toHaveStyleRule('justify-content', 'center');
    expect(tree).toHaveStyleRule('align-items', 'center');
    expect(tree).toHaveStyleRule('white-space', 'nowrap');
    expect(tree).toHaveStyleRule('box-shadow', 'none', {
      target: ':disabled',
    });
    expect(tree).toHaveStyleRule('pointer-events', 'none', {
      target: ':disabled',
    });
    expect(tree).toHaveStyleRule('outline', 'none', {
      target: ':focus',
    });
  });

  it('should render a primary button', () => {
    const tree = renderer.create(<Button variant='primary' />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.black);
    expect(tree).toHaveStyleRule('background', colors.blue500);
    expect(tree).toHaveStyleRule('background', colors.blue600, {
      target: ':hover',
    });
  });

  it('should render a secondary', () => {
    const tree = renderer.create(<Button variant='secondary' />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.black);
    expect(tree).toHaveStyleRule('background', colors.grey300);
    expect(tree).toHaveStyleRule('background', colors.grey400, {
      target: ':hover',
    });
  });

  it('should render a dark button', () => {
    const tree = renderer.create(<Button variant='dark' />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.grey50);
    expect(tree).toHaveStyleRule('background', colors.black);
    expect(tree).toHaveStyleRule('background', colors.grey900, {
      target: ':hover',
    });
  });

  it('should render a disabled button', () => {
    const tree = renderer.create(<Button variant='disabled' />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.grey300);
    expect(tree).toHaveStyleRule('background', colors.grey500);
  });

  it('should render a text button', () => {
    const tree = renderer.create(<Button variant='text' />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.black);
    expect(tree).toHaveStyleRule('background', 'transparent');
    expect(tree).toHaveStyleRule('box-shadow', 'none');
    expect(tree).toHaveStyleRule('background', colors.grey100, {
      target: ':hover',
    });
  });

  it('should render a xSmall button', () => {
    const tree = renderer.create(<Button size='xSmall' />).toJSON();
    expect(tree).toHaveStyleRule('padding', '4px');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '13px');
    expect(tree).toHaveStyleRule('min-height', '30px');
    expect(tree).toHaveStyleRule('min-width', '48px');
  });

  it('should render a small button', () => {
    const tree = renderer.create(<Button size='small' />).toJSON();
    expect(tree).toHaveStyleRule('padding', '4px 10px');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '13px');
    expect(tree).toHaveStyleRule('min-height', '36px');
  });

  it('should render a medium button', () => {
    const tree = renderer.create(<Button size='medium' />).toJSON();
    expect(tree).toHaveStyleRule('padding', '6px 16px');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('min-height', '40px');
  });

  it('should render a large button', () => {
    const tree = renderer.create(<Button size='large' />).toJSON();
    expect(tree).toHaveStyleRule('padding', '8px 22px');
    expect(tree).toHaveStyleRule('font-weight', '700');
    expect(tree).toHaveStyleRule('font-size', '15px');
    expect(tree).toHaveStyleRule('min-height', '48px');
  });

  it('should render a fill button', () => {
    const tree = renderer.create(<Button isFill />).toJSON();
    expect(tree).toHaveStyleRule('width', '100%');
  });
});
