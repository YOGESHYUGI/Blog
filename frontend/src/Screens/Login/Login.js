import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import Error from '../../Components/Error'

function Login() {
  const [email, setemail] = useState("")
  const [error, seterror] = useState(false)
  const [error1, seterror1] = useState(false)

  const validEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  const navigate = useNavigate()

  function next() {
    if (validEmail.test(email)) {
      navigate("/login2", { replace: true, state: email })
    } if (email) {
      seterror1(true);
      seterror(false)
    } else {
      seterror(true);
      seterror1(false)
    }
    // { email ? navigate("/login2", { replace: true, state: email }) : seterror(true) }
  }

  return (
    <div className='sigin'>
      <div className='signinbox'>
        <div className='sighead'>
          <img className="sigimage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
          <h2>Sign in</h2>
          <p>to continue to Blogger</p>
          {error && (<Error props={"Enter Valid Details"} />)}
          {error1 && (<Error props={"Enter Valid Email"} />)}
        </div>
        <div className='sigbody'>
          <div className='sigbody1'>
            <input type='text' className='siginput' value={email} onChange={(e) => { setemail(e.target.value); seterror(false) }} placeholder='Email or phone' />
            <p><a href='forgetemail'>Forget email?</a></p>
          </div>
          <div className='sigbody2'>
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <p><a href='https://support.google.com/chrome/answer/6130773?hl=en'>Learn more</a></p>
          </div>
          <div className='sigbody3'>
            <p><a href='register'>Create account</a></p>
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

export default Login
