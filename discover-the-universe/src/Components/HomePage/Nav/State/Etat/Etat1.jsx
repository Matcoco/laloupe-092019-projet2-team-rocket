import React from 'react';
import './Etat.css';


class Etat1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contextUrl:"http://localhost:3000/"
        }
    }
    render() {
        return ( 
            <div alt="1" className="etat1 etat">
                {
                    window.location.href === this.state.contextUrl
                ?
                    <img src="/images/mars.png " alt="" className="imgplanet img1"/>
                :
                    <img src="/images/asteroid.png " alt="" className="imgasteroid img1"/>
                }
            </div>
        );
    }
}

export default Etat1;
