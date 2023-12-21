import React, { useState } from 'react'
import "./register.css"
import Error from '../../Components/Error'
import { useNavigate } from 'react-router-dom'
 
function Register() {
  const [error, seterror] = useState(false)
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
 
  const navigate = useNavigate();
 
  async function next() {
      navigate('/register2',{replace:true,state:{Fname,Lname}});
  }
  return (
    <div>
      <div className='signinbox'>
        <div className='sighead'>
          <img className="sigimage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
          <h2>Create a Google Account</h2>
          <p>Enter your name</p>
          {error && (<Error props={"Enter Valid Details"} />)}<br />
        </div>
        <div className='sigbody'>
          <div className='sigbody1'>
            <input type='text' value={Fname} className='siginput' placeholder='Firstname' onChange={(e) => { setFname(e.target.value); seterror(false) }} />
          </div><br />
          <div className='sigbody1'>
            <input type='text' value={Lname} className='siginput' placeholder='Lastname' onChange={(e) => { setLname(e.target.value); seterror(false) }} />
          </div>
          <div className='sigbody3r'>
            {(Fname && Lname) ? <button className='nextbutt' type='button' onClick={next}>Next</button> : <button className='nextbutt' type='button' onClick={() => { seterror(true) }}>Next</button>}
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
 
export default Register
