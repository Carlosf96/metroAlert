import { GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = (props) => 
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -37.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position ={{ lat: -34.397, lng: 150.644}}/>}
  </GoogleMap>
  //<MyMapComponent isMarkerShown /> => with marker
  //<MyMapComponent isMarkerShown={false}/> => no marker