import React, {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonFrom from "./components/PersonFrom";
import Persons from "./components/Persons";
import axios from "axios";
import personDB from "./services/personDB";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const addPerson = event => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newPhone,
            id: Math.floor(Math.random() * 101)//随机id
        };

        if (
            persons.filter(person => person.name === personObject.name).length > 0//存在重复
        ) {
            if (
                window.confirm(
                    `${
                        personObject.name
                    } is already in phonebook`
                )
            ) {
                const previousPerson = persons.find(n => n.name === newName);//更新同名为最新信息
                personDB
                    .update(previousPerson.id, {...previousPerson, number: newPhone})
                    .then(updatedPerson => {
                        setPersons(
                            persons.map(n => (n.name === newName ? updatedPerson : n))
                        );
                    })
                    .catch(error => {
                        console.log(error);
                        setErrorMessage(`update faild `)
                    });
                setPersons(persons.concat(personObject));
                setErrorMessage(`change ${personObject.name}`)
                setNewName("");
                setNewPhone("");
                setTimeout(() => {
                    setErrorMessage(null);
                }, 3000);
            }
        } else {
            personDB
                .create(personObject)
                .then(newPerson => {
                    setPersons(persons.concat(newPerson));
                    setErrorMessage(`add ${personObject.name}`)
                    setNewName("");
                    setNewPhone("");
                })
                .catch(error => {
                    setErrorMessage(`${error.response.data.error}`);
                    console.log(error.response.data);
                });
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    };

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    };

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    };

    const handleDeletePerson = (name, id) => {
        return () => {
            if (window.confirm(`Are you sure delete ${name}`)) {
                personDB.deletePerson(id).then(
                    () => {
                        setPersons(persons.filter(n => n.id !== id));
                        setErrorMessage(`delete error ${name}`)
                        setNewName("")
                        setNewPhone("")
                    }
                )
                    .catch(error => {
                        setPersons(persons.filter(n => n.name !== name));
                        setErrorMessage(`don\'t have ${name} on the phonebook`)
                    });
                setTimeout(() => {
                    setErrorMessage(null);
                }, 3000);
            }

        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/persons').then(response => {
            setPersons(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage}/>
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
            <Persons persons={persons} filter={filter} handleDeletePerson={handleDeletePerson}/>

            ...
        </div>
    )
}

export default App
