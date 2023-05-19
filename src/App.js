import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [],
      searchField: '',
    };

    //console.log("01-Constructor");
  }

  componentDidMount() {
    //console.log("03-ComponentDidMount");
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

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };  

  render() {
    //console.log("02-Render");

    //destructuring
    const { employees, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredEmployees = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search employees'
          onChange={onSearchChange}
        />
        {filteredEmployees.map((employee) => {
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
