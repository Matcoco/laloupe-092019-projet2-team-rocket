import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../HomePage/Nav/NavBar';
import LinkButton from '../LinkButton';
import './Planets.css';
import Footer from '../HomePage/Footer/Footer';


const TERRE = {
    id: "terre",
    name: "La Terre",
    englishName: "Earth",
    moons: [
        {
            moon: "La Lune",
            rel: "https://api.le-systeme-solaire.net/rest/bodies/lune"
        }
    ],
    mass: {
        massValue: 5.97237,
    },
    vol: {
        volValue: 1.08321,
    },
    density: 5.5136,
    gravity: 9.8,
};


const urlPicture = {
    Mars: "https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/07/mars-robot-1.jpg",
    Vénus: "./images/venus.png",
    Jupiter: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1274b4e5-aa00-45ca-a9db-6a90e7073a8c/d4mbwk9-c60dbf87-948e-4fca-8294-8d34e1d2505f.jpg/v1/fill/w_1600,h_704,q_75,strp/jupiter_by_justv23-d4mbwk9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xMjc0YjRlNS1hYTAwLTQ1Y2EtYTlkYi02YTkwZTcwNzNhOGMvZDRtYndrOS1jNjBkYmY4Ny05NDhlLTRmY2EtODI5NC04ZDM0ZTFkMjUwNWYuanBnIiwid2lkdGgiOiI8PTE2MDAiLCJoZWlnaHQiOiI8PTcwNCJ9XV19.C2p8IuqEStml6bx4QecihuO90vRVv8r3N0PV0l4AR54",
    Uranus: "https://sansible.fr/wp-content/uploads/2017/06/uranus_dawn_by_fokkusu1991-DeviantArt.png"
}


class DisplayPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: this.props.currentPlanet,
            picture: this.props.currentPlanetPicture,
            threeMoons: {},
            urlpicture: urlPicture
        }
    }


    displayAllMoons = () => {
        let moons = this.state.planet.moons;
        let lune = moons.map(lune => lune.moon);
        let lune2 = lune + " ";
        return (
            lune2
        );
    }
    displayThreeMoons = () => {
        let allMoons = this.state.planet.moons;
        let pos = 3;
        let n = this.state.planet.moons.length - 3;
        let removeMoons = allMoons.splice(pos, n);
        let threeMoons = removeMoons + " ";
        this.setState({
            threeMoons: threeMoons
        })
    }


    render() {
        console.log("planets", this.state.planet)
        return (
            <div className="">
                <NavBar />
                <div className="containerplanets">
                    <div className="plane">
                        {this.state.planet.length === 0 ? <p>loading</p> : <img className="mob-6 tab-12 dsk-10" src={this.state.picture} alt="Picture of mars" ></img>}
                    </div>
                </div>

                <div className="mob-12">
                    <div className="containerimg">
                        <img className="mob-12 font-avatar" src={urlPicture[this.state.planet.name]} alt="font-mars" />
                    </div>


                    <div class="bubble">
                        <div class="bubble-text">
                            {this.state.planet.length === 0 ? <p>loading</p> : <p className="bull" >{this.props.lang.infoPlanet[20]} {this.state.planet.name}</p>}
                        </div>
                        <div className="containeravatar">
                            <img className="mob-12" src={this.props.currentCharacter} alt="avatar" />
                        </div>
                    </div>

                    <div className="containertext">
                        {this.state.planet.length === 0 ? <p>loading</p> :
                            <p>
                                {this.state.planet.name} {this.props.lang.infoPlanet[0]}
                                {this.state.planet.name} {this.props.lang.infoPlanet[1]}
                                {this.state.planet.mass.massValue > TERRE.mass.massValue ? this.props.lang.infoPlanet[2] : this.props.lang.infoPlanet[3]} {this.props.lang.infoPlanet[4]}
                                {this.state.planet.mass.massValue > TERRE.mass.massValue ? this.props.lang.infoPlanet[5] : this.props.lang.infoPlanet[6]} {this.props.lang.infoPlanet[7]}
                                {this.state.planet.name} {this.props.lang.infoPlanet[8]}
                                {this.state.planet.vol.volValue} {this.props.lang.infoPlanet[9]}
                                {this.state.planet.vol.volValue > TERRE.vol.volValue ? this.props.lang.infoPlanet[2] : this.props.lang.infoPlanet[3]} {this.props.lang.infoPlanet[7]}
                                {this.state.planet.moons === null ? this.props.lang.infoPlanet[10] :
                                    `${this.props.lang.infoPlanet[11]} ${this.state.planet.moons.length}
                    ${this.state.planet.moons.length > 0 ? this.props.lang.infoPlanet[12] : this.props.lang.infoPlanet[13]} :
                    ${this.state.planet.moons.length <= 3 ? this.displayAllMoons() : this.displayThreeMoons()}`}. {this.props.lang.infoPlanet[14]} {this.state.planet.gravity} {this.props.lang.infoPlanet[15]}
                                {this.state.planet.gravity > TERRE.gravity ? this.props.lang.infoPlanet[2] : this.props.lang.infoPlanet[3]} {this.props.lang.infoPlanet[16]} {this.state.planet.gravity > TERRE.gravity ? this.props.lang.infoPlanet[17] : this.props.lang.infoPlanet[18]} {this.props.lang.infoPlanet[19]}</p>}
                    </div>
                </div>
                <div className="btn-previous">
                    <LinkButton className='btn btn-info btn-ChoiceCharacter' to='/ChoicePlanets'>{this.props.lang.choiceCharacter[4]}</LinkButton>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {

    return ({
        lang: state.lang,
        currentCharacter: state.currentCharacter,
        currentPlanet: state.currentPlanet,
        earth_reference_infos: state.earth_reference_infos,
        currentPlanetPicture: state.currentPlanetPicture
    })
};


export default connect(mapStateToProps)(DisplayPlanet);
