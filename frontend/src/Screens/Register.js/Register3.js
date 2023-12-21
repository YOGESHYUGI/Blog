import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import Error from '../../Components/Error'
import Success from '../../Components/Success'
import Warning from '../../Components/Warning'
 
function Register3() {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [cpass, setcpass] = useState("")
  const [error, seterror] = useState(false)
  const [error1, seterror1] = useState(false)
  const [error2, seterror2] = useState(false)
  const [success, setsuccess] = useState(false)
  const [comp, setcomp] = useState(true)
 
  const validEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const validPass = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
 
  const location = useLocation()
 
  async function next() {
    if ((validPass.test(pass) && validPass.test(cpass)) && (validEmail.test(email))) {
      if (cpass.match(pass)) {
        const values = {
          Fname: location.state.Fname,
          Lname: location.state.Lname,
          Month: location.state.Month,
          Day: location.state.Day,
          Year: location.state.Year,
          Gender: location.state.Gender,
          email, pass
        }
        try {
          const data = await axios.post("/auths/save", values)
          setsuccess(true)
          seterror(false)
          seterror1(false)
          seterror2(false)
          setemail("")
          setpass("")
          setcpass("")
          setcomp(false)
        } catch (error) {
          setsuccess(false)
          seterror(true)
        }
      } else {
        seterror1(true)
        seterror(false)
        seterror2(false)
      }
    }
    else {
      seterror(true)
      seterror1(false)
      seterror2(false)
      setsuccess(false)
    }
  }
 
  function login() {
    window.location.href = "login"
  }
  return (
    <div>
      <div className='signinbox3'>
        <div className='sighead'>
          <img className="sigimage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
          <h2>Enter your Gmail address</h2>
          <p>Create your own Gmail address</p>
          {error && (<Error props={`Enter Valid Email and Password`} />)}
          {error1 && (<Error props={"Password Missmatch"} />)}
          {error2 && (<Warning props={"Password should have atleast 8 Characters, 1 Uppercase and 1 Number!"} />)}
          {success && (<Success props={"Registered Successfully"} />)}
        </div>
        <div className='sigbody'>
          <div className='sigbody1'>
            <input type='text' className='siginput' value={email} onChange={(e) => { setemail(e.target.value); seterror(false); seterror1(false); seterror2(false) }} placeholder='Gmail' />
          </div><br />
          <div className='sigbody1'>
            <input type='password'  className='siginput' value={pass} onChange={(e) => { setpass(e.target.value); seterror(false); seterror1(false); seterror2(false) }} onClick={()=>{seterror2(true);seterror(false)}} placeholder='Password' /><br /><br />
            <input type='password' className='siginput' value={cpass} onChange={(e) => { setcpass(e.target.value); seterror(false); seterror1(false); seterror2(false) }} placeholder='Confirm Password' />
          </div>
          <div className='sigbody3r'>
            {comp ? <button className='nextbutt' type='button' onClick={next}>Next</button> : <button className='nextbutt' type='button' onClick={login}>Login</button>}
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
 
export default Register3
