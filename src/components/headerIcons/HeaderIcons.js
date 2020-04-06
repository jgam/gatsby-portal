import React from 'react'
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Button from '@rakuten-rex/button';

import { Link } from "gatsby"

function HeaderIcons({auth}) {
    if(auth){
        return (//logged in
            <div>
                <div>
                    <ChildCareIcon 
                        style={{
                            height: `15%`,
                            width: `15%`,
                        }}
                    />
                </div>
                <a href="https://stg-gcp.iot.mobile.rakuten.co.jp:3001/Logout"><Button>Logout</Button></a>
                
            </div>
        )
    }
    else{//user not logged
        return(
            <div>
                <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_web_portal&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp:3001/loggingin/&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_rank_safe,90days@Refresh,30days@Access&contact_info_required=false&rae_service_id="><Button>LogIn</Button></a>
            </div>
        )
    }
}

export default HeaderIcons;
