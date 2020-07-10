import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
export default App;
