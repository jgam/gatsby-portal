import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
@keyframes hoverButton{
    from{
        color: white;
    }
    to {
        color: #a51010;
    }
}
  /* Adapt the colors based on primary prop */
  background: #FF008C;
  color: white;

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border:none;
  cursor: pointer;
  font-weight: bold;

  &:hover{
    animation: hoverButton 0.2s ease-in forwards;
  }


`;

function About() {
    return (
        <Wrapper>
            About
        </Wrapper>
    )
}

export default About;
