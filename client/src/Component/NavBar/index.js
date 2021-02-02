import React, { useState } from 'react'
import AddUser from '../AddUser';
import './style.css'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className='menu'>
            <h1>Contact List</h1>
            <span onClick={handleShow}>+</span>
            <AddUser handleClose={handleClose} show={show}/>
        </div>
    )
}

export default Navbar
