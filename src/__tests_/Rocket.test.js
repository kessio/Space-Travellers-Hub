import React from 'react';
import { Provider } from 'react-redux';
import TestRender from 'react-test-renderer';
import store from '../redux/configureStore';
import DisplayRocket from '../components/rockets/DisplayRockets';

describe('snapshot test for DisplayRocket Component', () => {
  it('Matches the snapshot', () => {
    const tree = TestRender.create(
      <Provider store={store}>
        <DisplayRocket />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
