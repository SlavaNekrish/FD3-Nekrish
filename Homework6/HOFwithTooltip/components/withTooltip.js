import React, { useState, useEffect, useRef } from 'react';


let withTooltip = (Content, timeDelay) => Comp => props => {
  
  const [showTT, changeTTstate]=useState(false);

  const blockRef=useRef(null);
  let timer=useRef();

  useEffect(() => {
    
    const element = blockRef.current;

    const showTooltip = event => {
      timer = setTimeout(() => {
        changeTTstate(true)
      }, timeDelay);
    }

    const hideTooltip = event => {
      changeTTstate(false);
      clearTimeout(timer);
    };

    
    element.addEventListener("mouseover", showTooltip);
    element.addEventListener("mouseout", hideTooltip);

    return () => {
      element.removeEventListener('mouseover', showTooltip);
      element.removeEventListener('mouseout', showTooltip);
    };


  }, []); 

     return (
        <React.Fragment>
          <div ref={blockRef} style={{ width: "150px", height: "50px", margin: "100px", border: "solid 2px grey"}}>
            <Comp {...props} />
            {
              showTT && 
              <div style={{width: "300px", margin: "20px"}}>
                <Content />
             </div>
            }
          </div>
        </React.Fragment>
    );
};

export { withTooltip };