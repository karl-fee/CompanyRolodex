//import { Component } from "react";
import './card-styles.css';

const Card = ({ employee }) => {
    const { id, name, email } = employee;
    return (
        <div className="card-container" key={id}>
                    <img
                        alt={`employee ${name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>
        </div>
    );
}

//CLASS COMPONENT
/*
class Card extends Component {
    render() {
        const { id, name, email } = this.props.employee;
        return (
            <div className="card-container" key={id}>
                        <img
                            alt={`employee ${name}`}
                            src={`https://robohash.org/${id}?set=set2&size=180x180`}
                        />
                        <h2>{name}</h2>
                        <p>{email}</p>
            </div>
        ) 
    }
}
*/

export default Card;