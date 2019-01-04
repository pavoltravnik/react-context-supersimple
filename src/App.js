import React, { Component } from 'react';
import Content from './components/Content';

export const ThemeContext = React.createContext();

class App extends Component {
  render() {
  	const valuePassed = {name: "John", surname: "Brown"};
    return (
      <div className="App">
        <ThemeContext.Provider value={valuePassed}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
