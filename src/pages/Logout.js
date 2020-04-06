import React from 'react'
import Button from '@rakuten-rex/button';


function Logout() {
    return (
        <div>
            here is logout component
            <a href="https://stg-gcp.iot.mobile.rakuten.co.jp:3001/"><Button>Go to Home</Button></a>
            <frameset rows="100%,0">
                <frame src="./index" name="frame1" frameborder="0" ></frame>
                <frame src="https://member.id.rakuten.co.jp/rms/nid/logout" name="frame2" frameborder="0" ></frame>
            </frameset>
        </div>
    )
}

export default Logout;
