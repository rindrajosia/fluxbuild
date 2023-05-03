import React from 'react';
import { render, screen } from "@testing-library/react";

import Navbar from "../Hero";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';



describe('With React Testing Library', () => {
    const initialState =  {
        isLoading: false,
        universities: [],
        error: ''
    };

    const mockStore = configureStore();
    let store;

    it('renders Navbar success', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        const linkElement = screen.getByText(/University/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('renders Navbar fail', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        const linkElement = screen.queryByText(/not text/i);
        expect(linkElement).not.toBeInTheDocument();
    });
});
