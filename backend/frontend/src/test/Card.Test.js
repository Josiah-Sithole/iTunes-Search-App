// Default React Library
import React from 'react';

// React Card Component
import Card from '../components/Card';

// npm install "react-test-renderer"
/* This package provides a React renderer that can be used to render 
React components to pure JavaScript objects, without depending on the DOM */
import {
    render
} from '@testing-library/react';


// Testing Card Component that it does render correctly or not.
test("Correct Render", () => {

    // variable to hold the rendered component
    const tree = render( < Card / > )

    // Checks to see if the original tree matches the snapshot. 
    // If no snapshot exists it will create one. Then the test will pass the test.
    expect(tree).toMatchSnapshot();
    const functionality = < Card / > ;
    expect(functionality).toBeDefined();
})

// Checking the functionality of sessions Storage if it works.
test("if function works", () => {
    let addFavourite = []
    addFavourite.push("test")
    sessionStorage.setItem('favouriteList', JSON.stringify(addFavourite));
    let testFavourite = JSON.parse(sessionStorage.getItem('favouriteList'));
    expect(testFavourite).toHaveLength(1);
})
