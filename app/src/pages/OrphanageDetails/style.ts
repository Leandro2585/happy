import { Dimensions } from 'react-native';
import Map from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`;
export const ImagesContainer = styled.View`
    height: 240px;
`;

const widthImg = Dimensions.get('window').width;
export const Image = styled.Image`
    width: ${widthImg};
    height: 240;
`;

export const DetailsContainer = styled.View`
    padding: 24px;
`;

export const Title = styled.Text`
    color: #4D6F80;
    font-size: 30px;
    font-family: 'Nunito_700Bold';
`;
export const Description = styled.Text`
    font-family: 'Nunito_600SemiBold';
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
`;

export const MapContainer = styled.View`
    border-radius: 20px;
    overflow: hidden;
    border-width: 1.2px;
    border-color: #B3DAE2;
    margin-top: 40px;
    background-color: #E6F7FB;
`;

export const MapView = styled(Map)`
    width: 100%;
    height: 150px;
`;

export const RoutesContainer = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    justify-content: center;
`;
export const RoutesText = styled.Text`
    font-family: 'Nunito_700Bold';
    color: #0089a5;
`;

export const Separator = styled.View`
    height: 0.8px;
    width: 100%;
    background-color: #D3E2E6;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const ScheduleContainer = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`;

interface ScheduleItemProps {
    isColor: string;
}
export const ScheduleItem = styled.View<ScheduleItemProps>`
    width: 48%;
    padding: 20px;
    ${props => props.isColor === 'blue' ?
        css`
            background-color: #E6F7FB; 
            border-width: 1px;
            border-color: #B3DAE2;
            border-radius: 20px;
        `
        :
        props.isColor === 'green' ?
            css`
            background-color: #EDFFF6;
            border-width: 1px;
            border-color: #A1E9C5;
            border-radius: 20px;
        `
            :
            props.isColor === 'red' &&
            css`
            background-color: #FEF6F9;
            border-width: 1px;
            border-color: #FFBCD4;
            border-radius: 20px;
        `
    }
`;

export const ScheduleText = styled.Text<ScheduleItemProps>`
    font-family: 'Nunito_600SemiBold';
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
${props => props.isColor === 'blue' ?
        css`
            color: #5C8599;
        `
        :
        props.isColor === 'green' ?
            css`
            color: #37C77F;
        `
            :
            props.isColor === 'red' &&
            css`
            color: #FF6690;
        `
    }
`;

export const ContactButton = styled(RectButton)`
background-color: #3CDC8C;
border-radius: 20px;
flex-direction: row;
justify-content: center;
align-items: center;
height: 56px;
margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
font-family: 'Nunito_800ExtraBold';
color: #FFF;
font-size: 16px;
margin-left: 16px;
`;
