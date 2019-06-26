import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Wes', 
    age: 100, 
    cool: true
  }
   render() {
    return (
      <MyContext.Provider value= {{
        state: this.state,
        growAYear: () => this.setState({
          age: this.state.age +1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
      {/* Consumer is how you access the data */}
      <MyContext.Consumer>
        {(context) => (
          <>
          <p>Age: {context.state.age}</p>
          <p>Name: {context.state.name}</p>
          <button onClick={context.growAYear}>Increase Age</button>
          </>
        )}
      </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {  
  render() {
    return (
      <MyProvider>
      <div>
        <p>I'm the app</p>
        <Family />
      </div>
      </MyProvider>
    );
  }
}

export default App;
