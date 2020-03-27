import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Router, Redirect } from "@reach/router"

import Layout from '../components/layout';

function Login() {
    //getting the auth code
    var starting_index = window.location.href.indexOf('code=') + 5;
    const auth_code = window.location.href.slice(starting_index);
    console.log('auth_code is : ');
    console.log(auth_code);

    const [userData, setData] = useState();

    async function getUserInfo() {
        let token_data = await axios.post('https://stg.app.rakuten.co.jp/engine/token?client_id=iot_web_portal&client_secret=6t9h3v7ym7BTTT6QZAsIJOwDKvBtL8XwJXWgGGgeY6V9&grant_type=authorization_code&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_rank_safe,90days@Refresh,30days@Access&code=' + auth_code);
        let user_info = await axios.get('https://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926?access_token=' + token_data.data.access_token);
        console.log('user info is here');
        console.log(JSON.stringify(user_info.data));
        console.log(typeof(user_info.data));
        console.log(user_info);
        //console.log(user_info.data[0].value)
        setData(user_info.data)
    }

    useEffect(() =>{
        getUserInfo();
    }, [])

    /*
    {userData.map( data =>(
                <div>{Object.keys(data)[0]} : {Object.values(data)[0]}</div>
            ))}
    */

    /*
    <Redirect 
                        to={`/`}
                        component={Layout}
                    />
    */
    return (
        <Layout auth={true}>
            <div>
                ...loading
                    
            </div>
        </Layout>
    )
}

export default Login;
