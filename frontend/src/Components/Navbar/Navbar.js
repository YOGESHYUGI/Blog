import React, { useState } from 'react'
import "./nav.css"
import Tooltip from '@mui/material/Tooltip';

 
function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function img() {
        window.location.href = "blog"
    }
    function create(){
        window.location.href="login"
    }
    return (
            <div className='nav'>
                <div className='nav1'>
                    {user ? <>
                    <img onClick={img} className="navicon" src='https://logodix.com/logo/34870.png' />
                    <h2 className='navtit' onClick={img}>Blogger</h2></> :
                    <>
                    <img className="navicon11" src='https://logodix.com/logo/34870.png' />
                    <h2 className='navtit11'>Blogger</h2>
                    </>}
                </div>
                <div className='nav2'>
                    {user ? <div>
                        <div className='ace'>
                            <Tooltip className='title' title="Help or Feedback" placement="bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg>
                            </Tooltip>
                            <Tooltip className='title' title={user.Fname} placement="bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </Tooltip>
                        </div>
                    </div> : <><a className='navlink' href='login'>SIGNIN</a>
                        <button className='navcrete' onClick={create}>CREATE YOUR BLOG </button></>}
                </div>
            </div>
    )
}
 
export default Navbar
