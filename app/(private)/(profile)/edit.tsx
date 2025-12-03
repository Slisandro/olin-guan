import CategoryCarousel from "@/components/category-carousel";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { ClipPath, Defs, G, LinearGradient as LinearGradientSvg, Path, RadialGradient, Rect, Stop } from "react-native-svg";

export default function BookingRestaurant() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [menuPersonal, setMenuPersonal] = useState(false)
    const [menuTravel, setMenuTravel] = useState(false)
    const [travelingWith, setTravelingWith] = useState("Friends");

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(tabs)/profile")
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
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/profile")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white">Edit profile</Text>

                </View>

                <View className="bg-white flex-1 mt-[20px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <View className="shadow-md shadow-[97C3FF66] bg-white rounded-[12px] ">
                        <Pressable onPress={() => setMenuPersonal(!menuPersonal)} className="bg-white flex-row p-[20px] justify-between items-center gap-4 rounded-[12px] w-full">
                            <Svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <Path
                                    d="M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15z"
                                    fill="#EEE"
                                />
                                <Path
                                    d="M15.134 14.683h-.067a.449.449 0 00-.15 0c-2.416-.075-4.241-1.975-4.241-4.316A4.332 4.332 0 0115 6.04a4.332 4.332 0 014.325 4.325 4.31 4.31 0 01-4.167 4.317h-.025zm-.133-7.391a3.083 3.083 0 00-3.075 3.075c0 1.666 1.3 3.008 2.958 3.066.042-.008.158-.008.267 0a3.07 3.07 0 002.925-3.066A3.084 3.084 0 0015 7.29zM15.14 23.792c-1.633 0-3.275-.417-4.516-1.25-1.159-.767-1.792-1.817-1.792-2.959 0-1.141.633-2.2 1.792-2.974 2.5-1.659 6.55-1.659 9.033 0 1.15.766 1.792 1.816 1.792 2.958 0 1.142-.634 2.2-1.792 2.975-1.25.833-2.883 1.25-4.517 1.25zm-3.825-6.134c-.8.534-1.233 1.217-1.233 1.934 0 .708.442 1.392 1.233 1.917 2.075 1.391 5.575 1.391 7.65 0 .8-.534 1.234-1.217 1.234-1.934 0-.708-.442-1.392-1.234-1.916-2.075-1.384-5.575-1.384-7.65 0z"
                                    fill="#1D4ED8"
                                />
                            </Svg>

                            <Text className="flex-1 text-[#646464] text-[16px] font-poppins-semibold">Edit personal information</Text>

                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <G clipPath="url(#clip0_1_19832)">
                                    <Path
                                        d="M9.516 7.035L14.48 12l-4.965 4.966"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_1_19832">
                                        <Path fill="#fff" d="M0 0H24V24H0z" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </Pressable>
                        {
                            menuPersonal ? (
                                <View className="gap-4 p-[20px] ">
                                    <View className="gap-[9px]">
                                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Full name</Text>
                                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                                        </View>
                                    </View>
                                    <View className="gap-[9px]">
                                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Email</Text>
                                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                                        </View>
                                    </View>
                                    <View className="gap-[9px]">
                                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Phone</Text>
                                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                                        </View>
                                    </View>
                                    <View className="gap-[9px]">
                                        <Text className="text-[#646464] font-poppins-bold text-[12px]">Country</Text>
                                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                                        </View>
                                    </View>

                                    <Pressable onPress={() => setLoading(true)} className="flex flex-row items-center justify-center gap-[4px] py-[12px] w-full bg-[#1B77F2] rounded-[12px]">
                                        <Text className="text-white font-poppins-semibold font-[600] text-[16px] ">Save information</Text>
                                    </Pressable>
                                </View>
                            ) : null
                        }
                    </View>

                    <View className="shadow-md shadow-[97C3FF66] bg-white rounded-[12px] ">
                        <Pressable onPress={() => setMenuTravel(!menuTravel)} className="bg-white flex-row p-[20px] justify-between items-center gap-4 rounded-[12px] w-full">
                            <Svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <Path
                                    d="M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15z"
                                    fill="#EEE"
                                />
                                <Path
                                    d="M19.627 18.958a6.25 6.25 0 00-8.838 0"
                                    stroke="#94A604"
                                    strokeWidth={1.25}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    clipRule="evenodd"
                                    d="M19.998 8.17a5 5 0 00-6.83 1.83l8.66 5a5 5 0 00-1.83-6.83v0z"
                                    stroke="#94A604"
                                    strokeWidth={1.25}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M18.941 13.333c1.382-2.391 1.855-4.703 1.057-5.163-.797-.46-2.563 1.105-3.943 3.497M17.5 12.5L15 16.83M7.5 21.042a2 2 0 01.833-.209 2 2 0 011.667.834 2 2 0 001.667.833 2 2 0 001.666-.833A2 2 0 0115 20.833a2 2 0 011.667.834 2 2 0 001.666.833A2 2 0 0020 21.667a2 2 0 011.667-.834 2 2 0 01.833.209"
                                    stroke="#94A604"
                                    strokeWidth={1.25}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>

                            <Text className="flex-1 text-[#646464] text-[16px] font-poppins-semibold">Edit tourist preferences</Text>

                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <G clipPath="url(#clip0_1_19832)">
                                    <Path
                                        d="M9.516 7.035L14.48 12l-4.965 4.966"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_1_19832">
                                        <Path fill="#fff" d="M0 0H24V24H0z" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </Pressable>
                        {
                            menuTravel ? (
                                <View className="gap-4 p-[20px]">
                                    <View className="shadow-sm shadow-[97C3FF66] bg-white rounded-[12px] p-[20px] gap-4">
                                        <View className="flex gap-[10px]">
                                            <View className="flex bg-gray-100 rounded-xl h-4" />
                                            <View className="w-full flex flex-row justify-between">
                                                {
                                                    ["$500", "$1000", "$1500", "$2000"]
                                                        .map((item) => (
                                                            <Text key={item} className="text-[#454B60] text-[12px] font-[500]">
                                                                {item}
                                                            </Text>
                                                        ))
                                                }
                                            </View>
                                        </View>

                                        <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                            <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                                <WALLET />
                                            </View>
                                            <TextInput placeholderTextColor={"#646464"} className="text-[#646464] text-[14px] pl-[40px] font-[500]" placeholder="Enter amount" />
                                        </View>
                                    </View>

                                    <View className="gap-[10px]">
                                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                            Who are you traveling with?
                                        </Text>
                                        <View className="flex flex-row justify-between gap-px]">
                                            <Pressable
                                                onPress={() => setTravelingWith("Alone")}
                                                className={`flex items-center justify-center p-[12px] rounded-xl
                                                    ${travelingWith === "Alone" ? "bg-[#D9E6F8]" : ""}
                                                `}
                                            >
                                                <ALONE />
                                                <Text
                                                    className={`
                                                        text-[12px] font-[500]
                                                        ${travelingWith === "Alone" ? "text-[#1B77F2]" : "text-[#8A8A8A]"}
                                                    `}
                                                >
                                                    Alone
                                                </Text>
                                            </Pressable>

                                            <Pressable
                                                onPress={() => setTravelingWith("Couple")}
                                                className={`flex items-center justify-center p-[12px] rounded-xl
                                                                        ${travelingWith === "Couple" ? "bg-[#D9E6F8]" : ""}
                                                                    `}
                                            >
                                                <COUPLE />
                                                <Text
                                                    className={`
                                                        text-[12px] font-[500]
                                                        ${travelingWith === "Couple" ? "text-[#1B77F2]" : "text-[#8A8A8A]"}
                                                    `}
                                                >
                                                    Couple
                                                </Text>
                                            </Pressable>

                                            <Pressable
                                                onPress={() => setTravelingWith("Family")}
                                                className={`flex items-center justify-center p-[12px] rounded-xl
                                                    ${travelingWith === "Family" ? "bg-[#D9E6F8]" : ""}
                                                `}
                                            >
                                                <FAMILY />
                                                <Text
                                                    className={`
                                                        text-[12px] font-[500]
                                                        ${travelingWith === "Family" ? "text-[#1B77F2]" : "text-[#8A8A8A]"}
                                                    `}
                                                >
                                                    Family
                                                </Text>
                                            </Pressable>

                                            <Pressable
                                                onPress={() => setTravelingWith("Friends")}
                                                className={`flex items-center justify-center p-[12px] rounded-xl
                                                    ${travelingWith === "Friends" ? "bg-[#D9E6F8]" : ""}
                                                `}
                                            >
                                                <FRIENDS />
                                                <Text
                                                    className={`
                                                        text-[12px] font-[500]
                                                        ${travelingWith === "Friends" ? "text-[#1B77F2]" : "text-[#8A8A8A]"}
                                                    `}
                                                >
                                                    Friends
                                                </Text>
                                            </Pressable>
                                        </View>

                                        {
                                            travelingWith === "Friends" ? (
                                                <View className="relative flex-1 shadow-black/25 shadow-sm px-[10px] py-[18px] bg-white rounded-[12px]">
                                                    <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                                        <USER />
                                                    </View>
                                                    <TextInput value="5" placeholderTextColor={"#646464"} className="text-[#646464] text-[14px] pl-[40px] font-[500]" placeholder="Enter amount" />
                                                </View>
                                            )
                                                : null
                                        }

                                        <View className="flex gap-[20px]">
                                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                                Your travel style
                                            </Text>

                                            <View className="flex flex-row items-center justify-between w-[100%] gap-[20px]">
                                                <PARTY_POPPER />
                                                <View className="flex bg-gray-100 rounded-xl h-4 flex-1" />
                                                <RELIEVED_FACE />
                                            </View>

                                            <View className="flex flex-row items-center justify-between w-[100%] gap-[20px]">
                                                <GEM_STONE />
                                                <View className="flex bg-gray-100 rounded-xl h-4 flex-1" />
                                                <MONEY_MOUTH_FACE />
                                            </View>

                                            <View className="flex flex-row items-center justify-between w-[100%] gap-[20px]">
                                                <NATURE />
                                                <View className="flex bg-gray-100 rounded-xl h-4 flex-1" />
                                                <OFFICE_BUILDING />
                                            </View>
                                        </View>

                                        <View className="flex gap-[10px]">
                                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                                Interests
                                            </Text>
                                            <CategoryCarousel classNameContainer="p-0" />
                                        </View>


                                        <Pressable onPress={() => setLoading(true)} className="flex flex-row items-center justify-center gap-[4px] py-[12px] w-full bg-[#1B77F2] rounded-[12px]">
                                            <Text className="text-white font-poppins-semibold font-[600] text-[16px] ">Save information</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            ) : null
                        }
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

const WALLET = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path d="M6 8h4-4z" fill="#646464" />
        <Path
            d="M6 8h4"
            stroke="#646464"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933C20.959 9 20.917 9 20.833 9z"
            stroke="#646464"
            strokeWidth={1.5}
        />
        <Path
            d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172 2.001 6.344 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.344 19.999 6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828"
            stroke="#646464"
            strokeWidth={1.5}
        />
        <Path
            d="M17.991 12h.01"
            stroke="#646464"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const ALONE = () => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
    >
        <Path
            d="M44.684 46.824v1.59H5.316v-1.59c0-4.84 4.735-7.738 10.907-9.062 2.738-.594 5.761-.871 8.777-.875h.047c2.992 0 5.98.308 8.687.925 6.207 1.407 10.95 4.422 10.95 9.012z"
            fill="url(#paint0_linear_218_5919)"
        />
        <Path
            d="M28.473 35.18h-6.95v3.898c0 1.762 1.415 3.191 3.16 3.191h.633c1.743 0 3.16-1.43 3.16-3.19l-.003-3.9zm7.207-15.485H14.332c-2.3 0-4.184 2.008-4.184 4.457 0 2.453 1.883 4.457 4.184 4.457H35.68c2.3 0 4.183-2.007 4.183-4.457 0-2.453-1.883-4.457-4.183-4.457z"
            fill="#E59600"
        />
        <Path
            d="M25.008 3.926c-6.797 0-13.094 7.27-13.094 17.73 0 10.407 6.488 15.551 13.094 15.551 6.605 0 13.094-5.145 13.094-15.55 0-10.462-6.297-17.731-13.094-17.731z"
            fill="#FFCA28"
        />
        <Path
            d="M15.563 19.817c1.242-1.762 4.164-1.82 5.629-.32.254.261.523.597.332.976-.211.418-.645.351-1 .207-.95-.383-1.93-.555-2.95-.348-.44.09-.82.274-1.238.422-.562.191-1.136-.394-.773-.937zm18.145.937c-.872-.379-1.754-.598-2.715-.488-.438.05-.867.164-1.274.324-.324.129-.672.336-1.008.11-.957-.66.739-1.735 1.239-1.95a4.03 4.03 0 013.406.121c.414.215.863.528 1.11.938.308.511-.153 1.191-.758.945z"
            fill="#6D4C41"
        />
        <Path
            d="M18.512 24.96c1.063 0 1.925-.891 1.925-1.991s-.862-1.992-1.925-1.992c-1.064 0-1.926.892-1.926 1.992s.862 1.992 1.926 1.992zM31.504 24.96c1.064 0 1.926-.891 1.926-1.991s-.862-1.992-1.926-1.992-1.926.892-1.926 1.992.862 1.992 1.926 1.992z"
            fill="#404040"
        />
        <Path
            d="M26.511 26.578a.488.488 0 00-.125-.031h-2.761a.452.452 0 00-.125.031c-.25.102-.387.36-.27.637.117.277.668 1.05 1.777 1.05 1.11 0 1.66-.777 1.778-1.05.117-.277-.024-.535-.274-.637z"
            fill="#E59600"
        />
        <Path
            d="M28.296 29.738c-1.246.739-5.324.739-6.566 0-.715-.425-1.445.227-1.148.875.293.637 2.52 2.118 4.441 2.118 1.922 0 4.117-1.48 4.41-2.118.297-.652-.426-1.3-1.137-.875z"
            fill="#795548"
        />
        <Path
            d="M39.852 16.469c.309-.422.414-1.098.262-1.711-.121-.492-.391-.864-.762-1.055.129-.18.363-.586.367-1.156.012-.91-.367-1.575-1.16-2.028.277-1.285-.5-2.644-1.738-3.035a2.648 2.648 0 00-.805-1.816c-.473-.461-1.07-.719-1.691-.723a2.618 2.618 0 00-1.243-1.496 2.42 2.42 0 00-1.808-.23c-.684-1.09-2.145-1.489-3.266-.891a2.498 2.498 0 00-2.629-.598c-.097.04-.262.125-.379.192a3.454 3.454 0 00-.379-.192 2.499 2.499 0 00-2.628.598c-1.122-.598-2.582-.2-3.266.89a2.4 2.4 0 00-1.809.231 2.606 2.606 0 00-1.242 1.496c-.621.004-1.219.258-1.691.723a2.657 2.657 0 00-.805 1.816c-1.234.39-2.016 1.75-1.738 3.035-.79.454-1.172 1.117-1.16 2.028a2.1 2.1 0 00.367 1.156c-.371.195-.64.566-.762 1.055-.152.613-.047 1.289.262 1.71-.735.895-.676 2.169.156 3.145-.29.524-.383 1.129-.168 1.89.309.981 1.11 1.126 1.11 1.126-.473 1.09.363 2.652 1.015 2.875 0 0 .652-9.086 2.813-11.805.23.23.664.652 1.507.48.735-.148 1.035-.398 1.246-.816.07.367.274.707.602.938a1.497 1.497 0 002.074-.36c.051-.07.09-.148.125-.222.18.613.602 1.097 1.278 1.191a1.69 1.69 0 001.64-.762c.156.262.613.914 1.445.914.836 0 1.32-.652 1.477-.914.344.532.973.856 1.64.762.676-.094 1.071-.578 1.25-1.191.036.078.075.152.126.222a1.496 1.496 0 002.074.36c.315-.222.531-.559.601-.938.208.414.579.883 1.622.762.816-.094 1.132-.652 1.132-.652 1.82 2.19 2.836 12.03 2.836 12.03.528-.19 1.207-1.538 1.227-2.73.547-.324.918-.804 1.043-1.523.129-.719-.043-1.113-.332-1.637.84-.976.898-2.25.164-3.144z"
            fill="#543930"
        />
        <Path
            d="M39.852 16.469c.309-.422.414-1.098.262-1.711-.121-.492-.391-.864-.762-1.055.129-.18.363-.586.367-1.156.012-.91-.367-1.575-1.16-2.028.277-1.285-.5-2.644-1.738-3.035a2.648 2.648 0 00-.805-1.816c-.473-.461-1.07-.719-1.691-.723a2.618 2.618 0 00-1.243-1.496 2.42 2.42 0 00-1.808-.23c-.684-1.09-2.145-1.489-3.266-.891a2.498 2.498 0 00-2.629-.598c-.097.04-.262.125-.379.192a3.454 3.454 0 00-.379-.192 2.499 2.499 0 00-2.628.598c-1.122-.598-2.582-.2-3.266.89a2.4 2.4 0 00-1.809.231 2.606 2.606 0 00-1.242 1.496c-.621.004-1.219.258-1.691.723a2.657 2.657 0 00-.805 1.816c-1.234.39-2.016 1.75-1.738 3.035-.79.454-1.172 1.117-1.16 2.028a2.1 2.1 0 00.367 1.156c-.371.195-.64.566-.762 1.055-.152.613-.047 1.289.262 1.71-.735.895-.676 2.169.156 3.145-.29.524-.383 1.129-.168 1.89.309.981 1.11 1.126 1.11 1.126-.473 1.09.363 2.652 1.015 2.875 0 0 .652-9.086 2.813-11.805.23.23.664.652 1.507.48.735-.148 1.035-.398 1.246-.816.07.367.274.707.602.938a1.497 1.497 0 002.074-.36c.051-.07.09-.148.125-.222.18.613.602 1.097 1.278 1.191a1.69 1.69 0 001.64-.762c.156.262.613.914 1.445.914.836 0 1.32-.652 1.477-.914.344.532.973.856 1.64.762.676-.094 1.071-.578 1.25-1.191.036.078.075.152.126.222a1.496 1.496 0 002.074.36c.315-.222.531-.559.601-.938.208.414.579.883 1.622.762.816-.094 1.132-.652 1.132-.652 1.82 2.19 2.836 12.03 2.836 12.03.528-.19 1.207-1.538 1.227-2.73.547-.324.918-.804 1.043-1.523.129-.719-.043-1.113-.332-1.637.84-.976.898-2.25.164-3.144z"
            fill="url(#paint1_radial_218_5919)"
        />
        <Defs>
            <LinearGradientSvg
                id="paint0_linear_218_5919"
                x1={25}
                y1={36.8051}
                x2={25}
                y2={47.6484}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00BFA5" />
                <Stop offset={0.705} stopColor="#00B29A" />
                <Stop offset={1} stopColor="#00AB94" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint1_radial_218_5919"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.209 17.098) scale(15.8234)"
            >
                <Stop offset={0.725} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
        </Defs>
    </Svg>
)

const COUPLE = () => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
    >
        <Path
            d="M2.121 29.148c.024-.101 1.934-11.46 12.031-10.578 5.875.512 9.954 4.5 10 10.395.016 2.078.086 5.668-.086 7.3-.714 6.868-3.023 11.106-3.332 11.184-1.625.399-16.148 1.309-17.222-.87-2.477-5-1.953-13.938-1.39-17.43z"
            fill="#543930"
        />
        <Path
            d="M10.578 43.402h2.938c3.394-.258 8.421 1.266 9.558 5.035H1.02c1.136-3.765 6.164-5.292 9.558-5.035z"
            fill="url(#paint0_linear_218_5933)"
        />
        <Path
            d="M11.957 46.027a2.656 2.656 0 01-2.656-2.656v-1.773h5.316v1.773a2.663 2.663 0 01-2.66 2.656z"
            fill="#E59600"
        />
        <Path
            d="M14.652 21.73c-4.746-.582-9.574 2.407-10.496 9.891-.738 6.012 2.547 10.023 5.648 11.566.739.368 1.47.598 2.13.68.655.082 1.413.035 2.214-.14 3.383-.743 7.55-3.844 8.293-9.864.918-7.484-3.043-11.55-7.789-12.133z"
            fill="#FFCA28"
        />
        <Path
            d="M14.308 36.805a.235.235 0 00-.086-.032l-1.93-.238a.355.355 0 00-.09.012c-.183.05-.3.219-.242.422.06.203.375.793 1.149.886.773.094 1.223-.398 1.332-.582.11-.183.035-.375-.133-.468z"
            fill="#E59600"
        />
        <Path
            d="M11.34 31.332c-.215-.37-.746-.937-1.895-1.078-1.148-.14-1.8.277-2.098.586a.351.351 0 00-.058.426c.062.105.265.223.512.172.246-.051.738-.235 1.515-.145.777.102 1.211.399 1.438.508.226.11.453.047.539-.043a.355.355 0 00.047-.426zm9.062 1.114c-.215-.372-.746-.938-1.894-1.079-1.149-.14-1.801.278-2.098.586a.351.351 0 00-.059.426c.063.106.266.223.512.172.246-.05.738-.234 1.516-.145.777.102 1.21.399 1.437.508.227.11.453.047.54-.043a.344.344 0 00.046-.425z"
            fill="#6D4C41"
        />
        <Path
            d="M19.444 34.867c.094-.769-.43-1.466-1.17-1.557-.742-.09-1.419.459-1.513 1.227-.095.769.43 1.466 1.17 1.557.741.091 1.418-.458 1.513-1.227zM10.377 33.754c.095-.77-.43-1.466-1.17-1.557-.741-.091-1.418.458-1.513 1.227-.094.769.43 1.466 1.17 1.557.742.09 1.419-.459 1.513-1.227z"
            fill="#404040"
        />
        <Path
            d="M15.277 39.187c-.933.41-3.777.059-4.582-.562-.46-.36-1.027.031-.875.512.149.468 1.574 1.695 2.918 1.859 1.344.164 3.004-.68 3.262-1.102.262-.425-.188-.94-.723-.707z"
            fill="#795548"
        />
        <Path
            d="M14.148 18.574C4.05 17.691 2.144 29.047 2.121 29.148c-.262 1.633-.516 4.454-.461 7.504l2.828.2c-.086-1.547 1.125-7.477 3.68-7.66 6.355-.465 9.261-3.356 9.261-3.356.664 2.094 3.266 4.375 4.196 5.238.761.707.328 4.567.183 5.625h2.211l.047-.425c.168-1.633.102-5.223.086-7.301-.05-5.903-4.129-9.887-10.004-10.399z"
            fill="#543930"
        />
        <Path
            d="M24.148 28.965c-.046-5.895-4.125-9.879-10-10.395C4.051 17.692 2.144 29.047 2.121 29.15c-.523 3.261-1.016 11.277.938 16.394 2.082-1.656 5.187-2.32 7.52-2.14h2.937c2.546-.196 6.011.613 8.062 2.62.828-1.792 2.008-5.19 2.48-9.757.176-1.63.106-5.223.09-7.301z"
            fill="url(#paint1_radial_218_5933)"
        />
        <Path
            d="M39.453 43.402h-2.937c-3.399-.258-8.426 1.27-9.563 5.035h22.055c-1.13-3.765-6.16-5.292-9.555-5.035z"
            fill="url(#paint2_linear_218_5933)"
        />
        <Path
            d="M37.89 46.028a2.656 2.656 0 01-2.656-2.657v-1.773h5.316v1.773a2.663 2.663 0 01-2.66 2.657zm5.86-14.91l-2.024.25-10.95 1.343-2.023.25c-1.617.2-2.765 1.77-2.554 3.492.21 1.723 1.707 2.969 3.324 2.77l2.024-.25 10.949-1.344 2.023-.25c1.617-.2 2.766-1.77 2.555-3.492-.211-1.719-1.707-2.965-3.324-2.77z"
            fill="#E59600"
        />
        <Path
            d="M34.894 20.965c-4.773.586-8.57 6.234-7.668 13.582.899 7.309 5.895 10.36 10.535 9.793 4.641-.57 8.75-4.742 7.856-12.05-.902-7.348-5.95-11.91-10.723-11.325z"
            fill="#FFCA28"
        />
        <Path
            d="M29.242 32.934c.723-1.344 2.766-1.637 3.926-.711.2.16.418.375.317.656-.114.312-.422.3-.684.23-.7-.187-1.402-.222-2.102.012-.3.102-.55.262-.832.402-.379.188-.832-.175-.625-.59zm12.825-.903c-.645-.191-1.282-.27-1.95-.11-.302.077-.593.191-.867.34-.215.118-.445.294-.699.165-.727-.38.371-1.282.703-1.477a2.836 2.836 0 012.403-.207c.308.117.652.297.859.563.262.328-.004.843-.45.726z"
            fill="#6D4C41"
        />
        <Path
            d="M31.758 36.297c.748-.092 1.277-.793 1.182-1.566-.095-.773-.778-1.325-1.525-1.233-.748.092-1.276.793-1.182 1.566.095.773.778 1.325 1.525 1.233zM40.883 35.176c.748-.092 1.277-.793 1.182-1.566-.095-.773-.778-1.325-1.525-1.234-.748.092-1.276.793-1.182 1.566.095.773.778 1.325 1.525 1.234z"
            fill="#404040"
        />
        <Path
            d="M37.515 36.742a.389.389 0 00-.09-.011l-1.94.238a.4.4 0 00-.087.035c-.168.094-.242.285-.133.473.106.183.559.68 1.34.586.778-.094 1.098-.688 1.157-.891.058-.207-.06-.379-.247-.43z"
            fill="#E59600"
        />
        <Path
            d="M39.039 38.809c-.809.629-3.676.98-4.614.566-.539-.238-.996.281-.73.715.258.422 1.95 1.27 3.3 1.105 1.352-.164 2.766-1.394 2.919-1.867.152-.484-.41-.879-.875-.52z"
            fill="#795548"
        />
        <Path
            d="M34.691 19.309h-.008c-12.457 1.601-8.156 15.523-8.156 15.523s.738 1.399 1.074 2.016c.047.09.184.062.192-.04.12-1.222.172-5.562.496-6.902a1.684 1.684 0 011.734-1.28c2.027.108 5.414-.161 5.422-.165 2.148-.262 4.445-.777 5.64-1.148a1.678 1.678 0 011.993.824c.637 1.218 2.105 5.3 2.523 6.472.035.098.172.09.196-.011l.558-2.203c.004 0 .809-14.547-11.664-13.086z"
            fill="#543930"
        />
        <Path
            d="M46.36 32.395s.804-14.551-11.668-13.086h-.008a13.27 13.27 0 00-1.645.305c-.023.007-.047.011-.07.019-10.332 2.61-6.441 15.2-6.441 15.2l1.074 2.003c.047.09.18.063.191-.039.121-1.234.172-5.555.496-6.895a1.68 1.68 0 011.735-1.28c1.25.07 3.226.105 5.375-.157l.41-.004c.008 0 .015 0 .023-.004 2.149-.262 4.059-.777 5.254-1.148a1.678 1.678 0 011.992.824c.641 1.227 2.117 5.336 2.528 6.488.035.094.168.09.195-.008.176-.675.559-2.218.559-2.218z"
            fill="url(#paint3_radial_218_5933)"
        />
        <Path
            d="M30.629 1.46c-4.117 0-5.63 4.204-5.63 4.204s-1.491-4.203-5.636-4.203c-3.113 0-6.668 2.469-5.355 8.078 1.312 5.61 11 12.602 11 12.602s9.656-6.993 10.968-12.602c1.313-5.61-1.984-8.078-5.347-8.078z"
            fill="#EF5592"
        />
        <Path
            d="M18.727 1.879c3.23 0 4.835 3.473 5.355 4.883.074.199.355.207.438.011l.472-1.105c-.668-2.129-2.5-4.207-5.629-4.207-1.297 0-2.664.43-3.73 1.332a5.643 5.643 0 013.094-.914zm11.902-.418a4.78 4.78 0 00-2.543.723 4.557 4.557 0 011.652-.305c3.047 0 5.77 2.308 4.54 7.648-1.055 4.582-7.227 10.141-9.11 12.262-.121.137-.16.355-.16.355s9.656-6.992 10.969-12.601c1.312-5.613-2.235-8.082-5.348-8.082z"
            fill="#DA2E75"
        />
        <Path
            d="M16.172 4.438c.703-.88 1.965-1.606 3.031-.77.578.453.324 1.383-.191 1.774-.754.57-1.407.914-1.864 1.808a5.425 5.425 0 00-.523 1.727c-.031.238-.344.293-.461.086-.797-1.407-1.02-3.34.008-4.625zm11.293 1.847a.462.462 0 01-.442-.629c.22-.568.51-1.107.86-1.605.515-.723 1.492-1.14 2.113-.707.637.45.555 1.34.106 1.773-.958.934-2.16 1.168-2.637 1.168z"
            fill="#F386AB"
        />
        <Defs>
            <LinearGradientSvg
                id="paint0_linear_218_5933"
                x1={12.0488}
                y1={48.2492}
                x2={12.0488}
                y2={43.3066}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#530EEB" />
                <Stop offset={1} stopColor="#651FFF" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint1_radial_218_5933"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(11.9922 .59673 -.79964 16.0805 13.15 34.603)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.765} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={0.966} stopColor="#6D4C41" />
            </RadialGradient>
            <LinearGradientSvg
                id="paint2_linear_218_5933"
                x1={37.9828}
                y1={48.2491}
                x2={37.9828}
                y2={43.3066}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#009E89" />
                <Stop offset={1} stopColor="#00BFA5" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint3_radial_218_5933"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(10.4488 -1.28333 1.44756 11.789 36.135 31.124)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.794} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
        </Defs>
    </Svg>
)

const FAMILY = () => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
    >
        <G clipPath="url(#clip0_218_5962)">
            <Path
                d="M26.879 11.98s0 12.122 1.562 17.758c.77 2.778 1.73 4.528 4.036 2.797l8.941-.09c2.3 1.758 3.95.075 4.445-2.78 1.172-6.735 1.172-17.684 1.172-17.684H26.88z"
                fill="#6D4C41"
            />
            <Path
                d="M34.96 26.024s-6.25-.567-9.96 5.828v6.882l9.96-12.71z"
                fill="#651FFF"
            />
            <Path
                d="M50 50.207l-25 .008V34.531c0-4.796 3.586-7.707 8.227-8.507 3.011-.52 5.945-.329 8.625.304C46.238 27.371 50 30.09 50 34.531v15.676z"
                fill="#651FFF"
            />
            <Path
                d="M0 50.207l25 .008V34.531c0-4.796-3.758-7.707-8.398-8.507-3.012-.52-5.774-.329-8.454.304C3.762 27.371 0 30.094 0 34.531v15.676z"
                fill="#00BFA5"
            />
            <Path
                d="M15.04 26.024s6.378-.567 9.96 5.828v6.882l-9.96-12.71z"
                fill="#00BFA5"
            />
            <Path
                d="M13.07 28.953a2.732 2.732 0 01-2.734-2.734V23.71h5.469v2.508a2.735 2.735 0 01-2.735 2.734z"
                fill="#E59900"
            />
            <Path
                d="M21.297 14.54s1.508.26 1.508 1.886c0 1.433-1.102 2-2.203 2v-3.887h.695zm-16.457 0s-1.508.26-1.508 1.886c0 1.433 1.102 2 2.203 2v-3.887H4.84z"
                fill="#E59600"
            />
            <Path
                d="M13.07 3.898c-6.504 0-8.203 5.04-8.203 12.121 0 7.344 4.719 9.243 8.203 9.243 3.434 0 8.203-1.844 8.203-9.242 0-7.079-1.703-12.122-8.203-12.122z"
                fill="#FCC21B"
            />
            <Path
                d="M10.367 16.68c0 .73-.488 1.324-1.094 1.324-.605 0-1.097-.594-1.097-1.324 0-.735.492-1.325 1.097-1.325.606-.003 1.094.59 1.094 1.325zm5.402 0c0 .73.489 1.324 1.098 1.324.606 0 1.098-.594 1.098-1.324 0-.735-.492-1.325-1.098-1.325-.61-.003-1.098.59-1.098 1.325z"
                fill="#444"
            />
            <Path
                d="M15.445 21.152h-4.75c-.273 0-.39.184-.21.457.253.383 1.187 1.121 2.581 1.121 1.395 0 2.332-.738 2.582-1.12.184-.274.067-.458-.203-.458z"
                fill="#513F35"
            />
            <Path
                d="M14.215 19.133a4.476 4.476 0 01-1.149.172c-.324 0-.742-.055-1.148-.172-.172-.05-.242.113-.18.223.13.226.645.68 1.325.68.68 0 1.199-.454 1.324-.68.07-.11.004-.274-.172-.223z"
                fill="#E59600"
            />
            <Path
                d="M13.266 2.973s-.125-.004-.184-.004c-.055 0-.184.004-.184.004-7.011.136-9.128 4.359-9.128 7.285 0 2.844.003 4.933.003 4.933s.114-.117.317-.277c.219-.172.465-.266.465-.266l.355 2.375 2.34-4.886a.076.076 0 01.078-.043l1.387.152c1.394.156 2.793.23 4.191.234v.004h.367v-.004a38.602 38.602 0 004.192-.234l1.387-.152a.076.076 0 01.078.043l2.34 4.886.355-2.375s.242.098.465.266c.207.16.316.277.316.277s.004-2.09.004-4.933c-.012-2.926-2.129-7.149-9.144-7.285z"
                fill="#6D4C41"
            />
            <Path
                d="M0 37.938h3.2v12.269H0v-12.27zm46.93 0h3.125v12.269H46.93v-12.27z"
                fill="#FCC21B"
            />
            <Path
                d="M36.984 28.953a2.732 2.732 0 01-2.734-2.734v-2.336h5.469v2.336a2.735 2.735 0 01-2.735 2.734z"
                fill="#E59900"
            />
            <Path
                d="M36.984 20.98c5.566 0 10.078-4.055 10.078-9.058S42.55 2.863 36.984 2.863 26.906 6.92 26.906 11.922c0 5.003 4.512 9.058 10.078 9.058z"
                fill="#6D4C41"
            />
            <Path
                d="M36.984 5.043c-6.195 0-7.816 4.805-7.816 11.55 0 6.747 4.805 8.805 7.816 8.805 3.012 0 7.817-2.058 7.817-8.804S43.18 5.043 36.984 5.043z"
                fill="#FCC21B"
            />
            <Path
                d="M34.309 16.871c0 .723-.485 1.309-1.086 1.309-.598 0-1.086-.586-1.086-1.309 0-.726.488-1.312 1.086-1.312.601 0 1.086.59 1.086 1.312zm5.347 0c0 .723.485 1.309 1.086 1.309.598 0 1.086-.586 1.086-1.309 0-.726-.488-1.312-1.086-1.312-.601 0-1.086.59-1.086 1.312z"
                fill="#444"
            />
            <Path
                d="M39.348 10.34c-.825.793-4.914 4.48-10.555 5.441V8.22s2.434-4.828 8.273-4.828c5.84 0 8.274 4.953 8.274 4.953v7.437s-3.828-1.469-5.75-5.394a.148.148 0 00-.242-.047z"
                fill="#6D4C41"
            />
            <Path
                d="M39.332 21.3H34.63c-.27 0-.387.18-.207.454.25.379 1.176 1.11 2.555 1.11 1.379 0 2.308-.731 2.554-1.11.188-.274.07-.453-.199-.453z"
                fill="#4C3734"
            />
            <Path
                d="M38.117 19.45a4.375 4.375 0 01-1.137.167c-.32 0-.734-.054-1.137-.168-.172-.046-.238.114-.175.223.125.223.636.672 1.312.672s1.184-.45 1.313-.672c.062-.11-.004-.273-.176-.223z"
                fill="#E48C15"
            />
            <Path
                d="M33.422 50.438H16.578c-.12 0 0-2.79 0-2.79 0-3.843 4.895-5.132 6.594-5.132h3.66c1.7 0 6.59 1.289 6.59 5.132v.11c0 .136.121 2.68 0 2.68z"
                fill="#B2DFDB"
            />
            <Path
                d="M24.996 45.43a1.832 1.832 0 01-1.832-1.832V42.19h3.668v1.407c0 1.011-.82 1.832-1.836 1.832z"
                fill="#E59900"
            />
            <Path
                d="M25 41.168c4.466 0 8.086-3.409 8.086-7.613 0-4.205-3.62-7.614-8.086-7.614s-8.086 3.409-8.086 7.614c0 4.204 3.62 7.613 8.086 7.613z"
                fill="#6D4C41"
            />
            <Path
                d="M31.621 35.438s1.23.214 1.23 1.539c0 1.171-.898 1.632-1.796 1.632v-3.172h.566zm-13.242 0s-1.23.214-1.23 1.539c0 1.171.898 1.632 1.796 1.632v-3.172h-.566z"
                fill="#E59600"
            />
            <Path
                d="M29.688 31.457c-1.121-1.395-3.051-1.996-4.688-1.996-1.633 0-3.566.598-4.687 1.996-1.098 1.367-1.672 3.129-1.665 5.496.008 1.91.5 3.375 1.883 4.531 1.282 1.07 2.766 1.649 4.371 1.649 1.578 0 3.32-.551 4.555-1.637 1.356-1.191 1.879-2.633 1.887-4.539.015-2.371-.563-4.133-1.656-5.5z"
                fill="#FCC21B"
            />
            <Path
                d="M25.926 38.387a3.514 3.514 0 01-.926.137c-.262 0-.602-.047-.926-.137-.14-.04-.195.094-.144.18.105.183.52.55 1.07.55s.969-.367 1.07-.55c.051-.086-.003-.22-.144-.18z"
                fill="#E59600"
            />
            <Path
                d="M26.918 39.895h-3.836c-.219 0-.317.148-.168.37.203.31.96.907 2.086.907 1.129 0 1.883-.598 2.09-.906.144-.223.05-.371-.172-.371z"
                fill="#513F35"
            />
            <Path
                d="M22.46 37.008c0 .566-.378 1.023-.847 1.023-.468 0-.847-.457-.847-1.023 0-.567.382-1.028.847-1.028.469.004.848.461.848 1.028zm6.778 0c0 .566-.379 1.023-.847 1.023-.47 0-.848-.457-.848-1.023 0-.567.383-1.028.848-1.028.468.004.847.461.847 1.028z"
                fill="#444"
            />
            <Path
                d="M18.3 36.57s1.845-1.93 2.52-2.578c.043-.043.114-.008.106.055-.028.27-.047.562-.059.738a.13.13 0 00.152.133c1.325-.25 2.598-.8 2.938-.957.043-.02.086.016.086.059-.008.246-.004.48 0 .62 0 .079.07.137.148.126a8.499 8.499 0 002.563-.864.295.295 0 01.25-.02c.629.227 1.394.673 1.672.837.062.035.14.015.176-.047.105-.191.253-.484.32-.625.02-.04.07-.047.098-.02.988.977 2.433 2.54 2.433 2.54l1.02-3.274s-1.653-5.824-7.391-5.824c-5.738 0-7.914 6.218-7.914 6.218l.883 2.883z"
                fill="#6D4C41"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_218_5962">
                <Rect width={50} height={50} rx={20} fill="#fff" />
            </ClipPath>
        </Defs>
    </Svg>
)

const FRIENDS = () => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
    >
        <Path
            d="M35.055 18.031c-.283-.512.076-1.034.69-1.68.974-1.025 2.033-3.403 1.048-5.817.007-.013-.194-.42-.187-.433l-.404-.02c-.129-.019-4.575-.028-9.026-.028-4.45 0-8.897.01-9.026.027 0 0-.598.44-.594.454-.982 2.414.075 4.79 1.048 5.817.612.646.971 1.168.691 1.68-.273.5-1.086.572-1.086.572s.187.51.639.785c.418.256.933.314 1.287.323 0 0 1.389 1.922 5.02 1.922h4.042c3.631 0 5.02-1.922 5.02-1.922.354-.009.87-.067 1.287-.323.452-.275.639-.785.639-.785s-.815-.073-1.088-.572z"
            fill="#543930"
        />
        <Path
            d="M27.172 21.63V19.5l6.451-.511.588.722s-1.39 1.922-5.02 1.922l-2.02-.002z"
            fill="url(#paint0_radial_218_5999)"
        />
        <Path
            d="M34.197 18.779c-.967-1.468 1.176-2.017 1.176-2.017l.002.003c-.372.462-.541.867-.322 1.266.273.5 1.086.572 1.086.572s-1.11.984-1.942.176z"
            fill="url(#paint1_radial_218_5999)"
        />
        <Path
            d="M36.798 10.534c.96 2.337-.05 4.745-.995 5.76-.13.14-.68.68-.807 1.112 0 0-2.154-3.006-2.797-4.772-.13-.356-.249-.722-.265-1.102-.011-.284.032-.623.197-.864.2-.296 4.552-.384 4.552-.384l.115.25z"
            fill="url(#paint2_radial_218_5999)"
        />
        <Path
            d="M17.554 10.534c-.957 2.337.052 4.744.996 5.758.131.14.68.68.806 1.111 0 0 2.155-3.005 2.798-4.771.131-.357.249-.723.264-1.102.012-.284-.031-.623-.196-.865-.201-.296-.436-.217-.777-.217-.65 0-3.498-.167-3.719-.167.002.005-.172.253-.172.253z"
            fill="url(#paint3_radial_218_5999)"
        />
        <Path
            d="M27.18 21.63V19.5l-6.451-.511-.587.722s1.388 1.922 5.02 1.922l2.018-.002z"
            fill="url(#paint4_radial_218_5999)"
        />
        <Path
            d="M20.156 18.779c.966-1.468-1.177-2.017-1.177-2.017l-.002.003c.373.462.542.867.323 1.266-.273.5-1.086.572-1.086.572s1.109.984 1.942.176z"
            fill="url(#paint5_radial_218_5999)"
        />
        <Path
            d="M27.206 21.678h-.032c-5.792.007-11.742 1.604-11.742 5.643v.666h23.484v-.666c0-3.81-5.893-5.643-11.71-5.643z"
            fill="url(#paint6_linear_218_5999)"
        />
        <Path
            d="M29.662 20.635h-4.977l-1.488 1.608 2.141 3.317 1.836-2.267 1.836 2.267 2.14-3.317-1.488-1.608z"
            fill="url(#paint7_linear_218_5999)"
        />
        <Path
            d="M27.305 25.203h-.247a.582.582 0 01-.564-.447l-.095-.395c-.086-.364.375-.713.795-.713.42 0 .849.345.765.709l-.09.395a.575.575 0 01-.564.451z"
            fill="#1565C0"
        />
        <Path
            d="M24.496 25.546v-2.122a.35.35 0 01.52-.303l1.883 1.046c.235.13.24.467.004.6l-1.883 1.08a.35.35 0 01-.524-.3zm5.28 0v-2.122a.35.35 0 00-.52-.303l-1.883 1.046a.344.344 0 00-.005.6l1.884 1.08a.35.35 0 00.524-.3z"
            fill="#1565C0"
        />
        <Path
            d="M27.174 19.043h-2.05v2.253c0 1.019.835 1.845 1.865 1.845h.372c1.03 0 1.866-.826 1.866-1.845v-2.253h-2.053zm6.172-7.655H21.003c-1.33 0-2.419 1.16-2.419 2.576 0 1.416 1.088 2.577 2.419 2.577h12.34c1.33 0 2.419-1.16 2.419-2.577 0-1.416-1.087-2.576-2.416-2.576z"
            fill="#E59600"
        />
        <Path
            d="M27.174 2.5c-3.93 0-7.57 4.202-7.57 10.252 0 6.016 3.751 8.99 7.57 8.99 3.818 0 7.57-2.977 7.57-8.992 0-6.048-3.641-10.25-7.57-10.25z"
            fill="#FFCA28"
        />
        <Path
            d="M25.096 11.25c-.21-.278-.693-.68-1.632-.68-.94 0-1.425.405-1.633.68a.287.287 0 00-.004.35c.058.08.235.154.429.088.194-.065.573-.262 1.208-.266.634.004 1.014.2 1.208.266.194.066.37-.007.43-.088a.29.29 0 00-.006-.35zm7.423 0c-.21-.278-.693-.68-1.633-.68-.939 0-1.424.405-1.632.68a.287.287 0 00-.005.35c.059.08.235.154.43.088.194-.065.573-.262 1.207-.266.635.004 1.014.2 1.208.266.195.066.37-.007.43-.088a.29.29 0 00-.005-.35z"
            fill="#6D4C41"
        />
        <Path
            d="M23.462 14.432c.615 0 1.113-.516 1.113-1.152 0-.636-.498-1.152-1.113-1.152s-1.113.516-1.113 1.152c0 .636.498 1.152 1.113 1.152zM30.887 14.432c.614 0 1.113-.516 1.113-1.152 0-.636-.498-1.152-1.113-1.152s-1.114.516-1.114 1.152c0 .636.499 1.152 1.114 1.152z"
            fill="#404040"
        />
        <Path
            d="M28.046 15.37a.28.28 0 00-.072-.019h-1.6a.26.26 0 00-.072.018c-.144.059-.223.208-.155.368.067.16.386.608 1.027.608.641 0 .96-.45 1.027-.608.068-.16-.01-.31-.155-.368z"
            fill="#E59600"
        />
        <Path
            d="M29.075 17.193c-.718.427-3.078.427-3.796 0-.413-.246-.835.131-.664.506.17.368 1.455 1.224 2.568 1.224s2.382-.856 2.552-1.224c.169-.375-.247-.752-.66-.506z"
            fill="#795548"
        />
        <Path
            d="M36.223 5.67c-.551-.833-1.787-1.95-2.895-2.025-.179-1.066-1.32-1.97-2.423-2.32-2.988-.946-4.932.116-5.975.685-.217.117-1.62.896-2.6.338-.614-.35-.602-1.296-.602-1.296s-1.924.734-1.267 2.778c-.662.027-1.529.307-1.987 1.235-.547 1.106-.353 2.03-.195 2.473-.569.483-1.285 1.51-.794 2.845.37 1.005 1.844 1.468 1.844 1.468-.103 1.808.233 2.922.411 3.371.032.08.143.072.163-.009.224-.896.987-4.02.91-4.564 0 0 2.563-.508 5.006-2.308a7.242 7.242 0 011.61-.905c3.07-1.222 3.71.863 3.71.863s2.128-.41 2.769 2.545c.242 1.106.404 2.879.542 4.118.009.088.129.107.163.025.214-.492.643-1.468.745-2.463.036-.35.98-.813 1.386-2.317.544-2.006-.122-3.934-.521-4.537z"
            fill="#543930"
        />
        <Path
            d="M35.353 12.533c.036-.35.98-.813 1.386-2.317.043-.16.08-.323.113-.486.33-1.826-.261-3.504-.63-4.06-.51-.77-1.603-1.781-2.64-1.99-.09-.01-.178-.022-.261-.026 0 0 .074.485-.122.871-.253.502-.77.621-.77.621 2.703 2.706 2.51 4.968 2.924 7.387z"
            fill="url(#paint8_radial_218_5999)"
        />
        <Path
            d="M25.582 1.669c-.248.12-.465.239-.655.34-.216.118-1.619.897-2.599.34-.603-.344-.603-1.26-.603-1.292-.277.354-1.117 2.886 1.34 3.055 1.058.072 1.711-.851 2.1-1.633.14-.284.358-.7.417-.81z"
            fill="url(#paint9_radial_218_5999)"
        />
        <Path
            d="M30.597 1.235c1.653.447 2.46 1.29 2.728 2.412.079.33.174 3.405-5.698-.09-2.183-1.301-1.587-2.114-1.332-2.207.998-.361 2.45-.616 4.302-.115z"
            fill="url(#paint10_radial_218_5999)"
        />
        <Path
            d="M21.718 1.057c-.002.002-.006.002-.013.007h-.002c-.21.088-1.861.853-1.245 2.766l1.757.282c-1.556-1.576-.49-3.06-.49-3.06l-.007.005z"
            fill="url(#paint11_radial_218_5999)"
        />
        <Path
            d="M21.544 4.003l-1.086-.173c-.043 0-.187.013-.266.024-.612.086-1.333.402-1.723 1.21-.42.872-.409 1.62-.294 2.119.034.167.102.357.102.357s.537-.51 1.818-.544l1.45-2.993z"
            fill="url(#paint12_radial_218_5999)"
        />
        <Path
            d="M18.225 7.583c-.535.474-1.255 1.533-.725 2.847.4.992 1.827 1.42 1.827 1.42 0 .005.285.09.431.09l.335-4.944c-.684 0-1.342.205-1.766.5.007.008-.104.08-.102.087z"
            fill="url(#paint13_radial_218_5999)"
        />
        <Path
            d="M14.517 41.646h-.034c-6.578.008-13.42 1.879-13.42 6.467v.821h26.84v-.82c-.002-4.326-6.78-6.468-13.386-6.468z"
            fill="url(#paint14_linear_218_5999)"
        />
        <Path
            d="M16.824 40.213h-4.686v2.576c0 1.164.955 2.108 2.131 2.108h.426c1.177 0 2.132-.944 2.132-2.108v-2.576h-.003z"
            fill="#C48E6A"
        />
        <Path
            d="M18.462 41.512c.375.562.424 1.817-.673 2.877-.643.62-1.74.705-2.589.682-.173-.006-.371-.042-.454-.21-.093-.188.028-.433.196-.541.168-.109.367-.132.553-.194.39-.132 1.006-.854 1.15-1.925.093-.69.034-1.004.05-1.224.01-.172 1.483.109 1.767.535z"
            fill="url(#paint15_linear_218_5999)"
        />
        <Path
            d="M10.671 44.47c1.33.98 2.989 1.334 4.58.928.22-.056.48-.175.494-.402.015-.305-.4-.62-.697-.663-.761-.114-1.634-.501-2.124-1.097-.433-.53-.627-.932-.612-1.902.006-.38-1.726-.047-2.167.183-.666.343-1.017 1.812.526 2.952z"
            fill="url(#paint16_linear_218_5999)"
        />
        <Path
            d="M14.682 46.245c.05 1.146.646 1.52.294 2.439.576-.367.973-.986 1.139-1.65.165-.663.105-1.367-.098-2.013-.057-.183-.132-.371-.277-.498-.707-.619-1.076 1.29-1.058 1.722z"
            fill="url(#paint17_linear_218_5999)"
        />
        <Path
            d="M17.012 46.384c1.138.49 1.737.1 2.48 1.285.057-.836-.266-1.677-.803-2.315-.536-.637-1.28-1.084-2.07-1.339-.226-.072-.466-.132-.699-.077-1.135.265.067 2.005 1.092 2.446z"
            fill="url(#paint18_linear_218_5999)"
        />
        <Path
            d="M15.51 45.516c.738-.155 1.258-.66 1.16-1.127-.098-.467-.777-.72-1.516-.565-.74.155-1.26.66-1.161 1.127.098.467.777.72 1.516.565z"
            fill="#1565C0"
        />
        <Path
            d="M21.534 29.981H7.43c-1.52 0-2.764 1.326-2.764 2.945 0 1.62 1.244 2.944 2.764 2.944h14.104c1.52 0 2.764-1.326 2.764-2.944 0-1.619-1.244-2.945-2.764-2.945z"
            fill="#C48E6A"
        />
        <Path
            d="M14.48 19.823c-4.49 0-8.65 4.803-8.65 11.714 0 6.875 4.287 10.274 8.65 10.274 4.365 0 8.651-3.399 8.651-10.274 0-6.911-4.157-11.714-8.65-11.714z"
            fill="#E0BB95"
        />
        <Path
            d="M10.24 33.46c.703 0 1.272-.59 1.272-1.316 0-.727-.57-1.316-1.272-1.316-.703 0-1.272.589-1.272 1.316 0 .727.57 1.316 1.272 1.316zM18.723 33.46c.702 0 1.272-.59 1.272-1.316 0-.727-.57-1.316-1.273-1.316-.702 0-1.272.589-1.272 1.316 0 .727.57 1.316 1.273 1.316z"
            fill="#5D4037"
        />
        <Path
            d="M15.477 34.53a.32.32 0 00-.082-.02H13.57a.296.296 0 00-.083.02c-.165.068-.255.238-.178.422.078.183.442.694 1.175.694.732 0 1.096-.514 1.174-.694.077-.184-.016-.354-.18-.421z"
            fill="#C48E6A"
        />
        <Path
            d="M16.682 36.616c-.823.488-3.518.488-4.338 0-.473-.281-.955.15-.76.578.194.421 1.665 1.4 2.935 1.4s2.723-.979 2.916-1.4c.197-.428-.28-.86-.753-.578z"
            fill="#6D4C41"
        />
        <Path
            d="M14.514 18.006h-.01c-11.724.062-9.321 13.456-9.321 13.456s.526 1.381.766 1.99c.034.088.163.078.183-.013.25-1.12 1.151-5.092 1.605-6.3a1.57 1.57 0 011.755-.988c1.149.21 2.981.467 5 .467h.04c2.019 0 3.851-.258 5-.467a1.567 1.567 0 011.752.989c.451 1.202 1.347 5.15 1.6 6.286.02.093.15.1.183.013l.77-1.98c.002.003 2.404-13.39-9.322-13.453z"
            fill="#AB872F"
        />
        <Path
            d="M23.838 31.462s2.403-13.394-9.324-13.456h-.01a13.649 13.649 0 00-1.549.093h-.01a.434.434 0 01-.065.01c-9.868 1.242-7.698 13.353-7.698 13.353l.77 1.982c.033.088.16.08.18-.013.253-1.133 1.15-5.086 1.605-6.289a1.57 1.57 0 011.755-.988c1.148.209 2.98.467 4.999.467h.041c2.018 0 3.85-.258 4.999-.467a1.568 1.568 0 011.752.988c.454 1.208 1.355 5.187 1.603 6.302.02.093.147.101.18.013.243-.609.772-1.995.772-1.995z"
            fill="url(#paint19_radial_218_5999)"
        />
        <Path
            d="M8.29 30.06c.771-1.09 2.524-1.194 3.528-.381.16.129.371.31.433.51.104.329-.211.584-.518.507-.197-.052-.377-.155-.573-.217a2.824 2.824 0 00-.927-.142 2.82 2.82 0 00-1.218.237c-.183.075-.333.194-.542.106a.421.421 0 01-.183-.62zm11.887.62c-.075-.033-.147-.075-.222-.106-.46-.19-.72-.24-1.218-.237a2.93 2.93 0 00-1.043.178c-.209.072-.475.253-.707.183-.34-.103-.33-.475-.145-.712a2.2 2.2 0 01.85-.63 2.648 2.648 0 012.366.142c.23.137.48.325.62.563.2.335-.104.782-.501.62z"
            fill="#AB872F"
        />
        <G clipPath="url(#clip0_218_5999)">
            <Path
                d="M45.559 28.942c-.082-.828-.646-1.123-.646-1.123.564-1.057.316-1.843-.746-2.357.124-1.233-.416-1.867-1.525-2.007-.273-1.184-.992-1.64-2.093-1.34-.601-1.013-1.415-1.23-2.423-.655-.87-.985-2.096-1.25-3.099-.157-1.003-1.095-2.229-.828-3.099.157-1.008-.576-1.822-.358-2.423.655-1.101-.3-1.82.154-2.093 1.34-1.109.14-1.649.774-1.525 2.007-1.062.514-1.312 1.302-.746 2.36 0 0-.561.294-.645 1.122-.08.805.446 1.384.446 1.384-.673.828-.454 1.696.365 2.297 0 0-.54 1.729 1.357 2.206 0 0 .014 1.492 1.347 1.663v-.704c-.48-.087-.65-.545-.653-1 .073.015.145.027.225.038.049-.09 13.336-.301 15.09-.341.081.53-.045 1.197-.632 1.305v.704c1.336-.173 1.347-1.663 1.347-1.663 1.897-.477 1.357-2.206 1.357-2.206.818-.6 1.038-1.468.365-2.296.004-.005.53-.585.449-1.39z"
                fill="#543930"
            />
            <Path
                d="M46.816 48.103v.952h-23.57v-.952c0-2.898 2.835-4.633 6.53-5.426 1.64-.355 3.45-.521 5.255-.524h.028c1.792 0 3.581.185 5.202.555 3.716.842 6.555 2.647 6.555 5.395z"
                fill="url(#paint20_linear_218_5999)"
            />
            <Path
                d="M37.111 41.127h-4.16v2.334c0 1.054.846 1.91 1.892 1.91h.378a1.903 1.903 0 001.893-1.91l-.003-2.334zm-8.47-4.168c-1.254 0-2.272-1.093-2.272-2.435s1.02-2.435 2.271-2.435h12.782c1.253 0 2.27 1.093 2.27 2.435 0 1.343-1.02 2.435-2.27 2.435H28.64z"
                fill="#E59600"
            />
            <Path
                d="M35.032 22.482c-4.996 0-7.84 4.352-7.84 10.618 0 6.23 3.885 9.31 7.84 9.31s7.84-3.08 7.84-9.31c0-6.266-2.844-10.618-7.84-10.618z"
                fill="#FFCA28"
            />
            <Path
                d="M32.834 31.71c-.218-.287-.719-.703-1.691-.703-.973 0-1.476.418-1.691.704a.298.298 0 00-.005.362c.06.082.243.16.444.091.202-.067.594-.27 1.252-.275.657.004 1.05.208 1.25.275.202.068.384-.007.445-.09a.301.301 0 00-.005-.363zm7.778 0c-.217-.287-.718-.703-1.69-.703-.973 0-1.476.418-1.691.704a.298.298 0 00-.005.362c.06.082.243.16.444.091.201-.067.594-.27 1.251-.275.658.004 1.05.208 1.252.275.2.068.383-.007.444-.09a.298.298 0 00-.005-.363z"
                fill="#6D4C41"
            />
            <Path
                d="M31.142 35.009c.637 0 1.153-.534 1.153-1.193s-.516-1.193-1.153-1.193c-.636 0-1.153.534-1.153 1.193s.517 1.193 1.153 1.193zM38.922 35.009c.636 0 1.153-.534 1.153-1.193s-.517-1.193-1.153-1.193c-.637 0-1.153.534-1.153 1.193s.516 1.193 1.153 1.193z"
                fill="#404040"
            />
            <Path
                d="M35.932 35.977a.293.293 0 00-.074-.019h-1.654a.271.271 0 00-.075.019c-.15.06-.231.215-.161.38.07.167.4.63 1.064.63s.994-.465 1.064-.63c.07-.165-.014-.32-.164-.38z"
                fill="#E59600"
            />
            <Path
                d="M37 37.869c-.745.442-3.187.442-3.93 0-.429-.255-.866.136-.688.524.175.38 1.508 1.267 2.659 1.267 1.15 0 2.465-.886 2.64-1.267.178-.39-.255-.78-.68-.524z"
                fill="#795548"
            />
            <Path
                d="M42.775 34.758s.606-1.448.992-2.746c.25-.846.367-1.803.341-1.826 1.06-.756.955-1.565-.266-2.075.893-1.029.837-1.81-.51-2.09.372-1.371-.077-2.033-1.427-1.755.08-1.483-.55-1.878-1.803-1.202 0 0-.035-.964-.662-1.19-.629-.227-1.501.498-1.501.498-.89-1.326-1.897-1.305-2.907-.03v-.003c-1.01-1.272-2.019-1.293-2.905.033 0 0-.873-.725-1.502-.498-.629.226-.662 1.19-.662 1.19-1.256-.676-1.882-.28-1.803 1.202-1.35-.278-1.798.384-1.427 1.754-1.344.28-1.403 1.062-.51 2.091-1.223.51-1.143 1.24-.086 1.981.489.344.423 1.32.601 2.098.454 1.983.622 2.472.622 2.472s.606-.636.695-1.043c.089-.41.208-1.055-.04-1.394.816-.627.51-1.693.51-1.693s.725-.148 1.134-.81c.183-.294.286-.446.599-.308.246.11.498.177.77.177.626 0 1.178-.327 1.501-.823.224.129.484.204.76.204.695 0 1.282-.461 1.49-1.1a1.53 1.53 0 001.777.458s.19 1.09 1.652 1.02c1.073-.049 1.415-.706 1.415-.706s.276.566.771.74c.496.172.887.095.887.095s-.264 1.324 1.024 2.058c0 0-.35.833-.159 1.68.143.654.63 1.54.63 1.54z"
                fill="#543930"
            />
            <Path
                d="M45.114 30.326c.674.828.454 1.696-.365 2.297 0 0 .482 1.544-1.066 2.117a2.501 2.501 0 00-.819-2.096c-.133-6.02-2.959-10.162-7.833-10.162-4.874 0-7.699 4.142-7.832 10.16a2.5 2.5 0 00-.821 2.098c-1.553-.571-1.069-2.117-1.069-2.117-.82-.601-1.038-1.469-.365-2.297 0 0-.526-.58-.447-1.384.082-.828.644-1.123.644-1.123-.564-1.057-.314-1.843.748-2.36-.124-1.232.414-1.864 1.525-2.006.274-1.184.992-1.64 2.093-1.34.601-1.013 1.415-1.228 2.423-.655.87-.983 2.093-1.25 3.099-.157 1.006-1.092 2.229-.826 3.099.157 1.008-.573 1.82-.358 2.423.654 1.102-.299 1.82.157 2.093 1.34 1.109.143 1.649.775 1.525 2.007 1.062.517 1.31 1.303.746 2.36 0 0 .564.295.646 1.123.08.804-.447 1.384-.447 1.384z"
                fill="url(#paint21_radial_218_5999)"
            />
        </G>
        <Defs>
            <RadialGradient
                id="paint0_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(5.28835 0 0 2.59764 30.467 18.55)"
            >
                <Stop offset={0.728} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint1_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(-1.41548 .66234 -.49136 -1.05009 35.676 17.764)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.663} stopColor="#6D4C41" />
                <Stop offset={1} stopColor="#6D4C41" stopOpacity={0} />
            </RadialGradient>
            <RadialGradient
                id="paint2_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(-.5121 -6.84532 5.70512 -.42697 31.626 13.344)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.725} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint3_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(.5121 -6.84532 -5.70512 -.42697 22.727 13.344)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.725} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint4_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-5.28835 0 0 -2.59764 23.885 18.55)"
            >
                <Stop offset={0.728} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint5_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(1.41548 .66234 .49136 -1.05009 18.677 17.764)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.663} stopColor="#6D4C41" />
                <Stop offset={1} stopColor="#6D4C41" stopOpacity={0} />
            </RadialGradient>
            <LinearGradientSvg
                id="paint6_linear_218_5999"
                x1={27.174}
                y1={21.6078}
                x2={27.174}
                y2={27.9331}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.003} stopColor="#E3F2FD" />
                <Stop offset={0.225} stopColor="#D6ECFC" />
                <Stop offset={0.635} stopColor="#B4DBFB" />
                <Stop offset={1} stopColor="#90CAF9" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint7_linear_218_5999"
                x1={27.1739}
                y1={25.219}
                x2={27.1739}
                y2={21.1018}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.5} stopColor="#F5F5F5" />
                <Stop offset={1} stopColor="#DADADA" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint8_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(2.47509 7.6562 5.6808 -1.8362 31.242 9.722)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.699} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint9_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(1.85935 .99708 1.18211 -2.20473 23.399 .949)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.58} stopColor="#6D4C41" />
                <Stop offset={1} stopColor="#6D4C41" stopOpacity={0} />
            </RadialGradient>
            <RadialGradient
                id="paint10_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(-6.08222 -2.55793 -1.41516 3.42765 28.113 4.78)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.699} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint11_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.93636 0 0 2.36875 22.551 2.873)"
            >
                <Stop offset={0.702} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint12_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(-3.50721 -.94354 -.88325 3.28204 22.285 6.291)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.66} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <RadialGradient
                id="paint13_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(3.77764 .51973 .73021 -5.30823 21.424 9.798)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.598} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={1} stopColor="#6D4C41" />
            </RadialGradient>
            <LinearGradientSvg
                id="paint14_linear_218_5999"
                x1={1.06219}
                y1={45.2895}
                x2={27.9019}
                y2={45.2895}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.001} stopColor="#E3E3E3" />
                <Stop offset={1} stopColor="#C9C9C9" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint15_linear_218_5999"
                x1={17.4473}
                y1={40.5997}
                x2={16.5376}
                y2={44.3893}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#0053AB" />
                <Stop offset={0.362} stopColor="#0068BF" />
                <Stop offset={1} stopColor="#008EE3" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint16_linear_218_5999"
                x1={9.91778}
                y1={41.8074}
                x2={15.2537}
                y2={45.4109}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.001} stopColor="#008EE3" />
                <Stop offset={1} stopColor="#0053AB" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint17_linear_218_5999"
                x1={15.4538}
                y1={45.4473}
                x2={15.4828}
                y2={48.5476}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#0053AB" />
                <Stop offset={1} stopColor="#008EE3" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint18_linear_218_5999"
                x1={16.2171}
                y1={44.6906}
                x2={18.6105}
                y2={46.3209}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#0053AB" />
                <Stop offset={1} stopColor="#008EE3" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint19_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(9.83081 0 0 11.0911 14.51 29.12)"
            >
                <Stop offset={0.794} stopColor="#BFA055" stopOpacity={0} />
                <Stop offset={1} stopColor="#BFA055" />
            </RadialGradient>
            <LinearGradientSvg
                id="paint20_linear_218_5999"
                x1={35.0313}
                y1={42.1044}
                x2={35.0313}
                y2={48.5967}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#F78C1F" />
                <Stop offset={1} stopColor="#ED6D23" />
            </LinearGradientSvg>
            <RadialGradient
                id="paint21_radial_218_5999"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(11.2288 0 0 9.87459 34.934 29.77)"
            >
                <Stop offset={0.797} stopColor="#6D4C41" stopOpacity={0} />
                <Stop offset={0.984} stopColor="#6D4C41" />
            </RadialGradient>
            <ClipPath id="clip0_218_5999">
                <Rect
                    x={20.0635}
                    y={20.0635}
                    width={29.9366}
                    height={29.9366}
                    rx={14.9683}
                    fill="#fff"
                />
            </ClipPath>
        </Defs>
    </Svg>
)


const USER = () => (
    <Svg
        width={18}
        height={20}
        viewBox="0 0 18 20"
        fill="none"
    >
        <Path
            d="M9 11A5 5 0 109 1a5 5 0 000 10zM17 19a8 8 0 00-16 0"
            stroke="#646464"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)


const RELIEVED_FACE = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M19.875 37.125c-8.719 0-18.125-5.469-18.125-17.469S11.156 2.188 19.875 2.188c4.844 0 9.313 1.593 12.625 4.5 3.594 3.187 5.5 7.687 5.5 12.968 0 5.282-1.906 9.75-5.5 12.938-3.313 2.906-7.813 4.531-12.625 4.531z"
            fill="url(#paint0_radial_1_13790)"
        />
        <Path
            d="M34.84 9.272c1.666 2.688 2.535 5.887 2.535 9.447 0 5.281-1.907 9.75-5.5 12.937-3.313 2.907-7.813 4.532-12.625 4.532-5.644 0-11.563-2.297-15.057-7.17 3.363 5.52 9.688 8.107 15.682 8.107 4.812 0 9.312-1.625 12.625-4.531 3.593-3.188 5.5-7.656 5.5-12.938 0-3.98-1.085-7.518-3.16-10.384z"
            fill="#EB8F00"
        />
        <Path
            d="M20 31.562c-2.669 0-4.572-1.965-5.147-3.056a1.448 1.448 0 01-.115-1.222.63.63 0 01.575-.41.776.776 0 01.253.05c1.343.529 2.521 1.295 4.45 1.295 1.928 0 3.125-.766 4.45-1.294a.704.704 0 01.253-.05.626.626 0 01.56.41c.143.402.102.852-.116 1.221-.591 1.09-2.494 3.056-5.163 3.056zM15.472 16.99l-.063.063c-.05.056-.103.11-.159.156l-.216.178a4.385 4.385 0 01-.687.435 3.443 3.443 0 01-.428.178c-.153.047-.31.084-.469.116a3.212 3.212 0 01-.49.037h-.276l-.218-.028a4.647 4.647 0 01-.47-.116 3.63 3.63 0 01-.434-.197 5.135 5.135 0 01-.374-.215 4.092 4.092 0 01-.52-.41l-.196-.18-.078-.079a1.104 1.104 0 00-1.428-.053.831.831 0 00-.244 1.015l.047.094c.04.09.087.178.137.263.323.537.76.998 1.278 1.35.247.172.51.319.785.437.303.135.615.238.937.313.172.031.332.062.54.081.098 0 .21.019.26.019h.244c.35-.006.697-.04 1.04-.11.322-.075.635-.178.938-.312.275-.119.538-.266.784-.438a4.37 4.37 0 001.016-.959l.15-.21.125-.196c.047-.075.088-.157.122-.24l.034-.079a.88.88 0 00-.565-1.181 1.118 1.118 0 00-1.122.268zm14.062 0l-.062.063c-.05.056-.103.11-.16.156l-.215.178a4.385 4.385 0 01-.688.435 3.443 3.443 0 01-.428.178c-.153.047-.31.084-.469.116a3.212 3.212 0 01-.49.037h-.275l-.219-.028a4.647 4.647 0 01-.469-.116 3.63 3.63 0 01-.434-.197 5.135 5.135 0 01-.375-.215 4.092 4.092 0 01-.519-.41l-.197-.18-.078-.079a1.104 1.104 0 00-1.428-.053.832.832 0 00-.244 1.015l.047.094c.04.09.088.178.138.263.323.537.759.998 1.278 1.35.247.172.51.319.784.437.306.135.625.24.953.313.172.031.332.062.541.081.097 0 .21.019.26.019h.243c.35-.006.697-.04 1.04-.11a5.08 5.08 0 00.954-.312c.275-.119.537-.266.784-.438.388-.263.73-.587 1.016-.959l.15-.21.125-.196c.047-.075.087-.157.122-.24l.034-.079a.88.88 0 00-.472-1.15c-.031-.012-.062-.025-.093-.031a1.113 1.113 0 00-1.154.268zM8.881 13.526A.576.576 0 018 12.79c.35-.501.78-.942 1.272-1.304a6.536 6.536 0 014.597-1.334c.775.097.625 1.088-.066 1.153a7.996 7.996 0 00-4.922 2.219zm21.897 0a.576.576 0 00.881-.734c-.35-.501-.78-.942-1.272-1.304a6.538 6.538 0 00-4.596-1.334c-.775.097-.625 1.088.065 1.153a7.996 7.996 0 014.922 2.219z"
            fill="#422B0D"
        />
        <Defs>
            <RadialGradient
                id="paint0_radial_1_13790"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(17.8 0 0 17.8 19.875 19.656)"
            >
                <Stop offset={0.5} stopColor="#FDE030" />
                <Stop offset={0.92} stopColor="#F7C02B" />
                <Stop offset={1} stopColor="#F4A223" />
            </RadialGradient>
        </Defs>
    </Svg>
)

const PARTY_POPPER = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M2.328 38.522c.71.769 3.631-.572 5.937-1.647 1.728-.803 8.644-3.64 12.081-5.113.929-.396 2.279-.915 3.25-2.193.863-1.138 3.15-5.969-1.456-10.863-4.675-4.968-9.49-3.597-11.29-2.322-1.06.75-1.922 2.441-2.31 3.3-1.637 3.632-3.972 10.285-4.922 12.9-.697 1.928-1.993 5.175-1.29 5.938z"
            fill="#FFC107"
        />
        <Path
            d="M8.078 20.778c.043.544.153 1.428.528 3.132a19.848 19.848 0 001.015 3.203c1.022 2.434 2.457 3.415 3.91 4.203 2.469 1.337 4.147 1.587 4.147 1.587l-2.013.822s-1.218-.253-2.881-1.072c-1.584-.78-3.234-2.103-4.44-4.69a13.894 13.894 0 01-1-3.072c-.216-1.069-.25-1.675-.25-1.675l.984-2.438zm-2.472 6.338s.25 2.028 1.925 4.587c1.962 2.994 4.703 3.485 4.703 3.485l-1.822.75s-2.034-.622-3.969-3.263C5.237 31.028 4.9 29.06 4.9 29.06l.706-1.944zM3.87 31.922s.457 1.75 1.457 3.056c1.19 1.56 2.706 2.013 2.706 2.013l-1.397.619s-1.06-.222-2.219-1.691c-.88-1.116-1.13-2.397-1.13-2.397l.583-1.6z"
            fill="#FF8F00"
        />
        <Path
            opacity={0.44}
            d="M3.113 36.366a.522.522 0 01.003-.438l7.96-16.506 1.309 4.922L4.01 36.44a.514.514 0 01-.897-.075z"
            fill="#FFFDE7"
        />
        <Path
            d="M13.016 25.997c3.718 4.35 7.953 3.806 9.362 2.706 1.413-1.103 2.528-4.894-1.175-9.172-3.881-4.481-8.275-3.203-9.29-2.234-1.016.969-2.31 4.71 1.103 8.7z"
            fill="url(#paint0_linear_1_13768)"
        />
        <Path
            d="M25.788 27.787c-1.357-1.137-2.078-.934-3.047-.53-1.25.518-3.216.902-5.885 0l.804-1.935c1.584.534 2.73.275 3.721-.31 1.275-.75 3.02-1.778 5.732.5 1.13.95 2.29 1.582 3.14 1.294.62-.206.947-1.128 1.113-1.862.015-.066.04-.254.06-.42.15-1.146.4-3.621 2.243-4.887 1.972-1.353 4.044-1.353 4.044-1.353l.375 3.725c-.953-.14-1.616.053-2.175.363-2.107 1.172-.272 5.672-3.55 7.184-3.153 1.466-5.732-1.062-6.575-1.769z"
            fill="#03A9F4"
        />
        <Path
            d="M14.187 23.038l-1.356-1.216c2.49-2.781 1.834-4.825 1.356-6.313a9.368 9.368 0 01-.247-.856c-.212-.962-.256-1.8-.19-2.531A8.901 8.901 0 0112.343 9.6c-.58-1.76-.143-3.475.86-5.084 2.028-3.266 5.7-3.266 5.7-3.266l1.225 3.278c-.931-.037-3.985.01-4.922 1.488-1.184 1.862-.406 3.012-.35 3.143a5.28 5.28 0 01.665-.718c1.497-1.329 2.797-1.52 3.625-1.444.932.084 1.776.553 2.379 1.322.659.843.93 1.94.722 2.937-.204.972-.85 1.794-1.822 2.316-1.697.912-3.11.787-4.057.472.007.022.01.047.016.069.034.156.103.375.184.628.553 1.712 1.582 4.43-2.38 8.297zm2.297-11.729c.181.132.372.241.569.32.656.262 1.372.174 2.184-.263.478-.257.535-.532.553-.622.056-.272-.037-.619-.24-.878-.178-.229-.385-.347-.632-.372-.468-.04-1.103.256-1.737.822a2.74 2.74 0 00-.697.993z"
            fill="#F44336"
        />
        <Path
            d="M19.615 23.547l-1.94-.053s.922-5.207 3.906-6.082c.56-.162 1.172-.328 1.788-.418.365-.057.943-.141 1.228-.247.065-.49-.14-1.116-.372-1.825-.181-.55-.369-1.116-.469-1.735-.194-1.206.128-2.272.906-3.006.95-.89 2.485-1.175 4.216-.781.987.225 1.716.71 2.356 1.134.916.61 1.45.919 2.569.166 1.353-.913-.416-4.485-1.356-6.547l3.51-1.463c.47 1.032 2.75 6.338 1.246 9.366-.506 1.019-1.378 1.694-2.522 1.947-2.487.556-3.944-.413-5.006-1.119-.503-.334-.944-.597-1.422-.734-3.322-.947 1.316 3.94-.856 6.137-1.303 1.316-4.488 1.663-4.694 1.713-2.05.494-3.088 3.547-3.088 3.547z"
            fill="#F48FB1"
        />
        <Path
            d="M13.746 12.122c-.059.688-.087 1.097.091 1.99.86.632 2.731.632 2.731.632-.08-.253-.153-.472-.184-.628l-.016-.069c-1.903-.95-2.621-1.925-2.621-1.925z"
            fill="#C92B27"
        />
        <Path
            d="M9.853 15.2l-3.23-1.584L8.23 11.29l2.535 1.678-.913 2.23z"
            fill="#FFC107"
        />
        <Path
            d="M5.09 10.812c-1.65-.222-3.33-1.622-3.515-1.78l1.622-1.904c.49.416 1.531 1.112 2.228 1.206l-.334 2.478z"
            fill="#FB8C00"
        />
        <Path
            d="M8.003 6.647l-2.375-.778a5.529 5.529 0 00.203-2.594L8.3 2.878c.203 1.256.1 2.56-.297 3.769z"
            fill="#03A9F4"
        />
        <Path
            d="M22.835 4.79l2.442-.535.706 3.224-2.443.534-.705-3.224z"
            fill="#FB8C00"
        />
        <Path
            d="M28.894 5.553l-1.72-1.815a3.974 3.974 0 001.107-1.982l2.469.403c-.031.197-.347 1.966-1.856 3.394z"
            fill="#FFC107"
        />
        <Path
            d="M29.848 15.181l2.183-.682.746 2.386-2.184.682-.745-2.386z"
            fill="#FB8C00"
        />
        <Path
            d="M30.484 35.322L28 35.028c.106-.884-.553-1.968-.734-2.21l2-1.5c.15.198 1.453 2 1.218 4.004z"
            fill="#F44336"
        />
        <Path
            d="M37.616 32.153c-.934-.14-1.89-.197-2.834-.162l-.085-2.5a17.836 17.836 0 013.29.19l-.371 2.472z"
            fill="#FB8C00"
        />
        <Path
            d="M34.254 35.594l1.756-1.779 2.417 2.387-1.756 1.78-2.417-2.388z"
            fill="#F48FB1"
        />
        <Path
            d="M29.095 19.792l1.806 2.065-2.066 1.807-1.806-2.066 2.066-1.806z"
            fill="#F44336"
        />
        <Defs>
            <LinearGradientSvg
                id="paint0_linear_1_13768"
                x1={23.245}
                y1={19.3247}
                x2={13.9428}
                y2={24.9059}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.024} stopColor="#8F4700" />
                <Stop offset={1} stopColor="#703E2D" />
            </LinearGradientSvg>
        </Defs>
    </Svg>
)

const GEM_STONE = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M1.253 14.981l5.462-8.284 4.232 4.834-9.694 3.45z"
            fill="#E1F5FE"
        />
        <Path
            d="M13.784 21.331l-12.531-6.35 9.694-3.45 2.837 9.8z"
            fill="#81D4FA"
        />
        <Path
            d="M19.982 13.456l-9.035-1.925 2.838 9.8 6.197-7.875z"
            fill="#64B5F6"
        />
        <Path
            d="M38.71 14.981l-5.463-8.284-4.231 4.834 9.693 3.45z"
            fill="#0288D1"
        />
        <Path
            d="M26.178 21.331l12.531-6.35-9.694-3.45-2.837 9.8z"
            fill="#81D4FA"
        />
        <Path
            d="M19.981 13.456l9.035-1.925-2.838 9.8-6.197-7.875z"
            fill="#E1F5FE"
        />
        <Path
            d="M26.178 21.331l-6.197-7.875-6.197 7.875h12.394z"
            fill="#B2EBF2"
        />
        <Path
            d="M13.438 3.144h13.087l6.722 3.553-4.231 4.834-9.035 1.925-9.034-1.925-4.231-4.834 6.722-3.553z"
            fill="#B3E5FC"
        />
        <Path
            d="M19.981 36.647L1.253 14.981l12.531 6.35 6.197 15.316z"
            fill="#1E88E5"
        />
        <Path
            d="M19.981 36.647L38.71 14.981l-12.532 6.35-6.197 15.316z"
            fill="#B3E5FC"
        />
        <Path
            d="M26.178 21.331L19.98 36.647 13.784 21.33h12.394z"
            fill="#E1F5FE"
        />
    </Svg>
)

const MONEY_MOUTH_FACE = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M19.875 37.125c-8.719 0-18.125-5.469-18.125-17.469S11.156 2.188 19.875 2.188c4.844 0 9.313 1.593 12.625 4.5 3.594 3.187 5.5 7.687 5.5 12.968 0 5.282-1.906 9.75-5.5 12.938-3.313 2.906-7.813 4.531-12.625 4.531z"
            fill="url(#paint0_radial_1_13812)"
        />
        <Path
            d="M34.84 9.272c1.666 2.688 2.535 5.887 2.535 9.447 0 5.281-1.907 9.75-5.5 12.937-3.313 2.907-7.813 4.532-12.625 4.532-5.644 0-11.575-2.297-15.057-7.17 3.363 5.52 9.685 8.107 15.682 8.107 4.812 0 9.312-1.625 12.625-4.531 3.593-3.188 5.5-7.656 5.5-12.938 0-3.98-1.085-7.518-3.16-10.384z"
            fill="#EB8F00"
        />
        <Path
            d="M19.585 25.131c-3.975 0-7.67-.334-10.754-.903-.765-.14-1.44.531-1.284 1.294 1.025 5.012 5.96 9.128 12.034 9.128 6.647 0 11.122-4.25 12.05-9.147.144-.756-.53-1.416-1.287-1.275-3.088.569-6.784.903-10.76.903z"
            fill="#422B0D"
        />
        <Path
            d="M27.993 17.91a1.81 1.81 0 00-.412-.613 2.607 2.607 0 00-.66-.463 5.904 5.904 0 00-.687-.287v-2.628c.047.015.097.028.14.05.16.078.294.19.404.33.11.142.194.31.25.504.022.078.04.156.053.237a.469.469 0 00.456.404h.013c.3 0 .521-.266.478-.56-.066-.45-.216-.822-.447-1.115-.319-.407-.769-.65-1.347-.732v-.69a.454.454 0 00-.906 0v.712a2.421 2.421 0 00-.64.188 1.834 1.834 0 00-.588.422c-.16.175-.285.38-.375.615a2.243 2.243 0 00-.132.79c0 .31.05.582.15.816.1.235.244.444.429.625.184.182.406.338.668.47.15.074.316.146.488.212v2.71l-.003.002a1.251 1.251 0 01-.597-.275 1.287 1.287 0 01-.335-.46 1.366 1.366 0 01-.096-.324.468.468 0 00-.454-.4h-.046a.46.46 0 00-.454.534c.029.172.072.328.132.472.115.281.265.513.456.697.19.184.41.325.656.422.235.094.481.15.738.181v.544a.453.453 0 00.906 0v-.56c.262-.034.506-.093.725-.184.247-.103.456-.24.631-.412.172-.172.306-.375.403-.616.094-.237.144-.51.144-.81a2.035 2.035 0 00-.14-.809zM24.9 15.89a1.055 1.055 0 01-.347-.83c.003-.373.112-.666.328-.885.116-.119.269-.203.447-.256v2.259a1.926 1.926 0 01-.428-.288zm2.172 3.35c-.07.15-.163.279-.288.385a1.249 1.249 0 01-.456.24c-.028.01-.06.013-.09.02v-2.348c.246.116.446.241.59.379.234.224.35.493.344.809 0 .197-.035.365-.1.515z"
            fill="#422B0D"
            stroke="#422B0D"
            strokeWidth={0.0625}
            strokeMiterlimit={10}
        />
        <Path
            d="M13.919 27.431v6.61a5.378 5.378 0 005.378 5.378h1.025A5.378 5.378 0 0025.7 34.04v-6.657c-5.94 1.163-10.365.375-11.781.047z"
            fill="#05E005"
        />
        <Path
            d="M19.581 26.572c-1.934 0-3.837-.078-5.662-.231v1.09c1.419.328 5.84 1.116 11.784-.047v-1.087a68.12 68.12 0 01-6.122.275z"
            fill="#05E005"
        />
        <Path
            opacity={0.3}
            d="M19.581 26.572c-1.934 0-3.837-.078-5.662-.231v1.09c1.419.328 5.84 1.116 11.784-.047v-1.087a68.12 68.12 0 01-6.122.275z"
            fill="#AB3F2E"
        />
        <Path
            d="M22.178 33.835a1.81 1.81 0 00-.412-.613 2.606 2.606 0 00-.66-.462 5.897 5.897 0 00-.687-.288v-2.628c.047.016.097.028.14.05.16.078.294.19.403.331.11.14.194.31.25.503.022.078.041.157.054.238a.469.469 0 00.456.403h.012c.3 0 .522-.266.478-.56-.065-.446-.215-.818-.446-1.115-.32-.406-.77-.65-1.347-.731v-.69a.453.453 0 00-.907 0v.712a2.42 2.42 0 00-.64.187 1.834 1.834 0 00-.588.422c-.159.175-.284.381-.375.616a2.243 2.243 0 00-.13.79c0 .31.05.581.15.816.1.234.243.444.427.625.185.181.406.337.669.469.15.075.316.146.488.212v2.71l-.004.003a1.25 1.25 0 01-.596-.275 1.287 1.287 0 01-.335-.46 1.37 1.37 0 01-.097-.325c-.044-.225-.225-.4-.456-.4h-.047a.46.46 0 00-.453.535c.028.171.072.328.131.471.116.282.266.513.457.697.19.185.409.325.656.422.234.094.481.15.737.181v.544a.454.454 0 00.907 0v-.56c.262-.034.506-.093.724-.184.247-.103.457-.24.632-.412.172-.172.306-.375.403-.616.094-.237.144-.51.144-.81a2.103 2.103 0 00-.138-.808zm-3.097-2.02a1.058 1.058 0 01-.262-.368 1.187 1.187 0 01-.085-.462c.003-.372.113-.666.328-.885a1.02 1.02 0 01.447-.256v2.26a1.927 1.927 0 01-.428-.288zm2.172 3.354a1.09 1.09 0 01-.287.384 1.247 1.247 0 01-.457.24c-.028.01-.059.013-.09.02v-2.347c.247.115.447.24.59.378.235.225.35.494.344.81 0 .193-.034.362-.1.515z"
            fill="#404040"
        />
        <Path
            d="M9.297 10.247c-.522.447-1.297-.197-.81-.81.363-.443.85-.865 1.382-1.184 1.431-.922 3.194-1.219 4.697-.922.765.166.531 1.14-.169 1.144a7.99 7.99 0 00-5.1 1.772zm21.178 0c.522.447 1.297-.197.81-.81a5.426 5.426 0 00-1.382-1.184c-1.431-.922-3.194-1.219-4.697-.922-.765.166-.53 1.14.17 1.144a7.984 7.984 0 015.1 1.772z"
            fill="#422B0D"
        />
        <Path
            d="M15.841 17.91a1.812 1.812 0 00-.412-.613 2.608 2.608 0 00-.66-.463 5.897 5.897 0 00-.687-.287v-2.628c.046.015.096.028.14.05.16.078.294.19.403.33.11.142.194.31.25.504.022.078.041.156.053.237a.469.469 0 00.457.404h.012c.3 0 .522-.266.478-.56-.065-.447-.215-.819-.447-1.115-.318-.407-.768-.65-1.346-.732v-.69a.453.453 0 00-.907 0v.712a2.422 2.422 0 00-.64.188 1.835 1.835 0 00-.588.422c-.16.175-.284.38-.375.615a2.243 2.243 0 00-.131.79c0 .31.05.582.15.816.1.235.244.444.428.625.184.182.406.338.669.47.15.074.316.146.487.212v2.71l-.003.002a1.25 1.25 0 01-.597-.275 1.287 1.287 0 01-.334-.46 1.366 1.366 0 01-.097-.324.468.468 0 00-.453-.4h-.047a.46.46 0 00-.453.534c.028.172.072.328.131.472.116.281.266.513.457.697.19.184.409.325.656.422.234.094.481.15.737.181v.544a.454.454 0 00.906 0v-.56c.263-.034.507-.093.726-.184.246-.103.456-.24.63-.412.173-.172.307-.375.404-.616.094-.237.144-.51.144-.81a2.035 2.035 0 00-.141-.809zm-3.094-2.02a1.058 1.058 0 01-.262-.368 1.187 1.187 0 01-.085-.463c.003-.372.113-.665.329-.884a1.02 1.02 0 01.446-.256v2.259a1.927 1.927 0 01-.428-.288zm2.172 3.35c-.069.15-.162.279-.287.385a1.248 1.248 0 01-.457.24c-.028.01-.059.013-.09.02v-2.348c.247.116.447.241.59.379.235.224.35.493.344.809 0 .197-.034.365-.1.515z"
            fill="#422B0D"
            stroke="#422B0D"
            strokeWidth={0.0625}
            strokeMiterlimit={10}
        />
        <Defs>
            <RadialGradient
                id="paint0_radial_1_13812"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(17.8 0 0 17.8 19.875 19.656)"
            >
                <Stop offset={0.5} stopColor="#FDE030" />
                <Stop offset={0.919} stopColor="#F7C02B" />
                <Stop offset={1} stopColor="#F4A223" />
            </RadialGradient>
        </Defs>
    </Svg>
)

const NATURE = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M4.312 31.86c-.61 3.865 5.16 7.03 16.332 7.03s15.309-4.14 15.08-6.69c-.227-2.556-4.874-6.634-16.555-6.238C7.49 26.36 4.653 29.706 4.312 31.86z"
            fill="#179CF5"
        />
        <Path
            d="M8.338 30.282c.11.218 1.237.368 1.778.89.953.919 1.06 1.6 2.272 1.969 1.21.366 2.184-.253 3.612-.044 1.472.216 2.097 1.125 3.632 1.21 1.759.1 1.768-1.129 3.75-1.276 1.98-.146 2.253.526 3.853.072 1.575-.447 1.725-1.356 2.569-1.98.843-.626 1.434-.776 1.434-.776s-2.39-5.272-9.54-5.61c-7.748-.362-13.36 5.545-13.36 5.545z"
            fill="#F6C973"
        />
        <Path
            d="M12.575 29.481s1.656.094 3.431-.297c1.775-.39 3.413-1.003 3.607-.631.175.334-1.503 1.622-1.503 1.622s.78.566 2.515.381a8.516 8.516 0 003.613-1.237c.618-.391 1.61-.994 2.93-1.325 1.323-.332 2.095-.216 2.095-.216s-1.613-1.694-3.21-2.112c-3.465-.91-4.41-.622-6.63.028-3.56 1.04-6.848 3.787-6.848 3.787z"
            fill="#EDA052"
        />
        <Path
            d="M22.369 11.619l-2.257 1.509s1.794 2.084 2.313 4.96c.334 1.852.597 3.502.378 5.074-.09.641-.71 1.935-.888 2.37-.178.433-.434 1.459.36 1.665.794.206 3.381.281 3.762.231.385-.05.838-.331.632-1.26-.129-.578-.347-2.377-.475-3.606-.129-1.228-.207-3.593-1.275-6.497-1.041-2.834-2.55-4.446-2.55-4.446z"
            fill="#DC8124"
        />
        <Path
            d="M24.444 24.084c1.165.066 1.906-.156 1.906-.156l.16 1.181s-.713.2-2.057.119c-1.172-.072-2.231-.394-2.231-.394l.437-1.115c-.003-.004.61.296 1.785.365zm-1.61-3.203l.035.538c.009.209.015.53.015.53s.881.104 1.578.076c1.14-.047 1.653-.319 1.653-.319s-.021-.253-.053-.553c-.03-.3-.065-.55-.065-.55s-.56.275-1.732.353c-.843.05-1.43-.075-1.43-.075zm-.45-2.99s.535.109 1.531-.107c.97-.21 1.385-.578 1.385-.578s.09.284.144.5c.05.203.128.5.128.5s-.39.384-1.453.594c-1.041.206-1.56.065-1.56.065s-.05-.278-.084-.484c-.038-.24-.09-.49-.09-.49z"
            fill="#C0711F"
        />
        <Path
            d="M21.837 16.053s.494.034 1.454-.328c.837-.316 1.197-.738 1.197-.738L23.309 12.4l-2.825 1.025 1.353 2.628z"
            fill="#A2672B"
        />
        <Path
            d="M21.997 12.838l4.762 1.796s.222-.63.332-1.15c.071-.343.137-.943.284-.934.244.019.39.416.4.978.01.484-.119 1.335-.119 1.335l1.013.309s.228-.475.375-1.078c.153-.631.056-1.022.215-1.022.272 0 .472.506.447 1.281-.019.606-.156 1.106-.125 1.128.05.04.6.132 1.047.257.447.125.716.159.716.159s.725-3.444-1.516-4.931c-2.581-1.713-5.812-.413-5.812-.413l2.09-1.75s-.115-.366-.453-.903c-.187-.3-.503-.64-.578-.853-.053-.15.4-.2 1.003.162.481.291 1.15.875 1.163.885l.543-.397s-.037-.453-.25-.84c-.178-.329-.378-.673-.3-.716.16-.091.625.03.94.337.273.266.467.666.467.666l1.625-1.038s-1.125-1.765-3.57-1.678c-2.443.09-3.502 1.422-3.912 1.888-.41.462-1.06 1.525-1.06 1.525l.232-2.844s-.147-.194-.55-.319c-.4-.125-.76-.04-.765-.094-.029-.193.306-.528.856-.59.322-.038.622.012.622.012l.262-2.74s-2.984.059-3.931 2.75c-.813 2.312.69 4.434.416 4.64-.235.175-2.172-1.95-5.057-1.269-3.165.747-4.03 4.088-3.85 4.088.485 0 1.96.069 2.047 0 .044-.034.175-.444.463-.884.287-.441 1.028-1.085 1.318-.963.15.063-.056.328-.25.803-.193.49-.378 1.132-.378 1.132l1.357-.013s.462-1.566 1.015-1.681c.238-.05.022.387-.037.778-.06.403-.025.94-.025.94l2.118.126s-2.659.103-4.43 1.718c-1.835 1.672-2.032 3.372-1.891 4.847.1 1.05.312 1.778.412 1.89.078.091 1.41-1.415 1.463-1.54.053-.125-.091-.869-.091-1.581 0-.713.16-1.072.303-1.088.144-.018.106.5.216.947.112.466.284.857.356.89.072.035.866-1 .866-1s-.088-.508-.135-.915c-.047-.41.044-.887.16-.969.128-.09.187.416.337.816.122.319.222.494.288.578l1.409-1.331s-1.081 1.966-.916 3.984c.185 2.26 1.57 2.857 1.657 2.841.09-.019 1.1-2.219 1.1-2.219s-.316-.387-.591-.903c-.347-.65-.328-1.234-.2-1.316.181-.115.447.607.712.929.27.322.447.453.504.453.056 0 .79-1.519.79-1.519s-.219-.253-.39-.516c-.144-.221-.272-.606-.15-.834.13-.122.262.194.465.36.2.165.388.337.388.337l1.778-3.734z"
            fill="#728137"
        />
        <Path
            d="M22.372 13.994c.103-.07.307-1.447.407-2.135.087-.622.306-1.547-.166-1.64-.325-.063-.46.397-.563.887a84.496 84.496 0 01-.23 1.035s-.42-.804-.7-1.294c-.204-.353-.645-1.1-.995-.878-.403.256.035 1.08.282 1.534.247.453.525.984.525.984s-.74-.253-1.172-.387c-.472-.147-1.106-.275-1.194-.022-.153.444.431.666 1.563 1.128 1.125.463 2.071.9 2.243.788z"
            fill="#BDCF47"
        />
        <Path
            d="M19.122 23.947c-.778.097-1.366.75-1.19 1.762.174 1.013 1.215 1.166 1.796 1.07.7-.12 1.45-.904.96-2.023-.328-.753-1.088-.868-1.566-.809z"
            fill="#A2672B"
        />
        <Path
            d="M5.484 31.288c-.237-.188-.803.734.022 1.78.275.35.494.873 1.01 1.238.48.341.83.357 1.515.863.337.25 1.025.522 1.206.494.403-.06.475-.103.447-.213-.044-.16-.578-.35-.99-.716-.441-.39-.626-1.059-1.107-1.425-.584-.446-.86-.259-1.584-1.024-.338-.354-.488-.972-.519-.997zm25.331 4.275c.103.19 1.578-.832 2.225-1.175.647-.341 1.644-.441 1.916-1.62.175-.765-.4-1.518-.569-1.5-.172.02-.256.735-.628 1.216-.513.666-1.178.779-1.784 1.347-.485.457-1.294 1.485-1.16 1.732z"
            fill="#0FCAFF"
        />
        <Path
            d="M7.666 29.181c.184.232-.494.741-.381 1.16.265.778.684.569 1.728 1.387 1.006.785.875 1.197 1.653 1.822.628.507 1.481.913 2.753.816 1.272-.097 1.622-.172 2.535-.06 1.54.194 1.475.8 3.087 1.179.728.172 1.444-.057 2.147-.475.634-.378 1.481-.835 2.716-.853 1.234-.02 2.809.384 4.171-.154 1.113-.44 1.375-1.137 2.191-1.897.816-.759 1.856-.83 2.05-1.48.228-.76-.74-1.179-.894-1.348-.153-.171-.134-.475.21-.456.343.019 2.03.703 1.918 1.975-.087.972-.912 1.31-1.368 1.538-.288.143-.97.475-1.69 1.387-.723.913-1.076 1.453-2.05 1.766-1.1.35-2.357.322-3.798.247a5.864 5.864 0 00-2.981.628c-.834.419-1.828.656-2.697.512-1.387-.228-1.881-.931-3.19-1.16-1.254-.302-2.26.457-4.291-.209-1.569-.512-2.013-1.462-2.431-1.937-.42-.475-.722-.931-1.71-1.369-.987-.437-1.178-1.081-1.16-1.5.035-.722.57-1.122.779-1.31.21-.187.628-.302.703-.209z"
            fill="#76F8FF"
        />
    </Svg>
)

const OFFICE_BUILDING = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Path
            d="M2.269 10.05S1.153 8.288.934 7.816c-.28-.606.029-.753 1.079-.76.671-.003 7.125 0 7.125 0h5.837s-.044-2.1 0-2.212c.044-.11 9.866-.022 9.91 0 .043.022.021 2.212.021 2.212H38.36c.31 0 .632.285.36.825-.272.541-1.028 1.585-1.028 1.585l-.085 27.384-2.172 1.213-31.49-.125-1.672-.96-.003-26.928z"
            fill="#C8C8C8"
        />
        <Path
            d="M9.05 37.288V9.316l10.294-1.569L30.7 9.407v27.88l-10.663.554-10.987-.553z"
            fill="#E1E1E1"
        />
        <Path
            d="M9.053 7.053l21.662.003-.015 2.35-21.65-.09.003-2.263zM2.27 36.978l12.497-.084s-.015-9.66 0-10.047c.01-.281.079-.513.438-.538.36-.024 8.694-.024 9.003-.024.306 0 .538.178.538.615v9.978s12.865-.118 12.859-.022c-.01.097.015 1.432.015 1.613 0 .178-.078.437-.565.437H2.687c-.206 0-.41-.206-.41-.462s-.006-1.466-.006-1.466z"
            fill="#9A9A9A"
        />
        <Path
            d="M17.104 10.29h5.612v3.325h-5.612V10.29zm-.028 5.4h5.668v3.194h-5.668V15.69zm-.054 5.404h5.722v3.43h-5.722v-3.43zm8.516-10.697c-.028.08 0 3.3 0 3.3l3.425-.01s.047-3.25-.019-3.315c-.065-.066-3.381-.057-3.406.025zm.053 5.187l.025 3.272 3.247-.025.053-3.194-3.325-.053zm.16 5.535s-.082 3.165-.029 3.246c.053.082 3.141.082 3.247 0 .107-.08 0-3.218 0-3.218l-3.219-.028zm.015 5.284l.025 3.29s3.066.072 3.138 0c.072-.071.143-3.218.047-3.29-.097-.072-3.21 0-3.21 0zm.088 5.36l.043 3.268s3.022.025 3.088-.022c.066-.047.069-3.128.025-3.222-.044-.093-3.156-.025-3.156-.025zm6.797 3.218c.037.047 3.259.047 3.259.047s.1-3.219-.016-3.266c-.084-.037-3.272-.084-3.315-.047-.1.091.043 3.232.072 3.266zm-.047-8.416c-.05.125-.094 3.291-.025 3.316.072.025 3.15.047 3.243 0 .094-.047.166-3.197.072-3.269-.093-.072-3.243-.162-3.29-.047zm-.07-2.09c.085.106 3.126.094 3.22.047.093-.047.047-3.103-.025-3.22-.072-.115-3.125-.046-3.197.026-.072.072-.09 3.028.003 3.147zm.095-8.603c-.06.118 0 3.056.047 3.15.046.093 3.103.093 3.15.025.046-.072.071-3.078.024-3.15-.05-.072-3.175-.12-3.221-.025zm.068-2.21c.085.085 3.15.025 3.22 0 .071-.025.046-3.125.024-3.243-.025-.12-3.172-.047-3.269 0-.09.046-.09 3.125.025 3.243zm-22.118-3.38c-.029.08 0 3.3 0 3.3l3.406-.054s.066-3.206 0-3.272c-.066-.069-3.378-.056-3.406.025zm.078 5.396s-.085 3.19.022 3.244c.106.053 3.156.08 3.262 0 .106-.082.019-3.275.019-3.275l-3.303.03zm.053 5.447c-.06.044-.081 3.165-.028 3.247.053.08 3.14.08 3.247 0 .106-.082.08-3.14 0-3.22-.082-.077-3.113-.105-3.22-.027zm-.106 5.325c-.085.084-.047 3.219.025 3.29.072.072 3.137 0 3.137 0l.047-3.29s-3.116-.094-3.21 0zm.018 5.228v3.297l3.07-.028.068-3.244-3.138-.025zM4.02 34.947l3.219-.025.022-3.275s-3.244-.085-3.313.034c-.068.116.072 3.266.072 3.266zm-.047-8.416c-.05.125-.093 3.29-.025 3.316.072.025 3.15.047 3.244 0 .094-.047.166-3.197.072-3.27-.094-.07-3.244-.165-3.29-.046zm-.072-2.09c.085.106 3.125.093 3.22.046.093-.047.046-3.103-.026-3.218-.072-.12-3.125-.047-3.197.025-.065.065-.09 3.028.003 3.146zm.094-8.604c-.06.12 0 3.057.047 3.15.047.094 3.103.094 3.15.025.047-.072.072-3.078.025-3.15-.047-.072-3.175-.118-3.222-.025zm.072-2.21c.084.085 3.15.026 3.219 0 .072-.024.047-3.124.025-3.243-.022-.119-3.172-.047-3.269 0-.094.047-.094 3.125.025 3.244z"
            fill="#6CA4AB"
        />
        <Path
            d="M16.175 36.988c-.022-.022-.066-6.24.022-6.353.09-.113 7.137-.044 7.203.021.066.066.044 6.288.022 6.332-.022.043-7.247 0-7.247 0z"
            fill="#E1E1E1"
        />
        <Path
            d="M16.838 31.24h2.647v5.207h-2.647v-5.206zm3.328-.009h2.703v5.207h-2.703V31.23z"
            fill="#536F7B"
        />
    </Svg>
)