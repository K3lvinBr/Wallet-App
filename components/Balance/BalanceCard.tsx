import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: 100%;
    background-color: ${colors.accent};
    border-radius: 25px;
    overflow: hidden;
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
import { BalanceCardProps } from './types'

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <CardBackground source={card_bg} resizeMode='cover'>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }}>
                            ****** {props?.accountNo?.slice(6, 10)}
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
        </CardBackground>
    )
}

export default BalanceCard