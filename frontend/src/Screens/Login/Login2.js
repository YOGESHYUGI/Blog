import React, { useState } from 'react'
import "./login.css"
import { useLocation } from 'react-router-dom'
import Error from '../../Components/Error'
import axios from 'axios'
 
function Login2() {
 
    const [error, seterror] = useState(false)
    const [pass, setpass] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);
 
    const location = useLocation()
    const email = location.state
 
    async function next() {
        const values = { email, pass }
        try {
            const data = await (await axios.post("/auths/login", values)).data
            localStorage.setItem("currentUser", JSON.stringify(data))
            window.location.href = "blog"
        } catch (error) {
            seterror(true)
        }
    }
 
    function togglePassword() {
        setPasswordShown(!passwordShown);
    };
 
    return (
        <div className='sigin'>
            <div className='signinbox'>
                <div className='sighead'>
                    <img className="sigimage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
                    <h2>Welcome</h2>
                    <div className='mail'>
                        <svg className='profileicon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <p className='emailicon'>{email}</p>
                    </div><br/>
                    {error && (<Error props={"Enter Valid Details"} />)}
                </div>
                <div className='sigbody'><br /><br />
                    <div className='sigbody1'>
                        <input type={passwordShown ? "text" : "password"} className='siginput' id='password'  value={pass} onChange={(e) => { setpass(e.target.value); seterror(false) }} placeholder='Password' />
                        <div className='sigcheck'>
                            <input type='checkbox' onClick={togglePassword} id='showPassword' className='sigcheckbox' />
                            <p>Show password</p>
                        </div>
                    </div>
                    <div className='sigbody3'>
                        <p><a href='register'>Forget password?</a></p>
                        <button className='nextbutt' onClick={next} type='button'>Next</button>
                    </div>
                </div>
            </div>
            <div className='signlast'>
                <select>
                    <option>English (united states)</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                </select>
                <div className='lastes'>
                    <p><a href="https://support.google.com/accounts?hl=en&visit_id=638317463160202642-3149299823&rd=2&p=account_iph#topic=3382296">Help</a></p>
                    <p><a href='https://policies.google.com/privacy?gl=IN&hl=en-US'>privacy</a></p>
                    <p><a href='https://policies.google.com/terms?gl=IN&hl=en-US'>Terms</a></p>
                </div>
            </div>
        </div>
    )
}
 
export default Login2
