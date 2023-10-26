import React, { useState } from "react";

// React Native Imports
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

// Components Imports
import StatusbarSafeArea from "../../../components/common/layout/StatusbarSafeArea";

// Assets Imports
import { Apple, Facebook, Google } from "../../../assets/images/icons/socials";
import {
    PathWave1,
    PathWave2,
    PathWave3,
} from "../../../assets/images/auth/sign-in";

// Zod Imports
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../../validations/SignIn";
import type { SignInSchemaType } from "../../../validations/SignIn";

// React Hook Form Imports
import {
    useForm,
    Controller,
    SubmitHandler,
    FormProvider,
} from "react-hook-form";

const SignIn = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<SignInSchemaType>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSumit: SubmitHandler<SignInSchemaType> = (data) => {
        console.log(data);
    };

    const handleShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <StatusbarSafeArea backgroundColor="white" />
            <View className="flex-1 bg-white">
                <View className="flex-1">
                    <View className="flex justify-center items-center mt-16">
                        <Image
                            source={require("../../../assets/images/auth/sign-in/bed_o_in.png")}
                            alt="Bed O In"
                        />
                    </View>

                    {/* Form */}
                    <View className="px-5 mt-12">
                        <FormProvider {...form}>
                            {/* Email */}
                            <View className="border-2 border-red rounded-xl px-4 pt-3 space-y-3">
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
                                                placeholder="Enter your email here"
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
                            <View className="border-2 border-red rounded-xl px-4 pt-3 mt-5">
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
                                                        placeholder="Enter your password here"
                                                        placeholderTextColor="darkgray"
                                                        onChangeText={
                                                            field.onChange
                                                        }
                                                        value={field.value}
                                                        secureTextEntry={
                                                            !showPassword
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
                                            name={showPassword ? "eye-off" : "eye"}
                                            size={20}
                                            color="red"
                                            onPress={handleShowPassword}
                                        />
                                    }
                                </View>
                            </View>

                            {/* Remember me and Forgot */}
                            <View className="flex flex-row justify-between items-center mt-5">
                                <View className="flex flex-row items-center space-x-2">
                                    <Feather
                                        name="check-circle"
                                        size={16}
                                        color="red"
                                    />
                                    <Text className="text-sm text-red font-medium">
                                        Remember me
                                    </Text>
                                </View>

                                <Text className="text-sm text-red font-medium">
                                    Forgot password?
                                </Text>
                            </View>

                            {/* Login */}
                            <TouchableOpacity
                                className="bg-red rounded-xl mt-8 py-3"
                                onPress={form.handleSubmit(onSumit)}
                            >
                                <Text className="text-center text-xl tracking-wider text-white font-semibold">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </FormProvider>
                    </View>
                </View>

                <View className="flex justify-center items-center px-5">
                    {/* Signup button inverted color*/}
                  
                    <TouchableOpacity
                        className="bg-white rounded-xl py-3 w-full"
                        onPress={() => router.push("/(auth)/(sign-up)/")}
                    >
                        <Text className="text-center text-xl tracking-wider text-red font-medium">
                            Signup
                        </Text>
                    </TouchableOpacity>

                    <View className="flex flex-row justify-between w-full mt-4">
                        {/* FaceBook, Google, Apple */}
                        <TouchableOpacity>
                            <Facebook />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Google />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Apple />
                        </TouchableOpacity>
                    </View>

                    {/* Terms and Conditions */}
                    <View className="flex justify-center items-center mt-4 mb-8">
                        <Text className="text-white/50 text-sm">
                            By using our app you are agreeing to our
                        </Text>
                        <Text className="text-white/50 text-sm">
                            Terms and Conditions and Privacy Policy.
                        </Text>
                    </View>
                </View>

                <View className="absolute bottom-0 -z-10">
                    <PathWave1 width={500} />
                </View>

                <View className="absolute bottom-0 -z-10">
                    <PathWave2 width={500} />
                </View>

                <View className="absolute bottom-0 -z-10">
                    <PathWave3 width={500} />
                </View>

                <StatusBar style="dark" />
            </View>
        </>
    );
};
export default SignIn;
