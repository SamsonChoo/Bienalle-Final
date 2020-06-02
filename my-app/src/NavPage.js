import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dots from './svg/Dots';
import Header from './svg/Header';
import ThickLine from './svg/ThickLine';
import ThickLineShort from './svg/ThickLineShort';
import ThinLine from './svg/ThinLine';
import ThinLineShort from './svg/ThinLineShort';
import ThinnestLine from './svg/ThinnestLine';
import './index.css';

class PrimaryCol extends React.Component {
  render() {
    return (
      <div class='flex-column' id='box1'>
        <div class='boxitem'>
          <ThickLine></ThickLine>
          <div class='pri-words'>Hybrid Highrise Commune</div>
        </div>
        <div class='boxitem' onClick={this.props.onClickResearch}>
          <ThickLineShort></ThickLineShort>
          <div class='pri-words'>Research</div>
        </div>
        <div class='boxitem' onClick={this.props.onClickAbout}>
          <ThickLineShort></ThickLineShort>
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
        <div>
          <ThinLine></ThinLine>
          <div class='sec-words sec-first' onClick={this.props.onClickHighRise}>
            Future Hybrid Highrise Commune
          </div>
          <div class='sec-words sec-list slanted'>Become a tenant:</div>
          <div class='sec-words sec-list clickable'>
            &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Building Parcelation Live
          </div>
          <div class='sec-words sec-list clickable'>
            &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Debate
          </div>
        </div>
        <div class='box2'>
          <ThinLineShort></ThinLineShort>
          <div class='sec-words sec-first' onClick={this.props.onClickDecarb}>
            Decarbonisation
          </div>
          <div
            class='sec-words sec-list'
            onClick={this.props.onClickDemographic}
          >
            Demographic changes
          </div>
          <div
            class='sec-words sec-list'
            onClick={this.props.onClickParticipation}
          >
            Participation
          </div>
          <div class='sec-words sec-list' onClick={this.props.onClickDigital}>
            Digital Tools
          </div>
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
        {currentView === 'about' && (
          <div>
            <ThinnestLine></ThinnestLine>
            <About></About>
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
        <div class='ter-words sec-first clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design Study &#038; Polyvalency
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design Study &#038; Vertical
          Community
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
      </div>
    );
  }
}

class Research extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;SEA Timber
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Circular Design
        </div>
      </div>
    );
  }
}

class Decarbonisation extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;SEA Timber
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Circular Design
        </div>
      </div>
    );
  }
}

class DemographicChanges extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;SEA Timber
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Circular Design
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
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;SEA Timber
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Circular Design
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
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Participation/Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Resilience to Change/Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Embodied Carbon
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Hybrid Construction
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Design-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Data-based LCA Tool
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;SEA Timber
        </div>
        <div class='ter-words sec-list clickable faded'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Circular Design
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <div class='ter-words sec-first clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Project
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Team + Partners
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Publications
        </div>
        <div class='ter-words sec-list clickable'>
          &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;Contract
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
                <Header></Header>
                <div class='float-right dots'>
                  <Dots></Dots>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div class='pri-col'>
                <PrimaryCol
                  onClickResearch={() =>
                    this.setState({ currentView: 'research' })
                  }
                  onClickAbout={() => this.setState({ currentView: 'about' })}
                ></PrimaryCol>
              </div>
            </Col>
            <Col xs={3}>
              <div class='sec-col'>
                <SecondaryCol
                  onClickHighRise={() =>
                    this.setState({ currentView: 'highrise' })
                  }
                  onClickDecarb={() =>
                    this.setState({ currentView: 'decarbonisation' })
                  }
                  onClickDemographic={() =>
                    this.setState({ currentView: 'demographic' })
                  }
                  onClickParticipation={() =>
                    this.setState({ currentView: 'participation' })
                  }
                  onClickDigital={() =>
                    this.setState({ currentView: 'digital' })
                  }
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
