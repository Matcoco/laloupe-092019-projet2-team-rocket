import React, { useState, Fragment, Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import './SliderAvatar.css';
import { connect } from 'react-redux';
import {SELECT_CHARACTER} from '../actionTypes';



const items = [
  {
    src: '/images/astronaute1.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/images/astronaute2.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/images/astronaute3.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: '/images/astronaute-fille1.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: '/images/astronaute-fille2.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: '/images/astronaute4.png',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: '/images/astronaute5.png',
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: '/images/astronaute-ET.png',
    altText: 'Slide 8',
    caption: 'Slide 8'
  }
];



class Slider extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      setActiveIndex:0,
      currentCharacterSlider:""
    }
  }

  next = () => {
    if (this.state.animating) return;
    let activeIndex = this.state.activeIndex;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      setActiveIndex:nextIndex,
      activeIndex:nextIndex,
      currentCharacterSlider:items[nextIndex].src
    })
  }

  handleChangeCharacter = () => {
    let character = this.state.currentCharacterSlider;
    this.props.dispatch({type:SELECT_CHARACTER.type, character});
}


  previous = () => {
    if (this.state.animating) return;
    let activeIndex = this.state.activeIndex;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : activeIndex - 1;

    this.setState({
      setActiveIndex:nextIndex,
      activeIndex:nextIndex,
      currentCharacterSlider:items[nextIndex].src
    })

  }




  slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={this.setState({setAnimating:true})}
        onExited={this.setState({setAnimating:false})}
        key={item.src}
      >
      <img src={item.src} alt={item.altText} />
        
      </CarouselItem>
    );
  });

  componentDidUpdate(){
      this.handleChangeCharacter();
  }

  render(){
    return (
      <Fragment>
      <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} interval={false} >
        {this.slides}
        
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </Fragment>
    );
  }

}

const mapStateToProps = state => {

  return ({
      currentCharacter: state.currentCharacter
  })
};

export default connect(mapStateToProps)(Slider);


