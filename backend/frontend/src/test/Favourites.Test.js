// Default React Library
import React from 'react';

// React Component
import Favourites from '../components/Favourites';

//  npm install "react-test-renderer"
/* This package provides a React renderer that can be used to render 
React components to pure JavaScript objects, without depending on the DOM */
import {
    render
} from '@testing-library/react';

// Testing Favourite Component that it does render correctly or not.
test("Correct Render", () => {
    const tree = render( < Favourites / > )
    expect(tree).toMatchSnapshot();
    const functionality = < Favourites / > ;
    expect(functionality).toBeDefined();
})