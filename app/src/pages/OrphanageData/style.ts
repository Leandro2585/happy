import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    color: #5c8599;
    font-size: 24px;
    font-family: 'Nunito_700Bold';
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E6;
`;

export const Label = styled.Text`
    color: #8fa7b3;
    font-family: 'Nunito_600SemiBold';
    margin-bottom: 8;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    border-width: 1.4px;
    border-color: #d3e2e6;
    border-radius: 20px;
    height: 56px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 16px;
    text-align: start;
`;
export const UploadedContainer = styled.View`
    flex-direction: row;
`;
export const UploadedImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    margin-bottom: 32px;
    margin-right: 8px;
`;
export const ImagesInput = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.5);
    border-style: dashed;
    border-color: #96D2F0;
    border-width: 1.4px;
    border-radius: 20px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`;

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const NextButton = styled(RectButton)`
    background-color: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`;

export const NextButtonText = styled.Text`
    font-family: 'Nunito_800ExtraBold';
    font-size: 16;
    color: #FFF;
`;