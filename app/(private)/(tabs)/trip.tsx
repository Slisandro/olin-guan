import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

// @ts-expect-error Async Server Component
import MAP from '@/assets/images/components/trip/map.png';
import { Image } from "expo-image";

export default function MyTrip() {
    const router = useRouter();

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
                <View className="px-[20px] pt-[50px] gap-[10px] items-center">
                    <Text className="font-poppins-bold text-[20px] text-center font-[700] text-white">
                        🌞 Hi, [name or avatar], here’s your ride
                    </Text>

                    <Text className="w-[280px] text-center font-poppins-medium font-[500] text-[12px] text-white">
                        Everything you need, in one place
                    </Text>
                </View>

                <View className="bg-white rounded-t-[40px] mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px]">
                    <View className="flex flex-row items-center justify-between">
                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>My Trip</Text>

                        <Pressable onPress={() => router.push("/(private)/(plan_trip)/edit-trip")}  className='font-poppins-bold font-700 text-[14px] text-primary-700 leading-[19px]'>
                            <Text className="font-poppins-bold font-700 text-[14px] text-primary-700 leading-[19px]">View All</Text>
                        </Pressable>
                    </View>

                    <View className="gap-[20px]">

                        <Menu
                            title={"Schedules"}
                            subtitle={"View your itinerary"}
                            icon={() => (
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
                            )}
                        >
                            <ListSchedules />
                        </Menu>

                        <Menu
                            title={"My QR Codes"}
                            subtitle={"Scan for info"}
                            icon={() => (
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M5.846 2H3.538A1.539 1.539 0 002 3.538v2.308M18.154 2h2.308A1.538 1.538 0 0122 3.538v2.308M5.846 22H3.538A1.539 1.539 0 012 20.462v-2.308M18.154 22h2.308A1.538 1.538 0 0022 20.462v-2.308M5.846 15.846v2.308h2.308m3.846 0v-2.308H9.692m8.462-7.692h-2.308V5.846m2.308 7.693V11.23h-2.308m0 4.615v2.308h2.308M10.46 5.846H7.385a1.538 1.538 0 00-1.539 1.539v3.076A1.538 1.538 0 007.385 12h3.076A1.538 1.538 0 0012 10.461V7.385a1.539 1.539 0 00-1.539-1.539z"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            )}
                        >
                            <ListQRCodes />
                        </Menu>

                        <Menu
                            title={"Maps"}
                            subtitle={"Navigate easily"}
                            icon={() => (
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M2.29 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05L3.3 6.05c-.56.32-1.01 1.1-1.01 1.73zM8.559 4v13M15.73 6.62V20"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            )}
                        >
                            <View className="px-[20px] py-[20px] h-[430px]">
                                <Image
                                    source={MAP}
                                    style={{ borderRadius: 16, width: "100%", height: "100%" }}
                                    contentFit='cover'
                                />
                            </View>
                        </Menu>

                        <Menu
                            title={"Tickets"}
                            subtitle={"Access your tickets"}
                            icon={() => (
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <Path
                                        d="M2.29 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05L3.3 6.05c-.56.32-1.01 1.1-1.01 1.73zM8.559 4v13M15.73 6.62V20"
                                        stroke="#646464"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            )}
                        >
                            <ListTickets />
                        </Menu>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const Menu = ({ children, title, subtitle, icon }: { children: React.ReactNode, title: string, subtitle: string, icon: () => React.ReactNode }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <View className="bg-white shadow-100 rounded-[12px]">
            <View className="px-[14px] py-[20px] items-center flex-row gap-2 w-full">
                {icon()}

                <View>
                    <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>{title}</Text>
                    <Text className='font-poppins font-400 text-[13px] text-text-600'>{subtitle}</Text>
                </View>

                <Pressable className="ml-auto flex-row items-center gap-1" onPress={() => setOpen(!open)}>
                    <Text className='font-poppins-bold font-700 text-[14px] text-primary-700 leading-[19px]'>View All</Text>
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }}
                    >
                        <G clipPath="url(#clip0_176_12972)">
                            <Path
                                d="M16.966 9.517l-4.965 4.966-4.966-4.966"
                                stroke="#1B77F2"
                                strokeWidth={1.5}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_176_12972">
                                <Path fill="#fff" d="M0 0H24V24H0z" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                </Pressable>
            </View>

            {
                open
                    ?
                    children
                    : null
            }
        </View>
    )
}

// FLAT LIST SCHEDULES
const ITEMS_SCHEDULES = [
    {
        id: 1,
        day: "Day 1",
        date: "June 25",
        iconWeather: () => (
            <Svg
                width={43}
                height={43}
                viewBox="0 0 43 43"
                fill="none"
            >
                <Path
                    d="M21.253 9.592a.586.586 0 00.786-.177l.649-.997a.663.663 0 00-.211-.94.664.664 0 00-.922.285l-.54 1.059a.587.587 0 00.238.77zM15.878 8.154c.31 0 .575-.238.591-.548l.062-1.19a.662.662 0 00-.653-.705.662.662 0 00-.653.705l.061 1.19c.016.31.281.548.592.548zM10.502 9.592a.587.587 0 00.24-.77l-.541-1.06a.664.664 0 00-.922-.284.663.663 0 00-.21.94l.648.997c.17.26.516.333.785.177zM6.569 13.526a.586.586 0 00-.178-.786l-.996-.648a.663.663 0 00-.94.21.664.664 0 00.284.922l1.06.541c.276.141.614.03.77-.24zM4.582 18.31c.311.016.548.28.548.591 0 .311-.237.576-.548.592l-1.189.061a.662.662 0 01-.705-.653c0-.38.325-.672.705-.653l1.19.062zM22.003 12.255a9.038 9.038 0 00-15.1 7.724 9.254 9.254 0 015.083-1.51c.76 0 1.5.091 2.21.264a12.682 12.682 0 017.807-6.478z"
                    fill="#FFD400"
                />
                <Path
                    d="M11.986 35.987a8.217 8.217 0 112.803-15.944c1.725-4.22 5.871-7.193 10.712-7.193 6.39 0 11.569 5.18 11.569 11.568 0 .282-.01.56-.03.837a5.623 5.623 0 01-2.349 10.732H11.986z"
                    fill="#F2F4FC"
                />
            </Svg>
        ),
        description: [
            "08:00 Transportation: Shared van pickup",
            "10:00 Check-in: Hotel Boutique X",
            "18:30 Dinner at El Muellecito"
        ],
        iconStatus: () => (
            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
            >
                <G clipPath="url(#clip0_1_15200)">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
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
                </G>
                <Defs>
                    <ClipPath id="clip0_1_15200">
                        <Path fill="#fff" d="M0 0H24V24H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        ),
        status: "Confirmed"
    },
    {
        id: 2,
        day: "Day 2",
        date: "June 26",
        iconWeather: () => (
            <Svg
                width={43}
                height={43}
                viewBox="0 0 43 43"
                fill="none"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.61 22.344a.836.836 0 01-.781-.844c0-.443.338-.821.78-.844l1.697-.087c.542-.028 1.007.389 1.007.931 0 .543-.465.96-1.007.931l-1.696-.087zm-2.833-8.51a.838.838 0 001.099.34l1.51-.77a.947.947 0 00.406-1.316c-.273-.47-.884-.597-1.34-.3l-1.422.925a.836.836 0 00-.253 1.12zm-5.61-5.61a.836.836 0 001.12-.254l.925-1.421c.297-.457.17-1.068-.3-1.341a.947.947 0 00-1.315.406l-.771 1.51a.838.838 0 00.34 1.1zM21.5 6.17a.836.836 0 00.844-.78l.087-1.697c.028-.542-.389-1.006-.931-1.006-.543 0-.96.464-.931 1.006l.087 1.696c.023.443.4.781.844.781zm-7.666 2.052a.838.838 0 00.34-1.099l-.77-1.51a.947.947 0 00-1.316-.406c-.47.273-.597.884-.3 1.34l.925 1.422a.836.836 0 001.12.253zm-5.61 5.61a.836.836 0 00-.254-1.12l-1.421-.925c-.457-.297-1.068-.17-1.341.3a.947.947 0 00.406 1.315l1.51.771a.838.838 0 001.1-.34zM5.39 20.657c.443.023.781.4.781.844a.836.836 0 01-.78.844l-1.697.087c-.542.028-1.006-.389-1.006-.931 0-.543.464-.96 1.006-.931l1.696.087zm2.833 8.51a.838.838 0 00-1.099-.34l-1.51.77a.947.947 0 00-.406 1.316c.273.47.884.597 1.34.3l1.422-.925a.836.836 0 00.253-1.12zm5.61 5.61a.836.836 0 00-1.12.254l-.925 1.422c-.297.456-.17 1.068.3 1.34a.947.947 0 001.315-.406l.771-1.51a.838.838 0 00-.34-1.1zM21.5 36.83a.836.836 0 00-.844.78l-.087 1.697c-.028.542.389 1.007.931 1.007.543 0 .96-.465.931-1.007l-.087-1.696a.836.836 0 00-.844-.781zm7.666-2.052a.838.838 0 00-.34 1.099l.77 1.51a.947.947 0 001.316.406c.47-.273.597-.884.3-1.34l-.925-1.422a.836.836 0 00-1.12-.253zm5.61-5.61a.836.836 0 00.254 1.12l1.422.925c.456.297 1.068.17 1.34-.3a.947.947 0 00-.406-1.315l-1.51-.771a.838.838 0 00-1.1.34z"
                    fill="#FFD400"
                />
                <Path
                    d="M34.39 21.498c0 7.12-5.772 12.89-12.89 12.89-7.12 0-12.89-5.77-12.89-12.89 0-7.119 5.77-12.89 12.89-12.89 7.118 0 12.89 5.771 12.89 12.89z"
                    fill="#FFD400"
                />
            </Svg>
        ),
        description: [
            "09:00 Breakfast",
            "11:00 Islas Mujeres Tour",
            "15:30 Free time at Playa Norte",
            "18:00 Romantic dineer at a restaurant",
            "28:00 Go to CocoBongo"
        ],
        iconStatus: () => (
            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
                    fill="#1D4ED8"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
                    fill="#1D4ED8"
                />
                <Path
                    d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        ),
        status: "Earring"
    },
    {
        id: 3,
        day: "Day 3",
        date: "June 27",
        iconWeather: () => (
            <Svg
                width={43}
                height={43}
                viewBox="0 0 43 43"
                fill="none"
            >
                <Path
                    d="M29.997 19.615h-2.358c-.438 0-.826.283-.96.7l-2.197 6.854c-.208.65.277 1.315.96 1.315h1.203c.385 0 .691.323.671.707l-.372 7.235c-.01.18.234.246.317.085l5.169-10.014c.346-.67-.14-1.47-.896-1.47h-1.006a.672.672 0 01-.637-.884l1.062-3.203a1.008 1.008 0 00-.956-1.325z"
                    fill="#FFD400"
                />
                <Path
                    d="M32.982 27.853l.693-1.34a1.781 1.781 0 00-1.583-2.599h-.953l1.019-3.07a1.781 1.781 0 00-1.69-2.342H27.39c-.774 0-1.46.5-1.696 1.238l-2.415 7.533c-.063.195-.09.39-.086.58H11.148a8.46 8.46 0 112.885-16.416c1.776-4.344 6.045-7.406 11.03-7.406 6.577 0 11.91 5.333 11.91 11.911 0 .29-.01.577-.03.862a5.79 5.79 0 01-2.419 11.049h-1.542z"
                    fill="#F2F4FC"
                />
                <Path
                    d="M22.99 36.939l-1.155-2.41-1.156 2.41c-.115.2-.18.434-.18.683 0 .751.598 1.36 1.336 1.36.737 0 1.335-.609 1.335-1.36 0-.25-.065-.483-.18-.683zM18.983 32.486l-1.156-2.409-1.155 2.409c-.115.2-.18.434-.18.683 0 .752.597 1.36 1.335 1.36s1.336-.608 1.336-1.36c0-.249-.066-.482-.18-.683zM14.975 36.939l-1.155-2.41-1.156 2.41c-.114.2-.18.434-.18.683 0 .751.598 1.36 1.336 1.36.737 0 1.336-.609 1.336-1.36 0-.25-.066-.482-.18-.683zM10.968 32.486l-1.156-2.409-1.155 2.41c-.115.2-.18.433-.18.682 0 .752.598 1.36 1.335 1.36.738 0 1.336-.608 1.336-1.36 0-.249-.066-.482-.18-.683z"
                    fill="#64D2FF"
                />
            </Svg>
        ),
        description: [
            "09:00 Local coffee shop downtown",
            "11:00 Xplor Tour",
            "15:30 Free time at Playa Norte",
            "18:00 Yoga class"
        ],
        iconStatus: () => (
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
        ),
        status: "Confirmation is missing"
    }
]

const ListSchedules = () => {
    const router = useRouter();

    const renderItem = ({ item }: { item: any }) => (
        <View className="px-[12px] py-[14px] shadow-200 bg-white gap-[10px] rounded-[16px]">
            <View className="flex-row justify-between items-start">
                <View className="flex-row border-[1px] border-[#F2CB04] h-[auto] rounded-[8px]">
                    <Text className="pl-[10px] pr-[15px] py-[8px] font-700 font-poppins-bold bg-[#FCF9E4] text-text-900 rounded-l-[8px]">{item.day}</Text>
                    <Text className="pl-[10px] pr-[15px] py-[8px] font-700 font-poppins-bold text-text-900 rounded-l-[8px]">{item.date}</Text>
                </View>

                <View className="p-[5px] rounded-[12px] shadow-100 bg-white">
                    {item.iconWeather()}
                </View>
            </View>

            <View className="gap-[12px] pt-2">
                {item.description.map((item: string) => (
                    <Text key={item} className="font-poppins font-[400] text-[14px] text-text-600">{item}</Text>
                ))}
            </View>

            <View className="gap-[12px] pt-2 flex-row justify-between items-center">
                <View className="flex-row items-center gap-[4px]">
                    {item.iconStatus()}
                    <Text className="font-[500] text-[14px] font-poppins-medium">{item.status}</Text>
                </View>

                <View className="flex-row items-center gap-[8px]">
                    <Pressable onPress={() => router.push("/(private)/(plan_trip)/add-activity")} className="p-[8px] bg-[#D9E6F8] rounded-full">
                        <Svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <Path
                                d="M5 10h10"
                                stroke="#444"
                                strokeWidth={1.25}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M10 15V5"
                                stroke="#4B4F63"
                                strokeWidth={1.25}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </Pressable>

                    <Pressable onPress={() => router.push("/(private)/(plan_trip)/edit-day")} className="p-[8px] bg-[#D9E6F8] rounded-full">
                        <Svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <Path
                                d="M9.168 1.667H7.501c-4.166 0-5.833 1.666-5.833 5.833v5c0 4.166 1.667 5.833 5.833 5.833h5c4.167 0 5.834-1.666 5.834-5.833v-1.667"
                                stroke="#444"
                                strokeWidth={1.25}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M13.367 2.517L6.801 9.084c-.25.25-.5.741-.55 1.1l-.358 2.508c-.134.908.508 1.541 1.416 1.416l2.509-.358c.35-.05.841-.3 1.1-.55l6.566-6.566c1.133-1.134 1.667-2.45 0-4.117-1.667-1.667-2.983-1.133-4.117 0zM12.426 3.458a5.954 5.954 0 004.116 4.117"
                                stroke="#444"
                                strokeWidth={1.25}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </Pressable>
                </View>
            </View>
        </View>
    );


    return (
        <View className="p-[16px] gap-[8px]">
            {ITEMS_SCHEDULES.map(item => (
                <View key={item.id}>{renderItem({ item })}</View>
            ))}
        </View>
    )
}

// FLAT LIST SCHEDULES

const BUS_ICON = () => (
    <Svg
        width={64}
        height={64}
        viewBox="0 0 64 64"
        fill="none"
    >
        <Path
            d="M23.488 24.632s.14-.934.224-1.565c.084-.626.253-2.713 1.341-2.837 1.089-.125 13.824 0 14.833 0 1.004 0 1.257 1.088 1.342 1.674.084.586.313 2.857.223 2.857-.343.005-17.963-.129-17.963-.129z"
            fill="#3E717A"
        />
        <Path
            d="M20.19 24s-.586-1.133-1.004-1.381c-.417-.254-10.43-.984-13.188 3.254-2.757 4.239-3.384 11.96-3.642 15.365-.258 3.403-.258 5.65-.258 5.65l33.973 1.475 26.142-1.346-.308-13.268c-.065-2.763-.144-7.349-1.62-8.502-1.476-1.153-2.375-.9-4.944-.964C52.77 24.22 20.19 24 20.19 24z"
            fill="#6BA4AB"
        />
        <Path
            d="M2.107 46.371l60.165.224s.223 7.786.223 8.507c0 .72-.223 1.555-1.336 1.615-1.113.054-48.712.387-48.712.387l-10.122-.502S1.158 56.155.88 55.156c-.278-.998.333-6.226.333-6.226l.895-2.559z"
            fill="#E0E0E0"
        />
        <Path
            d="M.86 52.537s1.546.134 1.814-.303c.512-.83.74-4.666.338-5.103-.258-.283-1.153-.159-1.153-.159s-.542 1.178-.795 2.713C.796 51.33.86 52.537.86 52.537z"
            fill="#FF8D02"
        />
        <Path
            d="M15.872 57.109s.194-1.804-.14-3.414c-.337-1.61-1.564-5.182-6.603-5.247-4.636-.06-6.415 3.662-6.748 5.506-.288 1.595-.045 2.648-.045 2.648s2.326.373 6.694.542c4.367.169 6.842-.035 6.842-.035zM42.615 56.905s.065-3.106.86-4.69c1.098-2.192 2.797-3.504 6.022-3.504s5.213 1.893 5.963 3.21c1.292 2.266.875 4.82.875 4.82l-13.72.164z"
            fill="#868486"
        />
        <Path
            d="M3.2 56.06c.035 2.267 1.844 5.536 5.784 5.561 3.94.025 5.983-2.991 5.858-6.082-.124-3.14-2.569-5.361-6.082-5.257-3.294.09-5.61 2.633-5.56 5.779z"
            fill="#4E433D"
        />
        <Path
            d="M5.938 55.867a3.046 3.046 0 003.106 2.931c2.116.015 3.14-1.485 3.075-3.115-.07-1.655-1.42-2.892-3.195-2.867-1.764.03-3.011 1.396-2.986 3.05z"
            fill="#B2B1B2"
        />
        <Path
            d="M43.811 56.1c.035 2.251 1.804 5.491 5.66 5.516 3.856.025 5.854-2.966 5.734-6.037-.124-3.116-2.514-5.317-5.953-5.218-3.22.09-5.486 2.619-5.44 5.74z"
            fill="#4E433D"
        />
        <Path
            d="M46.387 55.921a3.046 3.046 0 003.106 2.932c2.116.015 3.14-1.486 3.076-3.116-.07-1.655-1.422-2.892-3.196-2.867-1.768.025-3.01 1.391-2.986 3.051z"
            fill="#B2B1B2"
        />
        <Path
            d="M26.331 43.971s30.416.06 31.365 0c.95-.06 2.196-1.426 2.256-3.384.06-1.958-.238-10.216-.358-11.165-.119-.95-.705-2.852-3.622-2.852-2.316 0-44.791-.239-45.86-.239-1.068 0-2.663.631-3.373 2.35-.711 1.72-2.018 4.885-2.33 8.453-.319 3.667-.294 5.65-.056 6.599.239.949.477 2.017 2.674 2.017h10.276l.124 11.3 8.9-.04.004-13.039z"
            fill="#454C52"
        />
        <Path
            d="M62.207 46.082s-1.248-.203-1.56.477c-.314.681-.378 5.233.089 5.431.467.2 1.68.045 1.68.045s.04-1.799-.055-3.105c-.125-1.735-.154-2.848-.154-2.848z"
            fill="#FF2A23"
        />
        <Path
            d="M59.067 46.58l-3.404-.02a.618.618 0 01-.616-.627c0-.342.278-.616.621-.616h.005l3.399.02c.343 0 .621.283.616.626a.623.623 0 01-.621.617zM59.022 48.821l-3.404-.02a.618.618 0 01-.616-.626c0-.343.278-.616.621-.616h.005l3.399.02c.343 0 .621.283.616.626a.62.62 0 01-.621.616zM59.002 51.072c-.005 0-.005 0 0 0l-3.403-.02a.618.618 0 01-.616-.626c0-.343.278-.616.62-.616h.006l3.398.02c.343 0 .622.283.617.626a.624.624 0 01-.622.616z"
            fill="#454C52"
        />
        <Path
            d="M17.164 29.308s-7.464 0-8.065.044c-.601.045-1.188.78-1.705 2.58-.546 1.893-1.52 5.485-1.292 9.952.045.83.83 1.059 1.476 1.059h9.63l-.044-13.635z"
            fill="#AFE3FB"
        />
        <Path
            d="M9.053 38.664l-.139 5.804s2.44.462 2.857-.184c.413-.646.418-4.696.095-5.208-.646-1.013-2.813-.412-2.813-.412z"
            fill="#868486"
        />
        <Path
            d="M18.912 30.738h5.898v24.696h-5.848l-.05-24.696zM26.654 40.965V29.402H41.86V40.92l-15.206.045zM43.703 29.446v11.429H56.42c1.287 0 1.759-.77 1.898-2.152.14-1.381-.02-6.609-.144-7.568-.14-1.058-.825-1.59-2.037-1.645-1.272-.06-12.383-.109-12.433-.064z"
            fill="#AFE3FB"
        />
    </Svg>
)

const SHARE_ICON = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 013.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM4.83 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM19.17 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56z"
            stroke="#1B77F2"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const ITEMS_QR = [
    { id: 1, colors: ['#57B6C5', '#00A2CB'] },
    { id: 2, colors: ["#FDD287", "#F3A94F"] },
]

const ListQRCodes = () => {
    const renderItem = ({ item }: { item: any }) => (
        <View className="relative w-[300px] px-[12px] shadow-200 bg-red-200 gap-[10px] rounded-[12px]">
            <LinearGradient
                colors={item.colors}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: 12
                }}
            />

            <View className="px-[12px] py-[20px] gap-[20px]">
                <View className="flex flex-row gap-[20px] w-full items-center justify-center">
                    <View className="relative w-[80px] h-[80px] p-[8px] bg-white rounded-full">
                        <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center" style={{ top: 0, bottom: 20, left: 0, right: 0 }}>
                            <BUS_ICON />

                        </View>
                    </View>

                    <View className="gap-[5px]">
                        <Text className="font-700 font-poppins-bold text-white">Transport</Text>
                        <Text className="font-poppins-medium font-[500] text-[12px] text-white">Pickup by Van</Text>
                        <Text className="font-poppins-medium font-[500] text-[12px] text-white">20 Jun, 11:00 a.m.</Text>
                    </View>
                </View>

                <View className="flex flex-row justify-between">
                    <Pressable className="items-center justify-center py-[7px] px-[28px] bg-[#FCF9E4] border-[1px] border-[#F2CB04] rounded-[12px]">
                        <Text>Show QR</Text>
                    </Pressable>

                    <Pressable className="flex flex-row items-center justify-center gap-[4px]  py-[7px] px-[28px] bg-[#D9E6F8] border-[1px] border-[#1B77F2] rounded-[12px]">
                        <SHARE_ICON />
                        <Text>Share</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );


    return (
        <FlatList
            data={ITEMS_QR}
            horizontal
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerClassName="p-3"
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        />
    )
}

const ITEMS_TICKETS = [
    { id: 1, colors: ['#57B6C5', '#1B77F2'] },
    { id: 2, colors: ["#225D7F", "#1C3952"] },
]

// @ts-expect-error
import HOTEL_ICON from "@/assets/images/components/trip/hotel.png";
import { useRouter } from "expo-router";

const ListTickets = () => {
    const renderItem = ({ item }: { item: any }) => (
        <View className="relative w-[300px] px-[12px] shadow-200 bg-red-200 gap-[10px] rounded-[12px]">
            <LinearGradient
                colors={item.colors}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: 12
                }}
            />

            <View className="px-[12px] py-[20px] gap-[20px]">
                <View className="flex flex-row gap-[8px] w-full items-center justify-center">
                    <View className="relative w-[60px] h-[60px] p-[8px] bg-white rounded-full">
                        <Image
                            source={HOTEL_ICON}
                            style={{ borderRadius: 16, width: "100%", height: "100%" }}
                            contentFit='cover'
                        />
                    </View>

                    <View className="gap-[5px] flex-1">
                        <Text className="font-700 font-poppins-bold text-white text-[16px]">Caribe Maya Hotel</Text>
                        <View className="flex-row items-center gap-2">
                            <Svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <Path
                                    d="M6 1.5v2.25m6-2.25v2.25M2.625 6.817h12.75M15.75 6.375v6.375c0 2.25-1.125 3.75-3.75 3.75H6c-2.625 0-3.75-1.5-3.75-3.75V6.375c0-2.25 1.125-3.75 3.75-3.75h6c2.625 0 3.75 1.5 3.75 3.75z"
                                    stroke="#fff"
                                    strokeWidth={1.125}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M11.77 10.275h.006M11.77 12.525h.006M8.996 10.275h.007M8.996 12.525h.007M6.22 10.275h.007M6.22 12.525h.007"
                                    stroke="#fff"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                            <Text className="font-poppins-medium font-[500] text-[12px] text-white">
                                29 Jun- 2Jul
                            </Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <Path
                                    d="M9 10.073a2.34 2.34 0 100-4.68 2.34 2.34 0 000 4.68z"
                                    stroke="#fff"
                                    strokeWidth={1.125}
                                />
                                <Path
                                    d="M2.715 6.367c1.478-6.494 11.1-6.487 12.57.008.863 3.81-1.507 7.035-3.585 9.03a3.895 3.895 0 01-5.407 0c-2.07-1.995-4.44-5.227-3.578-9.037z"
                                    stroke="#fff"
                                    strokeWidth={1.125}
                                />
                            </Svg>
                            <Text className="font-poppins-medium font-[500] text-[12px] text-white  items-center justify-center">
                                Blvd. Kukulcán Km 9, Cancún
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="flex flex-row justify-between">
                    <Pressable className="items-center justify-center py-[7px] px-[28px] bg-[#FCF9E4] border-[1px] border-[#F2CB04] rounded-[12px]">
                        <Text>Show QR</Text>
                    </Pressable>

                    <Pressable className="flex flex-row items-center justify-center gap-[4px]  py-[7px] px-[28px] bg-[#D9E6F8] border-[1px] border-[#1B77F2] rounded-[12px]">
                        <Text>See details</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );


    return (
        <FlatList
            data={ITEMS_TICKETS}
            horizontal
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerClassName="p-3"
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        />
    )
}