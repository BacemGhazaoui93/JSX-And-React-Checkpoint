import React from 'react';
{/*importing a separate css file created for this component*/}
import './ProfilePhoto.css';

{/*Creating a ProfilePhoto Component with an image file placed in the public folder*/}

function ProfilePhoto() {
  return (
    <div>
      <!--adding the image to the component and using the className for Styling-->
      <img src="/Profile.jpg" className="profile-pic" alt="Profile Picture" /></div>


  )
}

export default ProfilePhoto