import DeleteButton from './DeleteButton'
import { render, fireEvent } from '@testing-library/react';

test('should call the specified onClick when DeleteButton is clicked', () => {
    const onClick = jest.fn();
    const delete_ = render(<DeleteButton onClick = {onClick}/>);
    const button = delete_.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
 });
 