import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// custom components
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import BigText from '../components/Texts/BigText'
import SmallText from '../components/Texts/SmallText'
import RegularButton from '../components/Buttons/RegularButton'

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
`

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end;
`

// image
import background from './../assets/bgs/background_v1.png'

// type
import { RootStrackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
type Props = StackScreenProps<RootStrackParamList, 'Welcome'>

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <>
            <StatusBar style='light' />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} resizeMode='stretch' />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        A melhor maneira de controlar seu dinheiro
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Melhor método de pagamento, conecte seu dinheiro a seus amigos, familiares.
                    </SmallText>
                    <RegularButton onPress={() => {navigation.navigate('Home')}}>
                        Iniciar
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome