import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MapData } from './MapData';

describe('MapData', () => {
    it('renders the movie container', () => {
        const data = [
            {
                id: 1,
                title: 'Movie 1',
                backdrop_path: '/path/to/image1.jpg',
                vote_average: 8,
            },
            {
                id: 2,
                title: 'Movie 2',
                backdrop_path: '/path/to/image2.jpg',
                vote_average: 5,
            },
        ];
        const type = 'movie';
        render(<MapData data={data} type={type} />);

        // Verifica que el contenedor de películas se renderice correctamente.
        const movieContainer = screen.getByTestId('movie-container');
        expect(movieContainer).not.toBeNull();
        expect(movieContainer).not.toBeUndefined();

        // Verifica que las películas se rendericen correctamente en función de los datos proporcionados.
        const movieItems = screen.getAllByTestId('movie-item');
        expect(movieItems.length).toBe(data.length);

        // Verifica que el botón "See more" esté presente.
        const seeMoreButton = screen.getByText('See more');
        expect(seeMoreButton).not.toBeNull();
        expect(seeMoreButton).not.toBeUndefined();

        // Realiza una acción de clic en el botón "See more" y verifica si funciona.
        fireEvent.click(seeMoreButton);
        const expandedMovieItems = screen.getAllByTestId('movie-item');
        expect(expandedMovieItems.length).toBe(data.length); // Debería mostrar todas las películas.
    });

    it('handles the "See more" button click', () => {
        const data = [
            {
                id: 1,
                title: 'Movie 1',
                backdrop_path: '/path/to/image1.jpg',
                vote_average: 8,
            },
            {
                id: 2,
                title: 'Movie 2',
                backdrop_path: '/path/to/image2.jpg',
                vote_average: 5,
            },
        ];
        const type = 'movie';
        render(<MapData data={data} type={type} />);

        // Verifica que las películas se muestren inicialmente.
        const movieItems = screen.getAllByTestId('movie-item');
        expect(movieItems.length).toBe(data.length);

        // Verifica que el botón "See more" esté presente y no esté oculto inicialmente.
        const seeMoreButton = screen.getByText('See more');
        expect(seeMoreButton).not.toBeNull();
        expect(seeMoreButton).not.toBeUndefined();

        // Realiza una acción de clic en el botón "See more".
        fireEvent.click(seeMoreButton);

        // Verifica que se muestren todas las películas después de hacer clic en "See more".
        const expandedMovieItems = screen.getAllByTestId('movie-item');
        expect(expandedMovieItems.length).toBe(data.length);

    });
});
