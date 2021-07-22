import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it("renders correctly", () => {
    const tree = renderer
        .create(<Quote>Quote</Quote>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
