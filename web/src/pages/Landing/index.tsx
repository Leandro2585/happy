import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Container, Content, Main, Location } from './style';
import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Happy"/>
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </Main>

        <Location>
          <strong>Santana de Parnaíba</strong>
          <span>São Paulo</span>
        </Location>

        <Link to="/app">
          <FiArrowRight size={24} color="rgba(0,0,0,0.8)"/>
        </Link>
      </Content>
    </Container>
  );
}

export default Landing;
