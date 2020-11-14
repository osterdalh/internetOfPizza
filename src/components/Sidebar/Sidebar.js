import React from 'react'
import './Sidebar.scss'
import { Link } from "react-router-dom";



const Sidebar = () => {

    const baseUrl = '/internetOfPizza'

    return (
        
        <div className="Sidebar ">


            <div className="sidenav nav">
                <div className="linkContainer">
                    <Link to={`${baseUrl}/`}>Overview</Link>
                    <Link to={`${baseUrl}/process`}>In Process</Link>
                    <Link to={`${baseUrl}/shaping`}>Shaping</Link>
                    <Link to={`${baseUrl}/analysis`}>Analysis</Link>
                    <hr />
                    <Link to="/history">Historic Data</Link>
                    <Link to="/machinestatus">Machine Status</Link>
                </div>
            </div>


        </div>

    )

}


export default Sidebar
