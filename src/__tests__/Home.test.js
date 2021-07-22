import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it("renders correctly", () => {
    const tree = renderer
        .create(<Home>HomePage</Home>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
