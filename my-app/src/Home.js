import React from 'react';
import LandingPage from './LandingPage';
import NavPage from './NavPage';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlaceHolder from './PlaceHolder';
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { currentView: 'home' };
  }

  render() {
    const currentView = this.state.currentView;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              {currentView === 'home' && (
                <LandingPage
                  onClick={() => this.setState({ currentView: 'home2' })}
                ></LandingPage>
              )}
              {currentView === 'home2' && <NavPage></NavPage>}
            </Route>
            <Route exact path='/fhhc'>
              <PlaceHolder
                title='Title here'
                subtitle='Subtitle here'
                color='#FFCC19'
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
