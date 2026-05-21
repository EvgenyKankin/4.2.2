import Header from "./Header";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../test/test-utils";
import { screen } from "@testing-library/react";

describe ('Тест корзины', function() {
    it('Открытие корзины', async()=>{

        const user = userEvent.setup();

        renderWithProviders(<Header />)

        await user.click(screen.getByRole('button', {name: /cart/i}));

        expect(screen.getByText('Ваша корзина пустая')).toBeInTheDocument();
    });
});