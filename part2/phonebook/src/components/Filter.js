import React from "react";

const Filter = props=>{
    return(
        <from>
            <div>
                filter show with: <input value={props.filter} onChange={props.handleFilterChange}/>
            </div>
        </from>
    )
}

export default Filter