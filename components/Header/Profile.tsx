import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import {
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
} from 'react-native'

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`

const StyledImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

interface ProfileProps {
    img: ImageSourcePropType
    imgStyle?: StyleProp<ImageStyle>
    imgContainerStyle?: StyleProp<ViewStyle>
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img} resizeMode='cover' />
        </StyledView>
    )
}

export default Profile