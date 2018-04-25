import React from 'react'
import UserGigs from '../components/UserGigs'
import UserAvatar from '../components/UserAvatar'
import UserBio from '../components/UserBio'

export default class UserPage extends React.Component {
  render(){
    return(
      <div><h1>This is an individual User page page</h1>
      {<UserAvatar/>}
      {<UserBio/>}
      {<UserGigs/>}
      </div>
    )
  }
}
