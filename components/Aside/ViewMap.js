import React, { memo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
const ViewMap = memo(() => {

    const containerStyle = {
        // width: '400px',
        height: '300px'
    };
    return (
        <>
            <LoadScript id="script-loader" googleMapsApiKey="AIzaSyBxZUzEbI2KlzCQOMs1sLqYv_38hjSHL-w">
                <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={{ lat: 21.028168, lng: 105.854149 }} >
                    <Marker position={{ lat: 21.028168, lng: 105.854149 }} />
                </GoogleMap>
            </LoadScript >
        </>
    );
});

export default ViewMap;