import Map from '../ui/Map'
import { connect } from 'react-redux'
import { selectLocation } from '../../actions'

const mapStateToProps = (state,props) =>
  ({
    locations: state.allLocations,
    selectedLocation: state.selectedLocation
  })

const mapDispatchToProps = dispatch =>
  ({
     onSelectLocation(id) {
       dispatch(
         selectLocation(id)
       )
    }
  })


export default connect(mapStateToProps, mapDispatchToProps)(Map)
