import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};


const RouteTransition = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (

    )}
);
