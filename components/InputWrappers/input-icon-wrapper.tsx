import { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import { cn } from "../../lib/utils";

interface InputIconWrapperProps {
    children: ReactNode;
    errorMessage?: string;
}

const InputIconWrapper: FC<InputIconWrapperProps> = ({
    children,
    errorMessage,
}) => {
    return (
        <View className="flex flex-row items-center space-x-3 mb-3">
            {children}
            <Text
                className={cn(
                    "text-sm",
                    errorMessage ? "text-red" : "text-black/60"
                )}
            >
                Email
            </Text>
        </View>
    );
};

export default InputIconWrapper;
