import React from 'react'
import './Navbar.scss'



const Navbar = () => {


    return (
        <div className="Navbar ">

            <nav className="">



                <div class=" nav-tabs" id="nav-tab" role="tablist">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="">
                            <i class="fas fa-pizza-slice"></i>
                        Internet of Pizza
                        </div>


                        <div  className="nav d-flex justify-content-end ">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Dough</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Vibration</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Temperature</a>
                            <a class="nav-item nav-link" id="nav-settings-tab" data-toggle="tab" href="#nav-settings" role="tab" aria-controls="nav-settings" aria-selected="false">Settings</a>
                        </div>

                    </div>



                </div>
            </nav>
           


        </div>

    )

}


export default Navbar
