import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';

//height: ${props => props.height ? props.height : "50px"};

const Wrapper = styled.div`
@keyframes hoverButton{
    from{
        color: white;
    }
    to {
        color: #a51010;
    }
}
  color: white;
  background: #FF008C;
  padding: 0.25em .5em;
  cursor: pointer;
  padding-left: 10px;

  &:hover{
    animation: hoverButton 0.2s ease-in forwards;
  }

`;

function SearchIcons() {
    return (
        <Wrapper>
            <SearchIcon/>
        </Wrapper>

    )}
export default SearchIcons;