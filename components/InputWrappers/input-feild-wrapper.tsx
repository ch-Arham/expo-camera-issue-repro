import { FC, ReactNode } from 'react'
import { View } from 'react-native'

interface InputFeildWrapperProps {
    children: ReactNode
}

const InputFeildWrapper: FC<InputFeildWrapperProps> = ({ children }) => {
    return (
        <View className="pb-4">
            {children}
        </View>
    )
}

export default InputFeildWrapper