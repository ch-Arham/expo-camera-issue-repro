import { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import AuthWrapper from "../../../components/AuthWrapper";
import { LocationBanner } from "../../../assets/images/auth/sign-up";
import { PRIMARY_COLOR } from "../../../constants/Colors";

const SignUpFour = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <AuthWrapper wavesPosition="top-0">
            <View className="mt-10 bg-white flex justify-between flex-1 rounded-t-[30px] pt-10 px-5">
                <View className="pb-8">
                    <Text className="text-darkblue text-2xl font-bold">
                        Your Location
                    </Text>

                    <Text className="text-[#7A869A] text-base">
                        Help us personalize your experience.
                    </Text>

                    <View className="flex items-center mt-8">
                        <LocationBanner />
                    </View>

                    <View className="flex flex-row justify-between items-center mt-16 pl-4 pr-6 py-3 bg-gray-300 rounded-2xl">
                        <Text className="font-bold text-sm">
                            Enable Location
                        </Text>

                        <Switch
                            trackColor={{
                                false: "#767577",
                                true: PRIMARY_COLOR,
                            }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View className="mt-6 px-4 py-3 bg-gray-100 rounded-2xl">
                        <Text className="text-sm font-medium text-center">
                            This will help us give better recommendations.
                        </Text>
                    </View>
                </View>

                <TouchableOpacity className="bg-red rounded-xl mb-20 py-3">
                    <Text className="text-center text-xl tracking-wider text-white font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </AuthWrapper>
    );
};
export default SignUpFour;
