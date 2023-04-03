import React from 'react'
import './Avatar.css';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import { formatDate } from '../../utils/helper';
const Avatar = ({avatarImg,firstname,lastname,createdDate}) => {
  return (
    <div className='avatar'>
        <div className='author'>
        <div className="avatar-img">
            <img src={import.meta.env.VITE_APP_BACKEND_URL + avatarImg} alt="" />
        </div>
        <div className="author-name">
            {firstname} &nbsp; {lastname}
        </div>
        </div>
        <div className="created-date">
            <BsFillCalendarCheckFill/> {formatDate(createdDate)}
        </div>

    </div>
  )
}

export default Avatar