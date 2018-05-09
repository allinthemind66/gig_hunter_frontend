import React from 'react'

const UserSearchCard = (props) => {
  return(
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src={props.user.img_url} alt='user'/>
        </div>
      <div class="content">
        <div class="header">{props.user.name}</div>
          <div class="meta">
            <a>Musician</a>
          </div>
          <div class="description">
            {props.user.bio}
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in {props.user.created_at.split("-")[0]}
          </span>
          <span>
            <i class="home icon"></i>
            {props.user.city}
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserSearchCard
