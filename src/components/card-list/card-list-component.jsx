import { Component } from "react";

class CardList extends Component {
    render() {
        console.log( this.props.employees );
        const { employees } = this.props;

        return (
            <div>
                {employees.map((employee) => (
                    <h1 key={employee.id}>{employee.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;