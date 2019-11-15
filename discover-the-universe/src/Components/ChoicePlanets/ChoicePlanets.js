import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChoicePlanets.css';
import SliderPlanets from './SliderPlanets';
import { SELECT_REFERENCE_PLANET_EARTH, SELECT_PLANET} from '../actionTypes';


const items = [
  {
    src: "",
    key: '1',
    infos: ""
  },
  {
    src: "",
    key: '2',
    infos: ""
  },
  {
    src: "",
    key: '3',
    infos: ""
  },
  {
    src: "",
    key: '3',
    infos: ""
  }
]

const props_planet = ['mars_infos', 'venus_infos',
  'jupiter_infos', 'uranus_infos'];

class ChoicePlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mars: "",
      venus: "",
      jupiter: "",
      uranus: "",
      mars_infos: "",
      venus_infos: "",
      jupiter_infos: "",
      uranus_infos: "",
      earth_infos: ""
    }

  }

  componentDidMount() {
    this.getVenus();
    this.getMars();
    this.getJupiter();
    this.getUranus();
    this.getMarsInfos();
    this.getVenusInfos();
    this.getJupiterInfos();
    this.getUranusInfos();
    this.getEarthInfos();
  }

  getMars() {
    fetch('https://images-api.nasa.gov/search?q=mars')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          mars: data.collection.items[88].links[0].href
        })
      })
  }

  getMarsInfos() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          mars_infos: data
        })
      })
  }

  getVenus() {
    fetch('https://images-api.nasa.gov/search?q=venus')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          venus: data.collection.items[28].links[0].href
        })

      })
  }

  getVenusInfos() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/venus')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          venus_infos: data
        })
      })
  }

  getJupiter() {
    fetch('https://images-api.nasa.gov/search?q=jupiter')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          jupiter: data.collection.items[60].links[0].href
        })

      })
  }


  getJupiterInfos() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          jupiter_infos: data
        })
      })
  }

  getUranus() {
    fetch('https://images-api.nasa.gov/search?q=uranus')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          uranus: data.collection.items[3].links[0].href
        })

      })
  }


  getUranusInfos() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          uranus_infos: data
        })
      })
  }

  getEarthInfos() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/terre')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          earth_infos: data
        })
      })
  }


  affichage(){
      /*console.log("name : ", this.props.currentNameCharacter);
    console.log("currentCharacter : ", this.props.currentCharacter);
*/
  }

  render() {

    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count = 0;
      for (let j in this.state) {
        if (count === i) {
          items[i].src = this.state[j];
          items[i].infos = this.state[props_planet[i]];
        }
        count += 1;
      }
    }

    console.log(items);
    let planet = items[0].infos;
    this.props.dispatch({type:SELECT_PLANET.type, planet})

    let earth = this.state.earth_infos;
    this.props.dispatch({ type: SELECT_REFERENCE_PLANET_EARTH.type, earth });




    return (
      <div>
        {this.affichage()}
        {(items[0].src !== "" && items[1].src !== "" && items[2].src !== "" && items[3].src !== "") ? <SliderPlanets planets={items} /> : ""}
      </div>
    )


  }
}

const mapStateToProps = state => {

  return ({
    lang: state.lang,
    currentCharacter: state.currentCharacter,
    currentNameCharacter:state.currentNameCharacter

  })
};


export default connect(mapStateToProps)(ChoicePlanets);
