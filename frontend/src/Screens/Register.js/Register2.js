import React, { Children, useState } from 'react'
import "./register.css"
import Error from '../../Components/Error'
import { useLocation, useNavigate } from 'react-router-dom'
 
function Register2() {
    const [Day, setDay] = useState("")
    const [Year, setYear] = useState("")
    const[error,seterror]=useState(false)
 
    const location=useLocation()
    const Fname=location.state.Fname
    const Lname=location.state.Lname
 
    const validDay=new RegExp('^([1-9]|[12][0-9]|3[01])');
    const validYear=new RegExp('^(19|2[0-9])');
    const navigate = useNavigate();
 
    function next() {
        const Month = document.querySelector('#select1').value;
        const Gender = document.querySelector('#select2').value;
        {((validDay.test(Day) && validYear.test(Year)) && (Month !=="Month" && Gender !=="Gender"))?
        navigate('/register3',{replace:true,state:{Fname,Lname,Day,Year,Month,Gender}}): 
        seterror(true)}
    }
    return (
        <div>
            <div className='signinbox'>
                <div className='sighead'>
                    <img className="sigimage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
                    <h2>Basic information</h2>
                    <p>Enter your birthday and gender</p>
                    {error && (<Error props={"Enter Valid Details"} />)}<br />
                </div>
                <div className='sigbody'>
                    <div className='sigbodygen'>
                        <select className='siggenselect' id="select1">
                            <option disabled selected>Month</option>
                            <option value="January">January</option>
                            <option value="Febuary">Febuary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <input type='text' value={Day} className='siginputgen' placeholder='Day' onChange={(e) => { setDay(e.target.value);seterror(false) }} />
                        <input type='text' value={Year} className='siginputgen' placeholder='Year' onChange={(e) => { setYear(e.target.value);seterror(false) }} />
                    </div><br />
                    <div className='sigbody1'>
                        <select className='siggenselect1' id="select2">
                            <option disabled selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className='sigbody3r'>
                        <button className='nextbutt' type='button' onClick={next}>Next</button>
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
 
export default Register2
