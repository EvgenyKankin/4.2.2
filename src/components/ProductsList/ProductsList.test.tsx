import { screen } from "@testing-library/react";
import renderWithProviders from "../../test/test-utils";
import { describe, it, expect, vi } from 'vitest';
import ProductsList from "./ProductsList";

describe ('ProductsList', function() {
    it('Проверка рендера списка продуктов', async() => {
        vi.stubGlobal('fetch', 
                        vi.fn(()=>Promise.resolve({ok:true, 
                            json: ()=> Promise.resolve([{id: 1,
                                                        name: 'Cauliflower - 1 Kg',
                                                        price: 60,
                                                        image: '',
                                                        category: 'vegetables',}])})))
    
    renderWithProviders(<ProductsList />)
    
    expect(await screen.findByText(/Cauliflower/i)).toBeInTheDocument();
    });
});