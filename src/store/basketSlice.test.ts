import React from 'react'
import {basketAction, basketSlice} from "./basketSlice";

type Product = {
    id: string
    title: string
    description: string
    price: number
    image: string
    count: number
}
type InitialSt = {
    products: Product[],
}
let initialState: InitialSt = {products: []};

describe('basket slice', () => {

    beforeEach(() => {
        initialState = {
            products: [{
                id: "1",
                title: 'Product 1',
                price: 10,
                description: '',
                image: '',
                count: 1
            }, {id: "2", title: 'Product 2', price: 20, description: '', image: '', count: 1}]
        };
    });

    it('should add a product to the basket', () => {
        const product = {id: "3", title: 'Product 3', price: 30, description: '', image: '', count: 1};

        const endState = basketSlice(initialState, basketAction.addProduct({product}))

        expect(endState.products[2].id).toBe('3')
        expect(endState.products[2].price).toBe(30)

    });

    it('should delete a product from the basket', () => {
        let endState = basketSlice(initialState, basketAction.deleteProduct({productId: "1"}))

        expect(endState.products[0].id).toBe('2')
        expect(endState.products[0].price).toBe(20)
        expect(endState.products.length).toBe(1)

    });

    it('should increase the count of a product in the basket', () => {

        let endState = basketSlice(initialState, basketAction.increaseCountProduct({productId: "1"}))

        expect(endState.products[0].count).toBe(2)
    });

    it('should set the list of products in the basket', () => {
        const products = [
            {id: "3", title: 'Product 3', price: 30, description: '', image: '', count: 1},
            {id: "4", title: 'Product 4', price: 40, description: '', image: '', count: 1},
        ];

        const endState = basketSlice(initialState, basketAction.setProducts({products}))

        expect(endState.products.length).toBe(2)
        expect(endState.products[0].id).toBe('3')
        expect(endState.products[0].price).toBe(30)
        expect(endState.products[1].id).toBe('4')
        expect(endState.products[1].price).toBe(40)
    });
});