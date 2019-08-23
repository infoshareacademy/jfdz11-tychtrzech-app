import React from 'react';

import {avatarIcon, iconCointainer, newPassword} from '../scenes/avatarIcon.module.css'

import AddPhoto from '../components/AddPhoto/AddPhoto'



function Profile(){

  return (
     
    <div className={iconCointainer}>
    <div className={avatarIcon}>
    
   <AddPhoto />
        
    

    </div>
 
    </div>
 

  );
  
}

export default Profile


