import { WarningIcon } from '@chakra-ui/icons';

import { ButtonWithIcon } from '../ButtonWithIcon';

import { renderWithChakraProvider, screen, user } from '@/test/test-utils';

describe('ButtonWithIcon component', () => {
  it('should have the name passed as a child', () => {
    const BUTTON_TEXT = 'Click Me';
    renderWithChakraProvider(<ButtonWithIcon>{BUTTON_TEXT}</ButtonWithIcon>);
    const button = screen.getByRole('button', { name: new RegExp(`${BUTTON_TEXT}`) });
    expect(button).toBeInTheDocument();
  });

  it('should have a left icon', () => {
    const TEST_ID = 'left-icon';
    const leftIcon = <WarningIcon data-testid={TEST_ID} />;
    renderWithChakraProvider(<ButtonWithIcon leftIcon={leftIcon}>With Left Icon</ButtonWithIcon>);
    const icon = screen.getByTestId(TEST_ID);
    expect(icon).toBeInTheDocument();
  });

  it('should have a right icon', () => {
    const TEST_ID = 'right-icon';
    const rightIcon = <WarningIcon data-testid={TEST_ID} />;
    renderWithChakraProvider(
      <ButtonWithIcon rightIcon={rightIcon}>With Right Icon</ButtonWithIcon>
    );
    const icon = screen.getByTestId(TEST_ID);
    expect(icon).toBeInTheDocument();
  });

  it('should call onClick when pressed', async () => {
    const onClickMock = jest.fn();
    renderWithChakraProvider(<ButtonWithIcon onClick={onClickMock}>Mock Click</ButtonWithIcon>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClickMock).toBeCalledTimes(1);
  });

  it('should be disabled', () => {
    renderWithChakraProvider(<ButtonWithIcon isDisabled>Disabled</ButtonWithIcon>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
