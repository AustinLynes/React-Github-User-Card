import React from 'react';
import ReposCard from './ReposCard';

const ReposGrid = props => {
    return (
    <div className='follower-grid'>
        {
            props.state.repos.map(repo=>{
                return <ReposCard
                    repo={repo}
                />
            })

        }
    </div>
 )


}

export default ReposGrid;