import { BlurView } from "expo-blur";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { WalletIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

export default function BookingRestaurant() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(plan_trip)/booking-restaurant-confirmed")
            }, 1000);
        }
    }, [loading])


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
                        <View className="items-center justify-center p-10 rounded-2xl">
                            <Image
                                source={require("@/assets/images/loader.png")}
                                className="w-[150px] h-[150px]"
                            />
                            <Text className="font-poppins-bold text-[#1B77F2] text-[20px]">
                                Ready for new adventures...
                            </Text>
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
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/trip")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white">The Coco restaurant </Text>

                </View>

                <View className="bg-white flex-1 mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className="text-[#D35F07] text-[14px] font-poppins-bold text-center">Coupon applied: 🎟️ VivaNoches – 15% off</Text>

                    <View className="flex-row shadow-md shadow-[#97C3FF66] p-[20px] rounded-[12px] bg-white gap-2 items-center">
                        <Image source={require("@/assets/images/components/trip/restaurant.jpg")} className="w-[80px] h-[80px] rounded-[12px]" />

                        <View className="gap-2">
                            <View className="gap-2 flex-row items-center">
                                <LOCATION />
                                <Text className=" gap-2 text-[#646464] text-[14px] font-[500]">
                                    Blvd. Kukulcán Km 9, Cancún
                                </Text>
                            </View>
                            <View className="gap-2 flex-row items-center">
                                <CLOCK />
                                <Text className="flex-row items-center gap-2 text-[#646464] text-[14px] font-[500]">
                                    21:00-22:00
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Details
                    </Text>

                    <View className="flex flex-row justify-between gap-[20px]">
                        <View className="gap-[9px] w-[45%]">
                            <Text className="text-[#646464] font-poppins-bold text-[12px]">Start time</Text>
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <CALENDAR />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="10 am" />
                            </View>
                        </View>

                        <View className="gap-[9px] w-[45%]">
                            <Text className="text-[#646464] font-poppins-bold text-[12px]">End time</Text>
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <CALENDAR />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="11 am" />
                            </View>
                        </View>
                    </View>

                    <View className="gap-[9px]">
                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Number of people</Text>
                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                        </View>
                    </View>

                    <LinearGradient
                        colors={['#1C3952', '#225D7F']}
                        start={{ x: 0.5, y: 0 }}   // centro arriba
                        end={{ x: 0.5, y: 1 }}     // centro abajo
                        style={{ flex: 1, borderRadius: 12, padding: 20, gap: 10 }}

                    >
                        <View className="flex-row rounded-[12px] gap-2 items-center">
                            <View className="bg-[#1C3952] rounded-[12px] w-[80px] h-[80px] items-center justify-center">
                                <Image source={require("@/assets/images/components/trip/bolw.png")} className="w-[50px] h-[50px] rounded-[12px]" />
                            </View>

                            <View className="gap-2">
                                <Text className="text-[20px] font-poppins-bold text-[#94A604]">
                                    The Coco Restaurant
                                </Text>

                                <Text className=" gap-2 text-white text-[12px] font-poppins-bold">
                                    Coupon: NOCHES25
                                </Text>

                                <Text className=" gap-2 text-white text-[12px] font-poppins-bold">
                                    30% discount
                                </Text>

                                <Text className=" gap-2 text-white text-[12px] font-poppins">
                                    Valid until: July 28
                                </Text>

                                <Text className=" gap-2 text-white text-[12px] font-poppins-bold">
                                    Blvd. Kukulcán Km 9, Cancún
                                </Text>
                            </View>

                        </View>

                        <Pressable onPress={() => router.push("/(private)/(found)/redeem-cupon")} className="bg-[#FCF9E4] p-[8px] w-1/2 mx-auto rounded-[12px] border border-[#F2CB04]">
                            <Text className="text-[#CAA900] font-poppins-semibold text-[12px] text-center">Redeem coupon</Text>
                        </Pressable>
                    </LinearGradient>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Transaction Summary
                    </Text>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Subtotal</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">$ 900</Text>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#646464] font-poppins text-[14px]">Discount applied</Text>
                        <Text className="text-[#646464] font-poppins text-[14px]">-$ 135</Text>
                    </View>

                    <View className="border-[1px] border-[#646464] w-full" />

                    <View className="flex-row justify-between items-center">
                        <Text className='font-poppins-bold font-700 text-[20px] text-text-600'>
                            Total
                        </Text>
                        <Text className='font-poppins-bold font-700 text-[20px] text-text-600'>$ 765</Text>
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

                    <Pressable onPress={() => setLoading(true)} className="w-full rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                        <Text className='text-[16px] font-poppins-semibold text-white'>Confirm and reserve QR</Text>
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