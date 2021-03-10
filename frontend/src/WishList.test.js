import WishList from './WishList'
import { render } from '@testing-library/react';

test('should render empty WishList', () => {
    let x = [];
    const wishlist = render(<WishList wishList={x} isSignedIn={true}/>);
    const item = wishlist.queryAllByRole('ItemCard');
    expect(item).toStrictEqual([]);
});

test('should render a WishList', () => {
    const item = {"_id":"123", "name":"asdas", "link":"aqweqasd", "brand":"asdasd", "image":"etrer"};
    const item2 = {"_id":"234", "name":"asdas", "link":"aqweqasd", "brand":"asdasd", "image":"etrer"};
    const x = [item, item2]
    const wishlist = render(<WishList wishList={x} isSignedIn={true}/>);
    const theItem = wishlist.getAllByRole('ItemCard');
    expect(theItem.length).toBe(2);
});