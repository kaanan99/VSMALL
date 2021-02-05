import Board from './Board';
import { render, fireEvent } from '@testing-library/react';

test('should get re-rendered on each click, with Xs and Os appearing on alternating clicks', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(buttons[0].innerHTML).toBe('X');
    fireEvent.click(buttons[1]);
    expect(buttons[1].innerHTML).toBe('O');
    fireEvent.click(buttons[2]);
    expect(buttons[2].innerHTML).toBe('X');
    fireEvent.click(buttons[3]);
    expect(buttons[3].innerHTML).toBe('O');
});

test('should show status message alternating b/w X and O', () => {
    const board = render(<Board />);
    const status = board.getByText(/Next Player/);
    const buttons = board.queryAllByRole('button');
    expect(status.innerHTML).toBe('Next Player: X');
    fireEvent.click(buttons[0]);
    expect(status.innerHTML).toBe('Next Player: O');
    fireEvent.click(buttons[2]);
    expect(status.innerHTML).toBe('Next Player: X');
    fireEvent.click(buttons[6]);
    expect(status.innerHTML).toBe('Next Player: O');
});

