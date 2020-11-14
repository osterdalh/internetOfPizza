import React from 'react'
import './Sidebar.scss'
import { Link } from "react-router-dom";



const Sidebar = () => {


    return (
        <div className="Sidebar ">


            <div className="sidenav nav">
                <div className="linkContainer">
                    <Link to="/">Overview</Link>
                    <Link to="/process">In Process</Link>
                    <Link to="/shaping">Shaping</Link>
                    <Link to="/analysis">Analysis</Link>
                    <Link to="/test">test</Link>
                    <hr />
                    <Link to="/history">Historic Data</Link>
                    <Link to="/machinestatus">Machine Status</Link>
                </div>
            </div>


        </div>

    )

}


export default Sidebar
