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
        this.props.actions.fetchAllGigs()
      }
  }

  handleApplyGig = (gig) => {
    this.props.userActions.addGigApplication(gig)
  }

  parseDate = (date) => {
    let parts = date.split('-');
 // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
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
    // debugger
    return(
      <div className="main">
        <h3>All Gigs</h3>
        <div className="ui category search">
          <div className="ui icon input">
            <input onChange={this.handleSearchInput} className="prompt" value={this.state.searchInput} type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        <button className='ui button'>Sort By Date</button>
        <ul>
        {this.props.gigs.length > 0 ? this.props.gigs.map(gig => <div className="gigSearch"><li key={gig.id}><button className="ui green button" onClick={() => this.handleApplyGig(gig)}>Apply For This Gig!</button> {gig.venue} - {this.parseDate(gig.date)} <Link to={`/gigs/${gig.id}`}>Go To Gig Page</Link></li>Description: {gig.description}<hr/></div>) : null}
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
  return { gigs: state.gigs.filteredGigs}
}

export default connect(mapStateToProps, mapDispatchToProps)(GigSearch)
