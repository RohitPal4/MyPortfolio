import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    

    return (
        <div>
            <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='/assets/logo.jpg' alt="logo" style={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid gray',
                        borderRadius: '50%'
                    }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" onClick={props.updateProgress} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services" onClick={props.updateProgress}>Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/skills" onClick={props.updateProgress}>Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={props.updateProgress}>Contact</Link>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
