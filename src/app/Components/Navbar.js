import React from 'react'
import Results from './Results';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import Home from './Home';
import "./Navbar.css"
import Login from './Login';
import Chat from './Chat';
const Navbar = () => {
    return (
        <>
            <nav>
                <a to >
                    FASHION STYLIST
                </a>
                <div>
                    <ul>
                        <li>
                            <CustomLink to='/Home'>Home</CustomLink>
                            <CustomLink to='/Results'>Results</CustomLink>
                            <CustomLink to='/Chat'>Chatbot</CustomLink>
                            <CustomLink to='/Login'>Login</CustomLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

function CustomLink({to, children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar
