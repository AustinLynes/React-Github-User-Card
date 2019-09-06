import React from 'react';

const UserCard = props => {
    return (
        <div className='user-card'>
            <div className='user-avatar'>
                <img src={props.state.avatar_url} />
            </div>
            <div className='user-infos'>
                <h1 className='user-name'>{props.state.name}</h1>
                <p className='user-bio'>{props.state.bio}</p>
                <p className='user-location'>{props.state.location}</p>
                <p className='user-hireable'>{`Looking for Work? ${props.state.hireable ? 'I am' : 'Not at the Time'}`}</p>
            </div>
            <div className='followers'>
                <p className='user-followers_count'>followers: {props.state.followers_count}</p>
                <p className='user-following-count'>following: {props.state.following_count}</p>
            </div>
                <a className='user-git' href={props.state.repos}>Go To my Profile</a>
        </div>
    )
}


export default UserCard;