import React, { useState, Fragment } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import './SliderAvatar.css';
import RetriedvalCharacterIndex from './RetriedvalCharacterIndex';


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
  }
];




const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem  onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
          <img src={item.src} alt={item.altText} /> 
        </CarouselItem>
      );
    });

  
    return (
      <Fragment>
        <RetriedvalCharacterIndex index={items[activeIndex].src}/>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Fragment>
    );
  }

  export default Example;
  


