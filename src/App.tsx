import * as React from 'react';
import './App.css';

import RandomGrid from './components/RandomGrid';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <RandomGrid imageCount={8} />
      </div>
    );
  }
}

export default App;
