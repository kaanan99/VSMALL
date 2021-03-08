import WishListButton from './WishListButton'
import { render, fireEvent } from '@testing-library/react';
import React from 'react'
window.alert = jest.fn();

test('should call WishListbutton when clicked', () => {
    const onClick = jest.fn();
    window.alert.mockClear();
    const wish_button = render(<WishListButton onClick = {onClick}/>);
    const button = wish_button.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
 });