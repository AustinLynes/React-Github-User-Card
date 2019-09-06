import React from 'react';
import './styles/App.scss';
import axios from 'axios';
import Navigation from './components/Navigation';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    //#region state
    this.state = {
      searched_name: 'AustinLynes',
      name: '',
      location: '',
      bio: '',
      avatar_url: '',
      followers_count: '',
      following_count: '',
      repos: '',
      hireable: false,
      followers: []
    }
    //#endregion
  }
  componentDidMount() {
    //#region setState of UserCard
    axios
      .get(`https://api.github.com/users/${window.localStorage.searched_name}`)
      .then(res => this.setState({
        name: res.data.name,
        location: res.data.location,
        bio: res.data.bio,
        avatar_url: res.data.avatar_url,
        followers_count: res.data.followers,
        following_count: res.data.following,
        repos: res.data.html_url,
        hireable: res.data.hireable
      }))
      .catch(err => console.log('error fetching data.. try looking at the url: ', err))
    //#endregion
    //#region setState of current Users Followers
    axios
      .get(`https://api.github.com/users/${window.localStorage.searched_name}/followers`)
      .then(res => {
        this.setState({
          followers: res.data.map(f => { return { login: f.login, avatar_url: f.avatar_url } })
        })
      })
      .catch(err => console.log(err))
    //#endregion
  }
  //#region CLASS FUNCTIONS
  handleUpdateSearch = event => {
    this.setState({
      searched_name: event.target.value
    })
  }
  submitTOStorage = event => {
    window.localStorage.setItem('searched_name', this.state.searched_name)
  }
  //#endregion
  render() {
    return (
      <div className="App" >
        <Navigation
          handleUpdateSearch={this.handleUpdateSearch}
          submitTOStorage={this.submitTOStorage}
        />
        <UserCard state={this.state} />
        <div className='follower-grid'>
          {
            this.state.followers.map(follower => {
              return <FollowerCard follower={follower} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
