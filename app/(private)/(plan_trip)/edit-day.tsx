import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, ClipPath, Defs, Ellipse, G, LinearGradient as LinearGradientSvg, Path, RadialGradient, Stop } from "react-native-svg";

export default function EditDay() {
    const [changeLocation, setChangeLocation] = useState(false);
    const [isDelete, setDelete] = useState(false);
    const router = useRouter();

    return (
        <SafeAreaView
            className="bg-[#51B2CB]"
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />

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
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/trip")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>

                        <Image source={require("@/assets/images/components/trip/beach.png")} className="shadow-md shadow-[#00000040] rounded-full w-[50px] h-[50px]" />
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white">Day 2: June 26</Text>
                </View>

                <View className="bg-white flex-1 mt-[20px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className="text-[#646464] w-full font-poppins-bold text-[14px] text-center">Drag, change or delete whatever you want for this day</Text>

                    <Text className="text-[#646464] font-poppins-bold text-[14px]">9:00 AM</Text>

                    <View className="px-[10px] py-[20px] gap-[20px] shadow-md shadow-[#97C3FF66] bg-white rounded-[12px]">
                        <View className="flex-row justify-between items-center w-full">
                            <Image source={require("@/assets/images/components/trip/beach.png")} className="shadow-md shadow-[#00000040] rounded-full w-[40px] h-[40px]" />

                            <Text className="text-[#646464] text-[16px] font-poppins-semibold">
                                Breakfast at “El Rincón del Café”
                            </Text>

                            <Pressable>
                                <ARROW />
                            </Pressable>
                        </View>

                        {
                            changeLocation ? (
                                <Pressable onPress={() => setChangeLocation(false)} className="items-center px-10 gap-[10px]">
                                    <View className="flex-row items-center w-full gap-[5px]">
                                        <SUCCESS />
                                        <Text className="text-[#646464] text-[14px] font-poppins-medium">Confirmed</Text>
                                    </View>

                                    <View className="flex-row items-center w-full gap-[5px]">
                                        <LOCATION />
                                        <Text className="text-[#646464] text-[14px] font-poppins-medium">Estimated duration:1 hour</Text>
                                    </View>

                                    <View className="flex-row items-center w-full gap-[5px]">
                                        <LOCATION />
                                        <Text className="text-[#646464] text-[14px] font-poppins-medium">Blvd. Kukulcán Km 9, Cancún</Text>
                                    </View>
                                </Pressable>
                            ) : null
                        }

                        <View className="flex-row items-center justify-center gap-[42px]">
                            <Pressable onPress={() => setChangeLocation(true)}>
                                <Text className="text-[#1B77F2] text-[14px] font-poppins-bold underline">
                                    Change the location
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => setDelete(true)}>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-bold underline">
                                    Delete
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    <Text className="text-[#646464] font-poppins-bold text-[14px]">11:00 AM</Text>

                    <View className="px-[10px] py-[20px] gap-[20px] shadow-md shadow-[#97C3FF66] bg-white rounded-[12px]">
                        <View className="flex-row justify-between items-center w-full">
                            <Image
                                source={require("@/assets/images/components/trip/beach.png")}
                                className="shadow-md shadow-[#00000040] rounded-full w-[40px] h-[40px]"
                            />

                            <View className="flex-1 px-[10px]">
                                <Text className="text-[#646464] text-[16px] font-poppins-semibold">
                                    Isla Mujeres tour
                                </Text>

                                <View className="flex-row items-center">
                                    <SUCCESS />
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Confirmed</Text>
                                </View>
                            </View>

                            <Pressable>
                                <ARROW />
                            </Pressable>
                        </View>

                        <View className="flex-row gap-[8px] items-center justify-center bg-[#F2CB04] px-[16px] rounded-[8px] py-[10px]">
                            <ALERT />
                            <Text className="text-[#444444] text-[14px] font-[500] leading-[-2%]">Requires punctual departure from the pier</Text>
                        </View>
                    </View>

                    <LinearGradient
                        colors={["#55B6C8", "#1B77F2"]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={{ flex: 1, borderRadius: 12 }}
                    >
                        <View className="py-[20px] px-[10px] gap-[10px] rounded-[12px] items-center">
                            <GROUP />

                            <View className="items-center">
                                <Text className="font-poppins-semibold text-[16px] text-white">
                                    You have X hour free.
                                </Text>
                                <Text className="font-poppins-semibold text-[14px] text-white">
                                    Do you want to add anything?
                                </Text>
                            </View>

                            <Pressable onPress={() => router.push("/(private)/(tabs)/explore")} className="rounded-[12px] px-[16px] py-[8px] bg-[#D9E6F8]">
                                <Text className="text-[#1B77F2] font-poppins-semibold text-[12px]">Explore options</Text>
                            </Pressable>
                        </View>
                    </LinearGradient>

                    <Text className="text-[#646464] font-poppins-bold text-[14px]">18:00 PM</Text>

                    <View className="px-[10px] py-[20px] gap-[20px] shadow-md shadow-[#97C3FF66] bg-white rounded-[12px]">
                        <View className="flex-row justify-between items-center w-full">
                            <Image
                                source={require("@/assets/images/components/trip/beach.png")}
                                className="shadow-md shadow-[#00000040] rounded-full w-[40px] h-[40px]"
                            />

                            <View className="flex-1 px-2">
                                <Text className="text-[#646464] text-[16px] font-[600]">
                                    Romantic dinner at “El Muellecito”
                                </Text>

                                <Text className="text-[#AAABAD] text-[12px] font-[500]">Suggested by AI</Text>
                            </View>

                            <Pressable>
                                <ARROW />
                            </Pressable>
                        </View>

                        <View className="flex-row justify-around items-center">
                            <Pressable className="bg-[#FCF9E4] w-[150px] items-center border border-[#F2CB04] rounded-[12px] px-[12px] py-[8px]">
                                <Text className="text-[#CAA900] text-[12px] font-[600]">Look another opption</Text>
                            </Pressable>

                            <Pressable className="bg-[#D9E6F8] w-[150px] items-center border border-[#1B77F2] rounded-[12px] px-[12px] py-[8px]">
                                <Text className="text-[#1B77F2] text-[12px] font-[600]">Accept</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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