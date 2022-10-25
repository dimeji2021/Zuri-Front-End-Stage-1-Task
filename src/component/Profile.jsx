import React from 'react'
import { Avatar } from "primereact/avatar";

export const Profile = ({name,avatar}) => {
    return (
        <div>

            <div className='p-d-flex p-jc-center p-ai-center'>
                <Avatar image={avatar}
                    size="xlarge"
                    shape="circle"
                    className='p-overlay-badge'>
                </Avatar>
            </div>
            <div className='p-d-flex p-jc-center'>
                <h5>{name}</h5>
            </div>

        </div>
    )
}
