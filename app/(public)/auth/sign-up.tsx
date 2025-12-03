import AppleIcon from "@/components/icons/media/apple";
import FacebookIcon from "@/components/icons/media/facebook";
import GoogleIcon from "@/components/icons/media/google";
import EmailIcon from "@/components/icons/message/email/email";
import EyeSlashIcon from "@/components/icons/security/eye-slash/eye-slash";
import EyeIcon from "@/components/icons/security/eye/eye";
import LockIcon from "@/components/icons/security/lock/lock";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
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
        <View className="flex-1 items-center justify-evenly gap-4">
            <Image
                source={require("@/assets/images/auth/bg-auth.png")}
                resizeMode="cover"
                className="absolute w-full h-full"
            />

            <Image source={require("@/assets/images/logo/full.png")} className="w-[120px] h-[120px] mx-auto mt-2" />

            <View className="flex-1 w-full justify-center items-center bg-[#FFFFFFCC] rounded-t-[80px] pt-[20px] px-[20px]  mt-auto">
                <Text className="text-text-900 text-[30px] font-bold font-poppins-bold">Create your account</Text>
                <Text className="mt-[5px] mb-[10px] text-center text-text-900 text-[16px] font-[400] font-poppins">Please fill in your details to create your account and enjoy our services.</Text>

                {/* Input email */}
                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-[10px]">
                    <EmailIcon color="#646464" size="medium" />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#646464"
                        className="ml-3 flex-1 text-text-600 font-poppins"
                    />
                </View>

                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-[10px]">
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

                <View className="w-full flex-row items-center bg-white rounded-12 pl-[10px] py-[13px] px-[20px] mb-1">
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

                <View className="flex-row w-full flex-wrap justify-center gap-2 items-center text-center mb-[20px] mt-[10px]">
                    <Text>
                        By signing up you agree to our Terms & Conditions
                    </Text>
                    <Pressable className="ml-0.5">
                        <Text className="text-primary-700">
                            Terms & Conditions
                        </Text>
                    </Pressable>
                    <Text>
                        and
                    </Text>
                    <Pressable className="ml-0.5">
                        <Text className="text-primary-700">
                            Privacy Policy
                        </Text>
                    </Pressable>
                </View>

                <Pressable
                    className="space-x-2 bg-secondary-700 w-full rounded-[16px] py-[12px]"
                >
                    <Text className="text-neutral-900 text-center text-[16px] font-poppins-semibold">
                        Sign up
                    </Text>
                </Pressable>

                {/* Divider */}
                <View className="mt-[5px] flex-row gap-2 items-center">
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
                        className="px-[40px] py-[12px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <GoogleIcon />
                    </Pressable>

                    <Pressable
                        onPress={handleSubmit}
                        className="px-[40px] py-[12px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <FacebookIcon />
                    </Pressable>

                    <Pressable
                        onPress={handleSubmit}
                        className="px-[40px] py-[12px] border border-[#D1D3DB] rounded-[16px]"
                    >
                        <AppleIcon />
                    </Pressable>
                </View>

                <View className="flex-row gap-0 mt-[25px]">
                    <Text>
                        Don’t have an Account?
                    </Text>
                    <Pressable className="ml-1" onPress={handleSubmit}>
                        <Text className="text-primary-700">
                            Sign in!
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}