import React from 'react'
import "./Home.css"
import Footer from '../Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
 
function Home() {
    return (
        <div className='mainhome'>
            <Navbar/>
            <div className='home'>
                <img className='homeimg1' src="https://www.blogmarketingacademy.com/wp-content/uploads/2013/04/blog-homepage.jpg" />
                <img className="homeimg2" src="https://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg" />
                <img className="homeimg3" src="https://websitevoice.com/blog/top-5-best-blogging-sites-in-2021/blogger-home-page.jpg" />
                <Footer />
            </div>
        </div>
    )
}
 
export default Home
