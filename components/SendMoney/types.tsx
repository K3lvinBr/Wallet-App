import { ImageSourcePropType } from "react-native";

export interface SendMoneyProps {
    id: number
    name: string
    amount: string
    background: string
    img: ImageSourcePropType
}

export interface SendMoneySectionProps {
    data: Array<SendMoneyProps>
}