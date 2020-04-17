import React from 'react'
import styled from 'styled-components'

//imports
import Product from '../../../atoms/menus/Product'
import About from '../../../atoms/menus/About'

//Router imports
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display:flex;
  background: inherit;

`;

//this needs to be gone when sizing is small
//need to implement media query in here
function HeaderMenu() {
    return (
        <Router>
            <Wrapper>
                <About />
                <Product />
            </Wrapper>
        </Router>
    )
}

export default HeaderMenu;
