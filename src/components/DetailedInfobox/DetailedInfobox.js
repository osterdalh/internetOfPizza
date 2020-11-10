import React from 'react'
import './DetailedInfobox.scss'
import CircleInfo from '../CircleInfo/CircleInfo'
import IconInfo from '../IconInfo/IconInfo'

const DetailedInfobox = () => {
    return (
        <div>
            <h5>Portioning </h5>
            <div className="DetailedInfobox">
                <CircleInfo type="success">
                    <h6>GOOD</h6>
                </CircleInfo>
                <div className="row pt-2">
                    <div className="col-4 justify-content-center devider">
                        <IconInfo icon="position" type="danger">
                            <p className="m-0">Position</p>
                        </IconInfo>
                    </div>

                    <div className="col-4 devider">
                        <IconInfo icon="color" type="success">
                            <p className="m-0">Color</p>
                        </IconInfo>
                    </div>

                    <div className="col-4">
                        <IconInfo icon="weight" type="success">
                            <p className="m-0">Color</p>
                        </IconInfo>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default DetailedInfobox
