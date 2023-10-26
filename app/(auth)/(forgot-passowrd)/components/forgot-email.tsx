import { FC } from 'react'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotEmailSchema, ForgotEmailSchemaType } from '../../../../validations/ForgotPassword/ForgotEmail';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { InputIconWrapper, InputWrapper, InputFeildWrapper } from '../../../../components/InputWrappers';

interface ForgotEmailProps {

}

const ForgotEmail: FC<ForgotEmailProps> = ({ }) => {
    const form = useForm<ForgotEmailSchemaType>({
        resolver: zodResolver(ForgotEmailSchema),
        defaultValues: {
            email: ""
        },
    });

    const onSumit: SubmitHandler<ForgotEmailSchemaType> = (data) => {
        console.log(data);
    };
    return (
        <FormProvider {...form}>

            <View className="flex-1 justify-between">

                {/* Email */}
                <InputWrapper>
                    <InputIconWrapper errorMessage={form.formState.errors.email?.message} >
                        <Feather name="mail" size={16} color="red" />
                    </InputIconWrapper>

                    <InputFeildWrapper>
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
                            <Text className="pt-0.5 text-xs text-red">
                                {
                                    form.formState.errors.email
                                        .message
                                }
                            </Text>
                        )}
                    </InputFeildWrapper>
                </InputWrapper>

                {/* Login */}
                <TouchableOpacity
                    className="bg-red rounded-xl mt-8 mb-16 py-3"
                    onPress={form.handleSubmit(onSumit)}
                >
                    <Text className="text-center text-xl tracking-wider text-white font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

        </FormProvider>
    )
}
export default ForgotEmail;