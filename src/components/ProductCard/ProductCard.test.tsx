import { describe, it, expect } from "vitest";
import { ProductCard } from './ProductCard';
import renderWithProviders from "../../test/test-utils";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe ('Работа с карточкой товара', function() {
    it('Добавление товара в корзину', async() => {
        const product = {id: 1,
                        name: 'Cauliflower - 1 Kg',
                        price: 60,
                        image: 'cauliflower.png',
                        category: 'vegetables',
                        };
        
        const user = userEvent.setup();

        renderWithProviders(<ProductCard product={product} />)

        await user.click(screen.getByRole('button', {name: /add to cart/i}));

        expect(localStorage.getItem('cart')).toContain('Cauliflower');
    });
});
