import '../stylesheets/index.scss'
import Map from './containers/Map'
import Location from './Location'
import MapLocationsList from './containers/MapLocationsList'

export const App = ({children}) => {

  const center = {lat:40.688885, lng:-73.977042}

  return (

    <main className="wrapper">

      <section id="google-map" style={{width:'100%', height:'100vh'}}>
        <Map center={center}/>
      </section>
      <nav id="nav__map">
        <MapLocationsList />
      </nav>

    </main>
  )
}

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
