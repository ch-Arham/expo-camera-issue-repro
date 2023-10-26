import React from "react";
import { View } from "react-native";
import SignIn from "./(auth)/(sign-in)";
import ForgotPassowrd from "./(auth)/(forgot-passowrd)";
import SignUpTwo from "./(auth)/(sign-up)/sign-up-two";

const Page = () => {
    return (
        <View className="flex-1">
            <View style={{ flex: 1 }}>
                {/* <SignIn /> */}
                <SignUpTwo />
            </View>
        </View>
    );
};

export default Page;
