import React from 'react';
import FollowerCard from './FollowerCard';


const FollowerGrid = (props) => {
    return (
        <div className='follower-grid'>
            {
                props.state.followers.map(follower => {

                    return (
                        <FollowerCard
                            key={Math.random(500)}
                            follower={follower}
                            handleRedirect={props.handleRedirect}
                            name={follower.login}
                        />
                    )
                }
                )
            }
        </div>

    )
}
export default FollowerGrid;