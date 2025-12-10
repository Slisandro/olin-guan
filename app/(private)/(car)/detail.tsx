import { BlurView } from "expo-blur";
import { Image as ImageExpo } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_1 from '@/assets/images/components/best-tours/best-tours-1.jpg';

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
                            <Svg
                                width={80}
                                height={80}
                                viewBox="0 0 80 80"
                                fill="none"
                            >
                                <Path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M73.335 40c0 18.41-14.924 33.334-33.334 33.334C21.591 73.334 6.668 58.41 6.668 40c0-18.41 14.923-33.333 33.333-33.333 18.41 0 33.334 14.923 33.334 33.333zM36.668 26.667A3.333 3.333 0 0040.001 30h.027a3.333 3.333 0 000-6.666h-.027a3.333 3.333 0 00-3.333 3.333zm3.333 30a3.333 3.333 0 003.334-3.333V36.667a3.333 3.333 0 10-6.667 0v16.667a3.333 3.333 0 003.333 3.333z"
                                    fill="#1D4ED8"
                                />
                            </Svg>
                            <Text className="font-poppins-bold text-[#646464] text-[16px] text-center">
                                Confirm Reservation?
                            </Text>
                            <View className="w-full">
                                <View className="flex-row justify-between">
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        Date:
                                    </Text>
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        Tue, Jun 30
                                    </Text>
                                </View>
                                <View className="flex-row justify-between">
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        Time:
                                    </Text>
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        3:30 pm
                                    </Text>
                                </View>
                                <View className="flex-row justify-between">
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        Party Size:
                                    </Text>
                                    <Text className="text-center text-[#646464] text-[14px] font-poppins-medium">
                                        3
                                    </Text>
                                </View>
                            </View>

                            <View className="flex-row items-center gap-4">
                                <Checkbox />
                                <Text className="flex-1 text-[#646464] text-[14px] font-poppins-bold">Add itinerary</Text>
                            </View>

                            <View className="flex-row justify-between w-full">
                                <Pressable onPress={() => setDelete(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#DADFB5] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-[#94A604]'>Cancel</Text>
                                </Pressable>

                                <Pressable onPress={() => router.push("/(private)/(tabs)/trip")} className="w-[45%] rounded-[16px] py-[16px] bg-[#94A604] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-white'>Confirm</Text>
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

                    <Text className="text-[20px] font-poppins-bold text-white text-center">Toyota Corolla 2022</Text>
                </View>

                <View className="bg-white flex-1 mt-[10px] gap-[20px] pb-[30px] w-full">
                    <View>

                        <Pressable style={styles.container} className='relative p-[10px] shadow-soft-gray rounded-[16px] bg-red'>
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                                className="rounded-[16px]"
                            />
                        </Pressable>

                        <View className="flex-row items-center justify-between h-[110px] gap-2 px-[10px]">
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                                className="rounded-[16px] flex-1"
                            />
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                                className="rounded-[16px] flex-1"
                            />
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                                className="rounded-[16px] flex-1"
                            />
                        </View>
                    </View>

                    <View className="flex gap-[15px] px-[20px]">
                        <View className="flex-row gap-2 items-center">
                            <CarIcon color="#1B77F2" />
                            <Text className='font-poppins-bold font-700 text-[16px] text-[#1B77F2] leading-[19px]'>
                                V8
                            </Text>
                            <Text className='font-poppins-bold font-700 text-[16px] text-[#1B77F2] leading-[19px]'>
                                4
                            </Text>
                        </View>

                        <View className="flex-row gap-2 items-center justify-between">
                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                                Terms and Conditions
                            </Text>
                            <Pressable>
                                <Text className='font-poppins-bold font-700 text-[14px] text-text-600'>
                                    Read more
                                </Text>
                            </Pressable>
                        </View>

                        <View className="bg-white pt-[10px] pb-[10px] w-full">
                            <FlatList
                                horizontal
                                renderItem={({ item }) => (
                                    <Pressable
                                        onPress={
                                            () => item === 1 ?
                                                router.push("/(private)/(car)/payment-policy")
                                                : router.push("/(private)/(car)/cancellation-policy")
                                        }
                                        className="bg-white rounded-[16px] h-auto shadow-sm shadow-[#97C3FF66] m-1"
                                        style={{ width: 300 }}
                                    >
                                        <View className='h-[200px] flex-row gap-2 p-2 bg-red-500'>
                                            <ImageExpo
                                                source={item === 1 ?
                                                    require("@/assets/images/components/payment-policy.png")
                                                    : require("@/assets/images/components/payment-policy-2.png")}
                                                style={{ borderRadius: 16, width: "100%", height: "100%" }}
                                                contentFit='cover'
                                            />
                                        </View>
                                        <View className="px-[12px] pt-[5px] pb-[10px] flex-1 gap-2">
                                            <View className="flex-row justify-between">
                                                <Text className="font-poppins-bold font-700 text-[16px] text-text-600">{item === 1 ? "Payment Policy" : "Cancellation Policy"}</Text>
                                            </View>
                                            <View className="flex-row gap-2 items-center">
                                                <CALENDAR />
                                                <Text className="font-poppins-bold font-700 text-[12px] text-text-600">Updated: October 2024</Text>
                                            </View>
                                            <View className="flex-row gap-2 items-center">
                                                <CALENDAR />
                                                <Text className="font-poppins-bold font-700 text-[12px] text-text-600">5 min read</Text>
                                            </View>
                                            <Text className="font-poppins font-400 text-[14px] text-[#8A8A8A]">Details on payment and cancellation policies.</Text>
                                        </View>
                                    </Pressable>
                                )}
                                data={[1, 2]}
                                className='mt-2 mb-4 pb-1'
                                keyExtractor={(item) => item.toString()}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View className="h-[8px]" />}
                            />
                        </View>

                        <View className="flex-row gap-2 items-center justify-between">
                            <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                                Optional Extras
                            </Text>
                            <Pressable>
                                <Text className='font-poppins-bold font-700 text-[14px] text-[#8A8A8A]'>
                                    View All
                                </Text>
                            </Pressable>
                        </View>

                        <View className="h-auto w-full">
                            <TravelServiceCarousel />
                        </View>

                        <Pressable onPress={() => router.push("/(private)/(car)/car-reservation")} className="flex-1 rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                            <Text className='text-[16px] font-poppins-semibold text-white'>Confirm reservation</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
        height: 400,
        // borderRadius: 16
    },
    image: {
        width: "100%",
        height: "100%",
        // borderRadius: 16
    },
    gradient: {
        ...Platform.select({ android: { elevation: 1 } }),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        zIndex: 1,
        borderRadius: 16,
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        zIndex: 2,
        ...Platform.select({ android: { elevation: 2 } }),
        paddingBottom: 30
    },
    box: {
        gap: 8
    },
    titleSmall: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '700',
        fontFamily: "Poppins_700Bold",
    },
    titleLarge: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: "Poppins_500Medium",
        marginBottom: 20,
        lineHeight: 24
    }
});

import CarIcon from "@/components/icons/car/car/car";
import TravelServiceCarousel from "@/components/travel-service-carousel";
import Checkbox from "expo-checkbox";

