import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

// components
import { ScreenWidth } from '../shared'
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

// navigation
import { useNavigation } from '@react-navigation/native'
import { Props as HomeProps } from './../../screens/Home'

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    background-color: ${colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`
const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    flex: 1;
`

// images
import card_bg from './../../assets/bgs/background_transparent.png'

// types
import { CardProps } from './types'

const CardItem: FunctionComponent<CardProps> = (props) => {
    // configuring navigation
    const navigation = useNavigation<HomeProps['navigation']>()

    // move to balance page
    const handlePress = () => {
        navigation.navigate('Balance', { ...props })
    }

    return (
        <CardBackground source={card_bg} resizeMode='cover'>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }}>
                            ****** {props.accountNo.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText
                                textStyles={{ marginBottom: 5, color: colors.graylight }}
                            >
                                Saldo total
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19 }}>
                                R${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} resizeMode='contain' />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    )
}

export default CardItem