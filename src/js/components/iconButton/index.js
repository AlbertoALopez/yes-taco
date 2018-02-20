import React from 'react';
import PropTypes from 'prop-types';
import { MorphIcon } from 'react-svg-buttons';
import './styles.scss';


const IconButton = props => {
  const Button = (props) => {
    if (props.clickHandler !== null) {
      return (
        <button className="button" onClick={() => props.clickHandler()}>
          {props.children}
          { props.type ?
            <MorphIcon type={props.type} size={props.size} />
              :
            null
          }
      </button>
      );
    }

    return (
      <button className="button">
        {props.children}
        { props.type ?
          <MorphIcon type={props.type} size={props.size} />
            :
          null
        }
      </button>
    );
  };

  return (
    <Button {...props} />
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  clickHandler: PropTypes.func,
};

IconButton.defaultProps = {
  clickHandler: () => null,
};

export default IconButton;
