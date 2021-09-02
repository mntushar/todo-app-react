import React, {Fragment} from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';


export default function logout() {
    sessionStorage.clear()
    window.location.reload();
    return(
        <>
            <Redirect to='/login' />
        </>
    )
    
}
