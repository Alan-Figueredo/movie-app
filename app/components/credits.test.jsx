import React from 'react';
import { render } from '@testing-library/react';
import { Credits } from './Credits';

const credits = {
    cast: [
        { name: 'Actor 1', cast_id: 1 },
        { name: 'Actor 2', cast_id: 2 },
        { name: 'Actor 3', cast_id: 3 },
    ],
};

describe('Credits', () => {
    it('renders the credits section', () => {

        const component = render(<Credits credits={credits} />)
        component.getByText("Actor 1")
        component.getByText("Actor 2")
        component.getByText("Actor 3")
    });
});