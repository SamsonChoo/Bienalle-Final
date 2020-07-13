import React from 'react';
import LandingPage from './LandingPage';
import NavPage from './NavPage';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlaceHolder from './PlaceHolder';
import PlaceHolder2 from './PlaceHolder2';

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
            <Route exact path='/Bienalle-Final'>
              {currentView === 'home' && (
                <LandingPage
                  onClick={() => this.setState({ currentView: 'home2' })}
                ></LandingPage>
              )}
              {currentView === 'home2' && <NavPage></NavPage>}
            </Route>
            <Route exact path='/fhhc'>
              <PlaceHolder
                subtitle='Future Hybrid Highrise Commune'
                title='Hybrid Highrise Commune'
                color='#FFCC19'
              />
            </Route>
            <Route exact path='/polyvalency'>
              <PlaceHolder
                subtitle='Design Study &#038; Polyvalency'
                title='Hybrid Highrise Commune'
                color='#FFCC19'
              />
            </Route>
            <Route exact path='/verticalcomm'>
              <PlaceHolder
                subtitle='Design Study &#038; Vertical Community'
                title='Hybrid Highrise Commune'
                color='#FFCC19'
              />
            </Route>
            <Route exact path='/hybrid'>
              <PlaceHolder
                subtitle='Hybrid Construction'
                title='Hybrid Highrise Commune'
                color='#FFCC19'
              />
            </Route>
            <Route exact path='/participation'>
              <PlaceHolder2
                title='Participation | Decarbonisation'
                title2='Demographic Changes | Digital Tools'
                subtitle='Participation Tool'
                color='#85E2B5'
              />
            </Route>
            <Route exact path='/about'>
              <PlaceHolder
                title='About'
                subtitle='With the support of SUTD-MIT IDC, ARUP and ...'
                color='#A5BBC8'
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
