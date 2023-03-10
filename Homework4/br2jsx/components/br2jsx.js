import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {

    static propTypes = {
        text: PropTypes.string
    };

    render() {
        const mapCB = ((el, id) => {
            return (
                  <React.Fragment key={id}>{el}{id !== 3 && <br/>}</React.Fragment>
            )
        })

        const mineContent = this.props.text.split(/<br\s*\/*>/).map(mapCB);
        
        return (
            <div className='br2jsx' style={{ width: 200, padding: '20px 0px',textAlign: 'center', margin: '100px auto', border: "solid 1px black", backgroundColor: 'lightblue'}}>
                {mineContent}
            </div>
        );
    }
}

export default Br2jsx;
