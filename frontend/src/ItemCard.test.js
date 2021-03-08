import ItemCard from './ItemCard';
import { render, fireEvent } from '@testing-library/react';

test('should render empty ItemCard', () => {
   const itemCard = render(<ItemCard image = {null} name = {null} price = {null} link = {null} sale = {null} />);
<<<<<<< HEAD
   const header = itemCard.getAllByRole('heading')[1];
=======
   const headers = itemCard.getAllByRole('heading');
>>>>>>> 6a83869e9112bc855f10c0816ce7bd7187411c4c
   const image = itemCard.getByRole('img');
   expect(headers[0].innerHTML).toBe('');
   expect(image.getAttribute('src')).toBe(null);
});

test('Has stuff in it', () => {
<<<<<<< HEAD
   const itemCard = render(<ItemCard image = {"image"} name = {"name"} price = {null} link = {null} sale = {null} />);
   const header = itemCard.getAllByRole('heading')[1];
=======
   const itemCard = render(<ItemCard image = {"image"} name = {"name"} price = {null} link = {null} sale = {null} brand = {"brand"}/>);
   const headers = itemCard.getAllByRole('heading');
>>>>>>> 6a83869e9112bc855f10c0816ce7bd7187411c4c
   const image = itemCard.getByRole('img');
   expect(headers[1].innerHTML).toBe('name');
   expect(headers[0].innerHTML).toBe('brand');
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
