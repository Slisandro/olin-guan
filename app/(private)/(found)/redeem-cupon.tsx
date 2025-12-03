import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { ClipPath, Defs, Ellipse, G, Path } from "react-native-svg";

export default function RedeemCupon() {
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

                    <Text className="text-[20px] font-poppins-bold text-white">Redeem your coupon</Text>

                </View>

                <View className="bg-white flex-1 mt-[10px] pt-[30px] gap-[20px] px-[20px] pb-[30px] w-full">
                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Do you have a promotional code?
                    </Text>
                    <View className="flex-row gap-4">
                        <View className="flex-1 relative flex-row shadow-black/25 shadow-sm px-[10px] py-[15px] bg-white rounded-[12px]">
                            <TextInput placeholderTextColor={"#AAABAD"} className="text-[#646464] text-[14px] font-[500]" placeholder="Write here" />
                        </View>

                        <Pressable onPress={() => setLoading(true)} className="flex-1 w-full rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                            <Text className='text-[16px] font-poppins-semibold text-white'>Verify code</Text>
                        </Pressable>
                    </View>

                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>
                        Coupons available in your account
                    </Text>

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

                    <Pressable onPress={() => router.push("/(private)/(found)/list-cards-active")} className="w-full bg-[#D35F07] p-[8px] py-3 mx-auto rounded-[12px] border border-[#F2CB04] flex-row justify-between items-center">
                        <Text className="text-white font-poppins-bold text-[14px] text-center">See where I can use them</Text>

                        <Svg
                            width={12}
                            height={25}
                            viewBox="0 0 12 25"
                            fill="none"
                        >
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.071 13.071l-5.657 5.657L2 17.314l4.95-4.95L2 7.414 3.414 6l5.657 5.657a1 1 0 010 1.414z"
                                fill="#fff"
                            />
                        </Svg>
                    </Pressable>
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