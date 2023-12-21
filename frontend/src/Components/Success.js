import React from 'react'
import { Alert, Space } from 'antd';
 
function Success({props}) {
    return (
        <div className='suii'>
            <Alert message={props} type="success" showIcon />
        </div>
    )
}
 
export default Success
