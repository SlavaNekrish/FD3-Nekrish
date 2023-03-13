import React from 'react';
import PropTypes from 'prop-types';


class DoubleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    };

    Button1Pressed = (EO) => {
      this.props.cbPressed(1);
    };

    Button2Pressed = (EO) => {
      this.props.cbPressed(2);
    };

    render() {

        return (
            <div className='DoubleButton'>
              <input type='button' value={this.props.caption1} onClick = {this.Button1Pressed} />
              <span>{this.props.children}</span>
              <input type='button' value={this.props.caption2} onClick = {this.Button2Pressed} />
            </div>  
        );
    }
}

export default DoubleButton;