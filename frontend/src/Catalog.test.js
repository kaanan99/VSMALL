import Catalog from './Catalog'
import { render } from '@testing-library/react';

test('should render an empty Catalog', () => {
    let x = [];
    const catalog = render(<Catalog items_list={x}/>);
    const item = catalog.queryAllByRole('ItemCard');
    expect(item).toStrictEqual([]);
});

// test('should render something', () => {
//     const itemCard = render(<ItemCard image = {"image"} name = {"name"} price = {null} link = {null} sale = {null} brand = {"brand"}/>);
//     const x = [itemCard];
//     const catalog = render(<Catalog items_list = {x}/>);
//     const item = catalog.getByRole('ItemCard');
//     const name = item.getAttribute('name');
//     expect(name).toBe(null)
    
// });

