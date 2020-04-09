import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    z-index: 20;

`;

/* 
@keyframes incomingAnim {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  animation: incomingAnim 0.5s ease-out forwards;
*/
function SlidingComponent() {
    return (
        <Wrapper>
            sliding component!
        </Wrapper>
    )
}

export default SlidingComponent;
