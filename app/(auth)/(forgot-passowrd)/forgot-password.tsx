import React, { useState } from "react";

// React Native Imports
import { Feather } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// Assets Imports

// Zod Imports
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignUpOneSchemaType } from "../../../validations/SignUp";
import { SignUpOneSchema } from "../../../validations/SignUp";

// React Hook Form Imports
import {
    Controller,
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { ForgotPassowrdBanner } from "../../../assets/images/auth/forgot-password";
import AuthWrapper from "../../../components/AuthWrapper";
import ForgotEmail from "./components/forgot-email";

const ForgotPassowrd = () => {
    const form = useForm<SignUpOneSchemaType>({
        resolver: zodResolver(SignUpOneSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSumit: SubmitHandler<SignUpOneSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <AuthWrapper title="Forogt Password">
            <View
                className="mt-10 bg-white flex-1 rounded-t-[30px] pt-10"
                style={{ flex: 1 }}
            >
                <View className="flex items-center">
                    <ForgotPassowrdBanner />
                    <Text className="p-10 text-center text-muted tex-sm">
                        Please enter you registered email id to receive
                        verification code for password reset.
                    </Text>
                </View>

                {/* Form */}
                <View className="flex-1 px-6 mt-2">
                    <ForgotEmail />
                </View>
            </View>
        </AuthWrapper>
    );
};
export default ForgotPassowrd;
