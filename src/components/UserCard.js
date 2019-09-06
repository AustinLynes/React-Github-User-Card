import React from 'react';
import FollowerCard from './FollowerCard';
import axios from 'axios';

class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //#region setState of UserCard
        axios
            .get(`https://api.github.com/users/${window.localStorage.searched_name}?${window.localStorage.token}`)
            .then(res => this.props.updateState(res))
            .catch(err => console.log('error fetching data.. try looking at the url: ', err))
        //#endregion
        //#region setState of current Users Followers
        axios
            .get(`https://api.github.com/users/${window.localStorage.searched_name}?${window.localStorage.token}/followers`)
            .then(res => {
                this.setState({
                    followers: res.map(f => { return { login: f.login, avatar_url: f.avatar_url } })
                })
            })
            .catch(err => console.log(err))
        //#endregion
    }
    render() {
        return (
            <div className='body'>
                <div className='user-card' >
                    <div className='user-avatar'>
                        <img src={this.props.state.avatar_url} />
                    </div>
                    <div className='user-infos'>
                        <h1 className='user-name'>{this.props.state.name}</h1>
                        <p className='user-bio'>{this.props.state.bio}</p>
                        <p className='user-location'>{this.props.state.location}</p>
                        <p className='user-hireable'>{`Looking for Work? ${this.props.state.hireable ? 'I am' : 'Not at the Time'}`}</p>
                    </div>
                    <div className='followers'>
                        <p className='user-followers_count'>followers: {this.props.state.followers_count}</p>
                        <p className='user-following-count'>following: {this.props.state.following_count}</p>
                    </div>
                    <a className='user-git' href={this.props.state.repos}>Go To my Profile</a>
                </div>

                <div className='follower-grid'>
                    {
                        this.props.state.followers.map(follower => {
                            return (
                                <FollowerCard
                                    key={Math.random(500)}
                                    follower={follower}
                                    handleRedirect={this.props.handleRedirect}
                                    name={follower.login}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}


export default UserCard;