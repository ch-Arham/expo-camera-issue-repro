import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { CameraSvg, Gallery } from "../../../assets/images/auth/sign-up";
import AuthWrapper from "../../../components/AuthWrapper";

import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const SignUpTwo = () => {
    const router = useRouter();

    const [image, setImage] = useState<any>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return (
        <AuthWrapper wavesPosition="top-0">
            <ScrollView className="mt-72 flex-1 bg-white px-5">
                <View className="flex items-center mt-4">
                    <Text className="text-[#262628] text-xl">
                        Take a photo or choose
                    </Text>

                    <Text className="text-[#262628] text-xl">
                        from your library
                    </Text>
                </View>

                <View className="flex flex-row items-center justify-between bg-gray-100 mt-8 rounded-2xl py-12 px-20">
                    <View className="flex items-center">
                        <TouchableOpacity onPress={pickImage}>
                            <Gallery />
                        </TouchableOpacity>
                        <Text className="mt-3 font-semibold text-sm">
                            Gallery
                        </Text>
                    </View>

                    <View className="w-0.5 h-20 bg-gray-300" />

                    <View className="flex items-center">
                        <TouchableOpacity
                            onPress={() => router.push("/screens/CameraScreen")}
                        >
                            <CameraSvg />
                        </TouchableOpacity>

                        <Text className="mt-3 font-semibold text-sm">
                            Camera
                        </Text>
                    </View>
                </View>

                <View className="bg-gray-100 mt-6 rounded-2xl py-4 px-8">
                    <Text className="text-sm font-medium text-center">
                        Picture will only be shown on your profile
                    </Text>
                </View>

                <TouchableOpacity className="bg-red rounded-xl my-6 py-3">
                    <Text className="text-center text-xl tracking-wider text-white font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <View className="absolute top-40 left-1/4">
                <Image
                    source={require("../../../assets/images/auth/sign-up/profile.png")}
                    alt="Profile"
                />
            </View>

            <View className="absolute -z-10 top-32">
                <Image
                    className="w-screen"
                    source={require("../../../assets/images/global/layout/waves.png")}
                    alt="bottom wave"
                />
            </View>
        </AuthWrapper>
    );
};
export default SignUpTwo;
