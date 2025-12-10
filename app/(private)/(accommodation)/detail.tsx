import { BlurView } from "expo-blur";
import { Image as ImageExpo } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, G, Mask, Path, Rect } from "react-native-svg";
// @ts-expect-error Async Server Component
import MAP from '@/assets/images/components/trip/map.png';
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

                    <Text className="text-[20px] font-poppins-bold text-white text-center">Hotel</Text>
                </View>

                <View className="bg-white flex-1 mt-[10px] gap-[20px] w-full">
                    <View>
                        <Pressable style={styles.container} className='relative shadow-soft-gray bg-red'>
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                            />
                        </Pressable>
                    </View>

                    <View className="flex gap-[15px] px-[20px]">
                        <View className="shadow shadow-[#97C3FF66] bg-white p-[10px] rounded-[12px] gap-2">
                            <Text className="text-[#1B77F2] text-[20px] font-poppins-bold">Luxury hotel</Text>
                            <Text className="text-[#1d0707] text-[14px] font-poppins">Cancún, México</Text>
                            <View className="flex-row justify-between">
                                <View className="flex-row gap-2 items-center">
                                    <View className="flex-row justify-center p-2 bg-[#FCF9E4] border border-[#F2CB04] items-center rounded-full">
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <Path
                                                d="M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
                                                stroke="#F2CB04"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                    </View>
                                    <Text className="text-[#646464] text-[14px] font-poppins">
                                        Free Wi-Fi
                                    </Text>
                                </View>
                                <View className="flex-row gap-2 items-center">
                                    <View className="flex-row justify-center p-2 bg-[#FCF9E4] border border-[#F2CB04] items-center rounded-full">
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <Path
                                                d="M12.333 10.866h3.2M5.4 8.733h12.8M15.533 12.466V7.133a1.6 1.6 0 10-3.2 0m0 5.333V7.133a1.6 1.6 0 10-3.2 0"
                                                stroke="#F2CB04"
                                                strokeWidth={1.06667}
                                            />
                                            <Mask
                                                id="a"
                                                style={{
                                                    maskType: "alpha"
                                                }}
                                                maskUnits="userSpaceOnUse"
                                                x={1}
                                                y={9}
                                                width={22}
                                                height={12}
                                            >
                                                <Path d="M22.411 9.733v10.745H1.068V9.734h21.343z" fill="#000" />
                                            </Mask>
                                            <G mask="url(#a)" stroke="#F2CB04" strokeWidth={1.06667}>
                                                <Path d="M5.407 18.587c-.386 0-.772-.133-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.267-.68.4-1.066.4s-.773-.133-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.267-.68.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.267-.68.4-1.067.4m38.394.008c-.386 0-.772-.134-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.266-.68.4-1.067.4-.386 0-.772-.134-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.266-.68.4-1.066.4s-.773-.134-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.266-.68.4-1.067.4m0 .004c-.386 0-.772-.133-1.066-.4-.295-.266-.68-.4-1.067-.4-.386 0-.772.134-1.066.4-.295.267-.681.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.266-.68-.4-1.066-.4-.387 0-.773.134-1.067.4-.294.267-.68.4-1.067.4-.386 0-.772-.133-1.066-.4-.295-.266-.681-.4-1.067-.4-.386 0-.772.134-1.067.4-.294.267-.68.4-1.066.4M5.407 15.921c-.386 0-.772-.133-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.267-.68.4-1.066.4s-.773-.133-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.267-.68.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.267-.68.4-1.067.4m38.394.008c-.386 0-.772-.134-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.266-.68.4-1.067.4-.386 0-.772-.134-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.266-.68.4-1.066.4s-.773-.134-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.266-.68.4-1.067.4m0 .004c-.386 0-.772-.133-1.066-.4-.295-.266-.68-.4-1.067-.4-.386 0-.772.134-1.066.4-.295.267-.681.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.266-.68-.4-1.066-.4-.387 0-.773.134-1.067.4-.294.267-.68.4-1.067.4-.386 0-.772-.133-1.066-.4-.295-.266-.681-.4-1.067-.4-.386 0-.772.134-1.067.4-.294.267-.68.4-1.066.4M5.407 13.254c-.386 0-.772-.133-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.267-.68.4-1.066.4s-.773-.133-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.267-.68.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.267-.68.4-1.067.4m38.394.008c-.386 0-.772-.134-1.067-.4-.294-.267-.68-.4-1.066-.4s-.773.133-1.067.4c-.294.266-.68.4-1.067.4-.386 0-.772-.134-1.066-.4-.295-.267-.68-.4-1.067-.4-.386 0-.772.133-1.067.4-.294.266-.68.4-1.066.4s-.773-.134-1.067-.4c-.294-.267-.68-.4-1.067-.4-.386 0-.772.133-1.066.4-.295.266-.68.4-1.067.4m0 .004c-.386 0-.772-.133-1.066-.4-.295-.266-.68-.4-1.067-.4-.386 0-.772.134-1.066.4-.295.267-.681.4-1.067.4-.386 0-.772-.133-1.067-.4-.294-.266-.68-.4-1.066-.4-.387 0-.773.134-1.067.4-.294.267-.68.4-1.067.4-.386 0-.772-.133-1.066-.4-.295-.266-.681-.4-1.067-.4-.386 0-.772.134-1.067.4-.294.267-.68.4-1.066.4" />
                                            </G>
                                        </Svg>
                                    </View>
                                    <Text className="text-[#646464] text-[14px] font-poppins">
                                        Pool
                                    </Text>
                                </View>
                                <View className="flex-row gap-2 items-center">
                                    <View className="flex-row justify-center p-2 bg-[#FCF9E4] border border-[#F2CB04] items-center rounded-full">
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <Path
                                                d="M5.28 11.57v6.93c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.93a3.27 3.27 0 01-2.53-3.18V5.5c0-.41.34-.75.75-.75s.75.34.75.75v2.89c0 .71.42 1.32 1.03 1.61V5.51c0-.41.34-.75.75-.75s.75.34.75.75V10c.61-.28 1.03-.89 1.03-1.61V5.5c0-.41.34-.75.75-.75s.75.34.75.75v2.89a3.27 3.27 0 01-2.53 3.18zM22.75 5v14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.25h-2.36c-.63 0-1.14-.51-1.14-1.14V9.67c0-5.35 4.21-5.42 4.25-5.42.41 0 .75.34.75.75zm-1.5.9c-.82.3-2 1.17-2 3.77v3.58h2V5.9zm-4.13 9.67A6.225 6.225 0 0112 18.25c-2.04 0-3.96-1-5.11-2.67a.742.742 0 00-1.04-.19c-.34.23-.43.7-.19 1.04a7.698 7.698 0 006.35 3.33 7.72 7.72 0 006.36-3.32c.24-.34.15-.81-.19-1.04a.742.742 0 00-1.04.19l-.02-.02zm-7.8-9.22c.83-.4 1.73-.61 2.67-.61 1.64 0 3.19.63 4.36 1.78.15.14.34.22.53.22s.39-.07.53-.22c.29-.3.29-.77 0-1.06a7.682 7.682 0 00-5.42-2.22c-1.17 0-2.29.25-3.33.75-.37.18-.53.63-.35 1 .18.37.63.53 1 .35l.01.01zm2.67 1.39a4.26 4.26 0 014.25 4.25 4.26 4.26 0 01-4.25 4.25 4.26 4.26 0 01-4.25-4.25 4.26 4.26 0 014.25-4.25zm0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75z"
                                                fill="#F2CB04"
                                            />
                                        </Svg>
                                    </View>
                                    <Text className="text-[#646464] text-[14px] font-poppins">
                                        Restaurant
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View className="border border-[#CBCCD4] w-full" />

                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                            About this place
                        </Text>

                        <Text className='font-poppins text-[12px] text-text-600'>
                            Lorem ipsum dolor sit amet consectetur. Praesent eget sed justo sed cursus nibh tempus gravida. Sit enim sapien non sed. Magna arcu vitae est pharetra turpis sit leo adipiscing. Accumsan ridiculus quisque vitae tellus ipsum egestas suspendisse urna.
                        </Text>

                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                            Where are you going to sleep?
                        </Text>

                        <View className="bg-white w-full">
                            <FlatList
                                horizontal
                                renderItem={({ item }) => (
                                    <Pressable
                                        className={`bg-white rounded-[16px] h-auto shadow-sm shadow-[#97C3FF66] m-1 ${item == 1 ? "border-2 border-[#94A604]" : "border-2 border-transparent"}`}
                                        style={{ width: 200 }}
                                    >
                                        <View className='h-[140px] flex-row gap-2 p-2'>
                                            <ImageExpo
                                                source={require("@/assets/images/components/best-places-slider/best-places-slider-1.png")}
                                                style={{ borderRadius: 16, width: "100%", height: "100%" }}
                                                contentFit='cover'
                                            />
                                        </View>
                                        <View className="px-[12px] pt-[5px] pb-[10px] flex-1 gap-2">
                                            <View className="flex-row justify-between">
                                                <Text className="font-poppins-bold font-700 text-[16px] text-text-600">Double room</Text>
                                            </View>
                                            <Text className="font-poppins font-400 text-[14px] text-[#8A8A8A]">1 double bed 2 guests</Text>
                                            <Text className="font-poppins font-400 text-[14px] text-[#8A8A8A]">$200/night</Text>
                                        </View>
                                    </Pressable>
                                )}
                                data={[1, 2]}
                                className=''
                                keyExtractor={(item) => item.toString()}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View className="h-[8px]" />}
                            />
                        </View>

                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                            Location
                        </Text>

                        <View className="py-[20px] h-[430px]">
                            <Image
                                source={MAP}
                                style={{ borderRadius: 16, width: "100%", height: "100%" }}
                                resizeMode='cover'
                            />
                        </View>

                        <View className="flex-row items-center justify-between gap-2">
                            <View className="flex-1 ">
                                <Text className="text-[#1B77F2] text-[36px] font-poppins-bold">4.5 stars</Text>
                            </View>
                            <View className="flex-1 ">
                                <Text className="text-[#646464] text-[16px] font-poppins-bold">Excellent</Text>
                                <View className="flex-row">
                                    <View className="flex-row flex-1">
                                        <StarIcon size="small" fill={"#F2CB04"} />
                                        <StarIcon size="small" fill={"#F2CB04"} />
                                        <StarIcon size="small" fill={"#F2CB04"} />
                                        <StarIcon size="small" fill={"#F2CB04"} />
                                        <StarIcon size="small" fill={"transparent"} color="#F2CB04" />
                                    </View>

                                    <Text className="flex-1">120</Text>
                                </View>
                            </View>
                        </View>

                        <View className="gap-2 mt-3">
                            <Text className="text-[#646464] text-[16px] font-poppins-bold">Great stay!</Text>
                            <View className="flex-row gap-4">
                                <View className="flex-row">
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"transparent"} color="#F2CB04" />
                                </View>

                                <Text className="flex-1 text-[#00000080] text-[13px] font-poppins-bold">2025-10-01</Text>
                            </View>
                            <Text className="text-[#8A8A8A] text-[14px] font-poppins">
                                The hotel was amazing with excellent service.
                            </Text>
                        </View>

                        <View className="gap-2 mb-3">
                            <Text className="text-[#646464] text-[16px] font-poppins-bold">Will visit again</Text>
                            <View className="flex-row gap-4">
                                <View className="flex-row">
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"#F2CB04"} />
                                    <StarIcon size="small" fill={"transparent"} color="#F2CB04" />
                                </View>

                                <Text className="flex-1 text-[#00000080] text-[13px] font-poppins-bold">2024-09-15</Text>
                            </View>
                            <Text className="text-[#8A8A8A] text-[14px] font-poppins">
                                Loved the amenities and location.
                            </Text>
                        </View>

                        <View className="flex-row gap-2 items-center justify-end">
                            <Pressable>
                                <Text className='font-poppins-bold font-700 text-[14px] text-[#646464]'>
                                    Read all reviews {">"}
                                </Text>
                            </Pressable>
                        </View>

                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600'>
                            Cancellation Policy
                        </Text>

                        <View className="gap-4">
                            <View className="shadow shadow-[#97C3FF66] flex-row items-center bg-white px-[20px] rounded-[12px] py-[14px]">
                                <View className="flex-row pr-4">
                                    <Svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#D9E6F8" />
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} stroke="#1B77F2" />
                                        <Circle cx={10} cy={10} r={6} fill="#1B77F2" />
                                    </Svg>
                                </View>

                                <View className="flex-1">
                                    <Text className="text-[#646464] text-[14px] font-poppins-bold">
                                        Flexible
                                    </Text>
                                    <Text className="text-[#00000080] text-[12px] font-poppins">
                                        Free cancellation
                                    </Text>
                                </View>
                            </View>

                            <View className="shadow shadow-[#97C3FF66] flex-row items-center bg-white px-[20px] rounded-[12px] py-[14px]">
                                <View className="flex-row pr-4">
                                    <Svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#D9E6F8" />
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} stroke="#1B77F2" />
                                        <Circle cx={10} cy={10} r={6} fill="#1B77F2" />
                                    </Svg>
                                </View>

                                <View className="flex-1">
                                    <Text className="text-[#646464] text-[14px] font-poppins-bold">
                                        Moderate
                                    </Text>
                                    <Text className="text-[#00000080] text-[12px] font-poppins">
                                        Partial refund
                                    </Text>
                                </View>
                            </View>

                            <View className="shadow shadow-[#97C3FF66] flex-row items-center bg-white px-[20px] rounded-[12px] py-[14px]">
                                <View className="flex-row pr-4">
                                    <Svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#D9E6F8" />
                                        <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} stroke="#1B77F2" />
                                        <Circle cx={10} cy={10} r={6} fill="#1B77F2" />
                                    </Svg>
                                </View>

                                <View className="flex-1">
                                    <Text className="text-[#646464] text-[14px] font-poppins-bold">
                                        Strict
                                    </Text>
                                    <Text className="text-[#00000080] text-[12px] font-poppins">
                                        No refund
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <Pressable onPress={() => router.push("/(private)/(accommodation)/reservation")} className="flex-1 rounded-[16px] py-[16px] bg-[#1B77F2] border-[1.5px] border-[#1B77F2] items-center">
                            <Text className='text-[16px] font-poppins-semibold text-white'>Reserve</Text>
                        </Pressable>

                        <View className="border border-[#EFF0F3] rounded-[12px] p-[16px] mb-[10px]">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-bold">Friendly, Responsive</Text>
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M4.93 22.75c-.42 0-.81-.1-1.16-.3C3 22 2.56 21.09 2.56 19.96V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.77.45-1.78.4-2.77-.15l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.54.3-1.09.46-1.61.46zm2.25-20a3.12 3.12 0 00-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.18.77.12 1.28-.17l4.88-2.71c.74-.41 1.86-.41 2.6 0l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.62.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11H7.18z"
                                        fill="#646464"
                                    />
                                </Svg>
                            </View>

                            <Text className="text-[#444444] text-[20px] font-poppins-bold">Contact Host</Text>
                            <Text className="text-[#8A8A8A] text-[14px] font-poppins">Hosted by Amara L.</Text>
                        </View>
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

import StarIcon from "@/components/icons/support-like-question-share/star/star";
import Checkbox from "expo-checkbox";

