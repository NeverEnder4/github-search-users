import { Button } from '../Button';

import { renderWithChakraProvider, screen, user } from '@/test/test-utils';

describe('Button component', () => {
  it('should have the name passed as a child', () => {
    const BUTTON_TEXT = 'Click Me';
    renderWithChakraProvider(<Button>{BUTTON_TEXT}</Button>);
    const button = screen.getByRole('button', { name: new RegExp(`${BUTTON_TEXT}`) });
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when pressed', async () => {
    const onClickMock = jest.fn();
    renderWithChakraProvider(<Button onClick={onClickMock}>Mock Click</Button>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClickMock).toBeCalledTimes(1);
  });

  it('should be disabled', () => {
    renderWithChakraProvider(<Button isDisabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
