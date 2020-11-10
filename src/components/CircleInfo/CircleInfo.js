import React from 'react'
import './CircleInfo.scss'

const CircleInfo = (props) => {
    return (
        <div className="">
            <div className={`circle ${props.type ? props.type : ''}`}>
                <div className="circleText">{props.children}</div>

            </div>
        </div>
    )
}

export default CircleInfo
