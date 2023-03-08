import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array,
    };

    render() {
        const reduceCB = (acc, cur) => {
            return (
                <div style={{ border: "solid 5px " + cur, padding: "5px" }}>
                    {acc}
                </div>
            )
        }

        const rainbowFrame = this.props.colors.reduce(reduceCB, this.props.children);

        return (
            <div style={{ width: 300, textAlign: 'center', margin: '100px auto' }}>
                {rainbowFrame}
            </div>
        );
    }
}

export default RainbowFrame;
