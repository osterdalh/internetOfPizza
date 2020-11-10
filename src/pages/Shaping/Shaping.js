import React from 'react'
import './Shaping.scss'
import Infobox from '../../components/Infobox/Infobox'
import DetailedInfobox from '../../components/DetailedInfobox/DetailedInfobox'


const StagesDetails = () => {
    const stages = [
        {
            stage: 'Preperation',
            type: 'success'
        },
        {
            stage: 'Shaping',
            type: 'success'
        },
        {
            tage: 'Baking',
            type: 'danger'
        },
        {
            stage: 'Topping',
            type: ''
        },
        {
            stage: 'Packaging',
            type: ''
        }
    ]


    return (
        <div className="StagesDetails">
            <h5>Stages</h5>
            {
                stages.map((stage, index) => {
                    return (
                        <div key={index} className="py-2">
                            <Infobox type={stage.type} title={stage.stage}>
                                <p>Duration <span className="font-weight-bold">30 min</span></p>
                            </Infobox>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ShapingDetails = () => {
    return (
        <div className="ShapingDetails">
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="d-inline-block">Shaping</h5><h6 className="d-inline-block secondaryStyle">details</h6>
                </div>
                <div>
                    <h5 className="d-inline-block">40</h5><h6 className="d-inline-block secondaryStyle">/40</h6>

                </div>

            </div>

            <div className="infoDetailsContainer">
                <div className="d-flex justify-content-around align-self-center">
                    <Infobox type="success">
                        <h6>10<span className="secondaryStyle">/10 min</span></h6>
                        <p>Portioning & Rounding</p>
                    </Infobox>
                    <i className="align-self-center fas fa-long-arrow-alt-right"></i>
                    <Infobox></Infobox>
                    <i className="align-self-center fas fa-long-arrow-alt-right"></i>

                    <Infobox></Infobox>
                </div>


            </div>
            <div className="d-flex justify-content-around">
            <DetailedInfobox></DetailedInfobox>
            </div>
        </div>
    )
}


const Shaping = () => {
    return (
        <div>
            <div className="d-inline-block leftSide">
                <StagesDetails></StagesDetails>

            </div>
            <div className="d-inline-block rightSide">

                <ShapingDetails></ShapingDetails>
            </div>
        </div>
    )
}

export default Shaping