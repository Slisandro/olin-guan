import { BlurView } from "expo-blur";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { WalletIcon } from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { ClipPath, Defs, Ellipse, G, Path } from "react-native-svg";

export default function AddFound() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState("$250");


    return (
        <LinearGradient
            colors={["#55B6C8", "#1B77F2"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />

            {
                loading && (
                    <BlurView intensity={25} className="absolute flex-1 inset-0 z-50 items-center justify-center bg-[#FFFFFF6B]">
                        <View className="items-center justify-center p-10 rounded-2xl bg-white w-[90%] gap-[16px]">
                            <SUCCESS_2 />
                            <Text className="font-poppins-bold text-[#1B77F2] text-[16px] text-center">
                                Add funds
                            </Text>
                            <Text className="text-center text-[#8A8A8A]">
                                You are about to add funds to the wallet
                            </Text>

                            <View className="flex-row justify-between w-full">
                                <Pressable onPress={() => setLoading(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#DADFB5] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-[#94A604]'>Cancel It</Text>
                                </Pressable>

                                <Pressable onPress={() => setLoading(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#94A604] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-white'>Add funds</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BlurView>
                )
            }

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="px-[20px] pt-[50px] gap-[12px] items-center">
                    <View className="flex-row items-center justify-between w-full">
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/wallet")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white">Add funds to your wallet </Text>

                </View>

                <View className="bg-white flex-1 mt-[10px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Select the amount to add
                    </Text>

                    <View className="flex-row justify-between">
                        {
                            ["$250", "$500", "$750", "$1000"].map(item => (
                                <Pressable onPress={() => setAmount(item)} className={`shadow-md shadow-[#97C3FF66]  w-1/5 p-[10px] items-center justify-center rounded-[12px] ${item === amount ? "bg-[#1B77F2]" : "bg-white " }`}>
                                    <Text className={`text-[16px] font-poppins-bold ${item === amount ? "text-white" : "text-[#646464]" }`}>{item}</Text>
                                </Pressable>
                            ))
                        }
                    </View>

                    <Text className="text-[#646464] font-poppins-bold text-[12px]">Enter another amount</Text>

                    <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                        <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                    </View>

                    <View className="flex-row gap-2 items-center">
                        <Checkbox />
                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Automatically apply to upcoming reservations</Text>
                    </View>

                    
                    <View className='gap-4'>
                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                            Payment Details
                        </Text>

                        <Text className='font-poppins font-400 text-[14px] text-text-600 leading-[19px]'>
                            Choose Payment Options
                        </Text>

                        <View className='flex gap-[16px]'>
                            <View className="flex flex-row p-[18px] rounded-[16px] gap-4 shadow-lg shadow-[#97C3FF66] bg-white">
                                <Checkbox />
                                <MASTERCARD />
                                <Text className="flex-1 text-[#646464] text-[12px] font-poppins-bold">Mastercard ending in 1234</Text>
                            </View>

                            <View className="flex flex-row p-[18px] rounded-[16px] gap-4 shadow-lg shadow-[#97C3FF66] bg-white">
                                <Checkbox />
                                <WalletIcon size='medium' color='#646464' />
                                <Text className="flex-1 text-[#646464] text-[12px] font-poppins-bold">Mastercard ending in 1234</Text>
                            </View>

                            <View className="flex flex-row p-[18px] rounded-[16px] gap-4 shadow-lg shadow-[#97C3FF66] bg-white">
                                <Checkbox />
                                <WalletIcon size='medium' color='#646464' />
                                <Text className="flex-1 text-[#646464] text-[12px] font-poppins-bold">Paypal</Text>
                            </View>
                        </View>
                    </View>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Transaction Summary
                    </Text>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Amount to be charged</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">$ 2.400</Text>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Commission</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">$ 980</Text>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Total</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">$ 560</Text>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Estimated final balance in wallet</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">$ 560</Text>
                    </View>

                    <Pressable onPress={() => setLoading(true)} className="w-full rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                        <Text className='text-[16px] font-poppins-semibold text-white'>Add funds now</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const LOCATION = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M11.999 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"
            stroke="#646464"
            strokeWidth={1.5}
        />
        <Path
            d="M3.618 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
            stroke="#646464"
            strokeWidth={1.5}
        />
    </Svg>
)

const CLOCK = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
            stroke="#646464"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.709 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
            stroke="#646464"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const ARROW_BACK = () => (
    <Svg
        width={8}
        height={13}
        viewBox="0 0 8 13"
        fill="none"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.293 5.657L5.95 0l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414L.293 7.071a1 1 0 010-1.414z"
            fill="#fff"
        />
    </Svg>
)

const CALENDAR = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M8 2v3m8-3v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
            stroke="#646464"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.694 13.7h.009M15.694 16.7h.009M11.995 13.7h.009M11.995 16.7h.009M8.295 13.7h.01M8.295 16.7h.01"
            stroke="#646464"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const MASTERCARD = () => (
    <Svg
        width={25}
        height={16}
        viewBox="0 0 25 16"
        fill="none"
    >
        <G clipPath="url(#clip0_232_8709)">
            <Path d="M15.883 1.65h-6.76v12.132h6.76V1.65z" fill="#FF5F00" />
            <Path
                d="M9.552 7.716a7.76 7.76 0 012.94-6.066A7.705 7.705 0 001.655 2.958a7.684 7.684 0 001.31 10.824 7.712 7.712 0 009.549 0 7.716 7.716 0 01-2.962-6.066z"
                fill="#EB001B"
            />
            <Path
                d="M25.002 7.716a7.716 7.716 0 01-7.725 7.716 7.652 7.652 0 01-4.764-1.65c3.347-2.637 3.927-7.48 1.287-10.846a8.11 8.11 0 00-1.287-1.286C15.86-.986 20.732-.407 23.35 2.958a7.631 7.631 0 011.652 4.758zM24.273 12.495v-.257h.108v-.043h-.258v.043h.107v.257h.043zm.494 0v-.3h-.086l-.086.215-.086-.215h-.085v.3h.064v-.235l.086.193h.064l.086-.193v.235h.043z"
                fill="#F79E1B"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_232_8709">
                <Path fill="#fff" d="M0 0H25V15.4321H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const SUCCESS_2 = () => (
    <Svg
        width={167}
        height={152}
        viewBox="0 0 167 152"
        fill="none"
    >
        <Ellipse
            cx={85.7151}
            cy={76.4225}
            rx={63.2991}
            ry={59.5334}
            fill="#F2F4FC"
        />
        <Ellipse
            cx={160.208}
            cy={23.222}
            rx={6.73394}
            ry={6.33334}
            fill="#94A604"
        />
        <Ellipse
            cx={17.9581}
            cy={8.44445}
            rx={8.97859}
            ry={8.44445}
            fill="#94A604"
        />
        <Ellipse
            cx={8.97465}
            cy={112.311}
            rx={4.48929}
            ry={4.22223}
            fill="#94A604"
        />
        <Ellipse
            cx={148.595}
            cy={135.533}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M75.79 55.34h19.136c7.483 0 12.493 4.94 12.493 12.289V84.59c0 7.326-5.01 12.267-12.493 12.267H75.79c-7.482 0-12.515-4.94-12.515-12.267V67.63c0-7.349 5.033-12.29 12.515-12.29zm8.298 26.966l10.484-9.86c.75-.706.75-1.848 0-2.575-.75-.705-1.986-.705-2.737 0l-9.116 8.574-3.862-3.633c-.75-.706-1.987-.706-2.737 0s-.75 1.848 0 2.574l5.253 4.92c.375.353.86.52 1.346.52.508 0 .994-.167 1.369-.52z"
            fill="#004BAF"
        />
        <Ellipse
            cx={95.6196}
            cy={3.80008}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Ellipse
            cx={56.1142}
            cy={149.044}
            rx={3.14251}
            ry={2.95556}
            fill="#94A604"
        />
        <Ellipse
            cx={109.54}
            cy={144.4}
            rx={0.897538}
            ry={0.844144}
            fill="#94A604"
        />
        <Ellipse
            cx={153.082}
            cy={93.3113}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Ellipse
            cx={0.897538}
            cy={63.3329}
            rx={0.897538}
            ry={0.844144}
            fill="#94A604"
        />
    </Svg>
)