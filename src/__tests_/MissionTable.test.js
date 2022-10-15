import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import MissionTable from '../components/missions/MissionTable';


const createMissionComponent = create(
  <Provider store={store}>
    <MissionTable />
  </Provider>,
);

const renderMissionComponent = () => {
  render(
    <Provider store={store}>
      <MissionTable />
    </Provider>,
  );
};

describe('Tests for the MissionTable component', () => {
  test('Missions data should be rendered in a table', () => {
    const component = createMissionComponent.toJSON();
    expect(component.children[0].type).toEqual('table');
  });

  test('Heading should be Mission', () => {
    renderMissionComponent();
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });

  test('Heading should be Description', () => {
    renderMissionComponent();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('Heading should be Status', () => {
    renderMissionComponent();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
