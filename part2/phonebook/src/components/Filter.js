import React from "react";

const Filter = props => {
    return (
        <from>
            filter show with:
            <input value={props.filter} onChange={props.handleFilterChange}/>
        </from>
    )
}

export default Filter