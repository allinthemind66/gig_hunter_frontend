export default (state=[], action) => {
  switch(action.type){
    case("TEST_REDUCER"):
      console.log('im in the gigs reducer!')
      return state
    default:
      return state
  }
}
