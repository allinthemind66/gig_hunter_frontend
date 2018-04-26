import React from 'react'
import { Link } from "react-router-dom";
import * as actions from '../actions/gigsActions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
class GigSearch extends React.Component {
  componentDidMount = () => {
    this.props.actions.fetchAllGigs()
  }
  render(){
    return(
      <div>
        <h3>All Gigs</h3>
        <ul>
        {this.props.gigs.length > 0 ? this.props.gigs.map(gig => <li key={gig.id}>{gig.location} <Link to={`/gigs/${gig.id}`}>Go To Gig Page</Link></li>) : null}
      </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return { gigs: state.gigs.gigsData}
}

export default connect(mapStateToProps, mapDispatchToProps)(GigSearch)
