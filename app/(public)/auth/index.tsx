import AppleIcon from "@/components/icons/media/apple";
import FacebookIcon from "@/components/icons/media/facebook";
import GoogleIcon from "@/components/icons/media/google";
import EmailIcon from "@/components/icons/message/email/email";
import EyeSlashIcon from "@/components/icons/security/eye-slash/eye-slash";
import EyeIcon from "@/components/icons/security/eye/eye";
import LockIcon from "@/components/icons/security/lock/lock";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(password.length >= 8)
    }, [password])

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push("/(private)/(tabs)")
        }, 500);
    }

    if (loading) return (
        <SafeAreaView className="flex-1 items-center justify-end gap-10">
            <Image
                source={require("@/assets/images/auth/bg-auth.png")}
                resizeMode="cover"
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
        <View className="flex-1 items-center justify-around">
            <StatusBar style="light" />

            <Image
                source={require("@/assets/images/auth/bg-auth.png")}
                resizeMode="cover"
                className="absolute w-full h-full"
            />

            <Image source={require("@/assets/images/logo/full.png")} className="w-[140px] h-[140px] mx-auto" />

            <View className="h-[auto] w-full items-center bg-[#FFFFFFCC] rounded-t-[80px] pt-[20px] px-[20px] mt-auto">
                <Text className="text-text-900 text-[36px] font-bold font-poppins-bold">Welcome back</Text>
                <Text className="mt-[5px] mb-[14px] text-text-900 text-[18px] font-[400] font-poppins">Welcome back</Text>

                {/* Input email */}
                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-[20px]">
                    <EmailIcon color="#646464" size="medium" />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#646464"
                        className="ml-3 flex-1 text-text-600 font-poppins"
                    />
                </View>

                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px]">
                    <LockIcon color={isValid ? "#94A604" : "#646464"} size="medium" />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#646464"
                        className={`ml-3 flex-1 ${isValid ? "text-[#94A604]" : "text-text-600"} text-[14px] font-poppins`}
                        secureTextEntry={!show}
                    />
                    <Pressable onPress={() => setShow(!show)} className="bg-transparent p-0">
                        {
                            show ?
                                <EyeSlashIcon color={isValid ? "#94A604" : "#646464"} size="medium" />
                                : <EyeIcon color={isValid ? "#94A604" : "#646464"} size="medium" />
                        }
                    </Pressable>
                </View>

                {isValid && (
                    <View className="w-full flex-row justify-between mt-[4px] px-[8px]">
                        <Text className="text-[#94A604] text-[12px] font-poppins-medium">
                            Password accepted!
                        </Text>
                        <Text className="text-[#94A604] text-[12px] font-poppins-medium">
                            {password.length}/8
                        </Text>
                    </View>
                )}

                <View className="flex-row justify-between w-full mt-[10px]">
                    <Pressable
                        onPress={() => setChecked(!checked)}
                        className="flex-row items-center space-x-2 gap-1"
                    >
                        <View
                            className={`w-5 h-5 rounded-md border-2 ${checked ? "border-primary-700 bg-primary-700" : "border-primary-700 bg-white"
                                } items-center justify-center`}
                        >
                            {checked && <EmailIcon size={"medium"} color="#fff" />}
                        </View>
                        <Text className="text-text-900 text-[12px] font-poppins-medium">
                            Remember me
                        </Text>
                    </Pressable>

                    <Pressable
                        className="flex-row items-center space-x-2"
                    >
                        <Text className="text-text-900 text-[12px] font-poppins-medium">
                            Forgot Password?
                        </Text>
                    </Pressable>
                </View>

                <Pressable
                    onPress={handleSubmit}
                    className="space-x-2 bg-secondary-700 w-full rounded-[16px] py-[16px] mt-[20px]"
                >
                    <Text className="text-neutral-900 text-center text-[16px] font-poppins-semibold">
                        Log in
                    </Text>
                </Pressable>

                {/* Divider */}
                <View className="mt-[10px] flex-row gap-4 items-center">
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

                <View className="flex-row w-full justify-between mt-[10px]">
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
                <View className="flex-row gap-0 py-[15px] items-center justify-center w-full">
                    <Text>
                        Don’t have an Account?
                    </Text>
                    <Pressable className="ml-1 my-0" onPress={() => router.push("/(public)/auth/sign-up")}>
                        <Text className="text-primary-700">
                            Sign up!
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}