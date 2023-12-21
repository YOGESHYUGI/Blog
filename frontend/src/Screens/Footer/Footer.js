import React from 'react'
import "./footer.css"
 
function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <ul className='footerul'>
          <h3>Help</h3>
          <li><a href='https://support.google.com/blogger/?p=help_home&hl=en&authuser=#topic=3339243'>Help Center</a></li>
          <li><a href='https://support.google.com/blogger/community/?hl=en&gpf=%23!forum%2Fblogger'>Help Forum</a></li>
          <li><a href='https://www.youtube.com/user/BloggerHelp'>Video Tutorials</a></li>
        </ul>
 
        <ul className='footerul'>
          <h3>Community</h3>
          <li><a href='https://blogger.googleblog.com/'>Blogger Buzz</a></li>
        </ul>
 
        <ul className='footerul'>
          <h3>Developers</h3>
          <li><a href='https://developers.google.com/blogger?authuser'>Blogger Api</a></li>
          <li><a href='https://groups.google.com/access-error?continue=https://groups.google.com/g/bloggerdev'>Developer Forum</a></li>
 
        </ul>
      </div>
      <div className='footer2'>
        <br/>
        <hr className='hrr' />
        <ul className='footerul2'>
          <li><a href='https://policies.google.com/terms?hl=en-US'>Terms of Service</a></li><hr />
          <li><a href='https://policies.google.com/privacy?hl=en-US'>Privacy</a></li><hr />
          <li><a href='https://www.blogger.com/content-policy?hl=en-US&authuser'>Content Policy</a></li>
        </ul>
        <div>
          <select className='select'>
            <option className='option'>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}
 
export default Footer
