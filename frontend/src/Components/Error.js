import React from 'react'
import { Alert, Space, message } from 'antd';
 
function Error({props}) {
    return (
        <div className='suii'>
            <Alert message={props} type="error" showIcon />
        </div>
    )
}
 
export default Error
