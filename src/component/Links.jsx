import React from 'react'
import { Button } from "primereact/button";

export const Links = ({ links }) => {
    return (
        <div className="p-d-flex p-jc-center">
            <div className='p-d-flex p-flex-column' style={{ width: 70 + "%" }}>
                {links.map((link) => (<Button className="p-p-3 p-m-2">
                    <i className="pi pi-youtube p-px-2">1</i>
                    <span className="p-px-3">{link.name}</span>
                </Button>))}
            </div>
        </div>
    )
}
