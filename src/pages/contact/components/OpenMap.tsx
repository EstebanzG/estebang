import React from 'react';
import {useTranslation} from 'react-i18next';
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const LONGITUDE = -1.553621
const LATITUDE = 47.218371


function OpenMap() {
    return (
        <MapContainer center={[LATITUDE, LONGITUDE]} zoom={13} scrollWheelZoom={false} className={"h-48 md:h-80"}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default OpenMap;