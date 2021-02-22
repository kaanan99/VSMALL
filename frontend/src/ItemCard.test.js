import ItemCard from './ItemCard';
import { render, fireEvent } from '@testing-library/react';
test('should render empty ItemCard', () => {
   const itemCard = render(<ItemCard image = {null} name = {null} price = {null} link = {null} sale = {null} />);
   const header = itemCard.getByRole('heading');
   const image = itemCard.getByRole('img');
   expect(header.innerHTML).toBe('');
   expect(image.getAttribute('src')).toBe(null);
});

test('Has stuff in it', () => {
   const itemCard = render(<ItemCard image = {"image"} name = {"name"} price = {null} link = {null} sale = {null} />);
   const header = itemCard.getByRole('heading');
   const image = itemCard.getByRole('img');
   expect(header.innerHTML).toBe('name');
   expect(image.getAttribute('src')).toBe('image');
});
