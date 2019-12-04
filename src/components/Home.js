import React from 'react';

const Home = props => {
    return (
        <div className='home' >
            <h1>Welcome to Git-Search</h1>
            <div className='summary'>
                <h3>this is a demo of my skills in react, in this project i show the use of:</h3>
                <div>
                <p id='_'>⠂the react life cycle</p>>
                <p>⠂react classes to pass state from the app class</p>
                <p>⠂axios to call the git-hub api to bring back user data </p>
                <p>⠂use localStorage to save the users target</p>
                <p>⠂use node-sass package to style application </p>
                </div>
                <h3>
                    Please try to search your github <span>login</span> in the top right and see what happens ⭷
                </h3>
            </div>
        </div>
    )
}

export default Home;