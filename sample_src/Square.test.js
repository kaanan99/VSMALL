import Square from './Square';
import { render, fireEvent } from '@testing-library/react';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe(''); // Line 3
});

test('should render an X into Square', () => {
    const square = render(<Square value={'X'} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe('X'); // Line 3
});

test('should call the specified onClick when the square is clicked', () => {
    const onClick = jest.fn();
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');
  
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});