import React from 'react'
import styled from 'styled-components'

import ChildCareIcon from '@material-ui/icons/ChildCare';

const Wrapper = styled.button`
  height: ${props => props.height ? props.height : "15%"};
  width: ${props => props.width ? props.width : "15%"};
  color: ${props => props.color ? props.color : "black"};
`;

function ChildCareIcons() {
    return (
        <Wrapper>
            <ChildCareIcon></ChildCareIcon>
        </Wrapper>
    )
}

export default ChildCareIcons;
