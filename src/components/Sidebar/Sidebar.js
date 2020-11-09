import React from 'react'
import './Sidebar.scss'
import { Link } from "react-router-dom";



const Sidebar = () => {


    return (
        <div className="Sidebar ">


            <div className="sidenav">
                <Link to="/">Overview</Link>
                <Link to="/process">In Process</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/analysis">Analysis</Link>
                <hr />
                <Link to="/history">Historic Data</Link>
                <Link to="/machinestatus">Machine Status</Link>

            </div>


        </div>

    )

}


export default Sidebar
