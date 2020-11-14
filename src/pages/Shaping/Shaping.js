import React from 'react'
import './Shaping.scss'
import Infobox from '../../components/Infobox/Infobox'
import DetailedInfobox from '../../components/DetailedInfobox/DetailedInfobox'
import CircleInfo from '../../components/CircleInfo/CircleInfo'


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
            stage: 'Baking',
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
            <div className="d-flex flex-column justify-content-between">


                {
                    stages.map((stage, index) => {
                        return (
                            <div key={index} className="py-3">
                                <Infobox type={stage.type}>
                                    <div className="stage">
                                        <div className="mb-2">
                                            <span>{stage.stage}</span>
                                        </div>
                                        <div>
                                            <div>Duration <span className="font-weight-bold float-right">30 min</span></div>
                                        </div>
                                    </div>
                                </Infobox>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ShapingStatus = () => {
    return (
        <div className="infoDetailsContainer">
            <h5 className="d-inline-block">Shaping</h5>

            <div className="d-flex justify-content-around align-self-center">
                <Infobox type="success">
                    <div className="infoboxText d-flex align-items-center">
                        <p className="m-0  w-50 float-left d-inline-block">Portioning & Rounding</p>
                        <div className="m-0 w-50 text-right">
                            <span className="infoboxText-bold m-0 w-50">10</span>
                            <span className="secondaryStyle">/10 min</span>
                        </div>
                    </div>
                </Infobox>
                <Infobox type="success">
                    <div className="infoboxText d-flex align-items-center">
                        <p className="m-0  w-50 float-left d-inline-block">Proofing in pocket</p>
                        <div className="m-0 w-50 text-right">
                            <span className="infoboxText-bold m-0 w-50">20</span>
                            <span className="secondaryStyle">/20 min</span>
                        </div>
                    </div>
                </Infobox>

                <Infobox type="success">
                    <div className="infoboxText d-flex align-items-center">
                        <p className="m-0  w-50 float-left d-inline-block">Hot press on tray</p>
                        <div className="m-0 w-50 text-right">
                            <span className="infoboxText-bold m-0 w-50">10</span>
                            <span className="secondaryStyle">/10 min</span>
                        </div>
                    </div>
                </Infobox>
            </div>


        </div>
    )
}







const Shaping = () => {
    return (
        <div className="container">
            <div className="d-inline-block leftSide">
                <StagesDetails></StagesDetails>

            </div>
            <div className="d-inline-block rightSide">
                <ShapingStatus></ShapingStatus>
                <div className="ShapingDetails px-0">

                    <div className="d-flex justify-content-between mb-4">
                        <DetailedInfobox name="Portioning" circleText="GOOD" sensors={[
                            {
                                name: "Position",
                                value: "Center",
                                type: "success"

                            },
                            {
                                name: "Color",
                                value: "Average",
                                type: "success"

                            },
                            {
                                name: "Weight",
                                value: "300 g",
                                type: "danger"
                            }
                        ]}></DetailedInfobox>
                        <DetailedInfobox name="Proofing" circleText="GOOD" sensors={[
                            {
                                name: "Diameter",
                                value: "Center",
                                type: "success"

                            },
                            {
                                name: "Density",
                                value: "2 g/cm3",
                                type: "danger"

                            },
                            {
                                name: "Temperature",
                                value: "37 c",
                                type: "success"

                            }
                        ]}></DetailedInfobox>
                        <DetailedInfobox name="Hot Press" circleText="GOOD" sensors={[
                            {
                                name: "Position",
                                value: "Center",
                                type: "success"

                            },
                            {
                                name: "Color",
                                value: "Average",
                                type: "success"

                            },
                            {
                                name: "Weight",
                                value: "300 g",
                                type: "danger"

                            }
                        ]}></DetailedInfobox>

                    </div>
                    <div className="d-flex justify-content-between">
                        <DetailedInfobox name="Machinery">
                            <div className="row">
                                <div className="col-5 devider text-center p-0">
                                    <CircleInfo type="success">
                                        <h6>90%</h6>
                                    </CircleInfo>
                                    <div className="sensorName">
                                        Target 90%
                                    </div>
                                    <div className="sensorValue">
                                        Performance
                                    </div>
                                </div>
                                <div className="col-7 sensorName">
                                    <div className="row">
                                        <div className="col-8">
                                            Chamber
                                            Termperature
                                        </div>
                                        <div className="col-4 p-0">
                                            60%
                                        </div>
                                    </div>
                                    <div className="row pt-4">
                                        <div className="col-8">
                                            Chamber
                                            Termperature
                                        </div>
                                        <div className="col-4 p-0">
                                            60%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailedInfobox>
                        <DetailedInfobox name="Machinery">
                            <div className="d-flex justify-content-center">
                                <div className=" text-center p-0">
                                    <CircleInfo type="success">
                                        <h6>210/210</h6>
                                    </CircleInfo>
                                    <div className="sensorValue pt-4">
                                        Current load
                                    </div>
                                </div>
                            </div>
                        </DetailedInfobox>
                        <DetailedInfobox name="Pizzas Discarded">
                            <div className="row">
                                <div className="col-6 text-center p-0 devider">
                                    <CircleInfo type="success">
                                        <h6>0.5%</h6>
                                    </CircleInfo>
                                    <div className="sensorName">
                                        Minimum 0.5%
                                    </div>
                                    <div className="sensorValue">
                                        To fix
                                    </div>
                                </div>
                                <div className="col-6 text-center p-0 devider">
                                    <CircleInfo type="success">
                                        <h6>0.5%</h6>
                                    </CircleInfo>
                                    <div className="sensorName">
                                    Minimum 5%
                                    </div>
                                    <div className="sensorValue">
                                    Waste
                                    </div>

                                </div>
                            </div>
                        </DetailedInfobox>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Shaping