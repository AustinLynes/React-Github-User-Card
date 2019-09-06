import React from 'react';
const Navigation = (props) => {
    return (
        <header className="nav-bar">
            <img className='logo' src='http://www.logospng.com/images/182/github-logo-icon-search-engine-182549.png'/>
           <p>Git-People</p>
            <form className='search-bar'  onSubmit={(event)=>props.submitTOStorage(event,props.searched_name)}>
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
