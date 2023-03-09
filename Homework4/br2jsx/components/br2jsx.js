import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {

    static propTypes = {
        children: PropTypes.string.isRequired
    };

    render() {
        const mapCB = el => {
            return (
                  <React.Fragment>{el}<br/></React.Fragment>
            )
        }

        const mineContent = this.props.children.split(/<br\s*\/*>/).map(mapCB);
        
        return (
            <div className='br2jsx' style={{ width: 200, padding: '20px 0px',textAlign: 'center', margin: '100px auto', border: "solid 1px black", backgroundColor: 'lightblue'}}>
                {mineContent}
            </div>
        );
    }
}

export default Br2jsx;
