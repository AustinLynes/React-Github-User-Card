import React from 'react';
import {Link} from 'react-router-dom';
const Navigation = (props) => {
    return (
        <header className="nav-bar">
            <Link exact to='/'>
            <img className='logo' src='http://www.logospng.com/images/182/github-logo-icon-search-engine-182549.png'/>
            </Link>
           <p>Git-Search</p>
            <form className='search-bar'  onSubmit={(event)=>props.search(event,props.searched_name)}>
                <input
                    className='srch-inp'
                    placeholder='search a git-hub username'
                    onChange={props.handleUpdateSearch}
                    value={props.searched_name} />
                <button className='srch-btn' >
                    <img src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png' />
                </button>
            </form>
        </header>

    )
}
export default Navigation;
