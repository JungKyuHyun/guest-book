import { TextAreaForm } from './TextAreaForm';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { matchers, createSerializer } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import '@testing-library/jest-dom/extend-expect';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

function ThemeTextAreaForm(others: any) {
  return (
    <ThemeProvider theme={theme}>
      <TextAreaForm {...others} />
    </ThemeProvider>
  );
}

describe('<TextAreaForm />', () => {
  afterEach(cleanup);

  it('match snapshot', () => {
    const tree1 = renderer.create(<ThemeTextAreaForm formId='id' />).toJSON();
    expect(tree1).toMatchSnapshot();
  });

  it('should render placeholder correctly', () => {
    render(<ThemeTextAreaForm placeholder='i am placeholder' />);
    const textarea = screen.getByPlaceholderText('i am placeholder');
    expect(textarea).toBeInTheDocument();
  });

  it('should change the data', () => {
    render(<ThemeTextAreaForm placeholder='i am placeholder' />);
    const textarea = screen.getByPlaceholderText(
      'i am placeholder'
    ) as HTMLInputElement;
    fireEvent.change(textarea, { target: { value: 'change value' } });
    expect(textarea.value).toBe('change value');
  });

  it('should call onSubmit prop when clicked', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <ThemeTextAreaForm
        onSubmit={handleSubmit}
        defaultValue='default value'
        buttonLabel='Submit'
      />
    );
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(/submit/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
