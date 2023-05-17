import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [],
    };

    console.log("01-Constructor");
  }

  componentDidMount() {
    console.log("03-ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        () => {
          return { employees: users }
        },
        () => {
          //console.log(this.state);
        }
      )
    );
  }

  render() {
    console.log("02-Render");
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search employees'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredEmployees = this.state.employees.filter((employee) => {
              return employee.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { employees: filteredEmployees};
            });
          }}
        />
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
