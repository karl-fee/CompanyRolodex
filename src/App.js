import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

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
    //destructuring
    const { employees, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredEmployees = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Company Rolodex</h1>
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='search employees'
        />
        <CardList employees={filteredEmployees}/>
      </div>
    );
  }
}

export default App;
