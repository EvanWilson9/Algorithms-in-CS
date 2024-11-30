import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        <Link to='/' className='title'>Algorithms in Computer Science</Link>
        <nav>
            {/* <Link to="/" className="link">HOME</Link> */}
            <Link to="/pageOne" className="link">Question #1</Link>
            <Link to="/pageTwo" className="link">Question #2</Link>
            <Link to="/pageThree" className="link">Question #3</Link>
            <Link to="/pageFour" className="link">Question #4</Link>
            <Link to="/pageFive" className="link">Question #5</Link>

        </nav>
    </header>
  )
}