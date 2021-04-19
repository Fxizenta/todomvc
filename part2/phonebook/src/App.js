import React, { useState } from 'react'
import Person from "./components/Person";
const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', phone: 23323332333 }
    ])
    const [ newName, setNewName ] = useState('')
    const [newPhone,setNewPhone] = useState()
    const addPerson = (event) =>{
        event.preventDefault()
        const personObject = {
            name: newName,
            phone: newPhone
        }
        if(persons.filter(person=>person.name===personObject.name).length>0) {
            window.confirm(`${personObject.name} is already added to phonebook`)
            setNewName('')
        }
        else {
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
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlePersonChange}/>
                </div>
                <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                <ul>
                {persons.map(person => <Person key={person.name} person={person}/>)}
                </ul>
            </div>
            ...
        </div>
    )
}

export default App
