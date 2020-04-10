import React from 'react'
import styled from 'styled-components'

//imports
import MenuIcon from '@material-ui/icons/Menu';
import SlidingComponent from '../../molecules/SlidingComponent/SlidingComponent';

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
  border-radius: 3px;
  cursor: pointer;

  :focus {
    opacity: 0.5;
    outline: none;
  }
`;

//create state in here to take care of the transition


function Burger() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The burger was clicked.');
      }
    return (
        <Wrapper>
            <MenuIcon onClick={SlidingComponent}></MenuIcon>
        </Wrapper>
    )
}

export default Burger;
