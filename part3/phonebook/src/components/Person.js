import React from 'react'

const Person = ({name, phone, deletePerson}) => {
    return (
        <li>{name} {phone}
            <button onClick={deletePerson}>delete</button>
        </li>
    )
}

export default Person