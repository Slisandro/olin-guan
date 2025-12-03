import BusSquareIcon from '@/components/icons/car/bus-square/bus-square';
import PlaneArrivalIcon from '@/components/icons/car/plane-arrival/plane-arrival';
import { BlurView } from 'expo-blur';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { JSX, useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const PATHS = {
    RESERVE_TRIP: "/(private)/(plan_trip)/reserve-trip",
} as const;

type PATHS = (typeof PATHS)[keyof typeof PATHS];

type ItineraryItem = {
    icon: JSX.Element;
    label: string;
    value?: string;
}

type ItineraryCTA = {
    text: string;
    bgColor: string;
    color: string;
    action?: () => void;
    buttonText?: string;
    icon?: JSX.Element
    buttonTextColor?: string
};

type DayPlan = {
    day: number;
    title: string;
    subtitle?: string;
    icon?: JSX.Element;
    items: ItineraryItem[];
    cta?: ItineraryCTA;
};

export default function Index() {
    const router = useRouter();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(tabs)/trip")
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
                    <View className="w-full">
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/profile")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="font-poppins-bold text-[20px] text-center font-[700] text-white">
                        Your trip is ready! 🎉
                    </Text>
                    <Text className="font-poppins-bold text-[20px] text-center font-[700] text-white">
                        Get ready for adventure!
                    </Text>
                    <Text className="font-poppins-bold text-[14px] text-center font-[500] text-white">
                        Suggested itinerary based on your style, budget, and dates
                    </Text>
                </View>

                <View className="bg-white flex-1 rounded-t-[40px] mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    {itinerary.map((day) => (
                        <View
                            key={day.day}
                            className="rounded-2xl px-[12px] py-[20px] bg-white shadow-lg shadow-[#97C3FF66] mb-4"
                        >
                            <View className="flex-row items-center mb-2 gap-2">
                                <CALENDAR />

                                <Text className="font-poppins-bold text-[18px] text-[#697601]">
                                    Day {day.day}: “{day.title}”
                                </Text>
                            </View>

                            <View className="absolute top-4 right-4">
                                {day.icon}
                            </View>

                            <View className="w-[80%]">
                                {day.items.map((item, i) => (
                                    <View key={i} className="flex flex-row items-center gap-3 py-1">
                                        {item.icon}
                                        <Text className="font-poppins-medium text-[12px] text-[#4B4F63]">
                                            {item.label} {item.value ? `– ${item.value}` : ""}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            {day.cta && (
                                <View className={`w-full rounded-xl p-4 mt-3 ${day.cta.bgColor} flex flex-row gap-4 items-center`}>
                                    <Text className={`flex-1 font-poppins-medium ${day.cta.color} text-[12px] font-[700] text-inherit`}>
                                        {day.cta.text}
                                    </Text>

                                    {day.cta.icon && day.cta.icon}

                                    {
                                        day.cta.buttonText && (
                                            <Pressable className="bg-white text-inherit px-4 py-2 rounded-xl">
                                                <Text className={`font-poppins-bold text-[#CAA900] ${day.cta.buttonTextColor}`}>
                                                    {day.cta.buttonText}
                                                </Text>
                                            </Pressable>
                                        )
                                    }
                                </View>
                            )}
                        </View>
                    ))}

                    <View className={`w-full rounded-xl p-4 flex flex-row gap-4 items-center bg-[#1B77F2]`}>
                        <Text className={`flex-1 font-poppins-medium text-[12px] font-[700] text-[#FFFFFF]`}>
                            Save $200 if you book dinner + evening show
                        </Text>
                        <Pressable className="bg-[#D9E6F8] text-inherit px-4 py-2 rounded-xl">
                            <Text className={`font-poppins-bold text-[#004BAF]`}>
                                Reserve
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        className="rounded-2xl px-[12px] py-[20px] bg-[#EFF0F3] border border-[#CBCCD4] mb-4 shadow-lg shadow-blue-200 gap-2"
                    >
                        <View className="flex flex-row justify-between">
                            <Text className="text-[#646464] font-[700] text-[20px] font-poppins-bold">Trip total</Text>

                            <Text className="font-poppins-bold text-[28px] font-[700] text-primary-700">
                                $3,800
                            </Text>
                        </View>
                        <View className="flex flex-row justify-between">
                            <View className="flex-1 flex justify-center">
                                <Text className='font-poppins-bold font-700 text-[12px] text-[#444444] leading-[19px]'>
                                    Discounts applied
                                </Text>

                                <Text className="font-poppins-bold text-[28px] font-[700] text-[#B91C21]">
                                    - $650
                                </Text>
                            </View>
                            <View className="flex-1">
                                <Text className='font-poppins-bold font-700 text-[14px] text-[#444444] leading-[19px]'>
                                    Includes:
                                </Text>

                                <Text className="text-[12px] text-[#646464]">
                                    - 3-night accommodation
                                </Text>

                                <Text className="text-[12px] text-[#646464]">
                                    - transportation
                                </Text>

                                <Text className="text-[12px] text-[#646464]">
                                    - 2 tours
                                </Text>

                                <Text className="text-[12px] text-[#646464]">
                                    - 3 meals
                                </Text>
                            </View>
                        </View>
                    </View>

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
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M6.667 1.667v2.5m6.667-2.5v2.5M2.917 7.575h14.167M17.5 7.083v7.083c0 2.5-1.25 4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.082c0-2.5 1.25-4.167 4.167-4.167h6.666c2.917 0 4.167 1.667 4.167 4.167z"
            stroke="#697601"
            strokeWidth={1.25}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M13.078 11.417h.008M13.078 13.917h.008M9.996 11.417h.008M9.996 13.917h.008M6.912 11.417h.008M6.912 13.917h.008"
            stroke="#697601"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HOTEL = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M2.5 17.5h15M4.167 17.5V5.833L10.834 2.5v15"
            stroke="#4B4F63"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.833 17.5V9.167l-5-3.333M7.5 7.5v.008M7.5 10v.008M7.5 12.5v.008M7.5 15v.008"
            stroke="#4B4F63"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const BOWL_HOT = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M18.117 10.183a1.428 1.428 0 00-.359-1.141 1.455 1.455 0 00-1.1-.5H3.342a1.477 1.477 0 00-1.458 1.642c.108.883.374 1.741.766 2.524 0 .025.017.042.025.067a8.136 8.136 0 003.192 3.417c.075.041.125.116.125.191v.292c0 .8.658 1.458 1.458 1.458h5.1c.8 0 1.458-.658 1.458-1.458v-.292c0-.075.05-.141.125-.191a8.188 8.188 0 003.192-3.417l.025-.05a7.9 7.9 0 00.767-2.533v-.009zM3.183 9.867s.075-.075.159-.075h13.316c.084 0 .142.05.159.075a.2.2 0 01.05.158 7.1 7.1 0 01-.517 1.85H3.642a7.012 7.012 0 01-.517-1.85.2.2 0 01.05-.158h.008zm10.325 5.241c-.466.275-.75.75-.75 1.267v.292a.206.206 0 01-.208.208h-5.1a.206.206 0 01-.208-.208v-.292c0-.525-.275-1-.75-1.267a6.897 6.897 0 01-2.15-1.983H15.65a6.898 6.898 0 01-2.15 1.983h.008zm-4.2-9.791a1.635 1.635 0 010-2.292l.125-.125a.629.629 0 01.884 0 .621.621 0 010 .883l-.125.125a.372.372 0 000 .534l.25.25a1.635 1.635 0 010 2.291l-.125.125a.618.618 0 01-.442.184.618.618 0 01-.442-.184.621.621 0 010-.883l.125-.125a.372.372 0 000-.533l-.25-.25zm4.167 0a1.635 1.635 0 010-2.292L13.6 2.9a.629.629 0 01.883 0 .621.621 0 010 .883l-.125.125a.372.372 0 000 .534l.25.25a1.635 1.635 0 010 2.291l-.125.125a.618.618 0 01-.441.184.618.618 0 01-.442-.184.621.621 0 010-.883l.125-.125a.372.372 0 000-.533l-.25-.25zm-8.333 0a1.635 1.635 0 010-2.292l.125-.125a.629.629 0 01.883 0 .621.621 0 010 .883l-.125.125a.372.372 0 000 .534l.25.25a1.635 1.635 0 010 2.291l-.125.125a.618.618 0 01-.442.184.618.618 0 01-.441-.184.621.621 0 010-.883l.125-.125a.372.372 0 000-.533l-.25-.25z"
            fill="#4B4F63"
        />
    </Svg>
)

const MUG_HOT = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M17.291 11.25a3.55 3.55 0 00-3.541-3.542h-10c-.575 0-1.042.467-1.042 1.042V15c0 2.017 1.108 3.125 3.125 3.125h5c2.017 0 3.125-1.108 3.125-3.125v-.233c1.858-.109 3.333-1.642 3.333-3.517zM12.708 15c0 1.317-.558 1.875-1.875 1.875h-5c-1.317 0-1.875-.558-1.875-1.875V8.958h8.75V15zm1.25-1.483V8.975a2.283 2.283 0 012.083 2.267 2.277 2.277 0 01-2.083 2.266v.009zM9.85 4.475a1.635 1.635 0 010-2.292l.125-.125a.629.629 0 01.883 0 .621.621 0 010 .884l-.125.125a.372.372 0 000 .533l.25.25a1.635 1.635 0 010 2.292l-.125.125a.618.618 0 01-.442.183.618.618 0 01-.441-.183.621.621 0 010-.884l.125-.125a.372.372 0 000-.533l-.25-.25zm-4.167 0a1.635 1.635 0 010-2.292l.125-.125a.629.629 0 01.883 0 .621.621 0 010 .884l-.125.125a.372.372 0 000 .533l.25.25a1.635 1.635 0 010 2.292l-.125.125a.618.618 0 01-.441.183.618.618 0 01-.442-.183.621.621 0 010-.884l.125-.125a.372.372 0 000-.533l-.25-.25z"
            fill="#4B4F63"
        />
    </Svg>
)

const SHIP = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M17.017 10.308c.725.292 1.175 1.15 1.008 1.908l-.342 1.55c-.591 2.667-2.683 4.567-5.7 4.567H8.017c-3.017 0-5.109-1.9-5.7-4.567l-.342-1.55c-.167-.758.283-1.616 1.008-1.908l1.184-.475 4.591-1.842a3.365 3.365 0 012.484 0l4.591 1.842 1.184.475zM10 18.334v-10"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.834 6.667v3.166l-4.592-1.841a3.364 3.364 0 00-2.483 0L4.167 9.832V6.666c0-1.375 1.125-2.5 2.5-2.5h6.667c1.375 0 2.5 1.125 2.5 2.5z"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.084 4.167H7.917V2.5c0-.458.375-.833.833-.833h2.5c.459 0 .834.375.834.833v1.667z"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const BEACH_SMALL = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M14.627 13.958a6.25 6.25 0 00-8.838 0"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            clipRule="evenodd"
            d="M15 3.17A5 5 0 008.17 5l8.66 5A5 5 0 0015 3.17v0z"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M13.943 8.333C15.325 5.942 15.797 3.63 15 3.17c-.797-.46-2.563 1.105-3.943 3.497M12.5 7.5L10 11.83M2.5 16.042a2 2 0 01.833-.209A2 2 0 015 16.667a2 2 0 001.667.833 2 2 0 001.666-.833A2 2 0 0110 15.833a2 2 0 011.667.834 2 2 0 001.666.833A2 2 0 0015 16.667a2 2 0 011.667-.834 2 2 0 01.833.209"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const FOOD_TRAY = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M21 16.25h-.35c.06-.42.1-.83.1-1.25 0-4.13-2.88-7.6-6.74-8.51.15-.3.24-.63.24-.99 0-1.24-1.01-2.25-2.25-2.25S9.75 4.26 9.75 5.5c0 .36.09.69.24.99-3.86.91-6.74 4.38-6.74 8.51 0 .42.04.83.1 1.25H3c-.41 0-.75.34-.75.75v1.5c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25V17c0-.41-.34-.75-.75-.75zM11.25 5.5c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75zM4.75 15C4.75 11 8 7.75 12 7.75S19.25 11 19.25 15c0 .41-.05.83-.12 1.25H4.87A7.66 7.66 0 014.75 15zm15.5 3.5c0 .41-.34.75-.75.75h-15c-.41 0-.75-.34-.75-.75v-.75h16.5v.75zm-3.54-6.9a.747.747 0 01-.63 1.14c-.25 0-.5-.13-.64-.35-.52-.83-1.5-1.47-2.56-1.66a.75.75 0 01-.61-.87.75.75 0 01.87-.61c1.49.26 2.83 1.14 3.58 2.34l-.01.01z"
            fill="#646464"
        />
    </Svg>
)

const MARTINI = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M16 1.25c-2.36 0-4.31 1.74-4.67 4H4a.76.76 0 00-.67.41c-.13.25-.1.56.07.79l5.85 7.8v4.53c-.24.34-.95 1.15-2.69 1.97-.45.21-.68.69-.57 1.18.11.48.53.82 1.02.82H13c.49 0 .92-.34 1.02-.82.11-.48-.13-.97-.57-1.18-1.74-.82-2.45-1.63-2.69-1.97v-4.53l3.04-4.05c.68.36 1.43.55 2.21.55 2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75H16zm-1.5 5.5l-4.5 6-4.5-6h9zm-3.23 14.5H8.73c.56-.37.97-.73 1.27-1.04.3.31.71.67 1.27 1.04zm4.73-12c-.45 0-.89-.1-1.29-.28l1.89-2.52c.17-.23.2-.53.07-.79a.742.742 0 00-.67-.41h-3.15c.34-1.43 1.62-2.5 3.15-2.5 1.79 0 3.25 1.46 3.25 3.25S17.79 9.25 16 9.25z"
            fill="#4B4F63"
        />
    </Svg>
)

const DESERT = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M6.667 5.833V17.5M10 15v2.5m-7.5 0h10m-9.167-6.666v.8c0 .704 0 1.056.168 1.346.167.29.472.467 1.083.819L6.667 15M10 7.5v2.467c0 .704 0 1.056-.168 1.346-.167.29-.472.467-1.083.819l-2.082 1.202M15 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            stroke="#646464"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const BEACH = () => (
    <Svg
        width={78}
        height={78}
        viewBox="0 0 78 78"
        fill="none"
    >
        <G clipPath="url(#clip0_1_14686)">
            <Path
                d="M39 77.783c21.54 0 39-5.2 39-11.613 0-6.414-17.46-11.613-39-11.613S0 59.757 0 66.17c0 6.414 17.46 11.613 39 11.613z"
                fill="#3B88C3"
            />
            <Path
                d="M73.262 61.832c0 3.502-5.417 5.605-31.378 5.605-23.67 0-29.492-2.103-29.492-5.605 0-3.501 12.313-6.34 29.492-6.34 17.18 0 31.378 2.839 31.378 6.34z"
                fill="#88C9F9"
            />
            <Path
                d="M15.167 61.208c0-2.166 2.167-10.833 23.833-10.833 26 0 32.5 8.667 32.5 10.833 0 2.167 0 4.334-30.333 4.334-26 0-26-2.167-26-4.334z"
                fill="#F4900C"
            />
            <Path
                d="M44.676 59.945a2.782 2.782 0 11-5.438-1.18L50.251 2.463a2.782 2.782 0 115.434 1.18L44.676 59.945z"
                fill="#66757F"
            />
            <Path
                d="M52.776 3.959C36.26.375 20.586 8.017 17.762 21.028c0 0-.786 3.622 1.027 4.017 1.812.394 6.223-2.444 6.223-2.444l45.3 9.832s2.837 4.411 4.65 4.806c1.814.394 2.598-3.23 2.598-3.23 2.826-13.014-8.272-26.467-24.784-30.05z"
                fill="#DD2E44"
            />
            <Path
                d="M52.776 3.959c-12.51-2.715-24.94 5.63-27.764 18.64 0 0-.786 3.624 2.839 4.41 3.625.79 9.847-1.657 9.847-1.657L57.63 29.68s4.65 4.804 8.275 5.592c3.625.785 4.41-2.84 4.41-2.84 2.822-13.009-5.03-25.758-17.538-28.472z"
                fill="#FFE8B6"
            />
            <Path
                d="M52.775 3.958c-6.506-1.41-12.256 8.386-15.08 21.394 0 0 4.65 4.806 8.273 5.59l1.813.397c3.625.784 9.846-1.66 9.846-1.66 2.825-13.009 1.655-24.308-4.852-25.72z"
                fill="#DD2E44"
            />
            <Path
                d="M34.329 60.554c1.016-.925 3.792-.706 5.417-1.304 1.625-.598 2.64-1.359 3.995-.815 1.354.544 1.76 1.358 3.046 1.469 1.287.11 2.234.871 1.693 1.469-.542.598-4.808.815-7.651.815s-7.755-.49-6.5-1.634z"
                fill="#FFAC33"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_14686">
                <Path fill="#fff" d="M0 0H78V78H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const SUN = () => (
    <Image
        source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAMFBMVEVHcEz/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDP/rDNIzNElAAAAD3RSTlMAYCCA7xBAz3DfjzCfr7/eJ7hYAAABgklEQVR42u2Y627DIAyFDZiQ5ub3f9tJaTcr9cIxIoqmqd+/lHCgwYZjCDKyCI/UTZCdQL08ZOdBvciL/OeE6CN05fLHlFL0B2RM0/66YeZnB5wiOgDPZIhsh8aZw3ZOSV4En86LZJoWaVAKci6U5IcIl0WMEGiMYSmyU5YQwaB2uhM9GVY5sA5GKDg+4LCJYRvMwqAlzZP8ypQ9oaJBloucULIGL86SmeUUnjU/EJmlAmdykotUKV6lSQATuRgEMpCHTSBbw4T6p7SKg5UgUVxE31aDCYRYxMVChvB94DwHKeKimL6jNo56IGKI3vqyPnCj0LHvW2NsETo8VxqbhC77a5d97KuWvzsg+1PkhqTt30b6N7b+rbZ/87/3OMIHJCm3HNnYRHhBtgagfh4bLa0RgNWqWz+1WdjP18yoNX7Yz1t7bK0o9vM4XkOTn8c1An6hdUDg53GNgAstLfxQkYVLv1D5kWMtwwIsjjVwQX6AKw2tET53I//gbuSWyzr/9eEXUsdxIFCaGjcAAAAASUVORK5CYII="
        }}
        className="w-[72px] h-[72px]"
    />
)

const itinerary: DayPlan[] = [
    {
        day: 1,
        title: "Arrival in Cancun",
        icon: <BEACH />,
        items: [
            {
                icon: <PlaneArrivalIcon size='medium' />,
                label: "Transportation",
                value: "Shared van pickup",
            },
            {
                icon: <HOTEL />,
                label: "Check-in",
                value: "Hotel Boutique X",
            },
            {
                icon: <BOWL_HOT />,
                label: "Recommended dinner",
                value: 'Restaurant "El Muellecito"',
            },
        ],
        cta: {
            text: "Do you want to start with a quiet night on the beach or do you prefer a bar?",
            bgColor: "bg-[#F8C63A]",
            color: "text-[#444444]",
            icon: <Svg
                width={23}
                height={24}
                viewBox="0 0 23 24"
                fill="none"
            >
                <Path
                    d="M9 17l5-5-5-5"
                    stroke="#444"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        },
    },
    {
        day: 2,
        icon: <SUN />,
        title: "Fun in the Sun",
        items: [
            { icon: <MUG_HOT />, label: "Breakfast included" },
            { icon: <SHIP />, label: "Isla Mujeres tour", value: "QR code reservation" },
            { icon: <BEACH_SMALL />, label: "Suggested free time", value: "Playa Norte" },
            { icon: <FOOD_TRAY />, label: "Romantic dinner", value: "Overlooking the sea" },
            { icon: <MARTINI />, label: "Suggested nightlife", value: "Coco Bongo" },
        ],
        cta: {
            text: "Avoid traffic by leaving at 8:00 AM",
            bgColor: "bg-[#EB6A20]",
            color: "text-[#FFFFFF]"
        },
    },

    {
        day: 3,
        title: "Adventure and adrenaline",
        items: [
            { icon: <MUG_HOT />, label: "Local coffee shop downtown" },
            { icon: <DESERT />, label: "Xplor Tour", value: "Package already booked" },
            { icon: <BusSquareIcon size="medium" color="#646464" />, label: "Transfer included" },
        ],
        cta: {
            text: "Free night: We recommend a spa or yoga class at sunset.",
            bgColor: "bg-[#A3CD39]",
            color: "text-[#FFFFFF]",
            buttonText: "Reserve",
            buttonTextColor: "text-[#CAA900]"
        },
    },
];

const actions = [
    {
        label: "Book everything",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5z"
                stroke="#646464"
                strokeWidth={1.5}
                strokeMiterlimit={10}
            />
        </Svg>,
        path: "/(private)/(plan_trip)/reserve-trip"
    },
    {
        label: "Save for later",
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
        label: "See my trip",
        icon: <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <G clipPath="url(#clip0_232_8550)">
                <Path
                    clipRule="evenodd"
                    d="M16 10h4a2 2 0 110 4h-4l-4 7H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h4L9 3h3l4 7z"
                    stroke="#646464"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_232_8550">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>,
        path: "/(private)/(plan_trip)/reserve-trip"
    },
    {
        label: "Edit day",
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
    }
]