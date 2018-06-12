import React from 'react'
import { Link} from "react-router-dom";
import * as actions from '../actions/gigsActions'
import * as userActions from '../actions/userActions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
class GigSearch extends React.Component {
  state = {
    searchInput: ''
  }

  componentDidMount = () => {
      const token = localStorage.getItem('token')
      if(!token){
        this.props.history.push('/login')
      }
      else{
        let id = localStorage.getItem('id')
        this.props.userActions.fetchUserData(id)
        this.props.actions.fetchGigsForSignedInUser()
      }
  }

  handleApplyGig = (gig) => {
    this.props.actions.addGigApplication(gig)
  }

  parseDate = (date) => {
    let parts = date.split('-');
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }

  handleSearchInput = (e) => {
    console.log(this.props.actions)
    this.setState({
      searchInput: e.target.value
    }, () => this.props.actions.handleSearchForGigs(this.state.searchInput))
  }



  render(){
    let postedGigs;
    if(this.props.gigs.length > 0){
      postedGigs = this.props.gigs.filter(gig => gig.user_id != this.props.userData.id).map((gig) => {
        return (
        <div className="gigSearch ui floating message">
          <div key={gig.id}>
            <button className="ui green button" onClick={() => this.handleApplyGig(gig)}>
              Apply For This Gig!
            </button>
            <Link to={`/gigs/${gig.id}`}>{gig.venue}</Link>
          </div>
            User: {gig.user_id} <br/>Description: {gig.description}
          </div>)})
    }
    return(
      <div className="main">
        <div className='gigSearchFilters'>
        <h3>All Gigs</h3>
        <div className="ui category search">
          <div className="ui icon input">
            <input onChange={this.handleSearchInput} className="prompt" value={this.state.searchInput} type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        <div className="gigSearchFiltersButtons">
        <button className='ui button' onClick={this.props.actions.handleSortByDate}>Sort By Date</button>
        <button className='ui button' onClick={this.props.actions.handleSortByVenue}>Sort By Venue</button>
      </div>
      </div>
        <ul>
          {postedGigs}
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
    gigs: state.gigs.filteredGigs,

    userData: state.users.userData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigSearch)
