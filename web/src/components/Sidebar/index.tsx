import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './style';
import mapMarkerImg from '../../images/marker-map.svg';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { goBack } = useHistory();
    return(
        <Container>
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
	            <button type="button" onClick={goBack}>
	                <FiArrowLeft size={24} color="#FFF" />
	            </button>
            </footer>
        </Container>
    );

}

export default Sidebar;