import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import HeaderIcons from '../../molecules/header/HeaderIcons/HeaderIcons';
import HeaderMenus from '../../molecules/header/HeaderMenus/HeaderMenus';

import BurgerMolecule from '../../molecules/header/burger/BurgerMolecule';


const Wrapper = styled.div`
    width: 100%,
    height: 10%,
  display:flex
`;

const Header = ({ auth, siteTitle }) => (
    <Wrapper>
        <header
            style={{
            background: `#FF008C`,
            marginBottom: `1.45rem`,
            }}
        >
            <div
            style={{
                margin: `100 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                display: 'flex',
            }}
            >
            <h1 style={{ margin: 0 }}>
                <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
                >
                Rakuten Mobile
                </Link>
            </h1>
            <div
                style={{
                position: "absolute",
                left: `20%`,
                }}
            >
                <HeaderMenus/>
            </div>
            <div
                style={{
                position: "absolute",
                right: "10px",
                }}
            >
                <HeaderIcons auth={auth}/>
            </div>
            </div>
        </header>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
