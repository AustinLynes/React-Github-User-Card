import React from 'react';

const UserCard = props => {
    return (
        <div className='user-card'>
            <h1 className='user-name'>{props.state.name}</h1>
            <img className='user-avatar' src={props.state.avatar_url} />
            <p className='user-bio'>{props.state.bio}</p>
            <p className='user-followers_count'>followers: {props.state.followers_count}</p>
            <p className='user-card'>following: {props.state.following_count}</p>
            <p className='user-card'>{props.state.location}</p>
            <p className='user-card'>{`Looking for Work? ${props.state.hireable ? 'I am' : 'Not at the Time'}`}</p>
            <a className='user-card' href={props.state.repos}>My GitHub</a>
        </div>
    )
}


export default UserCard;