import React from 'react';
import styled from 'styled-components';
import busimage from '../images/mode-bus.png'
import maximage from '../images/mode-max.png'


const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #fff;
  z-index: 2;
`;

const InfoBox = props => (
  <Wrapper
    className={"info-box"}
  >
    <div className="info-box-container">
        <h6>{/*<span>props.selectedVehicleKeys[9]</span>*/}{props.selectedVehicleValues[9]}</h6> {/* signMessageLong */}
        {/* <div><span>{props.selectedVehicleKeys[0]}</span> {props.selectedVehicleValues[0]}</div> expires */}
        {/* <div><span>{props.selectedVehicleKeys[1]}</span> {props.selectedVehicleValues[1]}</div> signMessage */}
        {/* <div><span>{props.selectedVehicleKeys[2]}</span> {props.selectedVehicleValues[2]}</div> serviceDate */}
        {/* <div><span>{props.selectedVehicleKeys[3]}</span> {props.selectedVehicleValues[3]}</div> loadPercentage */}
        {/* <div><span>{props.selectedVehicleKeys[4]}</span> {props.selectedVehicleValues[4]}</div> latitude */}
        {/* <div><span>{props.selectedVehicleKeys[5]}</span> {props.selectedVehicleValues[5]}</div> nextStopSeq */}
        {/* <div><span>{props.selectedVehicleKeys[6]}</span> {props.selectedVehicleValues[6]}</div> source */}
        {/* <div><span>{props.selectedVehicleKeys[7]}</span> {props.selectedVehicleValues[7]}</div> type */}
        <div className="vehicle-type-image">
            <img src={props.selectedVehicleValues[7] == "bus" ? busimage : maximage} />
        </div>
        {/* <div><span>{props.selectedVehicleKeys[8]}</span> {props.selectedVehicleValues[8]}</div> blockID */}
        {/* <div><span>{props.selectedVehicleKeys[10]}</span> {props.selectedVehicleValues[10]}</div> lastLocID */}
        {/* <div><span>{props.selectedVehicleKeys[11]}</span> {props.selectedVehicleValues[11]}</div> nextLocID */}
        {/* <div><span>{props.selectedVehicleKeys[12]}</span> {props.selectedVehicleValues[12]}</div> locationInScheduleDay */}
        {/* <div><span>{props.selectedVehicleKeys[13]}</span> {props.selectedVehicleValues[13]}</div> newTrip */}
        {/* <div><span>{props.selectedVehicleKeys[14]}</span> {props.selectedVehicleValues[14]}</div> longitude */}
        {/* <div><span>{props.selectedVehicleKeys[15]}</span> {props.selectedVehicleValues[15]}</div> direction */}
        <div>{props.selectedVehicleValues[16] == true && <span className="congestion-true">*In Congestion*</span>}</div> {/* inCongestion */}
        {/* <div><span>{props.selectedVehicleKeys[17]}</span> {props.selectedVehicleValues[17]}</div> routeNumber */}
        {/* <div><span>{props.selectedVehicleKeys[18]}</span> {props.selectedVehicleValues[18]}</div> bearing */}
        {/* <div><span>{props.selectedVehicleKeys[19]}</span> {props.selectedVehicleValues[19]}</div> garage */}
        {/* <div><span>{props.selectedVehicleKeys[20]}</span> {props.selectedVehicleValues[20]}</div> tripID */}
        <div><span>{props.selectedVehicleKeys[21]}</span> {props.selectedVehicleValues[21]}</div> {/* delay */}
        {/* <div><span>{props.selectedVehicleKeys[22]}</span> {props.selectedVehicleValues[22]}</div> extraBlockID */}
        {/* <div><span>{props.selectedVehicleKeys[23]}</span> {props.selectedVehicleValues[23]}</div> messageCode */}
        {/* <div><span>{props.selectedVehicleKeys[24]}</span> {props.selectedVehicleValues[24]}</div> lastStopSeq */}
        {/* <div><span>{props.selectedVehicleKeys[25]}</span> {props.selectedVehicleValues[25]}</div> vehicleID */}
        <div><span>{props.selectedVehicleKeys[26]}</span> {props.selectedVehicleValues[26]}</div> {/* time */}
        {/* <div><span>{props.selectedVehicleKeys[27]}</span> {props.selectedVehicleValues[27]}</div> offRoute */}

    
    </div>
  </Wrapper>
);

export default InfoBox;