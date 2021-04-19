import React, {useState} from 'react'
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonFrom from "./components/PersonFrom";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '040-123456'},
        {name: 'Ada Lovelace', phone: '39-44-5323523'},
        {name: 'Dan Abramov', phone: '12-43-234345'},
        {name: 'Mary Poppendieck', phone: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            phone: newPhone
        }
        if (persons.filter(person => person.name === personObject.name).length > 0) {
            window.confirm(`${personObject.name} is already added to phonebook`)
            setNewName('')
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    };

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    };

    return (
        <div>
            <h2>Phonebook</h2>
           <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h2>Add New</h2>
            <PersonFrom
                newName={newName}
                newPhone={newPhone}
                handlePhoneChange={handlePhoneChange}
                handlePersonChange={handlePersonChange}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter}/>

            ...
        </div>
    )
}

export default App
