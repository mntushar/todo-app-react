import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import '../cse_component/my_style.css'


export default function navbar() {
    return (
        <Fragment>
          <nav className='myNavbar'>
            <ul>
              <li><NavLink activeClassName="mySelected" className='myNav' exact to="/">Function</NavLink></li>
              <li><NavLink activeClassName="mySelected" className='myNav' exact to="/class">Class</NavLink></li>
              <li><NavLink activeClassName="mySelected" className='myNav' exact to="/logout">Logout</NavLink></li>
            </ul>
          </nav>
        </Fragment>
    )
}
