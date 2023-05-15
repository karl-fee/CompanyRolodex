import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        () => {
          return { employees: users }
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.employees.map((employee) => {
          return (
            <div key={employee.id}>
              <h1>{employee.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
