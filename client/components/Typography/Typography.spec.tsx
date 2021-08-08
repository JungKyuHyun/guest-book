import { Typography } from './Typography';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import { colors } from 'styles/colors';

expect.extend(matchers);

describe('<Typography />', () => {
  afterEach(cleanup);
  const childrenString = '글자';

  it('match snapshot', () => {
    const tree = renderer.create(<Typography />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<Typography />);
  });

  it('When passing children, draw it', () => {
    // arrange
    const { getByText } = render(<Typography>{childrenString}</Typography>);

    // assert
    expect(getByText(childrenString)).toBeTruthy();
  });

  it('should render a Typography but no others', () => {
    const tree = renderer.create(<Typography />).toJSON();

    // // body2 scale
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.1px');

    // common style
    expect(tree).toHaveStyleRule('position', 'relative');
    expect(tree).toHaveStyleRule('margin', '0');
    expect(tree).toHaveStyleRule('color', colors.grey900);
    expect(tree).toHaveStyleRule('white-space', 'pre-line');
    expect(tree).toHaveStyleRule('word-break', 'keep-all');
    expect(tree).toHaveStyleRule(
      'font-family',
      "-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
    );
  });

  it('should render with h1 tag and custom style, if scale prop is h1', () => {
    const scale = 'h1';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h1');
    expect(tree).toHaveStyleRule('font-weight', 'lighter');
    expect(tree).toHaveStyleRule('font-size', '96px');
    expect(tree).toHaveStyleRule('letter-spacing', '-1.5px');
  });

  it('should render with h2 tag and custom style, if scale prop is h2', () => {
    const scale = 'h2';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h2');
    expect(tree).toHaveStyleRule('font-weight', 'lighter');
    expect(tree).toHaveStyleRule('font-size', '60px');
    expect(tree).toHaveStyleRule('letter-spacing', '-0.5px');
  });

  it('should render with h3 tag and custom style, if scale prop is h3', () => {
    const scale = 'h3';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h3');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '48px');
    expect(tree).toHaveStyleRule('letter-spacing', '0');
  });

  it('should render with h4 tag and custom style, if scale prop is h4', () => {
    const scale = 'h4';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h4');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '34px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.25px');
  });

  it('should render with h5 tag and custom style, if scale prop is h5', () => {
    const scale = 'h5';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h5');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '24px');
    expect(tree).toHaveStyleRule('letter-spacing', '0');
  });

  it('should render with h6 tag and custom style, if scale prop is h6', () => {
    const scale = 'h6';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h6');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '20px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.15px');
  });

  it('should render with h6 tag and custom style, if scale prop is subtitle1', () => {
    const scale = 'subtitle1';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h6');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '16px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.15px');
  });

  it('should render with h6 tag and custom style, if scale prop is subtitle2', () => {
    const scale = 'subtitle2';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h6');
    expect(tree).toHaveStyleRule('font-weight', '600');
    expect(tree).toHaveStyleRule('font-size', '15px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.1px');
  });

  it('should render with h6 tag and custom style, if scale prop is subtitle3', () => {
    const scale = 'subtitle3';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('h6');
    expect(tree).toHaveStyleRule('font-weight', '500');
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.1px');
  });

  it('should render with p tag and custom style, if scale prop is body1', () => {
    const scale = 'body1';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('p');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '16px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.5px');
  });

  it('should render with p tag and custom style, if scale prop is body2', () => {
    const scale = 'body2';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('p');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.1px');
  });

  it('should render with span tag and custom style, if scale prop is caption1', () => {
    const scale = 'caption1';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('span');
    expect(tree).toHaveStyleRule('font-weight', '400');
    expect(tree).toHaveStyleRule('font-size', '13px');
    expect(tree).toHaveStyleRule('letter-spacing', '0.1px');
  });

  it('should render with span tag and custom style, if scale prop is caption2', () => {
    const scale = 'caption2';
    const tree = renderer.create(<Typography scale={scale} />).toJSON();
    const { getByText } = render(
      <Typography scale={scale}>{childrenString}</Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('span');
    expect(tree).toHaveStyleRule('font-weight', 'normal');
    expect(tree).toHaveStyleRule('font-size', '12px');
    expect(tree).toHaveStyleRule('letter-spacing', '0');
  });

  it('Can be rendered with different html tags, regardless of scale', () => {
    const scale = 'caption2';
    const { getByText } = render(
      <Typography scale={scale} as='i'>
        {childrenString}
      </Typography>
    );
    expect(getByText(childrenString).tagName.toLowerCase()).not.toBe('span');
    expect(getByText(childrenString).tagName.toLowerCase()).toBe('i');
  });
});
