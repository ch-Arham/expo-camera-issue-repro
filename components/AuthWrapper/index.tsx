import { FC } from "react";
import { Image, Pressable, View } from "react-native";
import Header from "./Header";
import { LeftArrow } from "../../assets/images/icons/arrows";
import { SmallLogo } from "../../assets/images/global/logos";
import { cn } from "../../lib/utils";
import StatusbarSafeArea from "../common/layout/StatusbarSafeArea";
import { useRouter, usePathname } from "expo-router";

interface AuthWrapperProps {
    title?: string;
    children: React.ReactNode;
    wavesPosition?: string;
    backgroundColor?: string;
}

const AuthWrapper: FC<AuthWrapperProps> = ({
    title,
    children,
    wavesPosition = "-top-8",
    backgroundColor
}) => {
    const router = useRouter();
    return (
        <>
            <StatusbarSafeArea backgroundColor={backgroundColor} />
            <View className="flex-1 bg-red">
                <View className="flex-1 mt-6">
                    {title ? (
                        <Header text={title} className="px-7" />
                    ) : (
                        <>
                            <View className="px-7 flex flex-row w-full items-center justify-between">
                                <Pressable
                                    onPress={() => router.back()}
                                    style={({ pressed }) => [
                                        { opacity: pressed ? 0.5 : 1 },
                                    ]}
                                >
                                    <LeftArrow className="w-full" />
                                </Pressable>

                                <View>
                                    <SmallLogo />
                                </View>

                                <View className="w-11 invisible"></View>
                            </View>
                        </>
                    )}

                    {children}
                </View>
                <View className={cn("absolute -z-10", wavesPosition)}>
                    <Image
                        className="w-screen"
                        source={require("../../assets/images/global/layout/top_group_wave.png")}
                        alt="grouped waves"
                    />
                </View>
            </View>
        </>
    );
};

export default AuthWrapper;
