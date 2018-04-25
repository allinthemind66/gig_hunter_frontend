import React from 'react'
import UserGigs from '../components/UserGigs'
import UserAvatar from '../components/UserAvatar'
export default class Home extends React.Component {
  render(){
    return(
      <div><h1>This is the user home page</h1>
      {<UserAvatar/>}
      {<UserGigs/>}
      </div>
    )
  }
}
