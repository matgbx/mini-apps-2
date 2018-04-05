import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'WHAT"S GOOOD LIL MAMA!!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
