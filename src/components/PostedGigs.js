import React from 'react'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
class PostedGigs extends React.Component {

  componentDidMount(){

  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}
export default connect(null, {})(PostedGigs)
