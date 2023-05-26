import { Component } from "react";
import './card-list-styles.css';
import Card from '../card/card-component';

class CardList extends Component {
    render() {
        const { employees } = this.props;

        return (
            <div className="card-list">
            {employees.map((employee) => {
                return (
                  <Card employee={employee}/>  
                );
            })}
            </div>
        );
    }
}

export default CardList;