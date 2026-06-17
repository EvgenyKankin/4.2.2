import { beforeEach, describe, it, expect } from 'vitest';
import { ProductCard } from './ProductCard';
import renderWithProviders from '../../test/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Работа с карточкой товара', () => {
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

  it('Добавление товара в корзину', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ProductCard product={product} />);

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(localStorage.getItem('cart')).toContain('Cauliflower');
  });

  it('Увеличение количества товара в карточке', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ProductCard product={product} />);

    const plusButton = screen.getByRole('button', { name: /plus/i });

    await user.click(plusButton);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('Уменьшение количества товара в карточке', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ProductCard product={product} />);

    const plusButton = screen.getByRole('button', { name: /plus/i });
    const minusButton = screen.getByRole('button', { name: /minus/i });

    await user.click(plusButton);
    await user.click(minusButton);

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
  });

  it('Количество товара не уменьшается меньше 1', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ProductCard product={product} />);

    const minusButton = screen.getByRole('button', { name: /minus/i });

    await user.click(minusButton);
    await user.click(minusButton);

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
  });
});