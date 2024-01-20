import React from 'react'
import './Sidemenu.css'

const SideMenu = ()=> {
    return(
        <aside className='sidemenu'>
            <div className='sidemenu-button'>
                <span>+</span>
                New Chat
            </div>
        </aside>
    )
}

export {SideMenu}