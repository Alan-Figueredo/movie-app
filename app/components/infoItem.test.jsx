import React from 'react';
import { getByText, render } from '@testing-library/react';
import { InfoItem } from './InfoItem';
// Mock de datos del elemento (puedes personalizarlo según tus necesidades)
const itemData = {
    original_title: 'Movie Title',
    name: 'TV Show Title',
    release_date: '2023-01-01',
    runtime: 120,
    vote_average: "8",
    spoken_languages: [{ iso_639_1: 'en', name: 'English' }],
    genres: [{ id: 1, name: 'Action' }],
    overview: 'This is a sample overview for the movie or TV show.',
    seasons: [],
};

test('InfoItem renders correctly', () => {
    const component = render(<InfoItem item={itemData} />);
    component.getByText('Movie Title')
    component.getByText('2023')
    component.getByText('120 MIN')


    // Verifica que la calificación se muestre correctamente y tenga la clase de color adecuada
    const ratingElement = component.getByTestId("movieRate");
    component.getByText("8")
    ratingElement.getAttribute("class").match("movieRate green")

    component.getByText('English')
    component.getByText('Action')
    component.getByText('This is a sample overview for the movie or TV show.')
});
