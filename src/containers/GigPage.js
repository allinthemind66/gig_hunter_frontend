import React from 'react'
import * as actions from '../actions/gigsActions'
import * as userActions from '../actions/userActions'
import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link} from "react-router-dom";
import EditGigPageModal from '../components/EditGigPageModal'
class GigPage extends React.Component {

  componentDidMount = () =>{
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else{
      const userId = localStorage.getItem('id')
      const id = this.props.match.params.id
      this.props.actions.fetchGigData(id)
      this.props.userActions.fetchUserData(userId)

    }
}

parseDate = (date) => {
  if(date){
    let parts = date.split('-');
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }
}

  render(){
    return(
      <div>
        <div className='gigPageGrid'>
        <div className="ui message gigPageInfoWrapper">
          <h2>{this.props.gig.venue}</h2>
        {this.props.gig.user_id == this.props.user.id ? <p><EditGigPageModal fetchGigData={this.props.actions.fetchGigData} pageId={this.props.match.params.id} gig={this.props.gig}/></p> : null}
        <p>Description: {this.props.gig.description}</p>
        <p>Time: {this.props.gig.time}</p>
        <p>Date: {this.parseDate(this.props.gig.date)}</p>
        <p>Address: {this.props.gig.location}</p>
        <p>Pay: ${this.props.gig.pay}</p>
        <p>Number of Rehearsals: {this.props.gig.rehearsals}</p>
        <p>Concert Dress: {this.props.gig.concert_dress}</p>
        <p>Style: {this.props.gig.style}</p>
      </div>
      <div>
        <div className="mapouter"><div className="gmap_canvas"><iframe title="gig-map" width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.props.gig.venue ? this.props.gig.venue + this.props.gig.location: null}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
      </div>
    </div>
    <h2>People Playing This Gig: {this.props.gig.users ? this.props.gig.users.length : 0}</h2>
        <ul>
          {this.props.gig.users ? this.props.gig.users.map(user => <Link key={user.id} to={`/user/${user.id}`}><img className='gigPageUserImages' key={user.id} src={user.img_url} alt="user"/></Link>) : null}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    gig: state.gigs.gig,
    user: state.users.userData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigPage)
