//frameworks
import React from 'react'
import styled from 'styled-components'

//icons
import ChildCareIcons from '../../../atoms/icons/ChildCareIcons';
import SearchIcons from '../../../atoms/icons/SearchIcons';

//imports
import LoginButton from '../../../atoms/buttons/loginButton/LoginButton';
import LogoutButton from '../../../atoms/buttons/logoutButton/LogoutButton';
import Burger from '../../../atoms/burger/Burger';
//import Button from '@rakuten-rex/button';

import { Link } from "gatsby"

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display:flex

`;


function HeaderIcons({auth}) {
    if(auth){
        return (//logged in
            <Wrapper>
                
                <ChildCareIcons />
                <SearchIcons />
                <a href="https://stg-gcp.iot.mobile.rakuten.co.jp:3001/Logout"><LogoutButton>Logout</LogoutButton></a>
                <Burger />
            </Wrapper>
        )
    }
    else{//user not logged
        return(
            <Wrapper>
                <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_web_portal&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp:3001/loggingin/&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_rank_safe,90days@Refresh,30days@Access&contact_info_required=false&rae_service_id="><LoginButton>LogIn</LoginButton></a>
                <SearchIcons/>
                <Burger />
            </Wrapper>
        )
    }
}

export default HeaderIcons;
