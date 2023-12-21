import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tooltip from '@mui/material/Tooltip';
import Sidebar from '../../Components/Sidebar/Sidebar';
import "./Settings.css"
 
function Settings() {
    const [side, setside] = useState(false)
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function img() {
        window.location.href = "blog"
    }
    function ham() {
        setside(!side)
    }
 
    return (
        <div className='blog' >
            <div className='nav'>
                <div className='nav1'>
                    <div className='ham'><svg xmlns="http://www.w3.org/2000/svg" onClick={ham} width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                        <img onClick={img} className="navicon1" src='https://logodix.com/logo/34870.png' />
                    </div>
                </div>
                <div className='nav2'>
                    <div>
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
                    </div>
                </div>
            </div>
            {side ? <Sidebar /> : ""}
            <div className={`setting ${side ? "setting-active" : ""}`}>
                <h3>General</h3>
                <h3 className='set'>Use Blogger draft</h3>
                <h4><a href='user'>User profile</a></h4>
                <hr/>
            </div>
        </div>
    )
}
 
export default Settings
