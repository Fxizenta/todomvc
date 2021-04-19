import React, {useState} from 'react'
import Person from "./components/Person";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '040-123456'},
        {name: 'Ada Lovelace', phone: '39-44-5323523'},
        {name: 'Dan Abramov', phone: '12-43-234345'},
        {name: 'Mary Poppendieck', phone: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState()
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
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div>

            <h2>Phonebook</h2>
            <from>
                <div>
                    filter show with: <input value={filter} onChange={handleFilterChange}/>
                </div>
            </from>
            <h2>Add New</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlePersonChange}/>
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                <div>
                    {persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase())).map(person => <Person key={person.name} person={person}/>)}
                </div>
            </ul>

            ...
        </div>
    )
}

export default App
