import { FC, ReactNode } from "react";
import { View } from "react-native";

interface InputWrapperProps {
    children: ReactNode;
}

const InputWrapper: FC<InputWrapperProps> = ({ children }) => {
    return (
        <View className="border-2 border-red rounded-2xl px-4 pt-3 mt-4">
            {children}
        </View>
    );
};

export default InputWrapper;
