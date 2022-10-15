import React from 'react';
import { Provider } from 'react-redux';
import TestRender from 'react-test-renderer';
import store from '../redux/configureStore';
import DisplayRocket from '../components/rockets/DisplayRockets';
import RocketCard from '../components/rockets/RocketCard';

describe('snapshot test for RocketCard Component', () => {
    it('Matches the snapshot', () => {
      const tree = TestRender.create(<RocketCard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

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

const createRocketComponent = TestRender.create(
    <Provider store={store}>
      <RocketCard />
    </Provider>,
  );

  describe('Tests for the rocket component', () => {
    test('Rocket card should have image', () => {
      const component = createRocketComponent.toJSON();
      expect(component.children[0].type).toEqual('img');
    });
  });
