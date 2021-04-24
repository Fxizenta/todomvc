import React from "react";
import Person from "./Person";

const Persons = (props) => {
    return (
        <ul>
            {props.persons.filter(person => person.name.toUpperCase().includes(props.filter.toUpperCase())).map(person => (
                <Person key={person.id} name={person.name} phone={person.number}
                        deletePerson={props.handleDeletePerson(person.name, person.id)}/>)
            )}
        </ul>
    )
}

export default Persons