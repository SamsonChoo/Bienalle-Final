import React from 'react';
import LandingPage from './LandingPage';
import NavPage from './NavPage';
import './index.css';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { currentView: 'home' };
  }

  render() {
    const currentView = this.state.currentView;
    return (
      <div>
        {currentView === 'home' && (
          <LandingPage
            onClick={() => this.setState({ currentView: 'home2' })}
          ></LandingPage>
        )}
        {currentView === 'home2' && <NavPage></NavPage>}
      </div>
    );
  }
}
