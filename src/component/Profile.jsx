import React from 'react'
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

export const Profile = () => {
    return (
        <div>

            <div className='p-d-flex p-jc-center p-ai-center'>
                <Avatar image="kehindeAregbesola.jpg"
                    size="xlarge"
                    shape="circle"
                    className='p-overlay-badge'>
                    <Badge value="4"
                        severity="info" />
                </Avatar>
            </div>
            <div className='p-d-flex p-jc-center'>
                Kehinde Aregbesola
            </div>

        </div>
    )
}
