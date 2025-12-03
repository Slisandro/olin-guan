import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Svg, { ClipPath, Defs, G, Mask, Path } from "react-native-svg";

export default function BookingRestaurant() {
    const router = useRouter();

    return (
        <LinearGradient
            colors={["#55B6C8", "#1B77F2"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />

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

                    <Svg
                        width={80}
                        height={80}
                        viewBox="0 0 80 80"
                        fill="none"
                    >
                        <Mask
                            id="a"
                            style={{
                                maskType: "luminance"
                            }}
                            maskUnits="userSpaceOnUse"
                            x={1}
                            y={1}
                            width={78}
                            height={78}
                        >
                            <Path
                                d="M40.001 73.333a33.234 33.234 0 0023.57-9.763A33.233 33.233 0 0073.335 40a33.234 33.234 0 00-9.764-23.57 33.232 33.232 0 00-23.57-9.763 33.233 33.233 0 00-23.57 9.763A33.234 33.234 0 006.668 40a33.234 33.234 0 009.763 23.57 33.234 33.234 0 0023.57 9.763z"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth={10}
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M26.668 40l10 10 20-20"
                                stroke="#000"
                                strokeWidth={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Mask>
                        <G mask="url(#a)">
                            <Path d="M0 0h80v80H0V0z" fill="#fff" />
                        </G>
                    </Svg>

                    <Text className="text-[20px] font-poppins-bold text-white">Reservation confirmed</Text>

                    <Text className="text-[14px] font-poppins-bold text-white text-center">Present the following QR code upon arrival at the venue</Text>

                </View>

                <View className="bg-white flex-1 mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Image source={require("@/assets/images/components/trip/qr.png")} className="w-[180px] h-[180px] mx-auto" />

                    <View className="flex-row p-[20px] rounded-[12px] bg-white gap-2 items-center justify-start">
                        <Image source={require("@/assets/images/components/trip/restaurant.jpg")} className="w-[60px] h-[60px] rounded-[12px]" />
                        <View>
                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                The Coco Restaurant
                            </Text>
                            <Text className="flex-row items-center gap-2 text-[#646464] text-[14px] font-[500]">
                                30 Jun. 2025
                            </Text>
                        </View>
                    </View>


                    <View className="border-[1px] border-[#646464] w-full" />

                    <View className="flex-row justify-between">
                        <View className="flex-row items-center gap-3">
                            <CALENDAR />
                            <Text>21:00-02:00</Text>
                        </View>
                        <View className="flex-row items-center gap-3">
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <Path
                                    d="M12 12a5 5 0 100-10 5 5 0 000 10zM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
                                    stroke="#646464"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                            <Text>21:00-02:00</Text>
                        </View>
                    </View>

                    <View className="border-[1px] border-[#646464] w-full" />

                    <View className="flex-row justify-between items-center">
                        <Text className='font-poppins-medium font-500 text-[20px] text-text-600'>
                            Wallet balance
                        </Text>
                        <Text className='font-poppins-bold font-700 text-[20px] text-text-600'>$ 765</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <View className="w-[30%] shadow-md shadow-[#97C3FF66] bg-white p-4 rounded-[12px] items-center justify-center gap-1">
                            <LOCATION />
                            <Text className="text-[#8A8A8A] text-[12px] font-poppins-medium">
                                View
                                on map
                            </Text>
                        </View>

                        <View className="w-[30%] shadow-md shadow-[#97C3FF66] bg-white p-4 rounded-[12px] items-center justify-center gap-1">
                            <Svg
                                width={22}
                                height={20}
                                viewBox="0 0 22 20"
                                fill="none"
                            >
                                <Path
                                    clipRule="evenodd"
                                    d="M14.75 7.75h4a2 2 0 110 4h-4l-4 7h-3l2-7h-4l-2 2h-3l2-4-2-4h3l2 2h4l-2-7h3l4 7z"
                                    stroke="#646464"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                            <Text className="text-[#8A8A8A] text-[12px] font-poppins-medium">
                                See
                                my trip
                            </Text>
                        </View>

                        <View className="w-[30%] shadow-md shadow-[#97C3FF66] bg-white p-4 rounded-[12px] items-center justify-center gap-1">
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <Path
                                    d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.488 12.37a8.601 8.601 0 013.6-6.15M8.191 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.061 7.7a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM4.83 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM19.17 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56z"
                                    stroke="#646464"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                            <Text className="text-[#8A8A8A] text-[12px] font-poppins-medium">
                                Share
                                plan
                            </Text>
                        </View>
                    </View>
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