import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dots from './svg/Dots';
import Header from './svg/Header';
import ThickLine from './svg/ThickLine';
import ThinLine from './svg/ThinLine';
import ThinnestLine from './svg/ThinnestLine';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PrimaryCol extends React.Component {
  render() {
    return (
      <div class='flex-column' id='box1'>
        <div
          class='boxitem'
          onClick={this.props.onClickHighRise}
          onMouseOver={this.props.onClickHighRise}
        >
          <ThickLine></ThickLine>
          <div class='pri-words'>Hybrid Highrise Commune</div>
        </div>
        <div
          class='boxitem'
          onClick={this.props.onClickResearch}
          onMouseOver={this.props.onClickResearch}
        >
          <ThickLine></ThickLine>
          <div class='pri-words'>Research</div>
        </div>
        <div class='boxitem' onMouseOver={this.props.onClickAbout}>
          <ThickLine></ThickLine>
          <div class='pri-words'>About</div>
        </div>
      </div>
    );
  }
}

class SecondaryCol extends React.Component {
  render() {
    return (
      <div class='flex-column'>
        <div onMouseOver={this.props.onClickHighRise}>
          <ThinLine></ThinLine>
          <Link to='/fhhc' style={{ textDecoration: 'none' }}>
            <div
              class='sec-words sec-first clickable'
              onClick={this.props.onClickHighRise}
            >
              > &nbsp;Future Hybrid Highrise Commune
            </div>
          </Link>
          <div class='sec-words sec-list slanted'>Become a tenant:</div>
          <div class='sec-words sec-list clickable'>
            > &nbsp;Building Parcelation Live
          </div>
          <div class='sec-words sec-list clickable'>> &nbsp;Debate</div>
        </div>
        <div class='box2'>
          <ThinLine></ThinLine>
          <div
            class='sec-words sec-first'
            onClick={this.props.onClickResearch}
            onMouseOver={this.props.onClickResearch}
          >
            > &nbsp;Introduction
          </div>
          <div
            class='sec-words research'
            onClick={this.props.onClickDecarb}
            onMouseOver={this.props.onClickDecarb}
          >
            Decarbonisation
          </div>
          <div
            class='sec-words research'
            onClick={this.props.onClickDemographic}
            onMouseOver={this.props.onClickDemographic}
          >
            Demographic changes
          </div>
          <div
            class='sec-words research'
            onClick={this.props.onClickParticipation}
            onMouseOver={this.props.onClickParticipation}
          >
            Participation
          </div>
          <div
            class='sec-words research'
            onClick={this.props.onClickDigital}
            onMouseOver={this.props.onClickDigital}
          >
            Digital Tools
          </div>
        </div>
        <div onMouseOver={this.props.onClickAbout} class='box3'>
          <ThinLine></ThinLine>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div class='sec-words sec-first clickable'>> &nbsp;Project</div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div class='sec-words sec-list clickable'>
              > &nbsp;Team + Partners
            </div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div class='sec-words sec-list clickable'>> &nbsp;Publications</div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div class='sec-words sec-list clickable'>> &nbsp;Contract</div>
          </Link>
        </div>
      </div>
    );
  }
}

class TertiaryCol extends React.Component {
  render() {
    const currentView = this.props.currentView;
    return (
      <div class='flex-column'>
        {currentView === 'none' && <div></div>}
        {currentView === 'highrise' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <FutureHybridHighriseCommune></FutureHybridHighriseCommune>
          </div>
        )}
        {currentView === 'research' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <Research></Research>
          </div>
        )}
        {currentView === 'decarbonisation' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <Decarbonisation></Decarbonisation>
          </div>
        )}
        {currentView === 'demographic' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <DemographicChanges></DemographicChanges>
          </div>
        )}
        {currentView === 'participation' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <Participation></Participation>
          </div>
        )}
        {currentView === 'digital' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <DigitalTools></DigitalTools>
          </div>
        )}
      </div>
    );
  }
}

class FutureHybridHighriseCommune extends React.Component {
  render() {
    return (
      <div>
        <Link to='/polyvalency' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-first clickable'>
            > &nbsp;Design Study &#038; Polyvalency
          </div>
        </Link>
        <Link to='/verticalcomm' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Design Study &#038; Vertical Community
          </div>
        </Link>
        <Link to='/hybrid' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Hybrid Construction
          </div>
        </Link>
      </div>
    );
  }
}

class Research extends React.Component {
  render() {
    return (
      <div>
        <Link to='/participation' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-first clickable'>
            > &nbsp;Participation/Tool
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Resilience to Change/Tool
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Embodied Carbon
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Hybrid Construction
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Design-based LCA Tool
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Data-based LCA Tool
          </div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>> &nbsp;SEA Timber</div>
        </Link>
        <Link to='/fhhc' style={{ textDecoration: 'none' }}>
          <div class='ter-words sec-list clickable'>
            > &nbsp;Circular Design
          </div>
        </Link>
      </div>
    );
  }
}

class Decarbonisation extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable faded'>
          > &nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>> &nbsp;SEA Timber</div>
        <div class='ter-words sec-list clickable'>> &nbsp;Circular Design</div>
      </div>
    );
  }
}

class DemographicChanges extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          > &nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable'>> &nbsp;Embodied Carbon</div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>> &nbsp;SEA Timber</div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Circular Design
        </div>
      </div>
    );
  }
}

class Participation extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          > &nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>> &nbsp;SEA Timber</div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Circular Design
        </div>
      </div>
    );
  }
}

class DigitalTools extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          > &nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          > &nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>> &nbsp;SEA Timber</div>
        <div class='ter-words sec-list clickable faded'>
          > &nbsp;Circular Design
        </div>
      </div>
    );
  }
}

export default class NavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: '' };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    console.log(this.state);
  }

  render() {
    return (
      <div class='overall'>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <div class='header'>
                <div class='headersvg'>
                  <Header></Header>
                </div>
                <div class='float-right dots'>
                  <Dots></Dots>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div class='pri-col'>
                <PrimaryCol
                  onClickHighRise={() => {
                    this.setState({
                      currentView: 'highrise',
                    });
                    document.body.style.backgroundColor = '#FFCC19';
                  }}
                  onClickResearch={() => {
                    this.setState({
                      currentView: 'research',
                    });
                    document.body.style.backgroundColor = '#85E2B5';
                  }}
                  onClickAbout={() => {
                    document.body.style.backgroundColor = '#A5BBC8';
                  }}
                ></PrimaryCol>
              </div>
            </Col>
            <Col xs={3}>
              <div class='sec-col'>
                <SecondaryCol
                  onClickResearch={() => {
                    this.setState({
                      currentView: 'research',
                    });
                    document.body.style.backgroundColor = '#FFCC19';
                  }}
                  onClickHighRise={() => {
                    this.setState({
                      currentView: 'highrise',
                    });
                    document.body.style.backgroundColor = '#FFCC19';
                  }}
                  onClickDecarb={() => {
                    this.setState({
                      currentView: 'decarbonisation',
                    });
                    document.body.style.backgroundColor = '#85E2B5';
                  }}
                  onClickDemographic={() => {
                    this.setState({
                      currentView: 'demographic',
                    });
                    document.body.style.backgroundColor = '#85E2B5';
                  }}
                  onClickParticipation={() => {
                    this.setState({
                      currentView: 'participation',
                    });
                    document.body.style.backgroundColor = '#85E2B5';
                  }}
                  onClickDigital={() => {
                    this.setState({
                      currentView: 'digital',
                    });
                    document.body.style.backgroundColor = '#85E2B5';
                  }}
                  onClickAbout={() => {
                    document.body.style.backgroundColor = '#A5BBC8';
                  }}
                ></SecondaryCol>
              </div>
            </Col>
            <Col xs={3}>
              <div class='sec-col'>
                <TertiaryCol currentView={this.state.currentView}></TertiaryCol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
