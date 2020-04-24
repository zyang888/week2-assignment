import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import yourdata from './data/your-articles.json'
import misseddata from './data/missed-articles.json'
import Container from 'react-bootstrap/Container'

class Square extends React.Component {
  render() {
    const temp = new Date(this.props.value.postedDate);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div className="square">
        <img src={this.props.value.image} alt={this.props.value.title}/>
        <div>
          <h1>{this.props.value.title}</h1>
          <h2>{this.props.value.description}</h2>
          <h3>{this.props.value.name}</h3>
          <p className="date-duration">{this.props.value.date}</p>
          <div>
          <img className={(this.props.value.author.isMediumMember)? "green" : ""} src={this.props.value.author.image} alt={this.props.value.author.name}/>
          <p>{this.props.value.author.name}<br/>
          {monthNames[temp.getMonth()]} {temp.getDate()} &bull; {this.props.value.minutesToRead} min read</p>
          </div>
        </div>
      </div>
    );
  }
}

class ForYou extends React.Component {
  render() {
    return (
      <Container>
        {renderSquare(yourdata)}
      </Container>
    );
  }
}



class InCase extends React.Component {
  render() {
    return (
      <Container>
        {renderSquare(misseddata)}
      </Container>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Container>
        <ForYou />
        <InCase />
      </Container>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function renderSquare(data) {
  return (data.map((data) => {
    return (
      <Square key={data.title}
        value={data}
      />
    )
  })
)
}
