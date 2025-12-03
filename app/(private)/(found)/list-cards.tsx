import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { ClipPath, Defs, Ellipse, G, Path } from "react-native-svg";

export default function ListCards() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState("$250");

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(tabs)/wallet")
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
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)/wallet")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white">List cards</Text>

                </View>

                <View className="bg-white flex-1 mt-[10px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        List of cards
                    </Text>

                    <Text className="text-[#444444] font-poppins-medium text-[14px]">Add or remove your cards.</Text>

                    <View className="relative flex-row shadow-black/25 shadow-sm px-[10px] py-[15px] bg-[#D9E6F8] rounded-[12px]">
                        <View className="absolute top-0 bottom-0 left-6 items-center justify-center">
                            <MASTERCARD />
                        </View>
                        <TextInput placeholderTextColor={"#AAABAD"} className="ml-14 text-[#646464] text-[14px] font-[500]" placeholder="Account     ************3994" />

                        <View className="absolute top-0 bottom-0 right-6 items-center justify-center">
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <Path
                                    d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.848 9.14l-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79h-6.42c-2.79 0-2.88-1.22-2.99-2.79l-.65-10.07M10.328 16.5h3.33M9.5 12.5h5"
                                    stroke="#646464"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </View>
                    </View>

                    <View className="mt-auto gap-4">
                        <Pressable onPress={() => setLoading(true)} className="w-full rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                            <Text className='text-[16px] font-poppins-semibold text-white'>Add Card</Text>
                        </Pressable>

                        
                        <Pressable onPress={() => setLoading(true)} className="w-full rounded-[16px] py-[16px] border-[1.5px] border-[#1B77F2] bg-[#D9E6F8] items-center">
                            <Text className='text-[16px] font-poppins-semibold text-[#1B77F2]'>Go back</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
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