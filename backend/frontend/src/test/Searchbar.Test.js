//Default React Library
import React from 'react';

//React Component
import Searchbar from '../Components/Searchbar';

// npm install "react-test-renderer"
/* This package provides a React renderer that can be used to render 
React components to pure JavaScript objects, without depending on the DOM */
import {
    render
} from '@testing-library/react';

// Testing Card Component that it does render correctly or not.
test("Correct Render", () => {
    const tree = render( < Searchbar / > )
    expect(tree).toMatchSnapshot();
})

test('Check API correct and works', async () => {

    // Constant API Key variable
    // await the fetch method and assign it to a variable so we can test it. 
    const postToServer = await fetch(`https://itunes.apple.com/search?term=adele&media=all`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search: "adele",
            option: "all"
        })
    })
    expect(postToServer).toBeDefined();
    const convertJSON = await postToServer.json();
    expect(convertJSON).toBeTruthy();
})
