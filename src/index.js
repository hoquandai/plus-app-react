import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Plus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: '0', second: '0', result: '0'};
  }

  first_change(e) {
    this.setState({
      first: document.getElementById('first').value
    })
  }

  second_change(e) {
    this.setState({
      second: document.getElementById('second').value
    })
  }

  plus() {
    if (this.state.first == '') this.state.first = '0';
    if (this.state.second == '') this.state.second = '0';
    return parseInt(this.state.first) + parseInt(this.state.second)
  }

  render() {
    return (
      <React.Fragment>
      <label htmlFor="first">First value: </label>
      <input type="number" id="first" onChange={(e)=> this.first_change(e)}/>
      <br/>
      <label htmlFor="second">Second value: </label>
      <input type="number" id="second" onChange={(e)=> this.second_change(e)}/>
      <h1>Result: {this.plus()}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Plus first='1' second='1'/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
