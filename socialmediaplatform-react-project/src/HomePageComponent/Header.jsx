import React from 'react'

const Header = () => {
  return (
    <div>
        <header>

<div className="logo">
    <img src="Assets/logo.jpg" alt="" />
</div>

<div className="nav-bar">
    <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Explore">Explore</a></li>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#notifications">Notifications</a></li>
        <li id='btn-div'><a href="#SignIn/SignUp">Signup</a></li>

    </ul>
   
    
</div>


</header>
    </div>
  )
}

export default Header