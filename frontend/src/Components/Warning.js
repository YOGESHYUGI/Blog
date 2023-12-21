import React from 'react'
import { Alert, Space } from 'antd';
function Warning({props}) {
    return (
        <div className='suii'>
            <Alert message={props} type="warning" showIcon />
        </div>
    )
}
 
export default Warning
