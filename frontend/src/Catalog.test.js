import Catalog from './Catalog'
import { render, fireEvent } from '@testing-library/react';

test('should render an empty Catalog', () => {
    const catalog = render(<Catalog items_list={null}/>);
    const item = catalog.getByRole('ItemCard');
    expect(item.innerHTML).toBe('');
});