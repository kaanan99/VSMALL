import ItemCard from './ItemCard';
import { render, fireEvent } from '@testing-library/react';
test('should render empty ItemCard', () => {
   const itemCard = render(<ItemCard image = {null} name = {null} price = {null} link = {null} sale = {null} />);
   const header = itemCard.getAllByRole('heading')[1];
   const image = itemCard.getByRole('img');
   expect(header.innerHTML).toBe('');
   expect(image.getAttribute('src')).toBe(null);
});

test('Has stuff in it', () => {
   const itemCard = render(<ItemCard image = {"image"} name = {"name"} price = {null} link = {null} sale = {null} />);
   const header = itemCard.getAllByRole('heading')[1];
   const image = itemCard.getByRole('img');
   expect(header.innerHTML).toBe('name');
   expect(image.getAttribute('src')).toBe('image');
});
/*
test('Right onClick is called', () => {
   const onClick = jest.fn();
   const itemCard = render(<ItemCard image = {null} name = {null} price = {null} link = {null} sale = {null} onClick = {onClick}/>);
   const button  = itemCard.getByRole('ItemCard');
   fireEvent.click(button);
   expect(onClick).toHaveBeenCalledTimes(1);
})
*/;
