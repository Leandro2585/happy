import React from 'react';
import { Container, Aside, Header, Footer } from './style';
import mapMarkerImg from '../../images/marker-map.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
    return(
        <Container>
            <Aside>
                <Header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </Header>
                
                <Footer>
                    <strong>Santana de Parnaíba</strong>
                    <span>São Paulo</span>
                </Footer>
            </Aside>

            <Map 
                center={[-23.4499232,-46.9319517]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >

                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </Container>
    );
}

export default OrphanagesMap;