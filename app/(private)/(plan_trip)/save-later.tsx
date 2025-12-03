import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const PATHS = {
    RESERVE_TRIP: "/(private)/(plan_trip)/reserve-trip",
} as const;

type PATHS = (typeof PATHS)[keyof typeof PATHS];

export default function ReserveTrip() {
    const router = useRouter();

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (loading) {

            setTimeout(() => {
                setLoading(false)
                setSuccess(true)
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

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="px-[20px] pt-[50px] gap-[12px] items-center">
                    <View className="w-full">
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/profile")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="font-poppins-bold text-[20px] text-center font-[700] text-white">
                        🌞 Your trip was saved!
                    </Text>
                    <Text className="font-poppins-medium text-[14px] text-center font-[500] text-white">
                        You'll find it in your profile when
                    </Text>
                    <Text className="font-poppins-medium text-[14px] text-center font-[500] text-white">
                        you're ready to book.
                    </Text>
                </View>

                <View className="bg-white flex-1 rounded-t-[40px] mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className='font-poppins-bold font-700 text-[24px] text-center text-text-600'>
                        Cancún adventure
                    </Text>

                    <View className="shadow-lg shadow-[#97C3FF66] flex-row bg-white rounded-[12px]">
                        <Image
                            source={require("@/assets/images/components/trip/cancun.jpg")}
                            className="w-[120px] h-[180px] rounded-[12px]"
                            resizeMode='contain'
                        />

                        <View className="flex-1 p-4 gap-4">
                            <Text className="font-poppins-bold text-[#646464] text-[18px]">$3.290</Text>

                            <View className="flex-row gap-2 items-center">
                                <CALENDAR />
                                <Text className="font-poppins-medium text-[#646464] text-[14px]">29 Jun-2 Jul</Text>
                            </View>

                            <View className="flex-row gap-2 items-center">
                                <USER />
                                <Text className="font-poppins-medium text-[#646464] text-[14px]">2 persons</Text>
                            </View>

                            <View className="flex-row gap-2 items-center">
                                <USER />
                                <Text className="font-poppins-medium text-[#646464] text-[14px]">Saved without reserving</Text>
                            </View>
                        </View>
                    </View>

                    <Text className="text-[#444444] text-center font-poppins-semibold font-[600] text-[16px] ">You can edit this plan, share it, or convert it to a reservation later.</Text>

                    <Text className="flex flex-row items-center justify-center gap-[4px] p-[12px] w-full bg-[#1B77F2] rounded-[12px] text-white font-poppins-semibold font-[600] text-[12px] ">We'll send you a reminder 48 hours before your estimated travel date. You can disable it in your profile.</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="py-4 bg-transparent"
                    >
                        {actions.map((action, i) => (
                            <Pressable
                                key={i}
                                onPress={() => router.push(action.path as (typeof PATHS)[keyof typeof PATHS])}
                                className="w-[100px] py-3 px-2 bg-white rounded-2xl items-center justify-center mx-4"
                                style={{
                                    shadowColor: 'rgba(151,195,255,0.25)',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 1,
                                    shadowRadius: 10,
                                    elevation: 3,
                                }}
                            >
                                {action.icon}
                                <Text className="mt-2 text-center text-[13px] text-[#676767]">
                                    {action.label}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </LinearGradient >
    )
}


// ICONS

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
            strokeWidth={1.25}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.694 13.7h.009M15.694 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
            stroke="#646464"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const USER = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M10 3.333a2.917 2.917 0 100 5.833 2.917 2.917 0 000-5.833zM5.417 6.25a4.583 4.583 0 119.166 0 4.583 4.583 0 01-9.166 0zM2.5 15.833a4.167 4.167 0 014.167-4.167h6.666a4.167 4.167 0 014.167 4.167v2.5h-15v-2.5zm4.167-2.5a2.5 2.5 0 00-2.5 2.5v.833h11.666v-.833a2.5 2.5 0 00-2.5-2.5H6.667z"
            fill="#646464"
        />
    </Svg>
)


const actions = [
    {
        label: "Edit trip",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
                stroke="#646464"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.04 3.02L8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43c.42-.06 1.01-.36 1.32-.66l7.88-7.88c1.36-1.36 2-2.94 0-4.94-2-2-3.58-1.36-4.94 0zM14.91 4.15a7.144 7.144 0 004.94 4.94"
                stroke="#646464"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>,
        path: "/(private)/(plan_trip)/reserve-trip"
    },
    {
        label: "Book now",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M4.93 22.75c-.42 0-.81-.1-1.16-.3C3 22 2.56 21.09 2.56 19.96V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.77.45-1.78.4-2.77-.15l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.54.3-1.09.46-1.61.46zm2.25-20a3.12 3.12 0 00-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.18.77.12 1.28-.17l4.88-2.71c.74-.41 1.86-.41 2.6 0l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.62.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11H7.18z"
                fill="#646464"
            />
        </Svg>,
        path: "/(private)/(plan_trip)/save-later"
    },
    {
        label: "Share plan",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 013.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM4.83 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM19.17 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56z"
                stroke="#646464"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>,
        path: "/(private)/(plan_trip)/reserve-trip"
    },
    {
        label: "See itinerary",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
                stroke="#646464"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"
                stroke="#646464"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>,
        path: "/(private)/(plan_trip)/reserve-trip"
    }
]