import Catalog from './Catalog'
import ItemCard from './Itemcard';
import { render, fireEvent } from '@testing-library/react';

test('should render an empty Catalog', () => {
    let x = [];
    const catalog = render(<Catalog items_list={x}/>);
    const item = catalog.queryAllByRole('ItemCard');
    expect(item).toStrictEqual([]);
});

