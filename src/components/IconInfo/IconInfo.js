import React from 'react'
import './IconInfo.scss'

const getIcon = (name, type) => {
    switch (name) {
        case 'position':
            return (
                <i className={`fas fa-crosshairs ${type}`}></i>
            )
        case 'color':
            return (
                <i className={`fas fa-eye-dropper ${type}`}></i>
            )
        case 'weight':
            return (
                <i className={`fas fa-weight-hanging ${type}`}></i>
            )
        default:
            return null
    }
}

const IconInfo = ({ icon, type, children }) => {
    return (
        <div className="IconInfo">
            <div className="text-center">
                {getIcon(icon, type)}
            </div>
            <div className="text-center">
                {children}
            </div>

        </div>
    )

}


export default IconInfo