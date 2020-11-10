import React from 'react'
import './Infobox.scss'

const Infobox = ({ title, type, children }) => {
    return (
        <div className={`Infobox ${type ? type : ''}`}>
            {title} {type === 'success' ? <i className="float-right fas fa-check-circle"></i> : (type === 'danger' ? <i className="float-right fas fa-exclamation-circle"></i> : <i className="float-right fas fa-arrow-circle-right"></i>)}

            {children}
        </div>
    )
}

export default Infobox