import React from 'react';

const Login = props => {
    return (
        <form >
            <input name='username' onChange={props.handleUpdateForm}/>
            <input name='password' onChange={props.handleUpdateForm}/>
            <button>Login</button>
        </form>
    )
}   

export default Login;