import React from 'react';
import CarInfoCSS from './CarInfo.css'
import audia8 from './audia8.jpg'
//import bmwi8 from './bmwi8.jpg'

const CarInfo = () => {
    return(
        <div class="body">
            <div className = {CarInfoCSS} class="container">
                <div class = "page">
                    <div class="row">
                        <div  class="column">
                            <img class = "img-center"  src={audia8} alt=""></img>
                            <button class="button button1">APPROVED</button>
                            <ul id = "info">
                                <li>Car Brand:</li>
                                <li>Car Model: </li>
                                <li>Color: </li>
                                <li>Fee: </li>
                                <li>KM: </li>
                                <li>Rented Date: </li>
                                <li>Transported Date: </li>
                                <li>Taken/Leaved Branch: </li>
                                <li>Insurance Info: </li>
                                <li>Current Fuel:</li>
                                <li>Accessories:</li> 
                            </ul>
                            <div class="line"></div>
                            <ul id = "statuscheck">
                                <li>Add Images</li> 
                                <li>Update Current Fuel</li>
                                <li>Add after rent car condition</li>
                                <li>Give feedback</li>
                            </ul>

                        </div>
                    </div>
                    <div class="row">
                        <div  class="column">
                            <img class = "img-center"  src={audia8} alt=""></img>
                            <button class="button button2">DECLINED</button>
                            <ul id = "info">
                                <li>Car Brand:</li>
                                <li>Car Model: </li>
                                <li>Color: </li>
                                <li>Fee: </li>
                                <li>KM: </li>
                                <li>Rented Date: </li>
                                <li>Transported Date: </li>
                                <li>Taken/Leaved Branch: </li>
                                <li>Insurance Info: </li>
                                <li>Current Fuel:</li>
                                <li>Accessories:</li> 
                            </ul>
                            <div class="line"></div>
                            <ul id = "statuscheck">
                                <li>Add Images</li>
                                <li>Update Current Fuel</li>
                                <li>Add after rent car condition</li>
                                <li>Give feedback</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarInfo;