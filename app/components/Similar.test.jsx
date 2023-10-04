import React from 'react';
import { prettyDOM, render } from '@testing-library/react';
import { SimilarMovies } from './Similar';

describe('SimilarMovies', () => {
    it('renders the similar movies section', () => {
        const similar = {
            results: [
                { name: 'Movie 1', id: 1, media_type: 'movie', poster_path:"https://th.bing.com/th/id/OIP.cYuUpmLFjc-wYNONzHsl-gAAAA?pid=ImgDet&rs=1" },
                { name: 'Movie 2', id: 2, media_type: 'movie', poster_path:"https://th.bing.com/th/id/OIP.cYuUpmLFjc-wYNONzHsl-gAAAA?pid=ImgDet&rs=1" },
                { name: 'Movie 3', id: 3, media_type: 'movie', poster_path:"https://th.bing.com/th/id/OIP.cYuUpmLFjc-wYNONzHsl-gAAAA?pid=ImgDet&rs=1" },
            ],
        };
        const type = 'movie';
        const component = render(<SimilarMovies similar={similar} type={type} />);
        component.getByText("Movie 1")
        component.getByText("Movie 2")
        component.getByText("Movie 3")

        component.getByAltText("Movie 1 poster")
        component.getByAltText("Movie 2 poster")
        component.getByAltText("Movie 3 poster")
    });
});
