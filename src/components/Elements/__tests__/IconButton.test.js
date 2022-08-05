import { WarningIcon } from '@chakra-ui/icons';

import { IconButton } from '../IconButton';

import { renderWithChakraProvider, screen, user } from '@/test/test-utils';

describe('Button component', () => {
  it('should have an accessability label', () => {
    const LABEL = 'Warning';
    renderWithChakraProvider(<IconButton accessibilityLabel={LABEL} />);
    const label = screen.getByText(LABEL);
    expect(label).toBeInTheDocument();
  });

  it('should have an icon', () => {
    const TEST_ID = 'icon';
    const icon = <WarningIcon data-testid={TEST_ID} />;
    renderWithChakraProvider(<IconButton icon={icon} />);
    const displayIcon = screen.getByTestId(TEST_ID);
    expect(displayIcon).toBeInTheDocument();
  });

  it('should call onClick when pressed', async () => {
    const onClickMock = jest.fn();
    renderWithChakraProvider(<IconButton onClick={onClickMock} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClickMock).toBeCalledTimes(1);
  });

  it('should be disabled', () => {
    renderWithChakraProvider(<IconButton isDisabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
