import React from 'react';
import './styles/App.scss';
import axios from 'axios';
import Navigation from './components/Navigation';
import UserCard from './components/UserCard';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import Login from './components/Login';
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

class App extends React.Component {
  constructor(props) {
    super(props);
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
    window.localStorage.setItem('token', ' 7d84fd9fa0087e20e06634fe96034aac59b28db2')
    //#endregion
  }
  UpdateSate = data => {
    this.setState({
      name: data.name,
      location: data.location,
      bio: data.bio,
      avatar_url: data.avatar_url,
      followers_count: data.followers,
      following_count: data.following,
      repos: data.html_url,
      hireable: data.hireable
    })
  }
  //#region CLASS FUNCTIONS
  handleUpdateSearch = event => {
    this.setState({
      searched_name: event.target.value
    })
  }
  handleRedirect = (event, value) => {
    event.preventDefault();
    window.localStorage.setItem('searched_name', value)
    history.push( `/${window.localStorage.searched_name}` )

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
  search = event => {
    event.preventDefault();
    window.localStorage.setItem('searched_name', this.state.searched_name)
    console.log(history)
    history.push( `/${this.state.searched_name}` )
    setTimeout(
      axios
        .get(`https://api.github.com/users/${this.state.searched_name}`)
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
        .get(`https://api.github.com/users/${this.state.searched_name}/followers`)
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
        <Navigation handleUpdateSearch={this.handleUpdateSearch} search={this.search} searched_name={this.state.searched_name} />
          <Router history={history}>
            <Route exact path={`/`}
              render={() => <Login
                handleUpdateForm={this.handleUpdateForm}
                username={this.props.searched_name} />} />
            <Route exact path={`/${window.localStorage.searched_name}`}
              render={() => <UserCard
                handleRedirect={this.handleRedirect}
                state={this.state} />} />
            <Route />
          </Router>
        </div>
    )
  }
}


export default App;
