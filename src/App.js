import React from 'react';
import './styles/App.scss';
import axios from 'axios';
import Navigation from './components/Navigation';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import { Route } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    //#region state
    this.state = {
      searched_name: '',
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
    console.log(this.state.searched_name);

    axios
      .get(`https://api.github.com/users/${this.state.searched_name}`)
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
  handleRedirect = (event, value) => {
    event.preventDefault();
    window.localStorage.setItem('clicked_name', value)
    setTimeout(
      axios
        .get(`https://api.github.com/users/${window.localStorage.clicked_name}`)
        .then(res => this.setState({
          searched_name: '',
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
          avatar_url: res.data.avatar_url,
          followers_count: res.data.followers,
          following_count: res.data.following,
          repos: res.data.html_url,
          hireable: res.data.hireable
        }))
        .catch(err => console.log('error fetching data.. try looking at the url: ', err)),
      100)
    setTimeout(
      axios
        .get(`https://api.github.com/users/${window.localStorage.clicked_name}/followers`)
        .then(res => {
          this.setState({
            followers: res.data.map(f => { return { login: f.login, avatar_url: f.avatar_url } })
          })
        })
        .catch(err => console.log(err))
      , 102)
  }
  search = event => {
    event.preventDefault();
    window.localStorage.setItem('searched_name', this.state.searched_name)
    setTimeout(
      axios
        .get(`https://api.github.com/users/${window.localStorage.searched_name}`)
        .then(res => this.setState({
          searched_name: '',
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
          avatar_url: res.data.avatar_url,
          followers_count: res.data.followers,
          following_count: res.data.following,
          repos: res.data.html_url,
          hireable: res.data.hireable
        }))
        .catch(err => console.log('error fetching data.. try looking at the url: ', err)),
      100)
    setTimeout(
      axios
        .get(`https://api.github.com/users/${window.localStorage.searched_name}/followers`)
        .then(res => {
          this.setState({
            followers: res.data.map(f => { return { login: f.login, avatar_url: f.avatar_url } })
          })
        })
        .catch(err => console.log(err))
      , 102)
  }
  //#endregion
  render() {
    return (
      <div className="App" >
        <Navigation handleUpdateSearch={this.handleUpdateSearch} submitTOStorage={this.search} searched_name={this.state.searched_name} />
        <div className='body'>
        <UserCard state={this.state} />
        <div className='follower-grid'>
        {
          this.state.followers.map(follower => {
            return (
              <FollowerCard
              follower={follower}
              handleRedirect={this.handleRedirect}
              name={follower.login}
              />
              )
            })
          }
          </div>
        </div>
      </div>


    )
  }
}
       

export default App;
