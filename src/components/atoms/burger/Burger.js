import React from 'react'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu';

//burger icon takes parameter
//refers which pop ups should appear
const Wrapper = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  background: #FF008C;
  color: white;

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em .5em;
  border: none;
  border-radius: 3px
  cursor: pointer;
`;


function Burger() {
    return (
        <Wrapper>
            <MenuIcon></MenuIcon>
        </Wrapper>
    )
}

export default Burger;
