import Map from '../ui/Map'
import { connect } from 'react-redux'

const mapStateToProps = (state,props) =>
  ({
    locations: state.allLocations
  })

const mapDispatchToProps = dispatch =>
  ({

  })


export default connect(mapStateToProps, mapDispatchToProps)(Map)
