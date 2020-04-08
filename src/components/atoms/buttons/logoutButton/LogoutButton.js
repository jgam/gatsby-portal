import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #FF008C;
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  font-weight: bold;

  cursor: pointer;
`;


function LogoutButton({children}) {
    return (
        <div>
            <Button primary>{children}</Button>
        </div>
    )
}

export default LogoutButton;
