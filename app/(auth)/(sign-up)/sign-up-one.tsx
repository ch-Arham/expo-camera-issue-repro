import React, { useState } from "react";

// React Native Imports
import { Feather } from "@expo/vector-icons";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useRouter } from "expo-router";

// Components Imports
import AuthWrapper from "../../../components/AuthWrapper";

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


const SignUpOne = () => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const router = useRouter();

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

        router.push("/(auth)/(sign-up)/sign-up-two");
    };

    const handleShowPassword = (type: "password" | "confirmPassword") => {
        setShowPassword((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    return (
        <AuthWrapper title="Sign Up">
            <ScrollView
                className="mt-10 bg-white flex-1 rounded-t-[30px] pt-10"
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <View className="px-5">
                    <Text className="text-darkblue text-2xl font-bold">
                        Let’s Get Started
                    </Text>

                    <Text className="text-[#7A869A] text-base">
                        It won’t take more than minute. We Promise.
                    </Text>
                </View>

                {/* Form */}
                <View className="px-6 mt-8">
                    <FormProvider {...form}>
                        {/* Username */}
                        <View className="border-2 border-red rounded-2xl px-4 pt-3 space-y-3">
                            <View className="flex flex-row items-center space-x-3">
                                <Feather name="user" size={16} color="red" />
                                <Text
                                    className={`text-sm ${
                                        form.formState.errors?.username?.message
                                            ? "text-red"
                                            : "text-black/60"
                                    }`}
                                >
                                    Username
                                </Text>
                            </View>

                            <View className="pb-4">
                                <Controller
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <TextInput
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            placeholder="Enter your username"
                                            placeholderTextColor="darkgray"
                                            onChangeText={field.onChange}
                                            value={field.value}
                                            keyboardType="email-address"
                                        />
                                    )}
                                />
                                {form.formState.errors.username && (
                                    <Text className=" pt-1 text-xs text-red">
                                        {form.formState.errors.username.message}
                                    </Text>
                                )}
                            </View>
                        </View>

                        {/* Email */}
                        <View className="border-2 border-red rounded-2xl px-4 pt-3 mt-4 space-y-3">
                            <View className="flex flex-row items-center space-x-3">
                                <Feather name="mail" size={16} color="red" />
                                <Text
                                    className={`text-sm ${
                                        form.formState.errors?.email?.message
                                            ? "text-red"
                                            : "text-black/60"
                                    }`}
                                >
                                    Email
                                </Text>
                            </View>

                            <View className="pb-4">
                                <Controller
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <TextInput
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            placeholder="Enter your email"
                                            placeholderTextColor="darkgray"
                                            onChangeText={field.onChange}
                                            value={field.value}
                                            keyboardType="email-address"
                                        />
                                    )}
                                />
                                {form.formState.errors.email && (
                                    <Text className=" pt-1 text-xs text-red">
                                        {form.formState.errors.email.message}
                                    </Text>
                                )}
                            </View>
                        </View>

                        {/* Password */}
                        <View className="border-2 border-red rounded-2xl px-4 pt-3 mt-4">
                            <View className="flex flex-row items-center">
                                <View className="flex-1 mr-3 space-y-3">
                                    <View className="flex flex-row items-center space-x-3">
                                        <Feather
                                            name="lock"
                                            size={16}
                                            color="red"
                                        />
                                        <Text
                                            className={`text-sm ${
                                                form.formState.errors?.password
                                                    ?.message
                                                    ? "text-red"
                                                    : "text-black/60"
                                            }`}
                                        >
                                            Password
                                        </Text>
                                    </View>

                                    <View className="pb-4">
                                        <Controller
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <TextInput
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Enter your password"
                                                    placeholderTextColor="darkgray"
                                                    onChangeText={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                    secureTextEntry={
                                                        !showPassword.password
                                                    }
                                                />
                                            )}
                                        />

                                        {form.formState.errors.password && (
                                            <Text className=" pt-1 text-xs text-red">
                                                {
                                                    form.formState.errors
                                                        .password.message
                                                }
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                {
                                    <Feather
                                        name={
                                            !showPassword.password
                                                ? "eye-off"
                                                : "eye"
                                        }
                                        size={20}
                                        color="red"
                                        onPress={() =>
                                            handleShowPassword("password")
                                        }
                                    />
                                }
                            </View>
                        </View>

                        {/* Confirm Password */}
                        <View className="border-2 border-red rounded-2xl px-4 pt-3 mt-4">
                            <View className="flex flex-row items-center">
                                <View className="flex-1 mr-3 space-y-3">
                                    <View className="flex flex-row items-center space-x-3">
                                        <Feather
                                            name="lock"
                                            size={16}
                                            color="red"
                                        />
                                        <Text
                                            className={`text-sm ${
                                                form.formState.errors
                                                    ?.confirmPassword?.message
                                                    ? "text-red"
                                                    : "text-black/60"
                                            }`}
                                        >
                                            Confirm Password
                                        </Text>
                                    </View>

                                    <View className="pb-4">
                                        <Controller
                                            control={form.control}
                                            name="confirmPassword"
                                            render={({ field }) => (
                                                <TextInput
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Re-enter your password"
                                                    placeholderTextColor="darkgray"
                                                    onChangeText={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                    secureTextEntry={
                                                        !showPassword.confirmPassword
                                                    }
                                                />
                                            )}
                                        />

                                        {form.formState.errors
                                            .confirmPassword && (
                                            <Text className=" pt-1 text-xs text-red">
                                                {
                                                    form.formState.errors
                                                        .confirmPassword.message
                                                }
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                {
                                    <Feather
                                        name={
                                            !showPassword.confirmPassword
                                                ? "eye-off"
                                                : "eye"
                                        }
                                        size={20}
                                        color="red"
                                        onPress={() =>
                                            handleShowPassword(
                                                "confirmPassword"
                                            )
                                        }
                                    />
                                }
                            </View>
                        </View>

                        {/* Terms and Conditions */}
                        <View className="flex flex-row items-center space-x-2 mt-4">
                            <Feather
                                name="check-circle"
                                size={16}
                                color="red"
                            />
                            <Text className="text-xs text-[#A9A9BA] font-medium">
                                I accept the company’s terms and conditions.
                            </Text>
                        </View>

                        {/* Login */}
                        <TouchableOpacity
                            className="bg-red rounded-xl mt-10 py-3"
                            onPress={form.handleSubmit(onSumit)}
                        >
                            <Text className="text-center text-xl tracking-wider text-white font-semibold">
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>

                    {/* Already have an account */}
                    <View className="flex flex-row items-center justify-center mt-6 mb-4">
                        <Text className="text-black text-sm">
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.push("/")}
                        >
                            <Text className="text-black text-sm ml-1 font-bold">
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </AuthWrapper>
    );
};
export default SignUpOne;
