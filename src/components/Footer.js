import React from 'react'

export default function Footer({todos}) {
    return (
        <div>
        <nav className="navbar fixed-bottom  navbar-light" style={{backgroundColor:"pink"}}>
        <span className="navbar-text mr-auto">
            <strong>TODOLAR</strong>
        </span>
       
        <span className="navbar-text navbar-nav pr-4 my-2 my-lg-0">
             <strong>TOPLAM TODO: : </strong>
    <span className="badge badge-danger">{todos.length}</span>
        </span>
    </nav>
    </div> 
    )
}
