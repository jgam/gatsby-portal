import React from 'react'
//import ChildCareIcon from '@material-ui/icons/ChildCare';

function HeaderIcons({auth}) {
    if(auth){
        return (
            <div>
                header icons
            </div>
        )
    }
    else{
        return(
            <div>
                not logged in
            </div>
        )
    }
}

export default HeaderIcons;
