import React from 'react';
import './Etat.css';


class Etat4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contextUrl:"http://localhost:3000/DisplayPlanet"
        }
    }
    render() {
        return ( 
            <div
            alt="4"
            className="etat4 etat"
            >
                {
                    window.location.href === this.state.contextUrl
                ?
                    <img src="/images/uranus.png " alt="" className="imgplanet img1"/>
                :
                    <img src="/images/asteroid.png " alt="" className="imgasteroid img1"/>
                }
            </div>
        );
    }
}

export default Etat4;
