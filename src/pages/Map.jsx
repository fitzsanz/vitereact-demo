// src/pages/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

// Fix default marker icon issues with Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const center = [7.8744, 125.7275]; // Center of Mindanao

const waterfalls = [
  { name: "Tinuy-an Falls", lat: 8.2156, lng: 126.3164 },
  { name: "Asik-Asik Falls", lat: 7.3693, lng: 124.4943 },
  { name: "Maria Cristina Falls", lat: 8.2000, lng: 124.2000 },
  { name: "Limunsudan Falls", lat: 7.8317, lng: 124.1694 },
  { name: "Dodiongan Falls", lat: 8.2478, lng: 124.2478 },
  { name: "Hagimit Falls", lat: 7.1181, lng: 125.6020 },
  { name: "Aliwagwag Falls", lat: 7.0219, lng: 126.2395 },
  { name: "Ricoro Falls", lat: 8.7633, lng: 125.1200 },
  { name: "Manibay Falls", lat: 8.8050, lng: 125.0890 },
  { name: "Lantawon Falls", lat: 8.8350, lng: 125.0740 },
  { name: "Malubog Falls", lat: 7.5400, lng: 123.1000 },
  { name: "Baliangao Falls", lat: 8.3673, lng: 123.5821 },
  { name: "Katibawasan Falls", lat: 9.2377, lng: 124.7323 },
  { name: "Tuasan Falls", lat: 9.2332, lng: 124.7328 },
  { name: "Paniki Falls", lat: 8.0441, lng: 124.8471 },
  { name: "Mabugnao Falls", lat: 8.8841, lng: 125.3773 },
  { name: "Palahik Falls", lat: 7.0931, lng: 124.7555 },
  { name: "Tudaya Falls", lat: 6.9884, lng: 125.2616 },
  { name: "Bantakay Falls", lat: 8.1005, lng: 125.4320 },
  { name: "Tupsan Falls", lat: 8.1989, lng: 125.1533 },
  { name: "Dulag Falls", lat: 7.3820, lng: 124.3835 },
  { name: "Balite Falls", lat: 7.2151, lng: 125.0230 },
  { name: "Agutayan Falls", lat: 8.7342, lng: 125.0865 },
  { name: "Bagongbong Falls", lat: 7.4777, lng: 124.4901 },
  { name: "Malamawi Falls", lat: 6.9347, lng: 125.2634 },
  { name: "Matigol Falls", lat: 8.6533, lng: 125.0278 },
  { name: "Tagbibinta Falls", lat: 8.7999, lng: 124.9899 },
  { name: "Dulog Falls", lat: 7.4302, lng: 124.4991 },
  { name: "Bonbon Falls", lat: 8.6831, lng: 125.0611 },
  { name: "Kalon Falls", lat: 8.5727, lng: 125.0411 },
];

function Map() {
  return (
    <div className="map-container">
      <h1>Mindanao Waterfall Locater</h1>
      <MapContainer center={center} zoom={7} scrollWheelZoom={true} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {waterfalls.map((fall, idx) => (
          <Marker key={idx} position={[fall.lat, fall.lng]}>
            <Popup>
              <b>{fall.name}</b><br />
              Coordinates: {fall.lat.toFixed(4)}, {fall.lng.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <p className="map-note">
        Zoom in and click on the markers to learn more about each waterfall.
      </p>
    </div>
  );
}

export default Map;