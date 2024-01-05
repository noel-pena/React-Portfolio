import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  return ( 
    <CarouselProvider
      naturalSlideWidth={125}
      naturalSlideHeight={125}
      totalSlides={5}
      infinite={true}
    >
      <Slider id='mySlider' >
      <a href="https://github.com/noel-pena/Todo-List">
        <Slide className="slide slide-1"  index={0}>To-Do List</Slide>
      </a>
      <a href='https://github.com/noel-pena/Random-Programmer-Quote-Generator'>
        <Slide className=" slide slide-2" index={1}>Random Programmer Quote</Slide>
      </a>
      <a href='https://noel-pena.github.io/Simon-game-jQuery/'>
        <Slide className=" slide slide-5" index={2}>Simon Game</Slide>
      </a>
      <a href='https://noel-pena.github.io/Drums/'>
        <Slide className="slide slide-3" index={3}>Drum App</Slide>
      </a>
      <a href='https://github.com/noel-pena'>
        <Slide className="slide slide-4" index={4}>More projects on GitHub</Slide>
      </a>
      </Slider>
      <ButtonBack id="button">Back</ButtonBack>
      <ButtonNext id="button">Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;