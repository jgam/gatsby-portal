import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';

//height: ${props => props.height ? props.height : "50px"};

const Wrapper = styled.div`
  height: ${props => props.height ? props.height : "50px"};
  width: ${props => props.width ? props.width : "50px"};
  color: ${props => props.color ? props.color : "black"};
  background-color: red;
  padding-top: 10px;
`;

function SearchIcons() {
    return (
        <Wrapper>
            <SearchIcon />
        </Wrapper>

    )}
export default SearchIcons;