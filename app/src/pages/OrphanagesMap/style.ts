import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export const Map = styled(MapView)`
    width: ${dimensions.width};
    height: ${dimensions.height};
`;

export const CalloutContainer = styled.View`
    width: 160px;
    height: 46px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 16px;
    justify-content: center;
`;

export const CalloutText = styled.Text`
    color: #0089a5;
    font-size: 14px;
    font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;
    background-color: #FFF;
    border-radius: 20;
    height: 56px;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;

    elevation: 3;
`;
export const FooterText = styled.Text`
    color: #8fa7b3;
    font-family: 'Nunito_700Bold';
`;

export const CreateButton = styled(RectButton)`
    width: 56px;
    height: 56px;
    background-color: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;