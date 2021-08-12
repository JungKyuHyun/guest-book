import { cleanup } from '@testing-library/react';
import { matchers, createSerializer } from '@emotion/jest';
import renderer from 'react-test-renderer';
import { Spacer } from './Spacer';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

describe('<Spacer />', () => {
  afterEach(cleanup);

  it('match snapshot', () => {
    const tree = renderer.create(<Spacer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render default style', () => {
    const tree = renderer.create(<Spacer />).toJSON();
    expect(tree).toHaveStyleRule('display', 'block');
    expect(tree).toHaveStyleRule('margin-top', '0px');
    expect(tree).toHaveStyleRule('margin-bottom', '0px');
  });

  it('should change margin-top style', () => {
    const tree = renderer.create(<Spacer mt={4} />).toJSON();
    expect(tree).toHaveStyleRule('margin-top', '4px');
  });

  it('should change margin-bottom style', () => {
    const tree = renderer.create(<Spacer mb={4} />).toJSON();
    expect(tree).toHaveStyleRule('margin-bottom', '4px');
  });

  it('should change margin-top and margin-bottom style', () => {
    const tree = renderer.create(<Spacer mt={4} mb={4} />).toJSON();
    expect(tree).toHaveStyleRule('margin-top', '4px');
    expect(tree).toHaveStyleRule('margin-bottom', '4px');
  });
});
