import React from 'react'
import * as actions from '../actions/gigsActions'
import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
class GigPage extends React.Component {

  componentDidMount = () =>{
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else{
      const id = this.props.match.params.id
      this.props.actions.fetchGigData(id)
    }
}

  render(){
    return(
      <div>
        <h1>{this.props.gig.description}</h1>
        <h2>{this.props.gig.location}</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {
    gig: state.gigs.gig
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigPage)
