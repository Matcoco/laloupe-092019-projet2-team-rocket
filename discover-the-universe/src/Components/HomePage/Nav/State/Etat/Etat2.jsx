import React from 'react';
import './Etat.css';


class Etat2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contextUrl:"http://localhost:3000/ChoiceCharacter"
        }
    }
    render() {
        return ( 
            <div alt="2" className="etat2 etat">
                {
                    window.location.href === this.state.contextUrl
                ?
                    <img src="/images/moon.png " alt="" className="imgplanet img1"/>
                :
                    <img src="/images/asteroid.png " alt="" className="imgasteroid img1"/>
                }
            </div>
        );
    }
}

export default Etat2;
