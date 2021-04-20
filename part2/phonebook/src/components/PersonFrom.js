import React from "react";

const PersonFrom=(props)=>{
    return (
        <form onSubmit={props.addPerson}>
            name:
            <input
                value={props.newName}
                onChange={props.handlePersonChange} />
            <br />
            number:
            <input
                value={props.newPhone}
                onChange={props.handlePhoneChange} />
            <br />
            <button type="submit">add</button>
        </form>
    )
}

export default PersonFrom