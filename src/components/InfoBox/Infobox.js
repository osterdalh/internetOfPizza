import React from 'react'
import './Infobox.scss'

const Infobox = ({title,style, children}) => {
    return(
        <div className={`Infobox ${style}`}>
            {title} {style == 'success' ? <i class="float-right fas fa-check-circle"></i> : (style=='danger' ? <i class="float-right fas fa-exclamation-circle"></i> : <i class="float-right fas fa-arrow-circle-right"></i>)} 
            
            {children}
        </div>
    )
}

export default Infobox