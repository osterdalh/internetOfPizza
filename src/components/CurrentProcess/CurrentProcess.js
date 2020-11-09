import React from 'react'
import './CurrentProcess.scss'
import Infobox from '../InfoBox/Infobox'
import SectionHeader from '../SectionHeader/SectionHeader'


const Sidelist = () => {
    return (
        <div className="Sidelist">
            Next batch
            <i class="pl-2 fas fa-arrow-down"></i>
            <ul>
                <li>MAR2908</li>
                <li>MAR2909</li>
                <li>MAR2910</li>
            </ul>
        </div>
    )
}

const CurrentProcess = () => {
    return (
        <div className="CurrentProcess">
            <Sidelist/>
            <SectionHeader title="Current Process" />

            Some Info

            <div className="infoboxContainer d-flex justify-content-around">
                <Infobox title="Preparation" style="success">
                    <p>Duration <span className="font-weight-bold">30 min</span></p>
                </Infobox>
                <Infobox title="Shaping" style="success">
                    <p>Duration <span className="font-weight-bold">30 min</span></p>
                </Infobox>
                <Infobox title="Baking" style="danger">
                    <p>Duration <span className="font-weight-bold">30 min</span></p>
                </Infobox>
                <Infobox title="Packing" style="">
                    <p>Duration <span className="font-weight-bold">30 min</span></p>
                </Infobox>
            </div>

        </div>
    )
}

export default CurrentProcess
