import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
            <div className="page">
                <h1 className="nodisplay">404</h1>
                <h3>Go back to the Home page</h3>
                <div className="btn btn-outline-info">
                <NavLink  to="">Go Home</NavLink>
                </div>
            </div>
        </>
    )
}
