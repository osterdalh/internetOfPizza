import React from 'react'
import './DetailedInfobox.scss'
import CircleInfo from '../CircleInfo/CircleInfo'
import IconInfo from '../IconInfo/IconInfo'




const DetailedInfobox = ({ name, circleText, sensors, children }) => {
    return (
        <div>
            <div className="DetailedInfobox">
                <h5>{name} </h5>
                {children ? children :
                    <div>
                        <CircleInfo type="success">
                            <h6>{circleText}</h6>
                        </CircleInfo>
                        <div className="row pt-2">
                            {
                                sensors.map(sensor => {
                                    return (
                                        <div className="col-4 text-center justify-content-center devider">
                                            <div className={`sensorValue ${sensor.type}`}>
                                                {sensor.value}

                                            </div>
                                            <div className="sensorName">
                                                {sensor.type}

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }



            </div>
        </div>

    )
}

export default DetailedInfobox
