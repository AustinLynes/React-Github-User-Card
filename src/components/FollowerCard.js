import React from 'react';

const FollowerCard = props => {
    return (<div className='follower-card' onClick={event => props.handleRedirect(event, props.name)}>
        <img className='follower-profile-thumb' src={props.follower.avatar_url} />
        <p className='follower-name'>{props.follower.login}</p>
    </div>
    )
}

export default FollowerCard;