import React from 'react';

function withRainbowFrame(colors) {
    return function(Comp) {
        return props => {
            const reduceCB = (acc, cur) => {
                return (
                    <div style={{ border: "solid 5px " + cur, padding: "5px" }}>
                        {acc}
                    </div>
                )
            }
        
            const rainbowFrame = colors.reduce(reduceCB, <Comp {...props}/>);
        
            return (
                <div style={{ width: 600, textAlign: 'center', margin: 'auto' }}>
                    {rainbowFrame}
                </div>
            );
        }
    }
};

export { withRainbowFrame };
