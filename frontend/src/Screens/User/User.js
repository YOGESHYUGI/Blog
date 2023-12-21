import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./User.css"
import Footer from '../Footer/Footer'

function User() {
    const [topping, setTopping] = useState("")
    const [username, setusername] = useState("")
    const [userimageurl, setuserimageurl] = useState("")
    const [userimage, setuserimage] = useState([])
    const [use, setuse] = useState([])

    const user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(user)

    const onOptionChange = e => {
        setTopping(e.target.value)
    }

    const img = () => {
        window.location.href = "blog"
    }

    useEffect(() => {
        async function fetchData() {
          try {
            const data = (await axios.get(`/auths/${user._id}`)).data
            setuse(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])
     

    async function editUser() {
        const values = {
            topping,
            username,
            userimageurl
        }
        try {
            const data = await (await axios.put(`/auths/${user._id}`,values)).data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <nav className='setnav'>
                <div className='set1'>
                    <img onClick={img} className="navicon1" src='https://logodix.com/logo/34870.png' />
                    <h2 className='navtit' onClick={img}>Blogger</h2>
                </div>
                <div className='set2'>
                    <Tooltip className='title' title={use.Fname} placement="bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </Tooltip>
                </div>
            </nav>
            <div className='setmain'>
                <h2>Edit User Profile</h2>
                <div className='setdetails'>
                    <h3>Identity</h3>
                    <div className='setdetailsmain'>
                        <h5>Username</h5>
                        <h5 className='setss'>{use.Fname}</h5>
                        <h5 className='suvs'>Required</h5>
                        <h5>Email address</h5>
                        <h5 className='setss'>{use.email}</h5>
                        <h5 className='suvs'>Email address for readers to contact you.</h5>
                        <h5>Display name</h5>
                        <input type='text' placeholder={use.Fname} value={username} onChange={(e) => { setusername(e.target.value) }} />
                        <h5 className='suvs'>The name used to sign your blog posts. ?</h5>
                    </div>
                    <hr />
                    <h3>Profile Photo</h3>
                    <div className='setdetailsmain1'>
                        <h5>From your computer</h5>
                        <input type='file' onChange={(e) => { setuserimage(e.target.files[0]) }} />
                        <h5 className='setss'>From the web. Paste an image URL below.</h5>
                        <input type='text' value={userimageurl} onChange={(e) => { setuserimageurl(e.target.value) }} />
                        <br /><br />
                    </div>
                    <hr />
                    <h3>Gender</h3>
                    <div className='setdetailsmain2'>
                        <h5>Gender</h5>
                        <div className='radioss'>
                            <input
                                type="radio"
                                name="topping"
                                value="Male"
                                id="regular"
                                checked={topping === "Male"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="regular">Male</label>

                            <input
                                type="radio"
                                name="topping"
                                value="Female"
                                id="medium"
                                checked={topping === "Female"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="medium">Female</label>

                            <input
                                type="radio"
                                name="topping"
                                value="Others"
                                id="large"
                                checked={topping === "Others"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="large">Others</label>
                        </div>
                    </div>
                    <div>
                        <button onClick={editUser} className='butlast'>Submit</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default User
