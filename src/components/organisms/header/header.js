import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styled from 'styled-components';

//import Atoms
import HeaderIcons from '../../molecules/header/HeaderIcons/HeaderIcons';
import HeaderMenus from '../../molecules/header/HeaderMenus/HeaderMenus';

//import Molecules
import SlidingComponent from '../../molecules/SlidingComponent/SlidingComponent';


const Wrapper = styled.div`
    width: 100%,
    height: 10%,
    background: #FF008C;
    position: relative;
`;

const SecondHeaderMenu = styled.div`
    display: flex;
    padding: 0 1.0875rem;
    position: absolute;
    right: 10px;

`;

function Header({ auth, siteTitle }){

    //state regarding SlidingComponents
    const [shouldBeRendered, setSliding] = useState(false);

    return(
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
                    alignItems: `center`,
                }}
                >
                    <div>
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
                    </div>
                    <SecondHeaderMenu>
                        <HeaderMenus/>
                        <HeaderIcons auth={auth} setSliding={setSliding} shouldBeRendered={shouldBeRendered}/>
                    </SecondHeaderMenu>
                    
                </div>
            </header>
            <SlidingComponent shouldBeRendered={shouldBeRendered}/>
        </Wrapper>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;