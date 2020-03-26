import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderIcons from './headerIcons/HeaderIcons';
import HeaderMenu from './headermenus/HeaderMenu';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#FF008C',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `100 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        paddingRight: '2rem',
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
      <div>
        <HeaderMenu />
      </div>
      <div
        style={{
          position: "absolute",
          right: 10,
        }}
      >
        <HeaderIcons auth={true}/>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
