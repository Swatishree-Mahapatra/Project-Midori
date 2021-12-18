
import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");



class Forum extends React.Component {

    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }


    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                this.setState({
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',
                                    state: (state) ? state : '',
                                })
                            },
                            error => {
                                console.error(error);
                            }
                        );

                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    };



    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onInfoWindowClose = (event) => { };

    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        defaultZoom={this.state.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/*Marker*/}
                        <Marker
                            google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />

                        
                        <Marker />

                    </GoogleMap>
                )
            )
        );

        return (
            <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
                <div className="my-5 font-bold text-3xl">
                    <h1>Nearest Location for tree plantation</h1>
                </div>

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuLWvM6erOI115ZZZAkhRcxZVfzQCilEM&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        )
    }

}

export default Forum;

