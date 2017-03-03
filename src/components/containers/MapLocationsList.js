import MapLocationsList from '../ui/MapLocationsList'
import { connect } from 'react-redux'

const mapStateToProps = (state,props) =>
  ({
    locations: state.allLocations
  })

const mapDispatchToProps = dispatch =>
  ({

  })


export default connect(mapStateToProps, mapDispatchToProps)(MapLocationsList)
