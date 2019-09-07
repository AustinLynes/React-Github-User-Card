import React from 'react';

const ReposCard = (props) => {
    return (
        <div className='repo-card'>
            <div className='header'>
                <h2>{props.repo.name}</h2>
                <div>

                <p>status: {props.repo.private ? 'private' : 'public'}</p>
                <p>default branch: {props.repo.default_branch}</p>
                </div>

            </div>
            <div className='body'>
                <p>{props.repo.description}</p>
                <p>size: {props.repo.size} lines</p>
                <p>language: {props.repo.language}</p>

            </div>
            <div className='footer'>
                <p>watchers: {props.repo.watchers_count}</p>
                <p>forks: {props.repo.forks}</p>
            </div>
        </div>
    )
}

export default ReposCard;