import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import yourdata from './data/your-articles.json';
import misseddata from './data/missed-articles.json';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

class Square extends React.Component {
  render() {
    const temp = new Date(this.props.value.postedDate);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div className={"square "+this.props.section}>
        <img src={this.props.value.image} alt={this.props.value.title}/>
        <article>
          <div className="article">
            <h2>{this.props.value.title}</h2>
            <h3>{this.props.value.description}</h3>
          </div>
          <div className="info">
            <img className={(this.props.value.author.isMediumMember)? "green" : ""} src={this.props.value.author.image} alt={this.props.value.author.name}/>
            <p><strong>{this.props.value.author.name}</strong><br/>
            {monthNames[temp.getMonth()]} {temp.getDate()} &bull; {this.props.value.minutesToRead} min read</p>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </article>
      </div>
    );
  }
}

class ForYou extends React.Component {
  render() {
    return (
      <section>
      <div className="title"><h1>For you</h1></div>
        {renderSquare(yourdata,"foryou")}
      </section>
    );
  }
}

class InCase extends React.Component {
  render() {
    return (
      <section>
      <div className="title"><h1>In case you missed it</h1></div>
        {renderSquare(misseddata,"incase")}
      </section>
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

function renderSquare(data, section) {
  return (data.map((data) => {
    return (
      <Square key={data.title}
        value={data} section={section}
      />
    )
  })
)
}
