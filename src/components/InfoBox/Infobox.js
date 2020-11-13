import React from 'react'
import './Infobox.scss'

const Infobox = ({ type, children }) => {
    return (
        <div className={`Infobox ${type ? type : ''}`}>
            <div className="infoIcon">
                {type === 'success' ? <i className="float-right fas fa-check-circle"></i> : (type === 'danger' ? <i className="float-right fas fa-exclamation-circle"></i> : <i className="float-right fas fa-arrow-circle-right"></i>)}
            </div>

            {children}

        </div>
    )
}

export default Infobox