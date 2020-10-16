import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, Title } from './style';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
    const navigation = useNavigation();

    function handleGoBackToHomepage() {
        navigation.navigate('OrphanageMap');
    }

    return(
        <Container>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" color="#15b6d6" size={24}/>
            </BorderlessButton>
            <Title>{title}</Title>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToHomepage}>
                    <Feather name="x" color="#ff669d" size={24}/>
                </BorderlessButton>
            ):
                <View/>
            }
        </Container>
    );
}

export default Header;