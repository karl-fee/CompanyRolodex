import './App.css';
import { useState, useEffect } from 'react'; // Functional Component
//import { Component, useState } from 'react'; //Class Component
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

//FUNCTIONAL COMPONENT
const App = () => {

  //Hooks
  
  const [searchField, setSearchField] = useState('');
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  
  console.log('rendering');
  
  useEffect(() => {
    //console.log('effect fired');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setEmployees(users));
  }, []);

  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEmployees(newFilteredEmployees);

    //console.log('effect 2 fired');

  }, [employees, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  
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
  )
}

// CLASS COMPONENT
/*
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
*/

export default App;
