import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it("renders correctly", () => {
    const tree = renderer
        .create(<App>App Page</App>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
