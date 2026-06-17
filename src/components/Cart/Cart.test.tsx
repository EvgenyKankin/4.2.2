import { beforeEach, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Cart from './Cart';
import { ProductCard } from '../ProductCard/ProductCard';
import renderWithProviders from '../../test/test-utils';

describe('Cart', () => {
  const product = {
    id: 1,
    name: 'Cauliflower - 1 Kg',
    price: 60,
    image: 'cauliflower.png',
    category: 'vegetables',
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('Увеличение количества товара в корзине', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <ProductCard product={product} />
        <Cart opened={true} onClose={() => {}} />
      </>
    );

    await user.click(screen.getByRole('button', { name: /add to cart/i }));
    await user.click(screen.getByRole('button', { name: /increase cauliflower/i }));

    expect(screen.getByTestId('cart-quantity-1')).toHaveTextContent('2');
  });

  it('Изменение total стоимости при увеличении количества', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <ProductCard product={product} />
        <Cart opened={true} onClose={() => {}} />
      </>
    );

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(screen.getByTestId('cart-total')).toHaveTextContent('$ 60');

    await user.click(screen.getByRole('button', { name: /increase cauliflower/i }));

    expect(screen.getByTestId('cart-total')).toHaveTextContent('$ 120');
  });

  it('Уменьшение количества товара в корзине', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <ProductCard product={product} />
        <Cart opened={true} onClose={() => {}} />
      </>
    );

    await user.click(screen.getByRole('button', { name: /add to cart/i }));
    await user.click(screen.getByRole('button', { name: /increase cauliflower/i }));
    await user.click(screen.getByRole('button', { name: /decrease cauliflower/i }));

    expect(screen.getByTestId('cart-quantity-1')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('$ 60');
  });

  it('Удаление товара из корзины при уменьшении количества с 1', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <ProductCard product={product} />
        <Cart opened={true} onClose={() => {}} />
      </>
    );

    await user.click(screen.getByRole('button', { name: /add to cart/i }));
    await user.click(screen.getByRole('button', { name: /decrease cauliflower/i }));

    expect(screen.getByText(/Ваша корзина пустая/i)).toBeInTheDocument();
  });
});