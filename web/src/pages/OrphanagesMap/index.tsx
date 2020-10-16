import React, { useEffect, useState } from 'react';
import { Container, Aside, Header, Footer } from './style';
import mapMarkerImg from '../../images/marker-map.svg';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import happyMapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const OrphanagesMap: React.FC = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);
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
                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id} 
                            icon={happyMapIcon}
                            position={[orphanage.latitude,orphanage.longitude]} 
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={32} color="#FFF"/>
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
                
            </Map>

            <Link to="/orphanages/create">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </Container>
    );
}

export default OrphanagesMap;