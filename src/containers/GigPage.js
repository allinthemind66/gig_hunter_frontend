import React from 'react'
// import apikey from '../apikey'
// import Map from '../components/Map'
// import {Map, GoogleApiWrapper} from 'google-maps-react'
class GigPage extends React.Component {
  render(){
    const style = {
  width: '30%',
  height: '30%'
}
    return(
      <div>
        <h1>This is the Gig Page</h1>

        <h2>Merkin Concert Hall</h2>
        {/* {<Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.7752206,
            lng:  -73.98299680000002
          }}
        />} */}
        {/* <script src='../apikey.js'></script>
        <iframe title="yo" width="400" height="300" frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/search?q=Merkin+Concert+Hall+At+Kaufman+Music+Center,+West+67th+Street,+New+York,+NY,+USA&key=${apikey()}`} allowFullScreen></iframe> */}
      </div>
    )
  }
}

export default GigPage

// export default GoogleApiWrapper({
//    apiKey: apikey()
//  })(GigPage)
