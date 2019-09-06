import React from 'react';

const Navigation = (props) => {
    return (
        <header className="nav-bar">
                <form className='search-bar'>
                    <input className='srch-inp' placeholder='search a git-hub username'  onChange={props.handleUpdateSearch} />
                    <button className='srch-btn' onClick={props.submitTOStorage}><img src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'/></button>
                </form>
        </header>

    )
}
export default Navigation;
 