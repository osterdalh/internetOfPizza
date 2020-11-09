import React from 'react'

const SectionHeader = (props) => {
    return(
        <h3 style={{borderBottom:"1px solid black"}} className="SectionHeader">
           {props.title} 
        </h3>
    )
}

export default SectionHeader