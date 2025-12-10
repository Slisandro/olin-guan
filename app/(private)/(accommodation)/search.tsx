import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Clock, Search, User } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Ellipse, G, LinearGradient as LinearGradientSvg, Path, RadialGradient, Stop } from "react-native-svg";

export default function Tour() {
    const [loading, setLoading] = useState(false);
    const [isDelete, setDelete] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(tabs)/trip")

                setTimeout(() => {
                    setDelete(true)
                }, 1000);
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

            {
                isDelete && (
                    <BlurView intensity={25} className="absolute flex-1 inset-0 z-50 items-center justify-center bg-[#FFFFFF6B]">
                        <View className="items-center justify-center p-10 rounded-2xl bg-white w-[90%] gap-[16px]">
                            <SUCCESS_2 />
                            <Text className="font-poppins-bold text-[#1B77F2] text-[16px] text-center">
                                You are about to eliminate a day of activities from your itinerary!
                            </Text>
                            <Text className="text-center text-[#8A8A8A]">
                                Are you sure you want to delete this activity?
                            </Text>

                            <View className="flex-row justify-between w-full">
                                <Pressable onPress={() => setDelete(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#DADFB5] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-[#94A604]'>Cancel</Text>
                                </Pressable>

                                <Pressable onPress={() => setDelete(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#94A604] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-white'>Yes, delete it</Text>
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
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white text-center">Find accommodation for your trip</Text>

                    <View className="w-full flex-row flex-wrap px-4 gap-3 mt-4 bg-white py-4 rounded-xl">
                        <Search color="#646464" size={18} />

                        <TextInput placeholder="Search..." className="flex-1" />
                    </View>
                </View>

                <View className="bg-white flex-1 mt-[20px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Destination
                    </Text>

                    <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                        <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                            <DESERT />
                        </View>
                        <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Write here..." />
                    </View>


                    <View className="flex flex-row justify-between gap-[20px]">
                        <View className="gap-[9px] w-[45%]">
                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                Check-in
                            </Text>
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <CALENDAR />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Date" />
                            </View>
                        </View>

                        <View className="gap-[9px] w-[45%]">
                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                                Check-out
                            </Text>
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <CALENDAR />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Hour" />
                            </View>
                        </View>
                    </View>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Pickup date/time
                    </Text>

                    <View className="flex flex-row justify-between gap-[20px]">
                        <View className="gap-[9px] w-[45%]">
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <CALENDAR />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Date" />
                            </View>
                        </View>

                        <View className="gap-[9px] w-[45%]">
                            <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                                <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                                    <Clock strokeWidth={"1.5"} color="#646464" />
                                </View>
                                <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Hour" />
                            </View>
                        </View>
                    </View>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Number of passengers
                    </Text>

                    <View className="relative shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                        <View className="absolute top-0 bottom-0 left-[10px] flex items-center justify-center">
                            <User strokeWidth={"1.5"} color="#646464" />
                        </View>
                        <TextInput placeholderTextColor={"#646464"} className="ml-10 text-[#646464] text-[14px] font-[500]" placeholder="Write here..." />
                    </View>

                    <View className="flex-row border-b-2 border-b-[#646464] pb-4 justify-between">
                        <Text className='font-poppins font-400 text-[14px] text-text-600 leading-[19px]'>
                            Includes children
                        </Text>
                        <View className="w-10 h-6 rounded-full bg-[#D9E6F8]" />
                    </View>
                    <View className="flex-row pb-4 justify-between">
                        <Text className='font-poppins font-400 text-[14px] text-text-600 leading-[19px]'>
                            Unlimited mileage
                        </Text>
                        <View className="w-10 h-6 rounded-full bg-[#D9E6F8]" />
                    </View>

                    <View className="h-auto w-full">
                        <TravelServiceCarousel />
                    </View>

                    {/* @ts-ignore */}
                    <Pressable onPress={() => router.push("/(private)/(accommodation)")} className="w-full rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                        <Text className='text-[16px] font-poppins-semibold text-white'>Find accommodation</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

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

const ARROW = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <G clipPath="url(#clip0_1_17104)">
            <Path
                d="M9.518 7.034l4.965 4.965-4.965 4.966"
                stroke="#646464"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_17104">
                <Path fill="#fff" transform="rotate(-90 12 12)" d="M0 0H24V24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const SUCCESS = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
            fill="#697601"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path d="M7.75 12l2.83 2.83 5.67-5.66" fill="#697601" />
        <Path
            d="M7.75 12l2.83 2.83 5.67-5.66"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const ALERT = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01z"
            fill="#D35F07"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 9v5"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.994 17h.01"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const GROUP = () => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
    >
        <Circle cx={20} cy={20} r={20} fill="#fff" />
        <G clipPath="url(#clip0_1_17136)">
            <Path
                d="M23.22 11.123A11.1 11.1 0 0132.91 27.64l1.36 3.556a1.708 1.708 0 01-2.056 2.254l-4.25-1.19a11.102 11.102 0 01-13.41-16.971 11.101 11.101 0 018.665-4.166z"
                fill="url(#paint0_radial_1_17136)"
            />
            <Path
                d="M18.162 6a11.1 11.1 0 00-9.69 16.517l-1.36 3.556a1.708 1.708 0 002.057 2.254l4.247-1.19A11.1 11.1 0 1018.162 6z"
                fill="url(#paint1_linear_1_17136)"
            />
            <Path
                d="M18.084 12.873c-.611.12-1.28.516-1.807 1.445a.855.855 0 01-1.486-.846c.754-1.323 1.824-2.052 2.965-2.276a4.15 4.15 0 013.06.618c.827.547 1.495 1.44 1.515 2.51.023 1.12-.657 2.127-1.91 2.868-.851.504-1.183.845-1.324 1.072-.12.19-.147.364-.147.755a.854.854 0 01-1.708 0c0-.464.024-1.043.405-1.656.359-.576.972-1.09 1.904-1.64.914-.541 1.08-1.057 1.074-1.364-.008-.352-.242-.786-.751-1.12a2.442 2.442 0 00-1.79-.366zm.439 11.27a1.28 1.28 0 110-2.562 1.28 1.28 0 010 2.561z"
                fill="url(#paint2_linear_1_17136)"
            />
        </G>
        <Defs>
            <RadialGradient
                id="paint0_radial_1_17136"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(49.399 -9.542 28.223) scale(15.7448)"
            >
                <Stop offset={0.63} stopColor="#FC0" />
                <Stop offset={0.85} stopColor="#DDB825" />
                <Stop offset={1} stopColor="#BD9702" />
            </RadialGradient>
            <LinearGradientSvg
                id="paint1_linear_1_17136"
                x1={6.99649}
                y1={6}
                x2={29.3886}
                y2={28.2657}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#0FAFFF" />
                <Stop offset={1} stopColor="#2764E7" />
            </LinearGradientSvg>
            <LinearGradientSvg
                id="paint2_linear_1_17136"
                x1={15.35}
                y1={11.3513}
                x2={18.8765}
                y2={24.7094}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FDFDFD" />
                <Stop offset={1} stopColor="#CCEAFF" />
            </LinearGradientSvg>
            <ClipPath id="clip0_1_17136">
                <Path fill="#fff" transform="translate(6.5 6)" d="M0 0H28V28H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

const LOCATION = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 13.43a3.12 3.12 0 10.001-6.24 3.12 3.12 0 000 6.24z"
            stroke="#646464"
            strokeWidth={1.5}
        />
        <Path
            d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
            stroke="#646464"
            strokeWidth={1.5}
        />
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

const UPLOAD = () => (
    <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
    >
        <Circle cx={15} cy={15} r={15} fill="#1B77F2" />
        <G
            clipPath="url(#clip0_1_17898)"
            stroke="#fff"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M18.7 12.416c3 .259 4.225 1.8 4.225 5.175v.109c0 3.725-1.492 5.216-5.217 5.216h-5.425c-3.725 0-5.217-1.491-5.217-5.216v-.108c0-3.35 1.209-4.892 4.159-5.167M15 17.5V8.017M17.79 9.875L15 7.083l-2.792 2.792" />
        </G>
        <Defs>
            <ClipPath id="clip0_1_17898">
                <Path fill="#fff" transform="translate(5 5)" d="M0 0H20V20H0z" />
            </ClipPath>
        </Defs>
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


// @ts-expect-error Async Server Component
import IMAGE_FOOD_1 from '@/assets/images/components/best-food/best-food-1.jpg';
// @ts-expect-error Async Server Component
import IMAGE_FOOD_2 from '@/assets/images/components/best-food/best-food-2.jpg';
import HeartIcon from "@/components/icons/support-like-question-share/heart/heart";
import StarIcon from "@/components/icons/support-like-question-share/star/star";
import TravelServiceCarousel from "@/components/travel-service-carousel";

const ITEMS_BEST_FOOD = [
    {
        id: 1,
        name: "Luxury Hotel",
        title: 'Sun city tour',
        subtitle: 'Japanese',
        pricePerNight: "18:00 - 20:00",
        images: [IMAGE_FOOD_1]
    },
    {
        id: 2,
        name: "Pasta House",
        title: 'Sun city tour',
        subtitle: 'Italian',
        pricePerNight: "18:00 - 20:00",
        images: [IMAGE_FOOD_2]
    },
    {
        id: 3,
        name: "Luxury Hotel",
        title: 'Sun city tour',
        subtitle: 'Japanese',
        pricePerNight: "18:00 - 20:00",
        images: [IMAGE_FOOD_1]
    },
    {
        id: 4,
        name: "Pasta House",
        title: 'Sun city tour',
        subtitle: 'Italian',
        pricePerNight: "18:00 - 20:00",
        images: [IMAGE_FOOD_2]
    }
];

const BestFood = () => {
    const router = useRouter();
    return (
        <View className="gap-[16px] py-[16px]">
            {ITEMS_BEST_FOOD.map(item => (
                <Pressable key={item.id} onPress={() => router.push("/(private)/(tour)/detail")} className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-sm">
                    <View className='relative w-full h-[170px]'>
                        {/* Chip best seller */}
                        <Text className="bg-primary-900 font-poppins-bold font-700 text-[12px] border-2 border-primary-900 text-white w-auto absolute top-[16px] z-10 px-[12px] py-[5px] rounded-[16px] left-[16px] backdrop-blur-[50px]">
                            Popular
                        </Text>
                        {/* Chip star */}
                        <View className="bg-warning-700 border-2 border-warning-700  w-auto absolute top-[16px] z-10 px-[12px] py-[5px] rounded-[16px] right-[16px] backdrop-blur-[50px] flex flex-row items-center">
                            <StarIcon size='small' fill={"#F2CB04"} />
                            <Text className="text-white ml-1 text-[12px] font-poppins-bold font-700">
                                4.5
                            </Text>
                        </View>
                        <Image
                            source={item.images[0]}
                            style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, width: "100%", height: "100%" }}
                            resizeMode='cover'
                        />
                    </View>
                    <View className="relative p-[12px]">
                        <View className="bg-white border-2 border-white shadow-soft-black w-[44px] h-[44px] absolute top-[-30] z-10 rounded-full right-[16px] backdrop-blur-[50px] flex flex-row items-center justify-center">
                            <HeartIcon size='extra-large' fill={"#B91C21"} />
                        </View>

                        <Text className="font-poppins-bold font-700 text-[16px] leading-[20px] text-[#000000CC]">{item.title}</Text>

                        <View className="flex flex-row gap-[4px] mt-[4px]">
                            <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">$$</Text>
                            <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">·</Text>
                            <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">{item.subtitle}</Text>
                            <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">·</Text>
                            <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">{item.pricePerNight}</Text>
                        </View>
                    </View>
                </Pressable>
            ))}
        </View>
    )
};