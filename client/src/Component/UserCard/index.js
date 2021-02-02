import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../js/actions'
import EditUser from '../EditUser'
import './style.css'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='userCard'>
            
            <h3>{user.name} {user.lastName}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <div className='btns'>
                <button onClick={handleShow}>Edit</button>
                <button onClick={()=>dispatch(removeUser(user._id))}>Delete</button>
            </div>
            <EditUser user={user} handleClose={handleClose} show={show}/>
        </div>
    )
}

export default UserCard
