import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { LeftArrowSimple } from "../../../assets/images/icons/arrows";
import { useRouter } from "expo-router";

interface HeaderProps extends React.HtmlHTMLAttributes<{}> {
    text: string;
}

const Header: FC<HeaderProps> = ({ text, className }) => {
    const router = useRouter();
    return (
        <View className={className}>
            <Pressable
                onPress={() => router.back()}
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
                <LeftArrowSimple className="w-full" />
            </Pressable>

            <Text className="text-white mt-7 text-3xl font-bold">{text}</Text>
        </View>
    );
};

export default Header;
