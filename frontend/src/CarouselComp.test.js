import CarouselComp from './CarouselComp'
import { render } from '@testing-library/react';

test('should render an empty Carousel', () => {
    let x = new Array();
    const carousel = render(<CarouselComp items={x}/>);
    const item = carousel.getByRole('carousel');
    expect(item.innerHTML).toBe('');
});

test('should render a Carousel with images', () => {
    let x = new Array({image: "image1"}, {image: "image2"}, {image: "image3"});
    const carousel = render(<CarouselComp items={x}/>);
    const images = carousel.getAllByRole('img');
    expect(images[0].getAttribute('src')).toBe('image3');
    expect(images[1].getAttribute('src')).toBe('image1');
    expect(images[2].getAttribute('src')).toBe('image2');
});