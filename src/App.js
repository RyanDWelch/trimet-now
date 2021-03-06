import React from "react";
import GoogleMap from './components/GoogleMap';
import Marker from './components/Marker.jsx';
import Stats from './components/Stats';
import InfoBox from './components/InfoBox';
import { apiIsLoaded } from './components/Functions';
import { mapStyles } from './mapstyles';
// import { mapStyles } from './mapstyles-bw.js';
import "./App.css";

import { sampledata } from './sampledata';

const API_URL = "https://developer.trimet.org/ws/v2/vehicles/appID/"+process.env.REACT_APP_TRIMET_API_KEY;
const defaultCenter = [45.519526,-122.677040];


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      vehicles: [],
      selectedVehicleValues: [],
      selectedVehicleKeys: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
 
  componentDidMount() {
    // let totalRequests = 0;
    // try {
    //   setInterval(async () => {
    //     if (totalRequests < 10) {
    //       const res = await fetch(API_URL);
    //       const json = await res.json();
    //       console.log(json);
    //       // const filteredVehicles = json.resultSet.vehicle.filter(vehicle => vehicle.type === 'rail');
    //       const vehicles = json.resultSet.vehicle;

    //       this.setState({
    //         isLoaded: true,
    //         vehicles: vehicles
    //       })
    //       totalRequests++;
    //     }
    //   }, 10000);
    // } catch(e) {
    //   console.error(e);
    // }

    this.setState({
      isLoaded: true,
      vehicles: sampledata.resultSet.vehicle
    })
  }

  handleClick = (vehicleID) => {
    const selectedVehicleData = this.state.vehicles.find(i => i.vehicleID === vehicleID);
    const vehicleValues = Object.values(selectedVehicleData);
    const vehicleKeys = Object.keys(selectedVehicleData);

    this.setState({
      selectedVehicleValues: vehicleValues,
      selectedVehicleKeys: vehicleKeys
    });
  }


  render() {
    let { isLoaded, vehicles } = this.state;

    if (!isLoaded) {
      return <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>;
    } else {
      return (
        <div className="container">
          <GoogleMap
            defaultZoom={12}
            defaultCenter={defaultCenter}
            options={{
              styles: mapStyles
            }}
            yesIWantToUseGoogleMapApiInternals
            disableDefaultUI
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, vehicles)}
            >
            {vehicles.map(vehicle => (
              <Marker 
              key={vehicle.vehicleID}
              text={vehicle.signMessageLong}
              type={vehicle.type}
              lat={vehicle.latitude}  
              lng={vehicle.longitude}
              data={vehicle}
              onClick={this.handleClick}
              />
            ))}
          </GoogleMap>
          <InfoBox 
            selectedVehicleKeys={this.state.selectedVehicleKeys}
            selectedVehicleValues={this.state.selectedVehicleValues}
            />
          <Stats data={vehicles} />
        </div>
      );
    }
  }
}

export default App;