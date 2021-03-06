import styled from 'styled-components';
import landingImg from '../../images/landing.svg';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg,#2986D1 0%,#00c7c7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width:100%;
  max-width: 900px;
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 90% center;
  a {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    background: #ffd666;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    &:hover{
      background-color: #96feff;
    }
  }
`;
export const Main = styled.main`
  max-width: 350px;
  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;
export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    font-weight: 800;
  }
`;
