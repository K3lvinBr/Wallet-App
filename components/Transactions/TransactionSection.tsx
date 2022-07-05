import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'
import TransactionItem from './TransactionItem'

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding: 5px 25px 0 25px;
    flex: 2;
`

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const TransactionList = styled.FlatList`
    width: 100%
`

// types
import { TransactionSectionProps } from './types'

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                    Transação
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recente
                    <Ionicons name='caret-down' size={13} color={colors.graydark} />
                </SmallText>
            </TransactionRow>
            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    )
}

export default TransactionSection