import React from 'react'
import styled from 'styled-components'

//imports
import Product from '../../../atoms/menus/Product'
import About from '../../../atoms/menus/About'


const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display:flex;
  background: black;

`;

//this needs to be gone when sizing is small
//need to implement media query in here
function HeaderMenu() {
    return (
        <Wrapper>
            <About />
            <Product />
        </Wrapper>
    )
}

export default HeaderMenu;
