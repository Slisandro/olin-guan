import AppleIcon from "@/components/icons/media/apple";
import FacebookIcon from "@/components/icons/media/facebook";
import GoogleIcon from "@/components/icons/media/google";
import EmailIcon from "@/components/icons/message/email/email";
import EyeSlashIcon from "@/components/icons/security/eye-slash/eye-slash";
import EyeIcon from "@/components/icons/security/eye/eye";
import LockIcon from "@/components/icons/security/lock/lock";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setError(password !== confirmPassword)
    }, [password, confirmPassword])

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push("/(public)/auth")
        }, 500);
    }

    if (loading) return (
        <SafeAreaView className="flex-1 items-center justify-end gap-10">
            <Image
                source={require("@/assets/images/auth/bg-auth.png")}
                contentFit="cover"
                className="absolute w-full h-full"
            />

            <View className="h-full w-full justify-center items-center bg-[#FFFFFFCC]">
                <Image
                    source={require("@/assets/images/loader.png")}
                    className="w-[150px] h-[150px] mx-auto"
                />
                <Text className="font-poppins-bold text-[#1B77F2] text-[20px]">
                    Ready for new adventures...
                </Text>
            </View>
        </SafeAreaView>
    );

    return (
        <SafeAreaView className="flex-1 items-center justify-end gap-10">
            <Image
                source={require("@/assets/images/auth/bg-auth.png")}
                contentFit="cover"
                className="absolute w-full h-full"
            />

            <Image source={require("@/assets/images/logo/full.png")} className="w-[150px] h-[150px] mx-auto" />

            <View className="h-3/4 w-full items-center bg-[#FFFFFFCC] rounded-t-[80px] pt-[25px] px-[20px]">
                <Text className="text-text-900 text-[30px] font-bold font-poppins-bold">Create your account</Text>
                <Text className="mt-[15px] mb-[10px] text-center text-text-900 text-[16px] font-[400] font-poppins">Please fill in your details to create your account and enjoy our services.</Text>

                {/* Input email */}
                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-[20px]">
                    <EmailIcon color="#646464" size="medium" />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#646464"
                        className="ml-3 flex-1 text-text-600 font-poppins"
                    />
                </View>

                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-[20px]">
                    <LockIcon color="#646464" size="medium" />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#646464"
                        className="ml-3 flex-1 text-text-600 text-[14px] font-poppins"
                        secureTextEntry={!show}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Pressable onPress={() => setShow(!show)} className="bg-transparent p-0">
                        {
                            show ?
                                <EyeSlashIcon color="#646464" size="medium" />
                                : <EyeIcon color="#646464" size="medium" />
                        }
                    </Pressable>
                </View>

                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-2">
                    <LockIcon color={error ? "#B91C21" : "#646464"} size="medium" />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#646464"
                        className={`ml-3 flex-1 ${error ? "text-[#B91C21]" : "text-text-600"} text-[14px] font-poppins`}
                        secureTextEntry={!show}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <Pressable onPress={() => setShow(!show)} className="bg-transparent p-0">
                        {
                            show ?
                                <EyeSlashIcon color={error ? "#B91C21" : "#646464"} size="medium" />
                                : <EyeIcon color={error ? "#B91C21" : "#646464"} size="medium" />
                        }
                    </Pressable>
                </View>

                {error && (
                    <View className="w-full flex-row justify-between mt-[4px] px-[8px]">
                        <Text className="text-[#B91C21] text-[12px] font-poppins-medium">
                            ⓘ Passwords do not match
                        </Text>
                    </View>
                )}

                <Text className="flex-row gap-2 text-center mb-[40px] mt-[10px]">
                    By signing up you agree to our Terms & Conditions
                    <Pressable className="ml-1">
                        <Text className="text-primary-700">
                            Terms & Conditions
                        </Text>
                    </Pressable>
                    and
                    <Pressable className="ml-1">
                        <Text className="text-primary-700">
                            Privacy Policy
                        </Text>
                    </Pressable>
                </Text>

                <Pressable
                    className="space-x-2 bg-secondary-700 w-full rounded-[16px] py-[16px]"
                >
                    <Text className="text-neutral-900 text-center text-[16px] font-poppins-semibold">
                        Sign up
                    </Text>
                </Pressable>

                {/* Divider */}
                <View className="mt-[15px] flex-row gap-4 items-center">
                    <LinearGradient
                        colors={['#F2CB0400', '#94A604']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        className="w-[140px] h-[1px]"
                    />
                    <Text className="text-[#454B60] text-center text-[20px] uppercase font-poppins-medium">OR</Text>
                    <LinearGradient
                        colors={['#94A604', 'rgba(242,203,4,0)']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        className="w-[140px] h-[1px]"
                    />
                </View>

                <View className="flex-row w-full justify-between mt-[20px]">
                    <Pressable
                        onPress={handleSubmit}
                        className="px-[40px] py-[16px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <GoogleIcon />
                    </Pressable>

                    <Pressable
                        onPress={handleSubmit}
                        className="px-[40px] py-[16px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <FacebookIcon />
                    </Pressable>

                    <Pressable
                        onPress={handleSubmit}
                        className="px-[40px] py-[16px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <AppleIcon />
                    </Pressable>
                </View>

                <Text className="flex-row gap-2 mt-[25px]">
                    Don’t have an Account?
                    <Pressable className="ml-1" onPress={handleSubmit}>
                        <Text className="text-primary-700">
                            Sign up!
                        </Text>
                    </Pressable>
                </Text>
            </View>
        </SafeAreaView>
    )
}