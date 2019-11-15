import React, { useState, Fragment } from 'react';
import NavBar from '../HomePage/Nav/NavBar';
import { connect } from 'react-redux';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import LinkButton from '../LinkButton';
import {SELECT_PLANET, SELECT_PLANET_PICTURE} from '../actionTypes';


class Sliderclass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      setActiveIndex:0
    }
    
  }

  currentIndex = 0;
  

  next = () => {
    if (this.animating) return;
    let activeIndex = this.state.activeIndex;
    const nextIndex = activeIndex === this.props.planets.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      setActiveIndex:nextIndex,
      activeIndex:nextIndex,
    })
    this.currentIndex = nextIndex;
  }

  previous = () => {
    if (this.animating) return;
    let activeIndex = this.state.activeIndex;
    const nextIndex = activeIndex === 0 ? this.props.planets.length - 1 : activeIndex - 1;
    this.setState({
      setActiveIndex:nextIndex,
      activeIndex:nextIndex,
    })
    this.currentIndex = nextIndex;
  }

  goToIndex = () => {
    if (this.animating) return;
    let activeIndex = this.state.activeIndex;
    const nextIndex = activeIndex === 0 ? this.props.planets.length - 1 : activeIndex - 1;
    this.setState({
      setActiveIndex:nextIndex,
      activeIndex:nextIndex,
    })
  }


  slides = this.props.planets.map((item) => {
    return (
      <CarouselItem
      onExiting={this.setState({setAnimating:true})}
      onExited={this.setState({setAnimating:false})}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption}  />
      </CarouselItem>
    );
  });



  componentDidMount(){
    this.currentPlanet();
   this.currentPlanetPicture();
  }


  componentDidUpdate(){
    this.currentPlanet();
    this.currentPlanetPicture();
  }
  
  currentPlanet = () => {

    let planet = this.props.planets[this.currentIndex].infos;
    this.props.dispatch({type:SELECT_PLANET.type, planet})

  //console.log("je suis dans ma fonction currentPlanet : " , this.props.currentPlanet.id);
  }

  currentPlanetPicture = () => {
    let picture = this.props.planets[this.currentIndex].src;
    this.props.dispatch({type:SELECT_PLANET_PICTURE.type, picture});
  }
    


  render(){

    console.log("props.currentPlanet", this.props.currentPlanet);
    return (
      <Fragment>
          {this.currentPlanet()}
          {this.currentPlanetPicture()}
          {this.currentPlanet.id === "mars" ? this.currentPlanet():""}
          <NavBar />
          <div className="">
            <h3>{this.props.lang.choicePlanet[0]}</h3>
            <h5>{this.props.currentPlanet.id === undefined ? "mars": this.props.currentPlanet.id}</h5>
              <div className="carousel-planet">
                <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} interval={false}>
              
                {this.slides}

                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </div>
              <div className="buttons-planets">
              <LinkButton className="btn btn-info btn-ChoiceCharacter" to="/ChoiceCharacter">{this.props.lang.choiceCharacter[4]}</LinkButton>
              <LinkButton className="btn btn-info btn-ChoiceCharacter" to="/DisplayPlanet">{this.props.lang.choiceCharacter[1]}</LinkButton>
            </div>
        </div>

      </Fragment>
  
    );
  }

}


const mapStateToProps = state => {

  return ({
      lang: state.lang, 
      currentCharacter: state.currentCharacter,
      currentPlanet:state.currentPlanet,
      currentNameCharacter: state.currentNameCharacter
  })
};

export default connect(mapStateToProps)(Sliderclass);

