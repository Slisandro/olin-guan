import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_1 from '@/assets/images/components/best-tours/best-tours-1.jpg';
// @ts-expect-error Async Server Component
import MAP from '@/assets/images/components/trip/map.png';

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

                    <Text className="text-[20px] font-poppins-bold text-white text-center">The majestic</Text>
                </View>

                <View className="bg-white flex-1 mt-[10px] gap-[20px] pb-[30px] w-full">

                    <View className="px-[20px] w-auto pt-[10px] rounded-[16px] backdrop-blur-[50px] flex flex-row items-center gap-2">
                        <Text className="text-[#646464] ml-1 text-[16px] font-poppins-bold font-700">
                            3.0/150
                        </Text>
                        <StarIcon size='small' fill={"#F2CB04"} />
                        <StarIcon size='small' fill={"#F2CB04"} />
                        <StarIcon size='small' fill={"#F2CB04"} />
                        <Star size={14} color={"#F2CB04"} />
                        <Star size={14} color={"#F2CB04"} />

                    </View>

                    <View>
                        <Pressable style={styles.container} className='relative shadow-soft-gray bg-red'>
                            <Image
                                source={BACKGROUND_IMAGE_1}
                                style={[styles.image]}
                            />
                        </Pressable>
                    </View>

                    <View className="px-[20px] gap-[10px]">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-[#646464] text-[16px] font-poppins-bold">Spacious, Modern, Well Located</Text>
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <Path
                                    d="M4.929 22.75c-.42 0-.81-.1-1.16-.3-.77-.45-1.21-1.36-1.21-2.49V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.77.45-1.78.4-2.77-.15l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.54.3-1.09.46-1.61.46zm2.25-20a3.12 3.12 0 00-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.18.77.12 1.28-.17l4.88-2.71c.74-.41 1.86-.41 2.6 0l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.62.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11h-9.64z"
                                    fill="#6E6E70"
                                />
                            </Svg>
                        </View>
                        <Text className="text-[#646464] text-[20px] font-poppins-bold">
                            Casa en el Centro
                        </Text>
                        <Text className="text-[#8A8A8A] text-[12px] font-poppins">
                            Beautiful house in the city center, ideal for families.
                        </Text>
                        <View className="flex-row justify-between items-center">
                            <Text className="font-poppins-bold font-700 text-[20px] text-[#1B77F2]">200,000 $</Text>
                            <Text className="font-poppins-bold font-700 text-[12px] text-[#6E6E70]">For sale</Text>
                        </View>
                        <View className="flex-row gap-4 items-center">
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <Path
                                    d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
                                    fill="#6E6E70"
                                />
                                <Path
                                    d="M11.42 21.814a.998.998 0 001.16 0C12.884 21.599 20.03 16.44 20 10c0-4.411-3.589-8-8-8-4.41 0-8 3.589-8 7.995-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.31 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.61-1.308-6.02-5.294-6-9.735 0-3.309 2.691-6 6-6z"
                                    fill="#6E6E70"
                                />
                            </Svg>
                            <Text className="text-[#6E6E70] text-[14px] font-poppins-semibold">578 carrera 7w Cancún, México</Text>
                        </View>
                    </View>

                    <View className="">
                        <View className="flex-row items-center justify-between">
                            {
                                ["Overview", "Site description", "Address", "Characteristics"]
                                    .map(item => (
                                        <Text className={`p-2 text-[14px] font-poppins ${item === "Overview" ? "border-b-4 border-[#1B77F2] text-[#1B77F2]" : "text-[#646464]"}`}>
                                            {item}
                                        </Text>
                                    ))
                            }
                        </View>

                    </View>

                    <View className="px-[20px] gap-[20px]">
                        <View className="flex-row">
                            <View className="flex-1">
                                <Text className="text-[#646464] text-[14px] font-poppins-bold">Property type</Text>
                                <Text className="text-[#646464] text-[12px] font-poppins-medium">House</Text>
                            </View>
                            <View className="flex-1 flex-row gap-3">
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                >
                                    <Path
                                        d="M4.5 8.75a.75.75 0 00-1.5 0h1.5zM3 22.5a.75.75 0 001.5 0H3zm.75-5.75a.75.75 0 000 1.5v-1.5zm22.5 1.5a.75.75 0 000-1.5v1.5zm-.75 4.25a.75.75 0 001.5 0h-1.5zM13.75 10v-.75A.75.75 0 0013 10h.75zM13 17.5a.75.75 0 001.5 0H13zM3.75 8.75H3V22.5h1.5V8.75h-.75zm0 8.75v.75h22.5v-1.5H3.75v.75zm22.5 5H27v-10h-1.5v10h.75zm0-10H27a3.25 3.25 0 00-3.25-3.25v1.5c.966 0 1.75.784 1.75 1.75h.75zm-2.5-2.5v-.75h-10v1.5h10V10zm-10 0H13v7.5h1.5V10h-.75z"
                                        fill="#646464"
                                    />
                                    <Circle
                                        cx={8.75}
                                        cy={12.5}
                                        r={1.25}
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <View className="">
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Rooms</Text>
                                    <Text className="text-[#646464] text-[12px] font-poppins-medium">3</Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row">
                            <View className="flex-1 flex-row gap-3">
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                >
                                    <Path
                                        d="M5 25h20"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M5.95 25L6 12.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V25"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M16 20h-2c-.83 0-1.5.67-1.5 1.5V25h5v-3.5c0-.83-.67-1.5-1.5-1.5zM12.5 16.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zM19.5 16.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M22 10l-.03-3h-4.4"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <View className="">
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Construction</Text>
                                    <Text className="text-[#646464] text-[12px] font-poppins-medium">95.36 m²</Text>
                                </View>
                            </View>
                            <View className="flex-1 flex-row gap-3">
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                >
                                    <Path
                                        d="M18.52 7.335V6c0-.736-.597-1.333-1.334-1.333H9.853c-.737 0-1.333.597-1.333 1.333v18"
                                        stroke="#646464"
                                        strokeWidth={2}
                                    />
                                    <Path
                                        d="M22.52 7.335h-8v2.667h8V7.335zM12.52 10.001h12"
                                        stroke="#646464"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M18.52 12.001a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.334.667.667 0 000-1.334zm6.667 0a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 2.667A.667.667 0 1018.52 16a.667.667 0 000-1.333zm3.334 0a.667.667 0 100 1.334.667.667 0 000-1.334zm-6.667 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.666a.667.667 0 100 1.334.667.667 0 000-1.334zm3.333 0a.667.667 0 100 1.334.667.667 0 000-1.334zm-6.667 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.667a.667.667 0 100 1.334.667.667 0 000-1.334zm3.333 0a.667.667 0 100 1.334.667.667 0 000-1.334zm-6.667 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.667a.667.667 0 100 1.333.667.667 0 000-1.333zm3.333 0a.667.667 0 100 1.334.667.667 0 000-1.334zm-6.667 0a.667.667 0 100 1.334.667.667 0 000-1.334z"
                                        fill="#646464"
                                    />
                                    <Path
                                        d="M21.852 12.001a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.667a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.333.667.667 0 000-1.333zm3.334 2.666a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.667a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.334.667.667 0 000-1.334zm3.334 2.667a.667.667 0 100 1.334.667.667 0 000-1.334zm-3.334 0a.667.667 0 100 1.333.667.667 0 000-1.333z"
                                        fill="#646464"
                                    />
                                </Svg>
                                <View className="">
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Bathrooms</Text>
                                    <Text className="text-[#646464] text-[12px] font-poppins-medium">2</Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row">

                            <View className="flex-1 flex-row gap-3">
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                >
                                    <Path
                                        d="M18.51 5.83h-7.02C9 5.83 8.45 7.07 8.13 8.59L7 14h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76zM24.989 22.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37h-5.12c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03h-1.88c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09zM7 11H6M24 11h-1M15 6v2M13.5 8h3M9 18h3M18 18h3"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <View className="">
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Parking lot</Text>
                                    <Text className="text-[#646464] text-[12px] font-poppins-medium">2</Text>
                                </View>
                            </View>
                            <View className="flex-1 flex-row gap-3">
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
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.694 13.7h.009-.01z"
                                        fill="#646464"
                                    />
                                    <Path
                                        d="M15.694 13.7h.009"
                                        stroke="#646464"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.694 16.7h.009-.01z"
                                        fill="#646464"
                                    />
                                    <Path
                                        d="M15.694 16.7h.009M11.995 13.7h.009M11.995 16.7h.009M8.295 13.7h.01M8.295 16.7h.01"
                                        stroke="#646464"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <View className="">
                                    <Text className="text-[#646464] text-[14px] font-poppins-medium">Year of construction</Text>
                                    <Text className="text-[#646464] text-[12px] font-poppins-medium">3</Text>
                                </View>
                            </View>
                        </View>


                        <View className="h-[430px]">
                            <Image
                                source={MAP}
                                style={{ borderRadius: 16, width: "100%", height: "100%" }}
                                resizeMode='cover'
                            />
                        </View>


                        <Text className="text-[#646464] text-[16px] font-poppins-bold">Site description</Text>

                        <Text className="text-[#646464] text-[14px] font-poppins">
                            Lorem ipsum dolor sit amet consectetur. Eleifend augue non donec orci ac ut rutrum eget. Egestas vitae a in tristique mattis amet tellus turpis semper. Gravida justo pellentesque amet sit gravida adipiscing et augue pharetra.
                        </Text>

                        <Text className="text-[#646464] text-[16px] font-poppins-bold">Address</Text>

                        <View className="gap-2">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">City</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">Cancún</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">State</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">Quintana Roo</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">Country</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">México</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">Street</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">7124, la torre siete</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">Corner with</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">Third</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[#646464] text-[14px] font-poppins-medium">Zip code</Text>
                                <Text className="text-[#8A8A8A] text-[14px] font-poppins-medium">00554</Text>
                            </View>
                        </View>

                        <Text className="text-[#646464] text-[16px] font-poppins-bold">Characteristics</Text>

                        <View className="gap-2">
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">Cancún</Text>
                            </View>
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">Quintana Roo</Text>
                            </View>
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">México</Text>
                            </View>
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">7124, la torre siete</Text>
                            </View>
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">Third</Text>
                            </View>
                            <View className="flex-row gap-1 items-center">
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} fill="#D9E6F8" />
                                    <Rect x={2.5} y={2.5} width={19} height={19} rx={3.5} stroke="#1B77F2" />
                                    <Path
                                        d="M17.335 8L10 15.333 6.668 12"
                                        stroke="#1B77F2"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#686868] text-[16px] font-poppins-semibold">00554</Text>
                            </View>
                        </View>

                    </View>

                    <Pressable onPress={() => router.push("/(private)/(accommodation)")} className="flex-1 rounded-[16px] py-[12px] bg-[#94A604] border-[1.5px] border-[#94A604] items-center mx-4">
                        <Text className='text-[16px] font-poppins-semibold text-white'>Connect via Whatssap</Text>
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
import { Star } from "lucide-react-native";

